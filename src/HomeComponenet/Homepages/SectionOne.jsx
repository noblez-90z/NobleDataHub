import { faLock, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const SectionOne = () => {
  return (
    <div className=" flex justify-center items-center lg:mt-32 mt-16   max-w-full h-[500px] lg:bg-fixed bg-cover bg-center bg-no-repeat bg-[url('./assets/hero4.jpg')] ">
      <div className="  h-fit px-4 text-center">
        <div className="font-bold font-sans text-lg lg:text-6xl text-blue-600">
          <h1>welcome to nobleDataHub</h1>
        </div>
        <div className="font-thin text-lg lg:text-4xl text-gray-500">
          <p>bringing the wrold closer to you</p>
        </div>
        <div className="flex justify-center gap-5  my-3">
          <div className=" py-2 px-2  bg-blue-600  text-white rounded ">
            <button className="w-[150px] capitalize">
              <Link to="/Register">get started</Link>
              <FontAwesomeIcon icon={faLock} className="pl-2" />
            </button>
          </div>
          <div className="  py-2 px-2  bg-blue-600 text-white rounded">
            <button className="w-[150px]  capitalize">
              <Link to="/Login">login</Link>
              <FontAwesomeIcon icon={faPlus} className="pl-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
