// import components
import About from "../components/About";
import Copyright from "../components/Copyright";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import How from "../components/How";
import Testimonials from "../components/Testimonials";
import { IAbout, IFaq, IFooter, IHeader, IHero, IHow, INav, ITestimonial } from "../typings/home.types";

interface IHome {
  aboutData: IAbout;
  faqData: IFaq;
  footerData: IFooter;
  headerData: IHeader;
  heroData: IHero;
  howData: IHow;
  navData: INav[];
  testimonialData: ITestimonial;
}

// import data
import {
  aboutData,
  faqData,
  footerData,
  headerData,
  heroData,
  howData,
  navData,
  testimonialData
} from "../data.json";

const Home = ({
  aboutData,
  faqData,
  footerData,
  headerData,
  heroData,
  howData,
  navData,
  testimonialData
}: IHome) => {
  return (
    <div className="overflow-hidden max-w-[1600px] mx-auto bg-page">
      <Hero heroData={heroData} headerData={headerData} navData={navData} />
      <About aboutData={aboutData} />
      <How howData={howData} />
      <Faq faqData={faqData} />
      <Testimonials testimonialData={testimonialData} />
      <Footer footerData={footerData} />
      <Copyright />
    </div>
  );
};

// get data.json
export const getStaticProps = async () => {
  return {
    props: {
      headerData,
      heroData,
      navData,
      faqData,
      aboutData,
      howData,
      testimonialData,
      footerData,
    },
  };
};

export default Home;
