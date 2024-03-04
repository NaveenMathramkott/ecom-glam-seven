import "./productCardStyle.css";
import {
  FaHeart,
  FaRegHeart,
  PiShoppingCartSimpleBold,
} from "../icons/icons.js";
import { useState } from "react";
import {
  convertSelectedCurrency,
  getOffer,
  textShorter,
} from "../../utils/utils.js";
import { useCart } from "../../context/cartProvider.jsx";
import toast from "react-hot-toast";
import { useCurrency } from "../../context/currencyProvider.jsx";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ data, hotflag = true }) => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [selectedCurrency] = useCurrency();
  const [show, setShow] = useState(false);
  const [liked, setLiked] = useState(false);

  const hoverFunction = () => {
    setShow(true);
  };

  const onAddToCart = (prod) => {
    const checkCart = cart.filter((itm) => itm.data.id === prod.id);
    if (checkCart.length >= 1) {
      toast.success("Already Added to the cart");
    } else {
      const newProduct = { data: prod, count: 1 };
      setCart([...cart, newProduct]);
      localStorage.setItem("ecom-cart", JSON.stringify([...cart, newProduct]));
      toast.success("Item Added to cart");
    }
  };

  return (
    <div className="productCard-mainWrapper">
      <div
        className="productCard-img-wrapper"
        onMouseOver={hoverFunction}
        onMouseOut={() => setShow(false)}
        onClick={hoverFunction}
      >
        <img src={data?.image} alt={data?.title} />
        {hotflag && <span>HOT</span>}
        {show && (
          <div id="product-hover-btn">
            <div
              className="product-iconWrapper"
              onClick={() => setLiked(!liked)}
            >
              {liked ? <FaHeart color="red" /> : <FaRegHeart />}
            </div>
            <div
              className="product-iconWrapper"
              onClick={() => onAddToCart(data)}
            >
              <PiShoppingCartSimpleBold />
            </div>
          </div>
        )}
      </div>
      <span>{textShorter(data?.title)}</span>
      <div
        className="productCard-rate-sec"
        onClick={() => navigate(`/product/${data?.id}`, { state: data })}
      >
        <span id="prod-rate">
          {convertSelectedCurrency(data?.price, selectedCurrency)}
        </span>
        <span id="prod-max-rate">
          {convertSelectedCurrency(data?.price + 10, selectedCurrency)}
        </span>
        <span id="prod-offer">{`${getOffer(
          convertSelectedCurrency(data?.price + 10, selectedCurrency, true),
          convertSelectedCurrency(data?.price, selectedCurrency, true)
        )}% Off`}</span>
      </div>
    </div>
  );
};

export default ProductCard;
