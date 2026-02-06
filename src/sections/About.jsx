import Badge from "../components/Badge";
import MotionElement from "../components/MotionElement";
import { about_image } from "../data/data";
import { FaRegUser } from "react-icons/fa";

function About() {
  return (
    <>
      <section className="section" id="about">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8">
          <div className="text-center md:text-left">
            <Badge className={"text-white"} Icon={FaRegUser}>
              About Us
            </Badge>

            <MotionElement>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-left font-bold mb-6">
                Empowering the Next Generation of{" "}
                <span className="text-gradient-to-r from-blue-500 to-purple-600">
                  CREATORS
                </span>
              </h2>
            </MotionElement>

            <MotionElement axis="x" position={-30}>
              <p className="text-left">
                At The Kitchen, we don’t just teach design, we cook it. It is
                where creative skills are cooked from scratch and served ready
                for the real world. The same way great meals are prepared behind
                the scenes before they’re served, The Kitchen is where creative
                ideas are developed, refined, and transformed into visually
                powerful digital products. It’s a space built for people who
                want to learn how to create designs that don’t just look good,
                but work. <br /> <br />
                Starting from the fundamentals of graphic design; designing
                flyers, posters, and understanding brand identity, and evolving
                those skills into UI/UX design, where visuals meet structure,
                usability, and user experience. From there, students advance
                into web development, learning how to bring their own designs to
                life by building fully functional websites and web apps. No
                scattered learning, and no theory overload. Every skill is
                layered intentionally, so nothing feels disconnected. Graphic
                design feeds into UI, UI feeds into UX, and UX feeds into
                development.
                <br /> <br />
                At The Kitchen, you don’t just learn tools, you learn how to
                think, create, and ship real products. Whether you’re starting
                from zero or sharpening what you already know, The Kitchen is
                where ideas are prepared behind the scenes and launched into the
                world.
              </p>
            </MotionElement>
          </div>

          <div className="w-full h-full bg-cover bg-center rounded-xl">
            <MotionElement axis="x">
              <img src={about_image} alt="" />
            </MotionElement>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
