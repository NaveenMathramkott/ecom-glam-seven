import "./heroStyle.css";
import { bannerImg } from "../../../assets/images/images.js";

const Hero = () => {
  return (
    <div id="hero-sec-mainWrapper">
      <img src={bannerImg} alt="shoes" id="hero-sec-image" />
      <div>
        <span>Super Flash Sale 50% Off</span>
      </div>
    </div>
  );
};

export default Hero;
