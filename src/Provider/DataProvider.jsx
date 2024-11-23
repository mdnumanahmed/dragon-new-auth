import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext(null);

const baseURL = "https://openapi.programming-hero.com/api";

const DataProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [categoryNews, setCategoryNews] = useState([]);
  const [sportsNews, setSportsNews] = useState([]);
  const [allNews, setAllNews] = useState([]);
  const [initial, setInitial] = useState(true);
  const [detailsNews, setDetailsNews] = useState({});

  useEffect(() => {
    const loadInitialData = async () => {
      const res = await fetch(`${baseURL}/news/categories`);
      const data = await res.json();
      setCategories(data.data.news_category);
      const resp = await fetch(`${baseURL}/news/category/04`);
      const sportsData = await resp.json();
      setSportsNews(sportsData.data);
      const response = await fetch(`${baseURL}/news/category/08`);
      const allNewsData = await response.json();
      setAllNews(allNewsData.data);
    };
    loadInitialData();
  }, []);

  const handleLoadCategoryNews = (category_id) => {
    setInitial(false);
    fetch(`${baseURL}/news/category/${category_id}`)
      .then((res) => res.json())
      .then((data) => setCategoryNews(data.data));
  };

  const loadNewsDetails = (id) => {
    console.log("clicked", id);
    fetch(`${baseURL}/news/${id}`)
      .then((res) => res.json())
      .then((data) => setDetailsNews(data.data[0]));
  };

  const values = {
    categories,
    baseURL,
    handleLoadCategoryNews,
    categoryNews,
    sportsNews,
    allNews,
    initial,
    loadNewsDetails,
    detailsNews,
  };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

DataProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export default DataProvider;
