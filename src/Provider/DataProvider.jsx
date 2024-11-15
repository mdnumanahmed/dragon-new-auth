import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext(null);

const baseURL = "https://openapi.programming-hero.com/api";

const DataProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      const res = await fetch(`${baseURL}/news/categories`);
      const data = await res.json();
      setCategories(data.data.news_category);
    };
    loadCategories();
  }, []);

  const handleLoadCategoryNews = (category_id) => {
    fetch(`${baseURL}/news/category/${category_id}`)
      .then((res) => res.json())
      .then((data) => setCategoryNews(data.data));
  };

  const values = { categories, baseURL, handleLoadCategoryNews, categoryNews };
  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

DataProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export default DataProvider;
