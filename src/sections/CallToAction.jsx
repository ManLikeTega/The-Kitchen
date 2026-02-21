import MotionElement from "../components/MotionElement";
import { walink } from "../data/data";

function CallToAction() {
  return (
    <>
      <section
        className="section scroll-mt-[35vh] bg-linear-to-tr from-(--color-three) from-0% via-(--color-seven) via-50% to-(--color-six) to-100%"
        id="calltoact"
      >
        <div className="text-center">
          <MotionElement>
            <p className="text-white">ARE YOU READY!</p>
          </MotionElement>

          <MotionElement delay={0.2}>
            <h2 className="text-2xl md:text-4xl font-bold text-white max-w-lg mx-auto my-6">
              Start your creative journey today
            </h2>
          </MotionElement>

          <a href={walink} target="_blank">
            <button className="btn bg-black capitalize animate-bounce group/btn">
              Enroll now
            </button>
          </a>
        </div>
      </section>
    </>
  );
}

export default CallToAction;
