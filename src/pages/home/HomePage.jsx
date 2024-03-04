import "./homeStyle.css";
import { useFetch } from "../../hooks/hooks.js";
import React from "react";
const Hero = React.lazy(() => import("../../sections/home/hero/Hero.jsx"));
const SearchInput = React.lazy(() =>
  import("../../components/searchInput/SearchInput.jsx")
);
const Layout = React.lazy(() => import("../../components/layout/Layout.jsx"));
const BestSellerPage = React.lazy(() =>
  import("../../sections/home/bestSeller/BestSellerPage.jsx")
);
const BannerCard = React.lazy(() =>
  import("../../sections/home/banner/BannerCard.jsx")
);
const CustomerCare = React.lazy(() =>
  import("../../sections/home/customerCare/CustomerCare.jsx")
);
const FeaturedProduct = React.lazy(() =>
  import("../../sections/home/featuredProduct/FeaturedProduct.jsx")
);

const HomePage = () => {
  const products = useFetch(`${import.meta.env.VITE_BASE_URL}/products`, "GET");

  return (
    <Layout title={`E-comm.ae shop online fashion with Glam seven`}>
      <div>
        <Hero />
      </div>
      <div className="spacer-top">
        <BestSellerPage />
      </div>
      <div className="spacer banner">
        <BannerCard />
      </div>
      <div className="spacer-bottom">
        <CustomerCare />
      </div>
      <div className="spacer-bottom">
        <FeaturedProduct />
      </div>
      <div className="spacer-search-input">
        <SearchInput data={products.data} />
      </div>
    </Layout>
  );
};

export default HomePage;
