import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Category = ({ category, handleLoadCategoryNews }) => {
  return (
    <li>
      <NavLink
        to={`/news/category/${category.category_name}`}
        onClick={() => handleLoadCategoryNews(category.category_id)}
        className="py-4 pl-10 block text-xl"
      >
        {category.category_name}
      </NavLink>
    </li>
  );
};

Category.propTypes = {
  category: PropTypes.object.isRequired,
  handleLoadCategoryNews: PropTypes.func.isRequired,
  setInitial: PropTypes.func.isRequired,
};

export default Category;
