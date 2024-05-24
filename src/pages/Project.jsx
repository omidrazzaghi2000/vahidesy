import Cards from "../components/Cards";
import { FaLocationArrow } from "react-icons/fa";

function Project() {
  return (
    <div className="ccm mb-24 h-full w-full sm:mb-0">
      <div>
        <p className="font-poppins mx-auto w-[50%] pb-10 pt-8 text-center text-2xl tracking-wider text-gray-900 lg:text-3xl">
        Central Committee members
        </p>
      </div>
      <div className="mx-auto mb-2 grid w-[90%] grid-cols-1 gap-4 sm:mb-8 md:grid-cols-2">
        <Cards />
      </div>
      
    </div>
  );
}

export default Project;
