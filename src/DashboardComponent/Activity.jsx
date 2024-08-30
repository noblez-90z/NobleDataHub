import { Link } from "react-router-dom";
import LayoutDash from "./LayoutDash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Activity = () => {
  return (
    <LayoutDash>
      <div className="border-2 border-blue-500 bg-[#f4f6f9]">
        <div className="h-[100vh]  w-full  block  px-3 py-3  capitalize ">
          <h4 className="mt-16 py-3 font-semibold">withdrawals</h4>

          <table className="border-y-2 py-3 ">
            <thead className="">
              <tr>
                <th className="pl-3 py-3">s/n</th>
                <th className="pl-3 py-3 ">account no</th>
                <th className="pl-3 py-3">bank</th>
                <th className="pl-3 py-3">account name</th>
                <th className="pl-3 py-3">amount</th>
                <th className="pl-3 py-3">purpose</th>
                <th className="pl-3 py-3">references</th>
                <th className="pl-3 py-3">date</th>
                <th className="pl-3 py-3">status</th>
              </tr>
            </thead>
          </table>
          <h4 className="mt-16 py-3 font-semibold">transfer to other users</h4>
          <div>
            <input type="text" className="border px-3 my-3" />
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <table className="border-y-2 py-3 ">
            <thead className="">
              <tr>
                <th className="pl-3 py-3">s/n</th>
                <th className="pl-3 py-3 ">reciver</th>
                <th className="pl-3 py-3">amount</th>
                <th className="pl-3 py-3">purpose</th>
                <th className="pl-3 py-3">references</th>
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

export default Activity;
