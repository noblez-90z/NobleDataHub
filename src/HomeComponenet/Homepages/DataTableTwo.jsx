const DataTableTwo = () => {
  const result = [
    { exams: "Waec", price: "3500" },
    { exams: "Neco", price: "1300" },
    { exams: "Nabteb", price: "1200" },
  ];
  const airtime = [
    { exams: "2%", price: "discount" },
    { exams: "All", price: "Networks" },
  ];
  const tvSub = [
    { exams: "Availability", price: "Yes" },
    {
      exams: "@ 0% discount on every purchase with ₦100 Convenience Fee.",
      price: "Charge",
    },
  ];
  const electricityBill = [
    { exams: "Availability", price: "Yes" },
    {
      exams: "@ 0% discount on every purchase with ₦100 Convenience Fee.",
      price: "Charge",
    },
  ];
  return (
    <div className="p-4">
      <div className="block mx-auto lg:flex justify-between lg:flex-wrap gap-6">
        <div className="">
          <div className="py-5 text-center bg-blue-700 text-white rounded-t-xl">
            <h2 className="font-bold text-lg capitalize">Result Checker Pin</h2>
          </div>
          <table className="mx-auto w-[250px] bg-white border border-gray-300">
            <tbody>
              {result.map((item, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : ""}
                >
                  <td className=" text-xl py-2 px-4  border-b">{item.exams}</td>
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
          <div className="py-5 text-center bg-blue-700 text-white rounded-t-xl">
            <h2 className="font-bold text-lg capitalize">airtime</h2>
          </div>
          <table className="mx-auto w-[200px] bg-white border border-gray-300">
            <tbody>
              {airtime.map((item, index) => (
                <tr key={index}>
                  <td className=" text-xl py-2 px-4  border-b">{item.exams}</td>
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
          <div className="py-5 text-center bg-blue-700 text-white rounded-t-xl">
            <h2 className="font-bold text-lg capitalize">tv subscriptions</h2>
          </div>
          <table className="mx-auto w-[200px] bg-white border border-gray-300">
            <tbody>
              {tvSub.map((item, index) => (
                <tr key={index}>
                  <td className=" text-xl py-2 px-4  border-b">{item.exams}</td>
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
          <div className="py-5 text-center bg-blue-700 text-white rounded-t-xl">
            <h2 className="font-bold text-lg capitalize">electricity Bill</h2>
          </div>
          <table className="mx-auto w-[200px] bg-white border border-gray-300">
            <tbody>
              {electricityBill.map((item, index) => (
                <tr key={index}>
                  <td className=" text-xl py-2 px-4  border-b">{item.exams}</td>
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
      </div>
    </div>
  );
};

export default DataTableTwo;
