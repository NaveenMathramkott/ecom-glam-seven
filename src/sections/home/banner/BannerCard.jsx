import "./bannerStyle.css";
import { shoeImg } from "../../../assets/images/images";

const BannerCard = () => {
  return (
    <div className="banner-mainWrapper">
      <div className="banner-left-section">
        <div>
          <span id="banner-header">Adidas Men Running Sneakers</span>
        </div>
        <div>
          <span id="banner-description">
            Performance and design. Taken right to the edge.
          </span>
        </div>
        <button>SHOP NOW</button>
      </div>
      <div className="banner-right-section">
        <img src={shoeImg} alt="ShoeImage" />
      </div>
    </div>
  );
};

export default BannerCard;
