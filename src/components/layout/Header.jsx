import { useState } from "react";
import {
  FaRegUser,
  MdOutlineShoppingCart,
  IoIosSearch,
  GiHamburgerMenu,
  IoMdClose,
} from "../icons/icons.js";
import { Link } from "react-router-dom";
import Badge from "../badge/Badge.jsx";
import Logo from "../logo/Logo.jsx";

const MENU_LIST = [
  { name: "HOME", to: "/" },
  { name: "BAGS", to: "/bags" },
  { name: "SNEAKERS", to: "/sneakers" },
  { name: "BELT", to: "/belt" },
  { name: "CONTACT", to: "/contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav id="header-mainWrapper">
        <div id="top-head-wrapper">
          <div id="top-head-left-sec">
            <select value={["EN"]}>
              <option>EN</option>
              <option>ARB</option>
            </select>
            <select value={["USD"]}>
              <option>USD</option>
              <option>AED</option>
            </select>
          </div>
          <div id="top-head-middle-sec-mobile">
            <Logo size="small" />
          </div>
          <div
            className={
              open
                ? "top-head-right-sec-mobile top-head-right-sec"
                : "top-head-right-sec"
            }
          >
            <li>
              <FaRegUser size={"14px"} />
              <Link className="link-text" to={"profile"}>
                My profile
              </Link>
            </li>
            <li>
              <Badge count={2}>
                <Link className="link-text" to={"cart"}>
                  <MdOutlineShoppingCart size={"18px"} />
                </Link>
              </Badge>
            </li>
            <li>
              <Link className="link-text">Items</Link>
            </li>
            <li>
              <span>$0.00</span>
              <IoIosSearch size={"20px"} style={{ paddingLeft: "4px" }} />
            </li>
          </div>
          <div className="mobile-btn" onClick={() => setOpen(!open)}>
            {!open ? <GiHamburgerMenu /> : <IoMdClose />}
          </div>
        </div>
        <div id="bottom-head-wrapper">
          <div id="bottom-head-left-sec">
            <Logo />
          </div>
          <div id="bottom-head-right-sec">
            {MENU_LIST.map((item) => (
              <Link
                className="bottom-head-menu-list"
                key={item.to}
                to={item.to}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
