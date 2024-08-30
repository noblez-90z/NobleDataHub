import { useEffect, useState } from "react";
import Layout from "../../Layout";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [referal, setReferal] = useState("");
  const [formData, setFormData] = useState({
    Fullname: "",
    email: "",
    phone: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [error, setError] = useState({});

  const validate = () => {
    let formError = {};
    if (!formData.Fullname.trim()) {
      formError.Fullname = "full Name is required";
    }
    if (!formData.email.trim()) {
      formError.email = "email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formError.email = "Email is invalid";
    }

    if (!formData.password.trim()) {
      formError.password = "password is required";
    } else if (!formData.password.length > 8) {
      formError.password = "passWord must be at least 8 charaters long";
    }
    if (!formData.phone.trim()) {
      formError.phone = "phone number is required";
    }

    setError(formError);
    return Object.keys(formError).length === 0;
  };
  const submit = (e) => {
    e.preventDefault();
    if (validate()) {
      localStorage.setItem("email", formData.email);
      localStorage.setItem("password", formData.password);
      localStorage.setItem("Fullname", formData.Fullname);
      console.log("done");
      navigate("/Login");
    }
    // validate();
  };

  return (
    <Layout>
      <div className="w-full  flex justify-center items-center lg:mt-32 mt-16 px-3 lg:h-[480px] h-[100vh]  bg-cover bg-center bg-no-repeat bg-[url('./assets/hero4.jpg')]">
        <div className="bg-[#dbe6ec]  w-full lg:w-[60%] capitalize rounded text-center">
          <h2 className="py-4 border-b-2 border-gray-400 text-xl">Register</h2>
          <form action="/Login" target="_blank" onSubmit={submit} method="post">
            <div className="bg-[#f7f7f7] py-3 px-2 rounded-b shadow capitalize">
              <div className="block text-center py-3 lg:flex lg:justify-center lg:items-center gap-4  w-full">
                <label className="">Full Name</label>
                <input
                  type="text"
                  name="Fullname"
                  value={formData.Fullname}
                  placeholder="enter your full name"
                  onChange={handleChange}
                  className="border py-2 px-2 w-full lg:w-[270px] rounded outline-none"
                />
                {error.Fullname && (
                  <p className="  text-red-400">{error.Fullname} </p>
                )}
              </div>
              <div className="block py-3 lg:flex lg:justify-center lg:items-center gap-4  w-full">
                <label className="">e-mail address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="enter your email"
                  onChange={handleChange}
                  className="border py-2 px-2 w-full lg:w-[270px] rounded outline-none"
                />
                {/* {error && <p>passWord must be 8 charaters long</p>} */}
                {error.email && <p className="text-red-400">{error.email} </p>}
              </div>
              <div className="block py-3 lg:flex lg:justify-center lg:items-center gap-4  w-full">
                <label className="">Phone number</label>
                <input
                  type="number"
                  name="phone"
                  value={formData.phone}
                  placeholder="enter your phone number"
                  onChange={handleChange}
                  className="border py-2 px-2 w-full lg:w-[270px] rounded outline-none"
                />
                {error.phone && <p className="text-red-400">{error.phone} </p>}
              </div>
              <div className="block py-3 lg:flex justify-center items-center gap-11  w-full">
                <label className="">password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  placeholder="Create a password"
                  onChange={handleChange}
                  className="border py-2 px-2 w-full lg:w-[270px] rounded outline-none "
                />
                {error.password && (
                  <p className="text-red-400">{error.password} </p>
                )}
              </div>
              <div className=" py-3 flex justify-center items-center gap-11  w-full">
                <label className="">Referrer (optional)</label>
                <input
                  type="number"
                  value={referal}
                  placeholder="Enter your referal id"
                  onChange={(e) => setReferal(e.target.value)}
                  className="border py-2 px-2 w-full lg:w-[270px] rounded outline-none "
                />
              </div>

              <div className=" flex justify-center items-center gap-4 ">
                <button className="px-3 py-2  rounded bg-blue-500 text-slate-100 capitalize">
                  Register
                </button>
                <Link
                  to="/Login"
                  className="hover:underline hover:border-3 border-blue-400 text-blue-500"
                >
                  already registered?
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
