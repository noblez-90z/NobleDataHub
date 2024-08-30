import { Link } from "react-router-dom";
import LayoutDash from "./LayoutDash";

const Referrals = () => {
  return (
    <LayoutDash>
      <div className="border-2 border-blue-500 bg-[#f4f6f9]">
        <div className="h-[100vh]  w-full  block  px-3 py-3  capitalize ">
          <table className="mt-12 border-b-2 py-3 ">
            <thead className="">
              <tr>
                <th className="pl-3 py-3">s/n</th>
                <th className="pl-3 py-3 ">amount</th>

                <th className="pl-3 py-3">references</th>
                <th className="pl-3 py-3">date</th>
                <th className="pl-3 py-3">status</th>
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
export default Referrals;
