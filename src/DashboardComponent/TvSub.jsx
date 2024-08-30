import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LayoutDash from "./LayoutDash";
import { faMinus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const TvSub = () => {
  return (
    <LayoutDash>
      <div className=" bg-[#f4f6f9]">
        <div className="h-[100vh]  w-full  block  px-3 py-3  capitalize ">
          <div className=" flex gap-3 absolute top-2 right-4 mt-16">
            <FontAwesomeIcon icon={faMinus} />
            <FontAwesomeIcon icon={faXmark} />
          </div>
          <div className="mt-40  border w-full md:w-[60%] mx-auto rounded shadow-lg bg-[#fff]">
            <p className="py-2 pl-3 border-b-2">Cable TV Subscription</p>
            <p className="py-2 pl-3">
              e-wallet bal: <span className="text-green-500 font-bold">₦0</span>
            </p>
            <div className=" md:w-[80%] mx-auto px-4 text-right">
              <div className="py-2 ">
                <label className="font-bold">Select Cable TV Company</label>
                <input
                  type="text"
                  className=" md:w-[250px] border px-4 py-2 rounded ml-2 outline-none"
                />
              </div>
              <div className="py-2 ">
                <label className="font-bold"> Select Bouquet/Package</label>
                <input
                  type="text"
                  className="md:w-[250px] border px-4 py-2 rounded ml-2 outline-none"
                  placeholder="---"
                />
              </div>
              <div className="py-2">
                <label className="font-bold">SmartCard/IUC/Phone Num</label>
                <input
                  type="number"
                  className="md:w-[250px]  border px-4 py-2 rounded ml-2 outline-none"
                  placeholder="e.g 0801234...."
                />
              </div>
              <p>
                <span className="text-black font-bold pr-2">
                  For Upgrade/Downgrade of Package or Assistance:
                </span>
                you can contact DSTV/GOtv's customers care unit on
                01-2703232/08039003788 or the toll free lines: 08149860333,
                07080630333, and 09090630333, STARTIMES's customers care unit on
                094618888.
                <span className="text-red-500">
                  Note: 0% Discount on Every Purchase. ₦100 Convenience Fee.
                </span>
              </p>
            </div>
            <div className="  text-center">
              <button className="bg-blue-500  mr-2 py-2 px-3 text-white rounded mx-auto capitalize">
                verify card/iuc number
              </button>
              <button className="bg-red-500  my-2 py-2 px-3 text-white rounded mx-auto capitalize">
                pay now
              </button>
            </div>

            <p className="py-3 text-blue-500 text-center">
              <Link to="/DashboardHome">Back To Dashboard</Link>
            </p>
          </div>
        </div>
      </div>
    </LayoutDash>
  );
};

export default TvSub;
