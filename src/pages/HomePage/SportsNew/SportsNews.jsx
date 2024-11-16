import PropTypes from "prop-types";
import { FaCalendarAlt } from "react-icons/fa";
import { dateFormat } from "../../../utilities/dateTime";

const SportsNews = ({ news }) => {
  const { title, author, thumbnail_url } = news;
  return (
    <div className="my-5 space-y-5">
      <img
        src={thumbnail_url}
        alt=""
        className="w-full h-48 object-cover object-top"
      />
      <h2 className="text-justify">
        {title.split(" ").slice(0, 10).join(" ")}
      </h2>
      <div className="flex justify-between">
        <p>Sports</p>
        <p className="flex gap-3 items-center">
          <FaCalendarAlt />
          {/* {new Date(author.published_date).toDateString()} */}
          {dateFormat(author.published_date)}
        </p>
      </div>
    </div>
  );
};

SportsNews.propTypes = {
  news: PropTypes.object.isRequired,
};

export default SportsNews;
