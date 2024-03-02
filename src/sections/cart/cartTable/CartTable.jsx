import "./cartTableStyle.css";
import { IoMdClose } from "../../../components/icons/icons.js";

const CartTable = ({ cartItem = [...Array(4)] }) => {
  return (
    <div id="cart-table-mainWrapper">
      <div id="cart-table-header-sec">
        <div>
          <span>PRODUCT</span>
        </div>
        <div>
          <span>PRICE</span>
          <span>QTY</span>
          <span>UNIT PRICE</span>
        </div>
      </div>
      <div>
        {cartItem?.map((itm, ind) => (
          <div key={ind} className="cart-item-data-list">
            <div className="cart-item-data-left">
              <button>
                <IoMdClose />
              </button>
              <img src="https://i.pinimg.com/564x/22/05/70/2205706d28ee46d9fbaa8b4b41c92835.jpg" />
              <span>product name</span>
            </div>
            <div className="cart-item-data-right">
              <div>$499</div>
              <div id="cart-add-btn-sec">
                <button
                // onClick={() => removeItem(item._id)}
                >
                  -
                </button>
                <span>12</span>
                <button
                // onClick={() => addItem(item._id)}
                >
                  +
                </button>
              </div>
              <div>$899</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartTable;
