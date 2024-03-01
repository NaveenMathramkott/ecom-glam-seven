import Logo from "../logo/Logo";
import "./style.css";
import { FaTwitter, TiSocialFacebook } from "../icons/icons.js";
import { western, visa, master, paypal } from "../../assets/images/images.js";

const Footer = () => {
  return (
    <div id="footer-mainWrapper">
      <div className="footer-body-section">
        <div className="footer-body-content">
          <Logo />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever.Since the 1500s, when an unknown printer.
          </p>
        </div>
        <div className="footer-body-content">
          <span>Follow Us</span>
          <p>
            Since the 1500s, when an unknown printer took a galley of type and
            scrambled.
          </p>
          <div id="footer-social-icons">
            <TiSocialFacebook />
            <FaTwitter color={"#43c0ff"} />
          </div>
        </div>
        <div className="footer-body-content">
          <span>Contact Us</span>
          <p>E-Comm , 4578 Marmora Road, Glasgow D04 89GR</p>
        </div>
      </div>
      <div className="footer-body-section">
        <div className="footer-body-content">
          <span>Information</span>
          <div>
            <ul>About Us </ul>
            <ul>Infomation </ul>
            <ul>Privacy Policy </ul>
            <ul>Terms & Conditions</ul>
          </div>
        </div>
        <div className="footer-body-content">
          <span>Service</span>
          <div>
            <ul>About Us </ul>
            <ul>Infomation </ul>
            <ul>Privacy Policy </ul>
            <ul>Terms & Conditions</ul>
          </div>
        </div>
        <div className="footer-body-content">
          <span>My Account</span>
          <div>
            <ul>About Us </ul>
            <ul>Infomation </ul>
            <ul>Privacy Policy </ul>
            <ul>Terms & Conditions</ul>
          </div>
        </div>
        <div className="footer-body-content">
          <span>Our Offers</span>
          <div>
            <ul>About Us </ul>
            <ul>Infomation </ul>
            <ul>Privacy Policy </ul>
            <ul>Terms & Conditions</ul>
          </div>
        </div>
      </div>
      <div className="footer-body-section">
        <div id="footer-disclaimer-section">
          <span>© 2024 Ecomm Glam Seven </span>
          <div>
            <img src={western} alt={`westernunion`} />
            <img src={master} alt={`mastercard`} />
            <img src={paypal} alt={`paypal`} />
            <img src={visa} alt={`visacard`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
