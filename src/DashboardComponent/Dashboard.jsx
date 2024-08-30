import {
  faBars,
  faBell,
  faCircleChevronDown,
  faCode,
  faEye,
  faGauge,
  faHistory,
  faKey,
  faLevelUp,
  faLightbulb,
  faMoneyCheck,
  faPhoneVolume,
  faSearch,
  faSignal,
  faTv,
  faUser,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/code4444444444444.jfif";

const Dashboard = ({ children }) => {
  const services = [
    { service: "Dashboard", path: "/DashboardHome", icon: faGauge },
    { service: " Become a retailer", path: "/Upgrade", icon: faLevelUp },
    { service: "e-statment", icon: faMoneyCheck, path: "/Statement" },
    { service: "paymeny history", icon: faHistory, path: "/Payment" },
    { service: "purchase history", icon: faHistory, path: "/Purchase" },
    { service: "view referals", icon: faEye, path: "/Referrals" },
    { service: "view activity", icon: faHistory, path: "/Activity" },
    { service: "api documentation", icon: faCode, path: "/ApiDocument" },
  ];
  const selfService = [
    { service: "verify data/airtime status", icon: faUser, path: "/Airtime" },
    { service: "resolve paystack funding", icon: faUser, path: "/Paystack" },
    { service: "resolve monnify funding", icon: faUser, path: "/Monify" },
  ];
  const products = [
    { service: "data bundle", icon: faWifi, path: "/DataBundle" },
    { service: "airtime", icon: faPhoneVolume, path: "/AirtimeBundle" },
    { service: "data card", icon: faSignal, path: "/DataCard" },
    { service: "tv subscrription", icon: faTv, path: "/TvSub" },
    { service: "bill payment", icon: faLightbulb, path: "/Electricity" },
    { service: "waec pin", icon: faKey, path: "/Waec" },
    { service: "neco token", icon: faKey, path: "/Neco" },
    { service: "nabteb pin", icon: faKey, path: "/Napteb" },
  ];
  const [info, setInfo] = useState(false);
  const drop = () => {
    setInfo(!info);
  };
  const [nav, setNav] = useState(false);
  const toogleNav = () => {
    setNav(!nav);
  };
  const [name, setName] = useState("");
  useEffect(() => {
    const savedFullName = localStorage.getItem("Fullname");
    if (savedFullName) {
      setName(savedFullName);
    }
  });
  return (
    <div className=" relative md:flex h-screen">
      <div
        className={`${nav ? "w-64" : "w-20"}  md:block absolute left-0  ${
          nav ? "" : "md:w-20"
        } overflow-y-auto overflow-x-hidden z-10 bg-[#343a40]  text-slate-300 capitalize ${
          nav ? "block" : "hidden md:block"
        }  `}
      >
        <div className="w-[250px]  flex gap-4 items-center py-4 px-3 border-b-2 border-gray-600 ">
          <img className=" rounded-full w-14" src={logo} alt="" />
          <h1>nobleDataHub</h1>
        </div>
        <div className="mt-3 py-3 px-3 border-b-2 border-[#475962]">
          <h2 className="text-xl">welcome! {name}</h2>
        </div>
        <div className="px-3 py-2 overflow-y-auto overflow-x-hidden h-[80vh]">
          <nav>
            <div className="list-none">
              {services.map((service, index) => (
                <li
                  className="pl-3 py-2 w-full hover:bg-blue-600 hover:rounded hover:text-slate-100 font-semibold"
                  key={index}
                >
                  <Link className="flex items-center gap-5" to={service.path}>
                    <FontAwesomeIcon size="xl" icon={service.icon} />
                    {service.service}{" "}
                  </Link>
                </li>
              ))}
            </div>
            <h2
              className={`text-xl font-semibold py-2 ${
                nav ? "w-64 block" : "w-20 hidden"
              } `}
            >
              self service
            </h2>
            <div className="list-none">
              {selfService.map((service, index) => (
                <li
                  className="pl-3 py-2 w-full hover:bg-blue-600 hover:rounded hover:text-slate-100 font-semibold"
                  key={index}
                >
                  <Link className="flex items-center gap-4" to={service.path}>
                    <FontAwesomeIcon size="xl" icon={service.icon} />
                    {service.service}{" "}
                  </Link>
                </li>
              ))}
            </div>
            <h2
              className={`text-xl py-2 font-semibold ${
                nav ? "w-64 block" : "w-20 hidden"
              } `}
            >
              product
            </h2>
            <div className="list-none">
              {products.map((service, index) => (
                <li
                  className=" pl-3 py-2 w-full hover:bg-blue-600 hover:rounded hover:text-slate-100 font-semibold"
                  key={index}
                >
                  <Link className="flex items-center gap-5" to={service.path}>
                    <FontAwesomeIcon size="xl" icon={service.icon} />
                    {service.service}{" "}
                  </Link>
                </li>
              ))}
            </div>
          </nav>
        </div>
      </div>
      <div className={`flex-1  ${nav ? "w-64 md:ml-64" : "md:w-20 md:ml-20"} `}>
        <div
          className={`w-[97%]  fixed top-0 flex justify-between z-10 h-14 bg-[#fff] capitalize  px-3 ${
            nav ? "w-64 md:w-[77%]" : "w-20 md:w-[90%]"
          }`}
        >
          <div className="flex items-center gap-3  ">
            <FontAwesomeIcon
              onClick={toogleNav}
              icon={faBars}
              className="cursor-pointer z-30"
            />
            <nav>
              <div className=" hidden list-none lg:flex gap-3 px-3">
                <li>
                  <Link to="/DashboardHome">Dashboard</Link>
                </li>
                <li>
                  <Link to="/Activity">activity</Link>
                </li>
              </div>
            </nav>
            <div className="relative">
              <input
                type="search"
                name=""
                placeholder="Search"
                className="border py-2 px-5 rounded outline-none"
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute top-3 right-2"
              />
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <Link>
              <FontAwesomeIcon icon={faBell} />
            </Link>
            <Link className="flex">
              <FontAwesomeIcon
                icon={faUser}
                onClick={drop}
                className="hidden md:block w-8  relative"
              />
              {info && (
                <nav>
                  <div className="list-none bg-white absolute top-16 right-3 w-50 rounded py-3  px-4 shadow-lg">
                    <li>
                      <Link to="/Test">update profile</Link>
                    </li>
                    <li>
                      <Link>change password</Link>
                    </li>
                    <li>
                      <Link>logout</Link>
                    </li>
                  </div>
                </nav>
              )}
              <FontAwesomeIcon onClick={drop} icon={faCircleChevronDown} />
            </Link>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Dashboard;
