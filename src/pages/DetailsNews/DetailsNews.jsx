import { useContext } from "react";
import { DataContext } from "../../Provider/DataProvider";
import { NavLink } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const DetailsNews = () => {
  const { detailsNews, handleLoadCategoryNews } = useContext(DataContext);
  const { image_url, title, details, category_id } = detailsNews;
  console.log(detailsNews);
  return (
    <div>
      <h2 className="mb-3 font-bold">Dragon News Details</h2>
      <div className="space-y-3">
        <img src={image_url} alt="" />
        <h2 className="font-bold text-dark1">{title}</h2>
        <p className="text-justify">{details}</p>
      </div>
      <div className="inline-flex items-center bg-[#D72050] px-6 py-3 rounded-md my-4 text-xl font-semibold text-white gap-3">
        <FaArrowLeftLong />
        <NavLink
          to={`/news/category/${category_id}`}
          onClick={() => handleLoadCategoryNews(category_id)}
          className=""
        >
          All news in this category
        </NavLink>
      </div>
    </div>
  );
};

export default DetailsNews;
