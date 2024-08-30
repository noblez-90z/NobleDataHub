import { Link } from "react-router-dom";

import LayoutDash from "./LayoutDash";

const Airtime = () => {
  return (
    <LayoutDash>
      <div className="border-2 border-blue-500 bg-[#f4f6f9]">
        <div className="h-[100vh]  w-full  block  px-3 py-3  capitalize ">
          <h2 className="mt-16 text-2xl">comfirm transactions</h2>

          <p className="text-red-500 py-3">
            Note: Only Mtn Sme Data, Glo Data, Airtel Data, 9mobile Data, Mtn
            VTU Airtime, Mtn SNS Airtime, Airtel Airtime, Glo Airtime, 9mobile
            Airtime can be verified here. (MTN & AIRTEL CG data has instant
            auto-refund if failed. Else, it delivered).
          </p>
          <input
            type="text"
            placeholder="enter transactions references"
            className="my-3 py-4 px-2 border rounded outline-none"
          />
          <button className="border py-2 px-3 ml-2 rounded">verify</button>

          <table className="border-y-2 py-3 ">
            <thead className="">
              <tr>
                <th className="pl-3 py-3">references</th>
                <th className="pl-3 py-3">date</th>
                <th className="pl-3 py-3">Status</th>
              </tr>
            </thead>
          </table>
          <p className="py-3 text-blue-500 text-center">
            <Link to="/DashboardHome">Back To Dashboard</Link>
          </p>
        </div>
      </div>
    </LayoutDash>
  );
};

export default Airtime;
