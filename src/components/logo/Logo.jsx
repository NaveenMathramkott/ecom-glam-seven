import { appIcon } from "../../assets/images/images";
import "./logoStyle.css";
appIcon;
const Logo = ({ size }) => {
  return (
    <div id="logo-mainWrapper">
      <img
        src={appIcon}
        alt="app-logo"
        className={size === "small" ? "app-logo-small" : "app-logo"}
      />
      <span>E-comm</span>
    </div>
  );
};

export default Logo;
