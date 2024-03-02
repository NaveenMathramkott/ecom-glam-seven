import "./productCardStyle.css";
import { FaHeart, FaRegHeart, MdOutlineShoppingCart } from "../icons/icons.js";
import { useState } from "react";

const ProductCard = ({
  photo,
  price,
  offer,
  maxPrice,
  name,
  hotflag = true,
}) => {
  const [show, setShow] = useState(false);
  const [liked, setLiked] = useState(false);
  const hoverFunction = () => {
    setShow(true);
  };
  return (
    <div className="productCard-mainWrapper">
      <div
        className="productCard-img-wrapper"
        onMouseOver={hoverFunction}
        onMouseOut={() => setShow(false)}
        onClick={hoverFunction}
      >
        <img src={photo} alt={name} />
        {hotflag && <span>HOT</span>}
        {show && (
          <div id="product-hover-btn">
            <div
              className="product-iconWrapper"
              onClick={() => setLiked(!liked)}
            >
              {liked ? <FaHeart color="red" /> : <FaRegHeart color="#43c0ff" />}
            </div>
            <div className="product-iconWrapper">
              <MdOutlineShoppingCart color="#43c0ff" fontWeight={500} />
            </div>
          </div>
        )}
      </div>
      <strong>{name}</strong>
      <div className="productCard-rate-sec">
        <span id="prod-rate">{`$${price}`}</span>
        <span id="prod-max-rate">{`$${maxPrice}`}</span>
        <span id="prod-offer">{`${offer}% Off`}</span>
      </div>
    </div>
  );
};

export default ProductCard;
