import Badge from "../components/Badge";
import { FaBriefcase } from "react-icons/fa";
import MotionElement from "../components/MotionElement";
import { showcase_projects } from "../data/data";

function Showcase() {
  return (
    <>
      <section className="section" id="projects">
        <div className="text-center ">
          <Badge Icon={FaBriefcase}>Projects Showcase</Badge>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 lg:mt-10">
            {showcase_projects.map((showcase, index) => (
              <MotionElement key={index} className="mb-8">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div>
                    <img
                      src={showcase.image_url}
                      alt={showcase.name}
                      className="w-full h-64 object-cover shadow-lg"
                    />
                  </div>

                  <div className="p-4">
                    <div className="flex justify-between">
                      <h4 className="text-gray-600">{showcase.name}</h4>

                      <h4
                        className={`${showcase.color} text-white px-3 py-1 rounded-full`}
                      >
                        {showcase.category}
                      </h4>
                    </div>

                    <h4 className="text-left mt-2">{showcase.projects[0]}</h4>
                  </div>
                </div>
              </MotionElement>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Showcase;
