// pages/index.tsx
import ClientContainer from "@/components/ClientContainer/ClientContainer";
import FAQ from "@/components/Home/FAQ";
import Hero from "@/components/Home/Hero";
import TopCountryRow from "@/components/Home/TopCountryRow";
import Banner from "@/components/Home/Banner";
import About from "@/components/Home/About";
import SearchContainer from "@/components/SearchContiner/SearchContainer";
import BannerImage from '../assets/images/banner1.jpeg';
import TopPackages from "@/components/Home/TopPackages";
import Roameazy from "@/components/Home/Roameazy/Roameazy";
import Subscribe from "@/components/Home/Subscribe/Subscribe";
import Testimonials from "@/components/Testimonial/Testimonials";
import FooterSearch from "@/components/FooterSearch/FooterSearch";
import { axiosInstance } from "@/utils/axios.utils";
import { PlaceWithCount } from "@/inerfaces/Place.interface";
import HowToBook from "@/components/Home/Content/HowToBook";
import ContentWrapper from "@/components/Home/ContentWrapper/ContentWrapper";
import Head from "next/head";

interface IHomeProps {
  title: string;
  topCountries: PlaceWithCount[];
  faq: {
    question: string;
    answer: string;
  }[];
  howItWorks: any;
}

export default function Home(props: IHomeProps) {
  return (
    <>
      <Head>
        <title>Discover Tour and Holiday Packages from UAE | Roam Eazy</title>
        <meta name="description" content="RoamEazy is UAE's leading tour and holiday packages marketplace. We make it easy for you to browse and book packages, so that you can go on your vacation worry free" />
      </Head>
      <ClientContainer>
        <main>
          <Hero />
          <SearchContainer />
          <TopCountryRow topCountries={props.topCountries} />
          {/* <Banner image={BannerImage} /> */}
          <br></br>
          <br></br>
          <ContentWrapper />
          <TopPackages />
          <About />
          <Roameazy />
          <Testimonials />
          {/* <Subscribe /> */}
          <HowToBook howTo={props.howItWorks} />
          <FAQ faq={props.faq} />
          <FooterSearch />
        </main>
      </ClientContainer>
    </>
  );
}

export async function getStaticProps() {

  const { data: topCountries } = await axiosInstance.post('/api/place/get-top-countries');
  const { data: faqs } = await axiosInstance.post('/api/content/get', {
    key: 'home',
    group: 'faq'
  });
  const { data: howItWorks } = await axiosInstance.post('/api/content/get', {
    key: 'home',
    group: 'howitworks'
  });
  let faqArray = faqs.data?.questionSet as Array<unknown>;
  faqArray = faqArray.slice(0, 6)

  return {
    props: {
      title: "RoamEazy",
      topCountries,
      faq: faqArray,
      howItWorks: howItWorks.data
    },
  };
}
