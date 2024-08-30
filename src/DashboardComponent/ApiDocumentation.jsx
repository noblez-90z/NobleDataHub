import { Link } from "react-router-dom";
import LayoutDash from "./LayoutDash";

const ApiDocument = () => {
  return (
    <LayoutDash>
      <div className="border-2 border-blue-500 bg-[#f4f6f9]">
        <div className="h-[100vh]  w-full  block  px-3 py-3  capitalize ">
          <p className="text-center mt-16 text-3xl">coming soon...</p>
          <p className="py-3 text-blue-500 text-center">
            <Link to="/DashboardHome">Back To Dashboard</Link>
          </p>
        </div>
      </div>
    </LayoutDash>
  );
};
export default ApiDocument;
