// import Header from "../Header";
import Layout from "../../Layout";
import Contact from "./Contact";
import Faqs from "./Faqs";
// import Footer from "./Footer";
import SectionOne from "./SectionOne";
import SectionThree from "./SectionThree";
import SectionTwo from "./SectionTwo";
import Testimonial from "./Testimonial";

const Homepage = () => {
  return (
    <div className="">
      <Layout>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <Faqs />
        <Testimonial />
        <Contact />
      </Layout>
    </div>
  );
};

export default Homepage;
