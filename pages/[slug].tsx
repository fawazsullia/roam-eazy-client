import ClientContainer from "@/components/ClientContainer/ClientContainer";
import FAQ from "@/components/Home/FAQ";
import { axiosInstance } from "@/utils/axios.utils";
import { useEffect, useState } from "react";
import { IListing } from "@/inerfaces/IListing.interface";
import { IGetListingApi } from "@/inerfaces/IGetListingApi.interface";
import SlugHero from "@/components/slug/SlugHero";
import List from "@/components/slug/List";
import DestinationFlexContentContainer from "@/components/slug/DestinationFlexContainer";
import Head from "next/head";
import { generateListingLink } from "@/utils/link-generation.utils";

export default function Listings(props: any) {
  const { departure, destination, content, faqArray } = props;

  const LIMIT = 10;

  const [offset, setOffset] = useState(0);
  const [start, setStartDate] = useState<Date | null>();
  const [end, setEndDate] = useState<Date | null>();
  const [listings, setListings] = useState<IListing[]>([]);
  const [loading, setLoading] = useState(false);
  const [listingError, setListingError] = useState<string | undefined>(undefined);
  const [flightStatus, setFlightStatus] = useState<'all' | 'included' | 'excluded'>('all');
  const [minBudget, setMinBudget] = useState<number>(0);
  const [maxBudget, setMaxBudget] = useState<number>(25000);
  const [minNights, setMinNights] = useState<number>(0);
  const [maxNights, setMaxNights] = useState<number>(15);
  const [totalListings, setTotalListings] = useState<number>(0);
  const [sortKey, setSortkey] = useState<string>("")
  const [sortOrder, setSortOrder] = useState<"ASC" | "DESC">("ASC")

  // this is for flight options filter dropdown
  const flightOptions = [
    { value: 'all', label: 'With/Without flight' },
    { value: 'included', label: 'With flight' },
    { value: 'excluded', label: 'Without flight' }
  ]

  const getListings = async (
    from: string,
    to: string,
    startDate: Date,
    endDate: Date,
    offset: number,
    flightsIncluded?: 'all' | 'included' | 'excluded',
    budgetMin?: number,
    budgetMax?: number,
    minNights?: number,
    maxNights?: number,
    sortKey?: string,
    sortOrder?: "ASC" | "DESC"
  ) => {
    const body: IGetListingApi = { from, to, startDate, endDate, offset, limit: LIMIT }
    if (flightsIncluded !== 'all') {
      body.isFlightIncluded = flightsIncluded === 'included';
    }
    if (budgetMin) {
      body.budgetMin = budgetMin;
    }
    if (budgetMax) {
      body.budgetMax = budgetMax;
    }
    if (minNights) {
      body.minNights = minNights;
    }
    if (maxNights) {
      body.maxNights = maxNights;
    }
    if (sortKey && sortKey) {
      body.sortKey = sortKey;
      body.sortOrder = sortOrder === "ASC" ? 1 : -1;
    }
    const listings = await axiosInstance.post('/api/listing/get-listings', body);
    console.log(listings.data, "received listing");
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return listings.data;
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const startFromParams = urlParams.get('start');
    const endFromParams = urlParams.get('end');
    if (!departure || !destination) {
      setListingError("Departure and destination are required");
      return;
    }

    const requiredStartDate = startFromParams ? new Date(startFromParams) : new Date();
    const requiredEndDate = endFromParams ? new Date(endFromParams) : new Date(new Date().setDate(new Date().getDate() + 30)); // setting 30 days from now as end date in case no date is found
    setLoading(true);
    getListings(
      departure,
      destination,
      start ?? requiredStartDate,
      end ?? requiredEndDate,
      offset,
      flightStatus,
      minBudget,
      maxBudget,
      minNights,
      maxNights,
      sortKey,
      sortOrder
    )
      .then((data) => {
        console.log(data, "data")
        setListings(data.listings);
        setTotalListings(data.total)
      })
      .catch((err) => {
        console.log(err, "Error in fetching listings");
        setListingError("Error in fetching listings");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [departure, destination, start, end, offset, minBudget, maxBudget, flightStatus, minNights, maxNights, sortKey, sortOrder]);

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
  };

  const handleLoadMore = (offsetParam: number) => {
    setOffset(offsetParam + LIMIT);
  };

  const handleSort = (sortKey?: string, sortOrder?: "ASC" | "DESC") => {
    if (sortKey) {
      setSortkey(sortKey)
    }
    if (sortOrder) {
      setSortOrder(sortOrder)
    }
  }

  return (
    <>
      <Head>
        <title>Tour packages from {departure} to {destination} | RoamEazy</title>
        <meta name="description" content={`Find the best tour packages from ${departure} to ${destination}. Book now and enjoy your trip with RoamEazy`} />
      </Head>
      <ClientContainer>
        <main>
          <SlugHero departure={departure} destination={destination} />
          <List destination={destination}
            handleLoadMore={handleLoadMore}
            handleSort={handleSort}
            listings={listings}
            totalListings={totalListings}
            minBudget={minBudget}
            maxBudget={maxBudget}
            setMinBudget={setMinBudget}
            setMaxBudget={setMaxBudget}
            minNights={minNights}
            maxNights={maxNights}
            setMinNights={setMinNights}
            setMaxNights={setMaxNights}
            flightStatus={flightStatus}
            setFlightStatus={setFlightStatus}
            loading={loading}
            flightOptions={flightOptions}
            listingError={listingError}
          />
          {content?.length && <DestinationFlexContentContainer content={content} />}
          {faqArray && <FAQ faq={faqArray} />}
        </main>
      </ClientContainer>
    </>
  );
}

export const getStaticPaths = async () => {
  const fetchAllData = async (endpoint: string, limit: number, type?: string) => {
    let offset = 0;
    let results: any[] = [];
    let hasMoreData = true;

    while (hasMoreData) {
      const queryObj: {
        limit: number;
        offset: number;
        type?: string;
      } = {
        limit,
        offset,
      };
      if (type) {
        queryObj['type'] = type;
      }
      const response = await axiosInstance.post(endpoint, queryObj);
      const data = response.data;

      if (data.length > 0) {
        results = results.concat(data);
        offset += limit;
      } else {
        hasMoreData = false;
      }
    }

    return results;
  };

  // Fetch all departing and destination places
  console.log('Fetching all departing and destination places');
  const departingsData = await fetchAllData('/api/place/get-departing', 200);
  const destinationsData = await fetchAllData('/api/place/get-destination', 200, "country");
  console.log(departingsData, destinationsData, "departings and destinations")

  // Generate paths
  const paths: { params: { slug: string; departure: string; destination: string } }[] = [];

  for (const departing of departingsData) {
    for (const destination of destinationsData) {
      if (departing?.placeId && destination?.placeId) {
        paths.push({
          params: {
            slug: generateListingLink(departing.placeId, destination.placeId),
            departure: departing.placeId,
            destination: destination.placeId,
          },
        });
      } else {
        console.log('placeId not found', departing, destination);
      }
    }
  }


  return {
    paths,
    fallback: false,
  };
};


export const getStaticProps = async (context: any) => {
  const { slug } = context.params;
  console.log(slug, "slug")
  const [holiday, packages, from, departure, to, destination] = slug.split('-');
  console.log(departure, destination, "departure and destination")
  try {
    const { data: place } = await axiosInstance.post('/api/place/get-place', {
      placeId: destination
    });
    let destinationCountry = place.country;
    destinationCountry = destinationCountry.replace(/\s/g, '-').toLowerCase();
    const { data } = await axiosInstance.post('/api/content/get', {
      key: destinationCountry,
      group: "destination-flex-content",
    });
    const content = data?.data?.content;
    const { data: faqs } = await axiosInstance.post('/api/content/get', {
      key: destinationCountry,
      group: 'faq'
    });
    let faqArray = faqs.data?.questionSet as Array<unknown>;
    return {
      props: {
        content,
        departure,
        destination,
        faqArray
      }
    };
  } catch (error) {
    console.log(error, "error")
    return {
      props: {
        departure,
        destination
      }
    }
  }
};
