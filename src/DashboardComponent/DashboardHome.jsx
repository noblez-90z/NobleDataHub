import LayoutDash from "./LayoutDash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartSimple,
  faKey,
  faLevelUp,
  faLightbulb,
  faMinus,
  faMobile,
  faMoneyCheck,
  faPhoneVolume,
  faTelevision,
  faWifi,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const DashboardHome = () => {
  return (
    <LayoutDash>
      <div className=" ">
        <div className="h-[100vh] overflow-y-auto bg-[#f4f6f9]">
          <div className=" block lg:flex items-center justify-between px-3 py-3 mt-16 capitalize overflow-y-auto border-t-2">
            <h1 className="text-2xl py-2">user Dashboard</h1>
            <p>
              user status: starter{" "}
              <button className="border px-6 py-2 ml-2 rounded bg-green-500 text-slate-200">
                <Link to="/Upgrade">'upgrade to reseller'</Link>{" "}
              </button>{" "}
            </p>
            <p>
              your referal link<Link>http://</Link> |{" "}
              <Link to="/Referrals" className="text-blue-500">
                view referals
              </Link>{" "}
            </p>
          </div>
          <div className="block lg:flex justify-between gap-3 px-3 py-4">
            <div className="flex items-center w-full px-2 py-2 gap-3 capitalize rounded shadow-lg border">
              <div className="px-4 py-5 border rounded bg-[#28a745] text-white">
                <FontAwesomeIcon icon={faMoneyCheck} />
              </div>
              <div className="flex-1">
                <h4>e-wallet balance</h4>
                <p className="text-right">
                  {" "}
                  <Link to="/Statement" className="text-blue-500">
                    e-statement
                  </Link>
                </p>
                <p>
                  {" "}
                  <Link to="/purchase" className="text-blue-500">
                    view purchase
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex items-center w-full px-2 py-2 gap-3 capitalize rounded shadow-lg border">
              <div className="px-4 py-5 border rounded bg-red-500 text-white">
                <FontAwesomeIcon icon={faMoneyCheck} />
              </div>
              <div className="flex-1">
                <h4>deposit money</h4>
                <p className="text-right">
                  {" "}
                  <Link>click here</Link>
                </p>
              </div>
            </div>
            <div className="flex items-center w-full px-2 py-2 gap-3 capitalize rounded shadow-lg border">
              <div className="px-4 py-5 border rounded bg-[#28a745] text-white">
                <FontAwesomeIcon icon={faMobile} />
              </div>
              <div className="flex-1">
                <h4>andriod app</h4>
                <p className="text-right">
                  {" "}
                  <Link className="text-blue-500">download now!</Link>
                </p>
              </div>
            </div>
            <div className="flex items-center w-full px-2 py-2 gap-3 capitalize rounded shadow-lg border">
              <div className="px-4 py-5 border rounded bg-[#ffc107] text-white">
                <FontAwesomeIcon icon={faLevelUp} />
              </div>
              <div className="flex-1">
                <h4>do more</h4>
                <p className="text-right">
                  {" "}
                  <Link className="text-blue-500">loading...</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="block lg:flex justify-between   gap-3 px-3 capitalize">
            <div className="w-full  flex flex-col gap-3">
              <div className="flex items-center w-full px-2 py-2 gap-3 bg-[#17a2bb] text-white rounded">
                <div className="px-3 py-2 ">
                  <FontAwesomeIcon icon={faWifi} />
                </div>
                <div className="flex-1">
                  <h4>buy data bundle</h4>
                  <p className="text-right">
                    {" "}
                    <Link to="/DataBundle">click here</Link>
                  </p>
                </div>
              </div>
              <div className="flex items-center w-full px-2 py-2 gap-3 rounded bg-red-500 text-slate-100 ">
                <div className="px-3 py-2 ">
                  <FontAwesomeIcon icon={faPhoneVolume} />
                </div>
                <div className="flex-1">
                  <h4>buy airtime</h4>
                  <p className="text-right">
                    {" "}
                    <Link to="/AirtimeBundle">click here</Link>
                  </p>
                </div>
              </div>
              <div className="flex items-center w-full px-2 py-2 gap-3 rounded bg-[#ffc107]  ">
                <div className="px-2  ">
                  <FontAwesomeIcon icon={faChartSimple} />
                </div>
                <div className="flex-1">
                  <h4>buy data card</h4>
                  <p className="text-right">
                    {" "}
                    <Link to="/DataCard">click here</Link>
                  </p>
                </div>
              </div>
              <div className="flex items-center w-full px-2 py-2 gap-3 rounded bg-green-500 text-slate-100 ">
                <div className="px-2 py-2 ">
                  <FontAwesomeIcon icon={faTelevision} />
                </div>
                <div className="flex-1">
                  <h4>tv subscription</h4>
                  <p className="text-right">
                    {" "}
                    <Link to="/TvSub">click here</Link>
                  </p>
                </div>
              </div>
              <div className="flex items-center w-full px-2 py-2 gap-3 rounded bg-[#343a40] text-white  ">
                <div className="px-2 py-2 ">
                  <FontAwesomeIcon icon={faLightbulb} />
                </div>
                <div className="flex-1">
                  <h4>electricity bill</h4>
                  <p className="text-right hover:text-green-900">
                    {" "}
                    <Link to="/Electricity">click here</Link>
                  </p>
                </div>
              </div>
              <div className="flex items-center w-full px-2 py-2 gap-3 rounded bg-[#17a2bb] text-white ">
                <div className="px-2 py-2 ">
                  <FontAwesomeIcon icon={faKey} />
                </div>
                <div className="flex-1">
                  <h4>buy weac pin</h4>
                  <p className="text-right">
                    {" "}
                    <Link to="/Waec">click here</Link>
                  </p>
                </div>
              </div>
              <div className="flex items-center w-full px-2 py-2 gap-3 rounded bg-[#ffc107] ">
                <div className="px-2 py-2 ">
                  <FontAwesomeIcon icon={faKey} />
                </div>
                <div className="flex-1">
                  <h4>buy neco token</h4>
                  <p className="text-right">
                    {" "}
                    <Link to="/Neco">click here</Link>
                  </p>
                </div>
              </div>
              <div className="flex items-center w-full px-2 py-2 gap-3 rounded bg-[#17a2bb] text-white ">
                <div className="px-2 py-2 ">
                  <FontAwesomeIcon icon={faKey} />
                </div>
                <div className="flex-1">
                  <h4>buy nabtep pin</h4>
                  <p className="text-right">
                    {" "}
                    <Link to="/Napteb">click here</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="border rounded shadow-lg px-2 w-full  ">
              <div className="flex items-center justify-between border-b-2 ">
                <h2>recent transactions</h2>
                <div className="flex gap-2">
                  <FontAwesomeIcon icon={faMinus} />
                  <FontAwesomeIcon icon={faXmark} />
                </div>
              </div>
              <p className="py-3 text-red-400">
                you do not have any transactions at the moment!
              </p>
              <div className="py-2 px-3 border text-right">
                <button className="capitalize rounded border py-2 px-2 bg-[#333] text-slate-300 ">
                  no recent transactions
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between py-4 px-3 mt-32 border-t-2">
            <p>Copyright © Iriseicthub. All rights reserved.</p>
            <Link>privacy & Terms</Link>
          </div>
        </div>
      </div>
    </LayoutDash>
  );
};

export default DashboardHome;
