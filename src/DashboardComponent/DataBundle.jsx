import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LayoutDash from "./LayoutDash";
import { faMinus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const DataBundle = () => {
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
                  className="md:w-[250px]  border px-4 py-2 rounded ml-2 outline-none"
                  placeholder="e.g 0801234...."
                />
              </div>
              <p className="text-red-500">
                <span className=" font-bold text-black pr-2">
                  To Check Data Balance Dail:
                </span>
                Universal Code (For All Networks) &gt;&gt; *323# or *323*4# Or
                Specifically Dial the Codes below:MTN (CG) &gt;&gt; #460*260# |
                MTN (SME) &gt;&gt; *461*4# OR *323*3# | MTN (Direct & DATACARD)
                &gt;&gt; *323*4# GLO (CG & Direct) &gt;&gt; *127*0# | AirTel (CG
                & Direct) &gt;&gt; *140# | 9mobile (Direct & SME) &gt;&gt; *228#
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

export default DataBundle;
