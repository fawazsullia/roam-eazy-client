// listings page

import ClientContainer from "@/components/ClientContainer/ClientContainer";
import { IGetListingApi } from "@/inerfaces/IGetListingApi.interface";
import { IListing } from "@/inerfaces/IListing.interface";
import { axiosInstance } from "@/utils/axios.utils";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface IListingsProps {
  departure: string;
  destination: string;
}

export default function Listings(props: IListingsProps) {

  const searchParams = useSearchParams();

  const startFromParams = searchParams.get('start');
  const endFromParams = searchParams.get('end');


  const { departure, destination } = props;

  const LIMIT = 10;

  const [offset, setOffset] = useState(0);
  const [start, setStartDate] = useState<Date | null>();
  const [end, setEndDate] = useState<Date | null>();
  const [listings, setListings] = useState<IListing[]>([]);
  const [loading, setLoading] = useState(false);
  const [listingError, setListingError] = useState<string | undefined>(undefined);
  const [flightStatus, setFlightStatus] = useState<'all' | 'included' | 'excluded'>('all');
  const [minBudget, setMinBudget] = useState<number>(0);
  const [maxBudget, setMaxBudget] = useState<number>(9999999);
  const [minNights, setMinNights] = useState<number>(0);
  const [maxNights, setMaxNights] = useState<number>(9999999);
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
    return listings.data;
  }

  useEffect(() => {
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
  }, [start, end, offset, minBudget, maxBudget, flightStatus, minNights, maxNights, sortKey, sortOrder]);


  // filter functions

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
  };

  const handleLoadMore = () => {
    setOffset(offset + LIMIT);
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
    <ClientContainer>
      <main>
        <h1>Listings</h1>
        <p>{departure}</p>
        <p>{destination}</p>
      </main>
    </ClientContainer>
  );
}

export const getStaticPaths = async () => {
  const departings = await axiosInstance.post('/api/place/get-departing', {
    limit: 200,
    offset: 0
  });
  const destinations = await axiosInstance.post('/api/place/get-destination', {
    limit: 200,
    offset: 0
  });

  const departinsData = departings.data;
  const destinationsData = destinations.data;

  const paths: { params: { slug: string; departure: string; destination: string; } }[] = [];

  for (let i = 0; i < departinsData.length; i++) {
    for (let j = 0; j < destinationsData.length; j++) {
      if (departinsData[i]?.placeId && destinationsData[j]?.placeId) {
        paths.push({
          params: {
            slug: `${departinsData[i].placeId}-${destinationsData[j].placeId}`,
            departure: departinsData[i].placeId,
            destination: destinationsData[j].placeId
          }
        });
      } else {
        console.log('placeId not found', departinsData[i], destinationsData[j]);
      }
    }
  }

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async (context: any) => {
  const { slug } = context.params;
  const [departure, destination] = slug.split('-');
  return {
    props: {
      departure,
      destination,
    }
  };
};