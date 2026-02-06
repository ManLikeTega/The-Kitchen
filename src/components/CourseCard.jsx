function CourseCard({ course }) {
  return (
    <>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden group border border-gray-200 hover:shadow-2xl hover:border-amber-500 transition-shadow duration-300">
        <div className="h-62">
          <img
            src={course.image_url}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-4 text-left mt-4 flex flex-col gap-4">
          <h3 className="text-xl font-bold">{course.title}</h3>

          <p className="text-gray-600">{course.description}</p>

          <div className="flex flex-wrap gap-2">
            {course.tools.map((tool, index) => (
              <span
                key={index}
                className="bg-gray-200 px-3 py-1 rounded-full text-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseCard;
