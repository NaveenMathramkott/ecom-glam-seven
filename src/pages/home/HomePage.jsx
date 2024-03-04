import "./homeStyle.css";
import { useFetch } from "../../hooks/hooks.js";
import { lazy, Suspense } from "react";

const Hero = lazy(() => import("../../sections/home/hero/Hero.jsx"));
const SearchInput = lazy(() =>
  import("../../components/searchInput/SearchInput.jsx")
);
const Layout = lazy(() => import("../../components/layout/Layout.jsx"));
const BestSellerPage = lazy(() =>
  import("../../sections/home/bestSeller/BestSellerPage.jsx")
);
const BannerCard = lazy(() =>
  import("../../sections/home/banner/BannerCard.jsx")
);
const CustomerCare = lazy(() =>
  import("../../sections/home/customerCare/CustomerCare.jsx")
);
const FeaturedProduct = lazy(() =>
  import("../../sections/home/featuredProduct/FeaturedProduct.jsx")
);

const HomePage = () => {
  const products = useFetch(`${import.meta.env.VITE_BASE_URL}/products`, "GET");

  return (
    <Layout title={`E-comm.ae shop online fashion with Glam seven`}>
      <Suspense fallback={<span>Loading…</span>}>
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
      </Suspense>
    </Layout>
  );
};

export default HomePage;
