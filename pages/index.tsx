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

export default function Home(props: { title: string }) {
  return (
    <ClientContainer>
      <main>
        <Hero />
        <SearchContainer />
        <TopCountryRow />
        <Banner image={BannerImage} />
        <TopPackages />
        <About />
        <Roameazy />
        <Testimonials />
        <Subscribe />
        <FAQ />
        <FooterSearch />
      </main>
    </ClientContainer>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "RoamEazy",
    },
  };
}
