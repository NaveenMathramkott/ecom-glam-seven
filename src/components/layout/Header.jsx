import { useEffect, useState } from "react";
import {
  FaRegUser,
  PiShoppingCartSimpleBold,
  IoIosSearch,
  GiHamburgerMenu,
  IoMdClose,
} from "../icons/icons.js";
import Badge from "../badge/Badge.jsx";
import Logo from "../logo/Logo.jsx";

import { Link, useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/hooks.js";
import { HeaderSkeleton } from "../skeleton/Skeleton.jsx";
import { useCart } from "../../context/cartProvider.jsx";
import CurrencyConverter from "../currencyConverter/CurrencyConverter.jsx";
import { useCurrency } from "../../context/currencyProvider.jsx";
import { convertSelectedCurrency } from "../../utils/utils.js";

const Header = () => {
  const [selectedCurrency] = useCurrency();
  const navigate = useNavigate();
  const [cart] = useCart();
  const categories = useFetch(
    `${import.meta.env.VITE_BASE_URL}/products/categories`,
    "GET"
  );
  const [totalCount, setTotalCount] = useState(0.0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const count = cart
      .map((item) => item.data.price * item.count)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    setTotalCount(count);
  }, [cart]);

  return (
    <>
      <nav id="header-mainWrapper">
        <div id="top-head-wrapper">
          <div id="top-head-left-sec">
            <CurrencyConverter />
          </div>
          <div id="top-head-middle-sec-mobile">
            <Logo size="small" onClick={() => navigate(`/`)} />
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
              <Badge count={cart.length}>
                <div className="link-icon" onClick={() => navigate(`/cart`)}>
                  <PiShoppingCartSimpleBold />
                </div>
              </Badge>
            </li>
            <li>
              <Link className="link-text">Items</Link>
            </li>
            <li>
              <span>
                {convertSelectedCurrency(totalCount, selectedCurrency)}
              </span>
              <div className="link-icon">
                <IoIosSearch />
              </div>
            </li>
          </div>
          <div className="mobile-btn" onClick={() => setOpen(!open)}>
            {!open ? (
              <GiHamburgerMenu className="mobile-icon-btn" />
            ) : (
              <IoMdClose className="mobile-icon-btn" />
            )}
          </div>
        </div>
        <div id="bottom-head-wrapper">
          <div id="bottom-head-left-sec">
            <Logo onClick={() => navigate(`/`)} />
          </div>
          <div id="bottom-head-right-sec">
            {categories.loading
              ? [...Array(5)].map((itm, ind) => <HeaderSkeleton key={ind} />)
              : categories?.data?.map((item, ind) => (
                  <Link className="bottom-head-menu-list" key={ind}>
                    {item.toUpperCase()}
                  </Link>
                ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
