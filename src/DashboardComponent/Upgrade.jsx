import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LayoutDash from "./LayoutDash";
import { faMinus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Upgrade = () => {
  return (
    <LayoutDash>
      <div className="border-2 border-blue-500 bg-[#f4f6f9]">
        <div className=" relative   h-[100vh] overflow-auto w-full  block lg:flex items-center justify-between px-3 py-3  capitalize ">
          <div className=" flex gap-3 absolute top-2 right-4 mt-16">
            <FontAwesomeIcon icon={faMinus} />
            <FontAwesomeIcon icon={faXmark} />
          </div>
          <div className="border-2 mt-40  md:mt-[900px] bg-[#fff] overflow-x-auto w-full md:w-[60%] mx-auto py-3 px-3 rounded">
            <p className="border-b-2 py-2">Become a Reseller</p>
            <div className="py-3">
              <p>
                Below are the discounted prices for Become a Reseller. Become a
                Reseller Now to Enjoy!
              </p>
              <p className="text-red-500">
                Note that after upgrade, you will still see the old prices
                during purchase, but once you purchase a product you will only
                be charged at reseller rates (meaning the new reseller prices
                will only be deducted from you wallet). You can confirm this in
                your wallet statement.
              </p>
            </div>
            <table className="overflow-x-auto">
              <thead className="">
                <tr className="text-left ">
                  <th>Member Status </th>
                  <th>Product</th>
                  <th>Discount/Price </th>
                  <th>Remark</th>
                </tr>
              </thead>
              <tbody className="align-top border-t-2 overflow-auto py-3">
                <tr className=" border-t-2 py-3 ">
                  <td className="py-2">Become a Reseller </td>
                  <td className="py-2">Data Bundles </td>
                  <td className="py-2">
                    <nav className="list-none ">
                      <li>Data Bundles </li>
                      <li className="py-2">
                        MTN CG LITE DATA{" "}
                        <span className="font-bold">@₦277.2/GB</span>
                      </li>
                      <li className="py-2">
                        MTN CG DATA{" "}
                        <span className="font-bold">@₦282.15/GB</span>,
                      </li>
                      <li className="py-2">
                        MTN DATA CARD{" "}
                        <span className="font-bold">@₦306.9/1.5GB</span>,
                      </li>
                      <li className="py-2">
                        MTN AWOOF DATA{" "}
                        <span className="font-bold">@₦567.15/3.5GB</span>,
                      </li>
                      <li className="py-2">
                        MTN DIRECT GIFTING{" "}
                        <span className="font-bold">@₦1154.2/1.5GB</span>,
                      </li>
                      <li className="py-2">AIRTEL CG DATA @₦287.1/GB,</li>
                      <li className="py-2">AIRTEL CG DATA @₦287.1/GB,</li>
                      <li>
                        GLO CG DATA{" "}
                        <span className="font-bold">@₦272.25/GB</span>,
                      </li>
                      <li>
                        GLO 2.9GB <span className="font-bold">@₦965.15</span>,
                      </li>
                      <li>
                        9MOBILE SME DATA{" "}
                        <span className="font-semibold">@₦198/GB,</span>
                      </li>
                      <li>
                        9MOBILE{" "}
                        <span className="font-bold">1.5GB @₦930.6.</span>{" "}
                      </li>
                    </nav>
                  </td>
                  <td className="py-2">Discount for Resellers</td>
                </tr>
                <tr className=" border-t-2">
                  <td className="py-2">Become a Reseller </td>
                  <td className="py-2">Airtime </td>
                  <td className="py-2">
                    <nav className="list-none ">
                      <li className="py-2">
                        MTN <span className="font-bold">@ 2%</span>,
                      </li>
                      <li className="py-2">
                        AIRTEL <span className="font-bold">@ 2%</span>,
                      </li>
                      <li className="py-2">
                        GLO <span className="font-bold">@ 2%</span>,
                      </li>
                      <li className="py-2">
                        9MOBILE <span className="font-bold">@ 2%</span>{" "}
                        discounts.{" "}
                      </li>
                    </nav>
                  </td>
                  <td className="py-2">Discount for Resellers</td>
                </tr>
                <tr className=" border-t-2">
                  <td className="py-2">Become a Reseller </td>
                  <td className="py-2">TV Subscription </td>
                  <td className="py-2">
                    <span className="font-bold">@ 0%</span> discount on every
                    purchase with ₦100 Convenience Fee.{" "}
                  </td>
                  <td className="py-2">Discount for Resellers</td>
                </tr>
                <tr className=" border-t-2">
                  <td className="py-2">Become a Reseller </td>
                  <td className="py-2">Bills Payment </td>
                  <td className="py-2">
                    <span className="font-bold"> @ 0%</span> discount on every
                    purchase with ₦ 100 Convenience Fee.{" "}
                  </td>
                  <td className="py-2">Discount for Resellers</td>
                </tr>
                <tr className=" border-t-2">
                  <td>Become a Reseller </td>
                  <td>WAEC Pin </td>
                  <td className="font-bold">@₦3465 </td>
                  <td>Discount for Resellers</td>
                </tr>
                <tr>
                  <td>Become a Reseller </td>
                  <td>NECO Token </td>
                  <td className="font-bold">@₦1287 </td>
                  <td>Discount for Resellers</td>
                </tr>
                <tr className=" border-t-2">
                  <td>Become a Reseller </td>
                  <td>Nabteb Pin </td>
                  <td className="font-bold">@₦1188 </td>
                  <td>Discount for Resellers</td>
                </tr>
              </tbody>
            </table>
            <div className="  text-center py-4 capitalize">
              <p>Upgrade Now at NGN1000 one time fee</p>
              <input
                type="text"
                placeholder="Become a Reseller"
                className="w-full md:w-[300px] border block mx-auto px-3 py-3 my-3"
              />
              <button className="border px-3 py-2 rounded bg-blue-500 text-white capitalize">
                become a Resellers
              </button>
            </div>
            <p className="text-center text-blue-500 capitalize">
              <Link to="/DashboardHome">back to Dashboard</Link>
            </p>
          </div>
        </div>
      </div>
    </LayoutDash>
  );
};

export default Upgrade;
