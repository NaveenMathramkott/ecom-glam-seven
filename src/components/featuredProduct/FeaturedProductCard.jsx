import RateReview from "../rating/RateReview";
import "./featuredCardStyle.css";

const FeaturedProductCard = ({ photo, name, price, maxPrice, rate }) => {
  return (
    <div id="featured-product-card-mainWrapper">
      <img src={photo} alt={name} />
      <div>
        <span>{name}</span>
        <RateReview rate={3} />
        <div id="featured-card-rate-sec">
          <span id="prod-rate">{`$${price}`}</span>
          <span id="prod-max-rate">{`$${maxPrice}`}</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductCard;
