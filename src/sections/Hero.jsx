import Badge from "../components/Badge";
import MotionElement from "../components/MotionElement";
import Navbar from "../components/Navbar";
import { hero_image } from "../data/data";
import { LuRocket } from "react-icons/lu";

function Hero() {
  return (
    <>
      <section id="home" className="relative">
        <Navbar />

        <div className="h-screen w-full">
          {/* Background image */}
          <div
            style={{ backgroundImage: `url(${hero_image})` }}
            className="h-full w-full z-10 bg-cover bg-center flex items-center justify-center relative"
          >
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-20 text-center px-4 md:w-[70%] lg:w-1/2">
              <Badge
                className={`bg-(--color-seven) text-white`}
                Icon={LuRocket}
              >
                Design. Build. Launch
              </Badge>

              <MotionElement className="z-20">
                <h1 className="text-3xl md:text-4xl lg:text-5xl myfont text-white mb-6">
                  Master Design, Development & Creative Thinking
                </h1>
              </MotionElement>

              <MotionElement className="z-20">
                <h5 className="text-lg lg:text-xl text-white mb-6">
                  Master{" "}
                  <span className="text-(--color-eight)">Graphic Design</span>,
                  <span className="text-(--color-seven)">UI/UX</span>, and{" "}
                  <span className="text-(--color-six)">Web-Development</span>{" "}
                  with experienced professionals and hands-on projects
                </h5>
              </MotionElement>

              <MotionElement className="z-20">
                <button className="btn">
                  <a href="#courses">View Courses</a>
                </button>
              </MotionElement>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
