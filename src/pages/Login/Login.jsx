import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state || "";

  const handleSignIn = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    signInUser(email, password)
      .then((result) => {
        const signedUser = result.user;
        console.log(signedUser);
        navigate(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container mx-auto">
      {/* <Form /> */}
      <section className="p-24 bg-white text-gray-800 max-w-3xl mx-auto">
        <h2 className="text-4xl font-semibold text-center text-black">
          Login your account
        </h2>
        <hr className="my-12" />
        <form
          onSubmit={handleSignIn}
          noValidate=""
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="rounded-md shadow-sm ">
            <div className="space-y-6">
              <div className="space-y-4">
                <label
                  htmlFor="email"
                  className="text-xl font-semibold text-dark1"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-5 bg-[#F3F3F3] rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>
              <div className="space-y-4 relative">
                <label
                  htmlFor="password"
                  className="text-xl font-semibold text-dark1"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type={showPass ? "text" : "password"}
                  placeholder="Password"
                  className="w-full p-5 bg-[#F3F3F3] rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
                <span
                  onClick={() => setShowPass(!showPass)}
                  className="text-3xl absolute right-4 top-12"
                >
                  {!showPass ? <FaRegEye /> : <FaRegEyeSlash />}
                </span>
              </div>

              <div className="mt-6">
                <button className="w-full bg-black/80 text-white text-xl font-semibold py-4 rounded-md">
                  Login
                </button>
              </div>
              <div className="text-center mt-5">
                <h3>
                  Are you first time here? Please{" "}
                  <Link
                    className="text-blue-600 font-semibold"
                    to={"/user/register"}
                  >
                    Register
                  </Link>
                </h3>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default Login;
