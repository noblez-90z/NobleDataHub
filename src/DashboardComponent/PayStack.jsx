import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LayoutDash from "./LayoutDash";
import { faMinus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Paystack = () => {
  return (
    <LayoutDash>
      <div className="border-2 border-blue-500 bg-[#f4f6f9]">
        <div className="h-[100vh]  w-full  block  px-3 py-3  capitalize ">
          <div className=" flex gap-3 absolute top-2 right-4 mt-16">
            <FontAwesomeIcon icon={faMinus} />
            <FontAwesomeIcon icon={faXmark} />
          </div>
          <div className="mt-40  border w-full md:w-[60%] mx-auto">
            <p className="py-2 pl-3 border-b-2">
              resolve paystack funding issues
            </p>
            <div className=" md:w-[80%] mx-auto px-4 text-right">
              <div className="py-2 ">
                <label className="font-bold">select payment method</label>
                <input
                  type="text"
                  className=" md:w-[250px] border px-4 py-2 rounded ml-2 outline-none"
                />
              </div>
              <div className="py-2 ">
                <label className="font-bold">transaction id or reference</label>
                <input
                  type="text"
                  className="md:w-[250px] border px-4 py-2 rounded ml-2 outline-none"
                  placeholder="e.g tnxId82607904845"
                />
              </div>
              <div className="py-2">
                <label className="font-bold">amount(#)</label>
                <input
                  type="text"
                  className="md:w-[250px]  border px-4 py-2 rounded ml-2 outline-none"
                  placeholder="e.g 500"
                />
              </div>
              <div className="py-2">
                <label className="font-bold">date of payment</label>
                <input
                  type="text"
                  className="md:w-[250px]  border px-4 py-2 rounded ml-2 outline-none"
                  placeholder="29-08-2024"
                />
              </div>
            </div>
            <button className="bg-blue-500 block my-2 py-2 px-3 text-white rounded mx-auto capitalize">
              verify and fund wallet
            </button>
          </div>

          <p className="py-3 text-blue-500 text-center">
            <Link to="/DashboardHome">Back To Dashboard</Link>
          </p>
        </div>
      </div>
    </LayoutDash>
  );
};

export default Paystack;
