import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Form = ({ isFirstTime }) => {
  return (
    <div>
      <section className="p-24 bg-white text-gray-800 max-w-3xl mx-auto">
        <h2 className="text-4xl font-semibold text-center text-black">
          {isFirstTime ? "Register your account" : "Login your account"}
        </h2>
        <hr className="my-12" />
        <form
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="rounded-md shadow-sm ">
            <div className="space-y-6">
              {isFirstTime && (
                <>
                  <div className="space-y-4">
                    <label
                      htmlFor="name"
                      className="text-xl font-semibold text-dark1"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      className="w-full p-5 bg-[#F3F3F3] rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                    />
                  </div>
                  <div className="space-y-4">
                    <label
                      htmlFor="photo"
                      className="text-xl font-semibold text-dark1"
                    >
                      Photo URL
                    </label>
                    <input
                      id="photo"
                      name="photo"
                      type="text"
                      placeholder="Your Photo URL"
                      className="w-full p-5 bg-[#F3F3F3] rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                    />
                  </div>
                </>
              )}

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
              {isFirstTime && (
                <>
                  <div className="space-y-4 ">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      className="mr-3 p-5 bg-[#F3F3F3] rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                    />
                    <label
                      htmlFor="terms"
                      className="text-xl font-semibold text-dark1"
                    >
                      Accept{" "}
                      <Link className="text-blue-600 font-medium">
                        Term & Conditions
                      </Link>
                    </label>
                  </div>
                </>
              )}
            </div>
            <div className="mt-6">
              <button className="w-full bg-black/80 text-white text-xl font-semibold py-4 rounded-md">
                {isFirstTime ? "Register" : "Login"}
              </button>
            </div>
            <div className="text-center mt-5">
              <h3>
                {isFirstTime ? (
                  <>
                    Already have an account?{" "}
                    <Link
                      className="text-blue-600 font-semibold"
                      to={"/user/login"}
                    >
                      Login
                    </Link>{" "}
                  </>
                ) : (
                  <>
                    Are you first time here?{" "}
                    <Link
                      className="text-blue-600 font-semibold"
                      to={"/user/register"}
                    >
                      Register
                    </Link>
                  </>
                )}
              </h3>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

Form.propTypes = {
  isFirstTime: PropTypes.bool,
};

export default Form;
