import { appIcon } from "../../assets/images/images";
import "./logoStyle.css";
appIcon;
const Logo = ({ size, onClick }) => {
  return (
    <div id="logo-mainWrapper" onClick={onClick}>
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
