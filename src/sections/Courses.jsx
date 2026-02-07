import Badge from "../components/Badge";
import CourseCard from "../components/CourseCard";
import MotionElement from "../components/MotionElement";
import { courses } from "../data/data";
import { GoBook } from "react-icons/go";

function Courses() {
  return (
    <>
      <section className="section text-center bg-extra" id="courses">
        <div>
          <Badge className={" text-white"} Icon={GoBook}>
            Our Courses
          </Badge>

          <MotionElement delay={0.2}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Courses that{" "}
              <span className="bg-linear-to-r bg-clip-text text-transparent from-(--color-three) via-(--color-seven) to-(--color-six)">
                Transform
              </span>
            </h2>
          </MotionElement>

          <MotionElement delay={0.4}>
            <p className="max-w-3xl mx-auto">
              Explore our comprehensive curriculum designed for you, where each
              program combines theoretical knowledge and hands-on projects to
              prepare you for the real-world challenges in the creative industry
            </p>
          </MotionElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 lg:mt-15">
            {courses.map((course, index) => (
              <MotionElement delay={0.2 * (index + 1)} key={index}>
                <CourseCard course={course} />
              </MotionElement>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Courses;
