import FeaturedProductCard from "../../components/featuredProduct/FeaturedProductCard";
import "./featuredProductStyle.css";

const FeaturedProduct = () => {
  return (
    <div id="featured-product-mainWrapper">
      <span>FEATURED PRODUCTS</span>
      <div className="featured-product-list">
        {[...Array(20)].map((itm) => (
          <FeaturedProductCard
            key={itm}
            name={`Blue Swade Nike Sneakers`}
            photo={
              "https://i.pinimg.com/564x/cb/e7/be/cbe7be2e3798058777a9e87ca4a02bc7.jpg"
            }
            price={2234}
            maxPrice={3455}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
