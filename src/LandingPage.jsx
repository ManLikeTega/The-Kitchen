import Utilities from "./components/Utilities";
import About from "./sections/About";
import CallToAction from "./sections/CallToAction";
import Contact from "./sections/Contact";
import Courses from "./sections/Courses";
import FAQ from "./sections/FAQ";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";

function LandingPage() {
  return (
    <>
      <Hero />
      <About />
      <Courses />
      <Showcase />
      <FAQ />
      <CallToAction />
      <Contact />
      <Footer />
      <Utilities />
    </>
  );
}

export default LandingPage;
