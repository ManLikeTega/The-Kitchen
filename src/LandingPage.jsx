import Preloader from "./components/Preloader";
import Utilities from "./components/Utilities";
import About from "./sections/About";
import CallToAction from "./sections/CallToAction";
import Contact from "./sections/Contact";
import Courses from "./sections/Courses";
import FAQ from "./sections/FAQ";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";
import { useEffect, useState, useRef } from "react";

function LandingPage() {
  const [loading, setLoading] = useState(true);
  const totalImages = useRef(0);

  useEffect(() => {
    // Get all images
    const images = Array.from(document.images);
    totalImages.current = images.length;

    if (totalImages.current === 0) {
      // No images, just wait for fonts
      document.fonts.ready.then(() => {
        setTimeout(() => setLoading(false), 500); // Small delay for smooth transition
      });
      return;
    }

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
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
      )}
    </>
  );
}

export default LandingPage;
