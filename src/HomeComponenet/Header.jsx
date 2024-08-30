import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faChevronDown,
  faChevronLeft,
  faXmark,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faLinkedin,
  faSkype,
} from "@fortawesome/free-brands-svg-icons";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const [product, setProduct] = useState(false);
  const productToggle = () => {
    setProduct(!product);
  };
  const [dataBundle, setDataBundle] = useState(false);
  const dataBundleToggle = () => {
    setDataBundle(!dataBundle);
  };
  const [dataCard, setDataCard] = useState(false);
  const dataCardToggle = () => {
    setDataCard(!dataCard);
  };
  const [reg, setReg] = useState(false);
  const regToggle = () => {
    setReg(!reg);
  };
  const [dropDown, setdropDown] = useState(false);
  const toggleDropDrown = () => {
    setdropDown(!dropDown);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [icon, setIcon] = useState(faBars);
  const iconToogle = () => {
    setIcon(icon === faBars ? faXmark : faBars);
  };

  return (
    <div className="fixed top-0   w-full ">
      <div className=" xs:hidden   bg-blue-700  lg:flex justify-between align-middle py-2 lg:px-10 px-0">
        <div className="flex gap-3">
          <div className="flex text-white hover:underline">
            <Link>
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-slate-100 pr-2"
              />
              <span>support@nobleDataHub.com</span>
            </Link>
          </div>
          <p className="text-white">
            <FontAwesomeIcon icon={faPhone} className="text-slate-100 pr-2" />
            0902108521
          </p>
        </div>
        <div className="flex gap-3">
          <Link>
            {" "}
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-slate-300 hover:text-slate-100"
            />{" "}
          </Link>
          <Link>
            <FontAwesomeIcon
              icon={faFacebookF}
              className="text-slate-300 hover:text-slate-100"
            />{" "}
          </Link>
          <Link>
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-slate-300 hover:text-slate-100"
            />{" "}
          </Link>
          <Link>
            <FontAwesomeIcon
              icon={faSkype}
              className="text-slate-300 hover:text-slate-100"
            />{" "}
          </Link>
          <Link>
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-slate-300 hover:text-slate-100"
            />{" "}
          </Link>
        </div>
      </div>
      <div className="flex justify-between items-center bg-[white]  shadow-md lg:py-5 py-2 relative w-full px-2">
        <div className="block h-10 ">
          <h1 className=" md:text-4xl text-2xl">nobleDataHub</h1>
        </div>

        <nav className=" list-none ">
          <div
            className={`block lg:flex lg:w-auto lg:h-10 lg:gap-8 lg:top-5 xs:h-96  xs:w-[95%] xs:py-2 xs:px-2 absolute right-3 top-16  text-lg rounded-xl capitalize  bg-white  ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <li className="hover:underline active:underline xs:py-2 lg:py-0">
              <Link to="#">home</Link>
            </li>
            <li className="hover:underline active:underline xs:py-2 lg:py-0">
              <Link to="#About">about</Link>
            </li>
            <li className="hover:underline xs:py-2 lg:py-0">
              <Link>pricing</Link>
            </li>
            <li
              className="  hover:underline xs:py-2 lg:py-0 w-full lg:w-28  z-30 shadow"
              onClick={toggleDropDrown}
            >
              <Link
                onClick={productToggle}
                className="flex align-middle xs:justify-between"
              >
                <p className="lg:pr-2">product</p>
                <FontAwesomeIcon icon={faChevronDown} />
              </Link>
              {product && (
                <nav className="">
                  <div className=" bg-white mt-5 w-52 rounded relative px-4 shadow-lg">
                    <li
                      onMouseOver={dataBundleToggle}
                      onClick={toggleDropDrown}
                      className=" py-2 hover:no-underline"
                    >
                      <Link
                        onClick={dataBundleToggle}
                        className="flex justify-between w-full"
                      >
                        <p className=" w-full"> Data bundle</p>
                        <div className="w-fit ">
                          <FontAwesomeIcon icon={faChevronLeft} />
                        </div>
                      </Link>
                      {dataBundle && (
                        <nav>
                          <div
                            className=" lg:absolute  lg:right-[195px] lg:top-3
                           w-36  rounded bg-white shawdow pl-2"
                          >
                            <li>
                              <Link>mtn</Link>
                            </li>
                            <li>
                              <Link>glo</Link>
                            </li>
                            <li>
                              <Link>airtel</Link>
                            </li>
                            <li>
                              <Link>9Mobile</Link>
                            </li>
                          </div>
                        </nav>
                      )}
                    </li>
                    <li
                      onMouseOver={dataCardToggle}
                      onClick={toggleDropDrown}
                      className=" py-2"
                    >
                      <Link
                        onClick={dataCardToggle}
                        className="flex justify-between w-full"
                      >
                        <p className=" w-full">data card</p>
                        <div className="">
                          <FontAwesomeIcon icon={faChevronLeft} />
                        </div>
                      </Link>
                      {dataCard && (
                        <nav>
                          <div
                            className="lg:absolute lg:right-[195px] lg:top-10
                           w-40  rounded bg-white py-4 pl-2"
                          >
                            <li>
                              <Link>mtn card</Link>
                            </li>
                          </div>
                        </nav>
                      )}
                    </li>
                    <li className="py-2">
                      <Link to="/TvSub">tv subscrription</Link>
                    </li>
                    <li className="py-2">
                      <Link to="/Electricity">bill payment</Link>
                    </li>
                    <li className="py-2">
                      <Link to="/Waec">waec result pin</Link>
                    </li>
                    <li className="py-2">
                      <Link to="/Neco">neco result token</Link>
                    </li>
                    <li className="py-2">
                      <Link to="/Napteb">nabteb result pin</Link>
                    </li>
                  </div>
                </nav>
              )}
            </li>
            <li className="hover:underline xs:py-2 lg:py-0">
              <Link to="#About">contact</Link>
            </li>
            <li
              className="hover:underline xs:py-2 lg:py-0"
              onClick={toggleDropDrown}
            >
              <Link
                className="flex align-middle xs:justify-between"
                onClick={regToggle}
              >
                <p className="lg:pr-2">register/login</p>
                <div className="">
                  <FontAwesomeIcon icon={faChevronDown} />
                </div>
              </Link>

              {reg && (
                <nav>
                  <div className=" bg-white mt-5 w-50 rounded  px-4 shadow-lg">
                    <li>
                      <Link>register</Link>
                    </li>
                    <li>
                      <Link to="/Login">login</Link>
                    </li>
                  </div>
                </nav>
              )}
            </li>
          </div>
        </nav>

        <div
          className=" cursor-pointer lg:hidden w-50 h-50 absolute top-3 right-5 "
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={icon} onClick={iconToogle} size="xl" />
        </div>
      </div>
    </div>
  );
};

export default Header;
