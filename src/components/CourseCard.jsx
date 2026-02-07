import {
  FaArrowRight,
  FaCheckCircle,
  FaBookOpen,
  FaUserAlt,
  FaClock,
} from "react-icons/fa";
import { walink } from "../data/data";

function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group border border-gray-200 hover:shadow-2xl hover:border-amber-500 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full text-left">
      {/* Image container */}
      <div className="relative h-60 overflow-hidden">
        <img
          src={course.image_url}
          alt={course.title}
          className="w-full h-full object-cover"
        />

        {/* Duration badge */}
        <div className="absolute top-3 right-3 bg-(--color-seven) rounded-full">
          <span className="bg-primary text-white capitalize px-3 py-1 rounded-full text-sm font-bold tracking-wide shadow-md">
            4 weeks
          </span>
        </div>
      </div>

      {/* Content container */}
      <div className="p-6 flex flex-col grow">
        {/* Title */}
        <h3 className="text-xl font-bold mb-2">{course.title}</h3>

        {/* Description */}
        <p className="mb-4 grow">{course.description}</p>

        {/* Tools/Tags section */}
        <div className="flex flex-wrap gap-2 mb-5">
          {course.tools.map((tool, index) => (
            <span
              key={index}
              className="bg-extra px-3 py-1 rounded-full text-sm font-medium text-textColorThick hover:bg-secondary/20 hover:text-primary transition-colors duration-200"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Separator */}
        <div className="w-full h-px bg-linear-to-r from-transparent via-gray-300 to-transparent my-1" />

        <div className="mt-4 flex items-center justify-between">
          {/* Enroll Now Button */}
          <button className="px-6 py-2 bg-(--color-seven) text-white rounded-lg hover:shadow-lg hover:shadow-primary/20 hover:scale-105 active:scale-95 transition-all duration-200 group/btn">
            <a className="flex items-center gap-2" href={walink}>
              Enroll Now
              <FaArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
