import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container mx-auto">
      {/* <Form /> */}
      <section className="p-24 bg-white text-gray-800 max-w-3xl mx-auto">
        <h2 className="text-4xl font-semibold text-center text-black">
          Login your account
        </h2>
        <hr className="my-12" />
        <form
          noValidate=""
          action=""
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
              <div className="space-y-4">
                <label
                  htmlFor="password"
                  className="text-xl font-semibold text-dark1"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="w-full p-5 bg-[#F3F3F3] rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>

              <div className="mt-6">
                <button className="w-full bg-black/80 text-white text-xl font-semibold py-4 rounded-md">
                  Login
                </button>
              </div>
              <div className="text-center mt-5">
                <h3>
                  Are you first time here?{" "}
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
