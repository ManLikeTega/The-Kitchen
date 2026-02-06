import Badge from "../components/Badge";
import { FaBriefcase } from "react-icons/fa";

function Showcase() {
  return (
    <>
      <section className="section" id="projects">
        <Badge Icon={FaBriefcase}>ProjectS Showcase</Badge>
      </section>
    </>
  );
}

export default Showcase;
