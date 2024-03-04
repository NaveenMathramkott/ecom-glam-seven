import { useCurrency } from "../../context/currencyProvider";
import { convertSelectedCurrency, textShorter } from "../../utils/utils";
import RateReview from "../rating/RateReview";
import "./featuredCardStyle.css";

const FeaturedProductCard = ({ data, onClick }) => {
  const [selectedCurrency] = useCurrency();

  return (
    <div id="featured-product-card-mainWrapper" onClick={onClick}>
      <img src={data?.image} alt={data?.title} />
      <div>
        <span>{textShorter(data?.title, 32)}</span>
        <RateReview rate={Math.floor(data?.rating?.rate)} />
        <div id="featured-card-rate-sec">
          <span id="prod-rate">
            {convertSelectedCurrency(data?.price, selectedCurrency)}
          </span>
          <span id="prod-max-rate">
            {convertSelectedCurrency(data?.price + 10, selectedCurrency)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductCard;
