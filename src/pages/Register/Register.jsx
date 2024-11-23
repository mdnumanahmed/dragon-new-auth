import { useContext, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
// import Form from "../../Shared/Forms/Form";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    console.log(name, photo, email, password);

    // create a new user
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mx-auto">
      {/* <Form isFirstTime={true} /> */}
      <section className="p-24 bg-white text-gray-800 max-w-3xl mx-auto">
        <h2 className="text-4xl font-semibold text-center text-black">
          Register your account
        </h2>
        <hr className="my-12" />
        <form
          onSubmit={handleRegister}
          noValidate=""
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="rounded-md shadow-sm ">
            <div className="space-y-6">
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
              <div className="space-y-4 ">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  onChange={() => setAccepted(!accepted)}
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
            </div>
            <div className="mt-6">
              <button
                disabled={!accepted}
                className={`${
                  !accepted && "bg-gray-300"
                } w-full bg-black/80 text-white text-xl font-semibold py-4 rounded-md`}
              >
                Register
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
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default Register;
