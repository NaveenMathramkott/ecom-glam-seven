import FeaturedProductCard from "../../../components/featuredProduct/FeaturedProductCard";
import { FeaturedSkeleton } from "../../../components/skeleton/Skeleton";
import { useFetch } from "../../../hooks/hooks";
import "./featuredProductStyle.css";
import { useNavigate } from "react-router-dom";

const FeaturedProduct = () => {
  const navigate = useNavigate();
  const products = useFetch(`${import.meta.env.VITE_BASE_URL}/products`, "GET");

  return (
    <div id="featured-product-mainWrapper">
      <span>FEATURED PRODUCTS</span>
      <div className="featured-product-list">
        {products?.loading
          ? [...Array(5)].map((itm, ind) => <FeaturedSkeleton key={ind} />)
          : products?.data?.map((item) => (
              <FeaturedProductCard
                key={item.id}
                data={item}
                onClick={() =>
                  navigate(`/product/${item?.id}`, { state: item })
                }
              />
            ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
