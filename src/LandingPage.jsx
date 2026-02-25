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
import { useEffect, useState } from "react";

function LandingPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const images = Array.from(document.images);
    const total = images.length;

    let loadedCount = 0;

    const handleLoad = () => {
      loadedCount++;
      if (loadedCount === total) {
        document.fonts.ready.then(() => {
          setTimeout(() => setLoading(false), 300);
        });
      }
    };

    if (total === 0) {
      document.fonts.ready.then(() => {
        setTimeout(() => setLoading(false), 300);
      });
      return;
    }

    images.forEach((img) => {
      if (img.complete) {
        handleLoad();
      } else {
        img.addEventListener("load", handleLoad);
        img.addEventListener("error", handleLoad);
      }
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", handleLoad);
        img.removeEventListener("error", handleLoad);
      });
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
