import { useContext } from "react";
import BreakingNew from "../../../Shared/Header/BreakingNew";
import NavBar from "../../../Shared/Header/NavBar";
import { DataContext } from "../../../Provider/DataProvider";
import Category from "../AllCategories/Category";
import CategorizedNews from "../CategorizedNews/CategorizedNews";

const Home = () => {
  const { categories, handleLoadCategoryNews, categoryNews } =
    useContext(DataContext);
  console.log(categoryNews);
  return (
    <div>
      <BreakingNew />
      <NavBar />
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
              <h2 className="font-bold dark1">Sports News</h2>
            </div>
          </div>
          <div className="col-span-2">
            <h2 className="font-bold dark1">Dragon News /Home</h2>
            <div>
              {categoryNews.map((news) => (
                <CategorizedNews key={news._id} news={news} />
              ))}
            </div>
          </div>
          <div className=" border-2">Sidebar</div>
        </div>
      </section>
    </div>
  );
};

export default Home;
