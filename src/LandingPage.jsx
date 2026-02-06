import Utilities from "./components/Utilities";
import About from "./sections/About";
import Courses from "./sections/Courses";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";

function LandingPage() {
  return (
    <>
      <Hero />
      <About />
      <Courses />
      <Showcase />
      <div className="h-screen flex items-center justify-center" />
      <Utilities />
    </>
  );
}

export default LandingPage;
