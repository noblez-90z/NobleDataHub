// src/components/DataTable.js
import React from "react";

const DataTable = () => {
  const mtnData = [
    { plan: "500.0MB", price: "160" },
    { plan: "1GB", price: "350" },
    { plan: "2GB", price: "700" },
    { plan: "3GB", price: "700" },
    { plan: "5GB", price: "850" },
    { plan: "10.0GB", price: "" },
    { plan: "15.0GB", price: "" },
    { plan: "20.0GB", price: "" },
    { plan: "30.0GB", price: "" },
    { plan: "40.0GB", price: "" },
    { plan: "50.0GB", price: "" },
    { plan: "60.0GB", price: "" },
    { plan: "70.0GB", price: "" },
    { plan: "75.0GB", price: "" },
    { plan: "80.0GB", price: "" },
    { plan: "90.0GB", price: "" },
    { plan: "100.0GB", price: "" },
  ];
  const mtnData2 = [
    { plan: "50MB", price: "90" },
    { plan: "150MB", price: "110" },
    { plan: "250MB", price: "130" },
    { plan: "500.0MB", price: "160" },
    { plan: "1GB", price: "450" },
    { plan: "2GB", price: "700" },
    { plan: "3GB", price: "700" },
    { plan: "5GB", price: "850" },
    { plan: "10.0GB", price: "" },
    { plan: "15.0GB", price: "" },
    { plan: "20.0GB", price: "" },
    { plan: "30.0GB", price: "" },
    { plan: "40.0GB", price: "" },
    { plan: "50.0GB", price: "" },
    { plan: "60.0GB", price: "" },
    { plan: "70.0GB", price: "" },
    { plan: "75.0GB", price: "" },
    { plan: "80.0GB", price: "" },
    { plan: "90.0GB", price: "" },
    { plan: "100.0GB", price: "" },
  ];
  const mtnCG = [
    { plan: "50MB", price: "90" },
    { plan: "150MB", price: "110" },
    { plan: "250MB", price: "130" },
    { plan: "500.0MB", price: "160" },
    { plan: "1GB", price: "450" },
    { plan: "2GB", price: "700" },
    { plan: "3GB", price: "700" },
    { plan: "5GB", price: "850" },
    { plan: "10.0GB", price: "" },
    { plan: "15.0GB", price: "" },
    { plan: "20.0GB", price: "" },
    { plan: "30.0GB", price: "" },
    { plan: "40.0GB", price: "" },
    { plan: "50.0GB", price: "" },
    { plan: "60.0GB", price: "" },
    { plan: "70.0GB", price: "" },
    { plan: "75.0GB", price: "" },
    { plan: "80.0GB", price: "" },
    { plan: "90.0GB", price: "" },
    { plan: "100.0GB", price: "" },
  ];
  const airtelGift = [
    { plan: "50MB", price: "90" },
    { plan: "150MB", price: "110" },
    { plan: "250MB", price: "130" },
    { plan: "500.0MB", price: "160" },
    { plan: "1GB", price: "450" },
    { plan: "2GB", price: "700" },
    { plan: "3GB", price: "700" },
    { plan: "5GB", price: "850" },
    { plan: "10.0GB", price: "" },
    { plan: "15.0GB", price: "" },
    { plan: "20.0GB", price: "" },
    { plan: "30.0GB", price: "" },
    { plan: "40.0GB", price: "" },
    { plan: "50.0GB", price: "" },
    { plan: "60.0GB", price: "" },
    { plan: "70.0GB", price: "" },
    { plan: "75.0GB", price: "" },
    { plan: "80.0GB", price: "" },
    { plan: "90.0GB", price: "" },
    { plan: "100.0GB", price: "" },
  ];
  const GloGift = [
    { plan: "50MB", price: "90" },
    { plan: "150MB", price: "110" },
    { plan: "250MB", price: "130" },
    { plan: "500.0MB", price: "160" },
    { plan: "1GB", price: "450" },
    { plan: "2GB", price: "700" },
    { plan: "3GB", price: "700" },
    { plan: "5GB", price: "850" },
    { plan: "10.0GB", price: "" },
    { plan: "15.0GB", price: "" },
    { plan: "20.0GB", price: "" },
    { plan: "30.0GB", price: "" },
    { plan: "40.0GB", price: "" },
    { plan: "50.0GB", price: "" },
    { plan: "60.0GB", price: "" },
    { plan: "70.0GB", price: "" },
    { plan: "75.0GB", price: "" },
    { plan: "80.0GB", price: "" },
    { plan: "90.0GB", price: "" },
    { plan: "100.0GB", price: "" },
  ];
  const etisalatmobileData = [
    { plan: "50MB", price: "90" },
    { plan: "150MB", price: "110" },
    { plan: "250MB", price: "130" },
    { plan: "500.0MB", price: "160" },
    { plan: "1GB", price: "450" },
    { plan: "2GB", price: "700" },
    { plan: "3GB", price: "700" },
    { plan: "5GB", price: "850" },
    { plan: "10.0GB", price: "" },
    { plan: "15.0GB", price: "" },
    { plan: "20.0GB", price: "" },
    { plan: "30.0GB", price: "" },
    { plan: "40.0GB", price: "" },
    { plan: "50.0GB", price: "" },
    { plan: "60.0GB", price: "" },
    { plan: "70.0GB", price: "" },
    { plan: "75.0GB", price: "" },
    { plan: "80.0GB", price: "" },
    { plan: "90.0GB", price: "" },
    { plan: "100.0GB", price: "" },
  ];
  const mtnDataCard = [
    { plan: "50MB", price: "90" },
    { plan: "150MB", price: "110" },
    { plan: "250MB", price: "130" },
    { plan: "500.0MB", price: "160" },
    { plan: "1GB", price: "450" },
    { plan: "2GB", price: "700" },
    { plan: "3GB", price: "700" },
    { plan: "5GB", price: "850" },
    { plan: "10.0GB", price: "" },
    { plan: "15.0GB", price: "" },
    { plan: "20.0GB", price: "" },
    { plan: "30.0GB", price: "" },
    { plan: "40.0GB", price: "" },
    { plan: "50.0GB", price: "" },
    { plan: "60.0GB", price: "" },
    { plan: "70.0GB", price: "" },
    { plan: "75.0GB", price: "" },
    { plan: "80.0GB", price: "" },
    { plan: "90.0GB", price: "" },
    { plan: "100.0GB", price: "" },
  ];

  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-2xl font-bold mb-4 text-center py-3 ">Data Plans</h1>
      <div className="block mx-auto lg:flex justify-between lg:flex-wrap gap-6 overflow-x-auto pt-6">
        <div className=" rounded-xl">
          <div className="py-5 text-center bg-blue-700 text-white rounded-t-xl">
            <h2 className="font-bold text-lg capitalize">mtn sme plan</h2>
          </div>
          <table className="mx-auto w-[250px] bg-white border border-gray-300 px-9">
            <tbody>
              {mtnData.map((item, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : ""}
                >
                  <td className=" text-xl py-2 px-4  border-b">{item.plan}</td>
                  <td className=" text-xl py-2 px-4  border-b">
                    &#8358;{item.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="w-[150px] mx-auto mt-2  py-2 px-4 bg-blue-600 text-white text-xl  text-center font-semibold rounded">
            <button className="capitalize">click here</button>
          </div>
        </div>
        <div className="mt-3 lg:mt-0">
          <div className="py-5 text-center bg-red-600 text-white rounded-t-xl">
            <h2 className="font-bold text-lg capitalize">
              {" "}
              Mtn CG Lite Data (SME 2.0)
            </h2>
          </div>
          <table className="mx-auto w-[250px] bg-white border border-gray-300">
            <tbody>
              {mtnData2.map((item, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : ""}
                >
                  <td className="text-xl py-2 px-4 border-b">{item.plan}</td>
                  <td className="text-xl py-2 px-4 border-b">
                    &#8358;{item.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="w-[150px] mx-auto mt-2  py-2 px-4 bg-blue-600 text-white text-xl  text-center font-semibold rounded">
            <button className="capitalize">click here</button>
          </div>
        </div>
        <div className="mt-3 lg:mt-0">
          <div className="py-5 text-center bg-red-700  text-white rounded-t-xl">
            <h2 className="font-bold text-lg capitalize">Mtn CG Data</h2>
          </div>
          <table className="mx-auto w-[250px] bg-white border border-gray-300">
            <tbody>
              {mtnCG.map((item, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : ""}
                >
                  <td className=" text-xl py-2 px-4 border-b">{item.plan}</td>
                  <td className="text-xl py-2 px-4 border-b">
                    &#8358;{item.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="w-[150px] mx-auto mt-2  py-2 px-4 bg-blue-600 text-white text-xl  text-center font-semibold rounded">
            <button className="capitalize">click here</button>
          </div>
        </div>
        <div className="mt-3 lg:mt-0">
          <div className="py-5 text-center bg-blue-700  text-white rounded-t-xl">
            <h2 className="font-bold text-lg text-wrap capitalize">
              Airtel Corporate Gifting Data
            </h2>
          </div>
          <table className="mx-auto w-[250px] bg-white border border-gray-300">
            <tbody>
              {airtelGift.map((item, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : ""}
                >
                  <td className="text-xl py-2 px-4 border-b">{item.plan}</td>
                  <td className="text-xl py-2 px-4 border-b">
                    &#8358;{item.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="w-[150px] mx-auto mt-2  py-2 px-4 bg-blue-600 text-white text-xl  text-center font-semibold rounded">
            <button className="capitalize">click here</button>
          </div>
        </div>
        <div className="mt-3 lg:mt-0">
          <div className="py-5 text-center bg-red-700  text-white rounded-t-xl">
            <h2 className="font-bold text-lg capitalize">
              Glo Corporate Gifting Data
            </h2>
          </div>
          <table className="mx-auto w-[250px] bg-white border border-gray-300">
            <tbody>
              {GloGift.map((item, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : ""}
                >
                  <td className="text-xl py-2 px-4 border-b">{item.plan}</td>
                  <td className="text-xl py-2 px-4 border-b">
                    &#8358;{item.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="w-[150px] mx-auto mt-2  py-2 px-4 bg-blue-600 text-white text-xl  text-center font-semibold rounded">
            <button className="capitalize">click here</button>
          </div>
        </div>
        <div className="mt-3 lg:mt-0">
          <div className="py-5 text-center bg-blue-700  text-white rounded-t-xl">
            <h2 className="font-bold text-lg capitalize">9mobile SME Data</h2>
          </div>
          <table className="mx-auto w-[250px] bg-white border border-gray-300">
            <tbody>
              {etisalatmobileData.map((item, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : ""}
                >
                  <td className="text-xl py-2 px-4 border-b">{item.plan}</td>
                  <td className=" text-xl py-2 px-4 border-b">
                    &#8358;{item.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="w-[150px] mx-auto mt-2  py-2 px-4 bg-blue-600 text-white text-xl  text-center font-semibold rounded">
            <button className="capitalize">click here</button>
          </div>
        </div>
        <div className="mt-3 lg:mt-0">
          <div className="py-5 text-center bg-red-700  text-white rounded-t-xl">
            <h2 className="font-bold text-lg capitalize">Mtn data card</h2>
          </div>
          <table className="mx-auto w-[250px] bg-white border border-gray-300">
            <tbody>
              {mtnDataCard.map((item, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : ""}
                >
                  <td className="text-xl py-2 px-4 border-b">{item.plan}</td>
                  <td className="text-xl py-2 px-4 border-b">
                    &#8358;{item.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="w-[150px] mx-auto mt-2  py-2 px-4 bg-blue-600 text-white text-xl  text-center font-semibold rounded">
            <button className="capitalize">click here</button>
          </div>
        </div>
        <div className="mt-3 lg:mt-0">
          <div className="py-5 text-center bg-red-700  text-white rounded-t-xl">
            <h2 className="font-bold text-lg capitalize">Glo data card</h2>
          </div>
          <table className="mx-auto w-[250px] bg-white border border-gray-300">
            <tbody>
              {mtnDataCard.map((item, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : ""}
                >
                  <td className="text-xl py-2 px-4 border-b">{item.plan}</td>
                  <td className="text-xl py-2 px-4 border-b">
                    &#8358;{item.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="w-[150px] mx-auto mt-2  py-2 px-4 bg-blue-600 text-white text-xl  text-center font-semibold rounded">
            <button className="capitalize">click here</button>
          </div>
        </div>
        <div className="mt-3 lg:mt-0">
          <div className="py-5 text-center bg-red-700  text-white rounded-t-xl">
            <h2 className="font-bold text-lg capitalize">Airtel data card</h2>
          </div>
          <table className="mx-auto w-[250px] bg-white border border-gray-300">
            <tbody>
              {mtnDataCard.map((item, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : ""}
                >
                  <td className="text-xl py-2 px-4 border-b">{item.plan}</td>
                  <td className="text-xl py-2 px-4 border-b">
                    &#8358;{item.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="w-[150px] mx-auto mt-2  py-2 px-4 bg-blue-600 text-white text-xl  text-center font-semibold rounded">
            <button className="capitalize">click here</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
