import {
  FaFacebookF,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import swimming from "./../../../assets/swimming.png";
import classImg from "./../../../assets/class.png";
import playground from "./../../../assets/playground.png";
import bg from "./../../../assets/bg.png";

const RightSideBar = () => {
  return (
    <div>
      <div className="space-y-3">
        <h2 className="font-bold dark1">Login with</h2>
        <button className="flex items-center gap-3 text-lg border-2 border-gray-400 rounded-lg justify-center py-3 w-full ">
          <FaGoogle /> Login with Google
        </button>
        <button className="flex items-center gap-3 text-lg border-2 border-gray-400 rounded-lg justify-center py-3 w-full ">
          <FaGithub /> Login with Github
        </button>
      </div>
      <div className="my-6">
        <h2 className="font-bold dark1">Find Us On</h2>
        <div className="grid grid-cols-1 divide-y border rounded-lg">
          <button className="flex items-center gap-3 text-lg  rounded-lg py-3 px-4 w-full ">
            <FaFacebookF className="rounded-full bg-blue-200 w-8 h-8 p-2" />{" "}
            Facebook
          </button>
          <button className="flex items-center gap-3 text-lg rounded-lg py-3 px-4 w-full ">
            <FaTwitter className="rounded-full bg-blue-200 w-8 h-8 p-2" />{" "}
            Twitter
          </button>
          <button className="flex items-center gap-3 text-lg  rounded-lg py-3 px-4 w-full ">
            <FaInstagram className="rounded-full bg-blue-200 w-8 h-8 p-2" />{" "}
            Instagram
          </button>
          <button className="flex items-center gap-3 text-lg rounded-lg py-3 px-4 w-full ">
            <FaLinkedin className="rounded-full bg-blue-200 w-8 h-8 p-2" />{" "}
            LinkedIn
          </button>
        </div>
      </div>
      <div className="bg-dark1 p-4 my-4">
        <h2 className="font-bold dark1">Q-Zone</h2>
        <div>
          <img src={swimming} alt="" />
          <img src={classImg} alt="" />
          <img src={playground} alt="" />
        </div>
      </div>
      <div>
        <img src={bg} className="w-full" alt="" />
      </div>
    </div>
  );
};

export default RightSideBar;
