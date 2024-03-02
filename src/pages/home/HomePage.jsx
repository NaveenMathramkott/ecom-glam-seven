import "./homeStyle.css";
import Layout from "../../components/layout/Layout";
import BannerCard from "../../sections/banner/BannerCard";
import BestSellerPage from "../../sections/bestSeller/BestSellerPage";
import CustomerCare from "../../sections/customerCare/CustomerCare.jsx";
import FeaturedProduct from "../../sections/featuredProduct/FeaturedProduct.jsx";
import SearchInput from "../../components/searchInput/SearchInput.jsx";
import { useState } from "react";
import Hero from "../../sections/hero/Hero.jsx";

const HomePage = () => {
  const [option, setOption] = useState([]);

  const searchFnc = (data) => {
    setOption([...option, data]);
  };
  return (
    <Layout title={`E-com.ae shop online fashion with Glam seven`}>
      <div>
        <Hero />
      </div>
      <div className="spacer-top">
        <BestSellerPage />
      </div>
      <div className="spacer">
        <BannerCard />
      </div>
      <div className="spacer-bottom">
        <CustomerCare />
      </div>
      <div className="spacer-bottom">
        <FeaturedProduct />
      </div>
      <div className="spacer-search-input">
        <SearchInput onbtnClick={(data) => searchFnc(data)} options={option} />
      </div>
    </Layout>
  );
};

export default HomePage;
