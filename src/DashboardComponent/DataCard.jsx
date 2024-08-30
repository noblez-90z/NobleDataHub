import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LayoutDash from "./LayoutDash";
import { faMinus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const DataCard = () => {
  return (
    <LayoutDash>
      <div className=" bg-[#f4f6f9]">
        <div className="h-[100vh]  w-full  block  px-3 py-3  capitalize ">
          <div className=" flex gap-3 absolute top-2 right-4 mt-16">
            <FontAwesomeIcon icon={faMinus} />
            <FontAwesomeIcon icon={faXmark} />
          </div>
          <div className="mt-40  border w-full md:w-[60%] mx-auto rounded shadow-lg bg-[#fff]">
            <p className="py-2 pl-3 border-b-2">buy data bundle</p>
            <p className="py-2 pl-3">
              e-wallet bal: <span className="text-green-500 font-bold">₦0</span>
            </p>
            <p className="w-[90%] mx-auto block py-2 px-2 rounded bg-red-700 text-white">
              Selected Product is Currently Unavailable for Purchase. Please
              Check Back Later!
            </p>
            <div className=" md:w-[80%] mx-auto px-4 text-right">
              <div className="py-2 ">
                <label className="font-bold">select network</label>
                <input
                  type="text"
                  className=" md:w-[250px] border px-4 py-2 rounded ml-2 outline-none"
                />
              </div>
              <div className="py-2 ">
                <label className="font-bold">select data type</label>
                <input
                  type="text"
                  className="md:w-[250px] border px-4 py-2 rounded ml-2 outline-none"
                  placeholder="---"
                />
              </div>
              <div className="py-2">
                <label className="font-bold">recievers phone number</label>
                <input
                  type="number"
                  className="md:w-[250px]  border px-4 py-2 rounded ml-2"
                  placeholder="e.g 0801234...."
                />
              </div>
              <div className="">
                <h2>Amount to Pay(₦)</h2>
                <p className="text-red-500">2-8% Discount: ₦</p>
              </div>
              <p className="text-red-500">
                <span className="text-black font-bold pr-2">
                  To Check Airtime Balance Dail:
                </span>
                ALL NETWORKS &gt;&gt; *310#
              </p>
            </div>
            <button className="bg-blue-500 block my-2 py-2 px-3 text-white rounded mx-auto capitalize">
              buy now
            </button>

            <p className="py-3 text-blue-500 text-center">
              <Link to="/DashboardHome">Back To Dashboard</Link>
            </p>
          </div>
        </div>
      </div>
    </LayoutDash>
  );
};

export default DataCard;
