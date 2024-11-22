import { useContext } from "react";
import { DataContext } from "../../../Provider/DataProvider";
import Category from "../AllCategories/Category";
import CategorizedNews from "../CategorizedNews/CategorizedNews";
import SportsNews from "../SportsNew/SportsNews";
import RightSideBar from "../RightSideBar/RightSideBar";

const Home = () => {
  const {
    categories,
    handleLoadCategoryNews,
    categoryNews,
    sportsNews,
    allNews,
    initial,
  } = useContext(DataContext);
  return (
    <div>
      <section className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
          <div className="">
            <h2 className="font-bold dark1">All Categories</h2>
            <ul className="">
              {categories.map((category) => (
                <Category
                  key={category.category_id}
                  category={category}
                  handleLoadCategoryNews={handleLoadCategoryNews}
                />
              ))}
            </ul>
            <div>
              <hr />
              <h2 className="font-bold dark1 py-3">Sports News</h2>
              <hr />
              {sportsNews.map((news) => (
                <SportsNews key={news._id} news={news} />
              ))}
            </div>
          </div>
          <div className="col-span-2">
            <h2 className="font-bold dark1">Dragon News /Home</h2>
            <div>
              {initial &&
                allNews.map((news) => (
                  <CategorizedNews key={news._id} news={news} />
                ))}
              {categoryNews.map((news) => (
                <CategorizedNews key={news._id} news={news} />
              ))}
            </div>
          </div>
          <div className=" border-2">
            <RightSideBar />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
