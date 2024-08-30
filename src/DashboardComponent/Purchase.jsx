import LayoutDash from "./LayoutDash";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const Purchase = () => {
  return (
    <LayoutDash>
      <div className="border-2 border-blue-500 bg-[#f4f6f9]">
        <div className="h-[100vh]  w-full  block  px-3 py-3  capitalize overflow-auto ">
          <h4 className="mt-16 py-3 font-semibold">data bundle</h4>
          <div>
            <input type="text" className="border px-3 my-3" />
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <table className="border-y-2 py-3 ">
            <thead className="">
              <tr>
                <th className="pl-3 py-3">s/n</th>
                <th className="pl-3 py-3 ">mobile no.</th>
                <th className="pl-3 py-3">network</th>
                <th className="pl-3 py-3">data plan</th>
                <th className="pl-3 py-3">amount</th>
                <th className="pl-3 py-3">references</th>
                <th className="pl-3 py-3">date</th>
                <th className="pl-3 py-3">Status</th>
                <th className="pl-3 py-3">view</th>
              </tr>
            </thead>
          </table>
          <h4 className="mt-16 py-3 font-semibold">airtime purchase</h4>
          <div>
            <input type="text" className="border px-3 my-3" />
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <table className="border-y-2 py-3 ">
            <thead className="">
              <tr>
                <th className="pl-3 py-3">s/n</th>
                <th className="pl-3 py-3 ">mobile no.</th>
                <th className="pl-3 py-3">network</th>

                <th className="pl-3 py-3">amount</th>
                <th className="pl-3 py-3">references</th>
                <th className="pl-3 py-3">date</th>
                <th className="pl-3 py-3">Status</th>
                <th className="pl-3 py-3">view</th>
              </tr>
            </thead>
          </table>
          <h4 className="mt-16 py-3 font-semibold">data card Purchase</h4>
          <div>
            <input type="text" className="border px-3 my-3" />
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <table className="border-y-2 py-3 ">
            <thead className="">
              <tr>
                <th className="pl-3 py-3">s/n</th>
                <th className="pl-3 py-3 ">pin.</th>
                <th className="pl-3 py-3">network</th>
                <th className="pl-3 py-3">data plan</th>
                <th className="pl-3 py-3">amount</th>
                <th className="pl-3 py-3">references</th>
                <th className="pl-3 py-3">date</th>
                <th className="pl-3 py-3">Status</th>
                <th className="pl-3 py-3">view</th>
              </tr>
            </thead>
          </table>
          <h4 className="mt-16 py-3 font-semibold">tv subscription</h4>
          <div>
            <input type="text" className="border px-3 my-3" />
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <table className="border-y-2 py-3 ">
            <thead className="">
              <tr>
                <th className="pl-3 py-3">s/n</th>
                <th className="pl-3 py-3 ">company</th>
                <th className="pl-3 py-3">package</th>
                <th className="pl-3 py-3">iuc/card no.</th>
                <th className="pl-3 py-3">amount</th>
                <th className="pl-3 py-3">showmax voucher</th>
                <th className="pl-3 py-3">references</th>
                <th className="pl-3 py-3">date</th>
                <th className="pl-3 py-3">Status</th>
                <th className="pl-3 py-3">view</th>
              </tr>
            </thead>
          </table>
          <h4 className="mt-16 py-3 font-semibold">electricity bill</h4>
          <div>
            <input type="text" className="border px-3 my-3" />
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <table className="border-y-2 py-3 ">
            <thead className="">
              <tr>
                <th className="pl-3 py-3">s/n</th>
                <th className="pl-3 py-3 ">company</th>
                <th className="pl-3 py-3">meter type</th>
                <th className="pl-3 py-3">meter no.</th>
                <th className="pl-3 py-3">amount</th>
                <th className="pl-3 py-3">meter token</th>
                <th className="pl-3 py-3">references</th>
                <th className="pl-3 py-3">date</th>
                <th className="pl-3 py-3">Status</th>
                <th className="pl-3 py-3">view</th>
              </tr>
            </thead>
          </table>
          <h4 className="mt-16 py-3 font-semibold">weac/neco pins purchase</h4>
          <div>
            <input type="text" className="border px-3 my-3" />
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <table className="border-y-2 py-3 ">
            <thead className="">
              <tr>
                <th className="pl-3 py-3">s/n</th>
                <th className="pl-3 py-3 ">pin.</th>
                <th className="pl-3 py-3">token</th>
                <th className="pl-3 py-3">nabteb pin</th>

                <th className="pl-3 py-3">references</th>
                <th className="pl-3 py-3">date</th>
                <th className="pl-3 py-3">Status</th>
                <th className="pl-3 py-3">view</th>
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

export default Purchase;
