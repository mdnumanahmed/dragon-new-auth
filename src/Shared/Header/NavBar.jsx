import { useContext } from "react";
import { FaUserAlt } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("User signed out");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="container mx-auto flex justify-between items-center py-4">
        <div></div>
        <div>
          <ul className="flex gap-5 items-center">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>About</NavLink>
            </li>
            <li>
              <NavLink to={"/career"}>Career</NavLink>
            </li>
            <li>
              <NavLink to={"/user/login"}>Login</NavLink>
            </li>
            <li>
              <NavLink to={"/user/register"}>Register</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex gap-6 items-center">
          {user ? (
            <>
              <div className="border-2 rounded-full p-4">
                <FaUserAlt className="text-xl " />
              </div>
              <Link to={"/"}>
                <button
                  onClick={handleLogOut}
                  className="px-11 py-4 bg-black/80 text-xl text-white font-semibold"
                >
                  Log Out
                </button>
              </Link>
            </>
          ) : (
            <Link to={"/user/login"}>
              <button className="px-11 py-4 bg-black/80 text-xl text-white font-semibold">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
