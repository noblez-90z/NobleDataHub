import { useState } from "react";
import Layout from "../../Layout";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState("");
  const [error, setError] = useState("");

  const login = (e) => {
    e.preventDefault();
    const savedEmail = localStorage.getItem("email");
    const savedPasword = localStorage.getItem("password");
    if (password === savedPasword && email === savedEmail) {
      console.log("Login succefull");
      navigate("/Dashboard");
    } else {
      setError("password is incorrect");
      console.log("incorrect");
    }
  };
  return (
    <Layout>
      <div className="w-full flex justify-center items-center lg:mt-32 mt-16 px-3 h-[450px]  bg-cover bg-center bg-no-repeat bg-[url('./assets/hero4.jpg')]">
        <div className="bg-[#dbe6ec]  w-full lg:w-[60%] capitalize rounded text-center">
          <h2 className="py-4 border-b-2 border-gray-400 text-xl">Login</h2>
          <div className="bg-[#f7f7f7] py-4 px-3 rounded-b shadow">
            <div className=" py-3 flex justify-center items-center gap-4  w-full">
              <label className="">e-mail address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border py-2 px-2 w-full lg:w-[270px] rounded outline-none"
              />
            </div>
            <div className=" py-3 flex justify-center items-center gap-11  w-full">
              <label className="">password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border py-2 px-2 w-full lg:w-[270px] rounded outline-none "
              />
            </div>
            <div className="py-3">
              <input
                type="checkbox"
                value={check}
                onChange={(e) => setCheck(e.target.value)}
                className="border mr-3"
              />
              <label>remember me</label>
            </div>
            <p className="text-red-400">{error} </p>
            <div className=" flex justify-center items-center gap-4 ">
              <button
                onClick={login}
                className="px-3 py-2  rounded bg-blue-500 text-slate-100 capitalize"
              >
                login
              </button>
              <Link to="/Register" className="hover:underline text-blue-500">
                not registered?
              </Link>
              <Link className="hover:underline text-blue-500">
                forgot password?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
