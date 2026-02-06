import Badge from "../components/Badge";
import CourseCard from "../components/CourseCard";
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

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Courses that <span>Transform</span>
          </h2>

          <p className="max-w-3xl mx-auto">
            Explore our comprehensive curriculum designed for you, where each
            program combines theoretical knowledge and hands-on projects to
            prepare you for the real-world challenges in the creative industry
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 lg:mt-15">
            {courses.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Courses;
