import PropTypes from "prop-types";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye } from "react-icons/fa";

const CategorizedNews = ({ news }) => {
  const {
    rating,
    total_view,
    title,
    author,
    image_url,
    thumbnail_url,
    details,
  } = news;
  return (
    <div className="border-2 rounded-lg my-4">
      <div className="flex justify-between items-center bg-dark1 p-5 rounded-lg">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            className="w-10 h-10 rounded-full"
            alt={`Image for ${author?.name}`}
          />
          <div>
            <p className="font-semibold dark1">{author?.name}</p>
            <p>
              <small>{author?.published_date}</small>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-2xl font-bold">
          <CiBookmark />
          <CiShare2 />
        </div>
      </div>
      <div className="p-5 space-y-5">
        <h2 className="font-bold dark1">{title}</h2>
        <img src={image_url || thumbnail_url} alt="" />
        <p className="dark2">{details}... Read More</p>
      </div>
      <hr />
      <div className="flex justify-between items-center p-5">
        <div>
          Rating: {rating?.number} || {rating?.badge}
        </div>
        <div className="flex gap-3">
          <FaEye /> <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

CategorizedNews.propTypes = {
  news: PropTypes.object.isRequired,
};

export default CategorizedNews;
