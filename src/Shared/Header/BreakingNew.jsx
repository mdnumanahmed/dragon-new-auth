import { useContext } from "react";
import Marquee from "react-fast-marquee";
import { DataContext } from "../../Provider/DataProvider";
import { FaAnglesRight } from "react-icons/fa6";
const BreakingNew = () => {
  const { allNews } = useContext(DataContext);
  console.log(allNews);
  return (
    <div>
      <div className="flex gap-3 items-center container mx-auto bg-dark1 p-4">
        <button className="px-6 py-2 rounded-sm bg-[#D72050] text-xl font-medium text-white">
          Latest
        </button>
        <Marquee pauseOnHover={true} className="space-x-10">
          {allNews.map((news) => (
            <h3 key={news._id} className="dark1 font-semibold mr-14">
              <FaAnglesRight className="inline" /> {news.title}
            </h3>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default BreakingNew;
