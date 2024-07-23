// listings page

import ClientContainer from "@/components/ClientContainer/ClientContainer";
import { axiosInstance } from "@/utils/axios.utils";
import { useEffect } from "react";

interface IListingsProps {
  departure: string;
  destination: string;
}

export default function Listings(props: IListingsProps) {

  const { departure, destination } = props;

  useEffect(() => {
    console.log('departure', departure);
    console.log('destination', destination);
  }, []);

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