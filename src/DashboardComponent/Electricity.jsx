import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LayoutDash from "./LayoutDash";
import { faMinus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Electricity = () => {
  return (
    <LayoutDash>
      <div className=" bg-[#f4f6f9]">
        <div className="h-[100vh]  w-full  block  px-3 py-3  capitalize ">
          <div className=" flex gap-3 absolute top-2 right-4 mt-16">
            <FontAwesomeIcon icon={faMinus} />
            <FontAwesomeIcon icon={faXmark} />
          </div>
          <div className="mt-40  border w-full md:w-[60%] mx-auto rounded shadow-lg bg-[#fff]">
            <p className="py-2 pl-3 border-b-2">Pay Electricity Bill</p>
            <p className="py-2 pl-3">
              e-wallet bal: <span className="text-green-500 font-bold">₦0</span>
            </p>
            <div className=" md:w-[80%] mx-auto px-4 text-right">
              <div className="py-2 ">
                <label className="font-bold">Select Electricity Company</label>
                <input
                  type="text"
                  className=" md:w-[250px] border px-4 py-2 rounded ml-2 outline-none"
                />
              </div>
              <div className="py-2 ">
                <label className="font-bold"> Select Meter Type</label>
                <input
                  type="text"
                  className="md:w-[250px] border px-4 py-2 rounded ml-2 outline-none"
                  placeholder="---"
                />
              </div>
              <div className="py-2">
                <label className="font-bold">Meter Number</label>
                <input
                  type="number"
                  className="md:w-[250px]  border px-4 py-2 rounded ml-2 outline-none"
                  placeholder="e.g 0801234...."
                />
              </div>
              <div className="py-2">
                <label className="font-bold">Amount(₦)</label>
                <input
                  type="number"
                  className="md:w-[250px]  border px-4 py-2 rounded ml-2 outline-none"
                  placeholder="₦1000"
                />
              </div>
              <p className="text-red-500">
                Note: 0% Discount on Every Purchase. ₦100 Convenience Fee.
              </p>
            </div>
            <button className="bg-blue-500 block my-2 py-2 px-3 text-white rounded mx-auto capitalize">
              verify card/iuc number
            </button>
            <button className="bg-red-500 block my-2 py-2 px-3 text-white rounded mx-auto capitalize">
              pay now
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

export default Electricity;
