import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="">
      <div className="block mt-4  lg:flex lg:justify-between lg:mt-4 px-5 py-12 ">
        <div className="flex-1 px-4">
          <h2 className="font-bold text-xl py-4">
            nobleDataHub <span className="text-blue-600">.com</span>
          </h2>
          <p>
            nobleDataHub Data Services, <br />
            5 Itu Road, <br />
            Uyo, Akwa Ibom State.
          </p>
          <p className="mt-4">
            <span className="font-semibold">phone: </span>+23409022108521
          </p>
          <p>
            <span className="font-semibold">email: </span>support@nobleData.com
          </p>
        </div>
        <div className="flex-1 capitalize">
          <h2 className="font-bold text-xl capitalize py-4">useful links</h2>
          <nav className="list-none">
            <li className="py-2 ">
              <Link to="/">
                <FontAwesomeIcon icon={faChevronRight} className="pr-2" />
                Home
              </Link>
            </li>
            <li className="py-2">
              <Link to="#About">
                <FontAwesomeIcon icon={faChevronRight} className="pr-2" />
                about us
              </Link>
            </li>
            <li className="py-2">
              <Link to="#Contact">
                <FontAwesomeIcon icon={faChevronRight} className="pr-2" />
                contact us
              </Link>
            </li>
            <li className="py-2">
              <Link>
                <FontAwesomeIcon icon={faChevronRight} className="pr-2" />
                terms of use
              </Link>
            </li>
            <li className="py-2">
              <Link>
                <FontAwesomeIcon icon={faChevronRight} className="pr-2" />
                privacy policy
              </Link>
            </li>
          </nav>
        </div>
        <div className="flex-1 capitalize">
          <h2 className="font-bold text-xl capitalize py-4">our product</h2>
          <nav className="list-none ">
            <li className="py-2">
              <Link to="/DataBundle">
                <FontAwesomeIcon icon={faChevronRight} className="pr-2" />
                data bundle
              </Link>
            </li>
            <li className="py-2">
              <Link to="/AirtimeBundle">
                <FontAwesomeIcon icon={faChevronRight} className="pr-2" />
                airtime
              </Link>
            </li>
            <li className="py-2">
              <Link to="/TvSub">
                <FontAwesomeIcon icon={faChevronRight} className="pr-2" />
                cable tv subscription
              </Link>
            </li>
            <li className="py-2">
              <Link to="/Electricity">
                <FontAwesomeIcon icon={faChevronRight} className="pr-2" />
                bill payment
              </Link>
            </li>
            <li className="py-2">
              <Link to="/Waec">
                <FontAwesomeIcon icon={faChevronRight} className="pr-2" />
                waec result pin
              </Link>
            </li>
            <li className="py-2">
              <Link to="/Neco">
                <FontAwesomeIcon icon={faChevronRight} className="pr-2" />
                neco result pin
              </Link>
            </li>
            <li className="py-2">
              <Link to="/Napteb">
                <FontAwesomeIcon icon={faChevronRight} className="pr-2" />
                napteb result pin
              </Link>
            </li>
          </nav>
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-xl capitalize py-4">
            our social networks
          </h2>
          <p>
            you can follow us on any of our social media platforms for updates
            and information
          </p>
          {/* social media */}
        </div>
      </div>
      <div className="py-5 text-center bg-slate-200">
        <p>
          © Copyright <span className="font-semibold">nobleDataHub</span>. All
          Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
