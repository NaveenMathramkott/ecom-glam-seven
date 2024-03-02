import "./homeStyle.css";
import Hero from "../../sections/home/hero/Hero.jsx";
import SearchInput from "../../components/searchInput/SearchInput.jsx";
import { useState } from "react";
import Layout from "../../components/layout/Layout.jsx";
import BestSellerPage from "../../sections/home/bestSeller/BestSellerPage.jsx";
import BannerCard from "../../sections/home/banner/BannerCard.jsx";
import CustomerCare from "../../sections/home/customerCare/CustomerCare.jsx";
import FeaturedProduct from "../../sections/home/featuredProduct/FeaturedProduct.jsx";

const HomePage = () => {
  const [option, setOption] = useState([]);

  const searchFnc = (data) => {
    setOption([...option, data]);
  };
  return (
    <Layout title={`E-comm.ae shop online fashion with Glam seven`}>
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
