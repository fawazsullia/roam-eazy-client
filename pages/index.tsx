import ClientContainer from "@/components/ClientContainer/ClientContainer";
import FAQ from "@/components/Home/FAQ";
import Hero from "@/components/Home/Hero";
import TopCountryRow from "@/components/Home/TopCountryRow";
import Banner from "@/components/Home/Banner";
import About from "@/components/Home/About";


export default function Home(props: { title: string }) {

  return (
    <ClientContainer>
      <main
      >
        <h1>
          {props.title}
        </h1>
        <Hero />
        <TopCountryRow />
        <Banner />
        <About />
        <FAQ />
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
