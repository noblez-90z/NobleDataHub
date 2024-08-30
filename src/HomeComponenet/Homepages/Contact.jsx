import {
  faEnvelope,
  faLocation,
  faLocationDot,
  faMapLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="">
      <div className="py-5 px-10 lg:px-8 mx-auto text-center">
        <h2 className="w-fit py-3 px-4 mx-auto bg-blue-200 rounded-full text-blue-500 font-bold text-center capitalize">
          contact
        </h2>
        <h1 className="py-3 mt-2 text-center font-bold text-2xl text-black capitalize">
          contact us
        </h1>
        <p className="py-2 text-xl text-center capitalize">
          We are available 24/7. You can contact us via any of the details
          provided below!
        </p>
        <div className="block  lg:flex justify-between mt-4 py-3 px-10 ">
          <div className="shadow py-5 text-center px-10 ">
            <div className="p-3 flex justify-center items-center border-dotted border-2 border-blue-500 w-[50px] h-[50px] mx-auto  rounded-full">
              <FontAwesomeIcon
                icon={faLocationDot}
                size="2xl"
                className="p-3 text-blue-500"
              />
            </div>
            <h2 className="capitalize font-bold text-[#525151]">our address</h2>
            <p>77 itu road uyo, akwa ibom state</p>
          </div>
          <div className="shadow text-center py-5  px-2 lg:px-10">
            <div className="flex justify-center items-center border-dotted border-2 border-blue-500 w-[50px] h-[50px] mx-auto  rounded-full">
              <FontAwesomeIcon
                icon={faEnvelope}
                size="2xl"
                className="py-3 text-blue-500"
              />
            </div>
            <h2 className="capitalize font-bold text-[#525151]">email us</h2>
            <p>support@nobleDataHub.com</p>
          </div>
          <div className="shadow text-center py-5 px-10">
            <div className="flex justify-center items-center border-dotted border-2 border-blue-500 w-[50px] h-[50px] mx-auto  rounded-full">
              <FontAwesomeIcon
                icon={faPhone}
                size="2xl"
                className="py-3 text-blue-500"
              />
            </div>
            <h2 className="capitalize font-bold text-[#525151]">call us</h2>
            <p className="text-blue-500">+2349022108521</p>
          </div>
        </div>
        <div className="shadow px-10 py-4">
          <div className="flex justify-between gap-3 py-2 ">
            <input
              type="text"
              name=""
              placeholder="Your Name"
              className="lg:flex-1 py-2 px-2 border-2 border-gray-400 w-full"
            />
            <input
              type="email"
              name=""
              placeholder="Email"
              className="lg:flex-1 py-2 px-2 border-2 border-gray-400 w-full"
            />
          </div>
          <div className="py-2">
            <input
              type="text"
              name=""
              placeholder="Subject"
              className="py-2 px-2 border-2 border-gray-400 w-full"
            />
          </div>
          <textarea
            name=""
            placeholder="Message"
            cols="30"
            rows="5"
            className="py-2 px-2 border-2 border-gray-400 w-full"
          ></textarea>
          <div className=" text-center">
            <button className="bg-red-500 py-3 px-5 text-white text-xl rounded">
              {" "}
              <Link to="/CallLogin">send Message </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="my-10">
        <div className="bg-blue-200 py-10 px-6">
          <h1 className="font-bold text-2xl text-center py-4">
            Join Our Newsletter
          </h1>
          <p className="text-center py-4">
            Drop Your e-Mail Address in the Input Field Below to get Update from
            us
          </p>
          <div className="text-center w-full">
            <input
              type="text"
              className="border border-gray-500 py-3 w-auto lg:w-60"
            />
            <button className="py-3 px-3 bg-red-500 text-white rounded-r">
              subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
