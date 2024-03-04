import "./cartTableStyle.css";
import { IoMdClose } from "../../../components/icons/icons.js";
import { useCart } from "../../../context/cartProvider.jsx";
import {
  convertSelectedCurrency,
  roundToTwo,
  textShorter,
} from "../../../utils/utils.js";
import { useCurrency } from "../../../context/currencyProvider.jsx";

const CartTable = () => {
  const count = 1;
  const [cart, setCart] = useCart();
  const [selectedCurrency] = useCurrency();

  const addItem = (id) => {
    const selectedProduct = cart.filter((itm) => {
      if (itm.data.id === id) {
        itm.count += count;
      }
      return itm;
    });

    setCart(selectedProduct);
    localStorage.setItem("ecom-cart", JSON.stringify(selectedProduct));
  };
  const removeItem = (id) => {
    const filteredData = cart?.filter((itm) => {
      if (itm.data.id === id && itm.count !== 1) {
        itm.count -= count;
        return itm;
      } else if (itm.data.id !== id) return itm;
    });
    setCart(filteredData);
    localStorage.setItem("ecom-cart", JSON.stringify(filteredData));
  };

  const onClearProduct = (id) => {
    const filteredData = cart?.filter((itm) => itm.data.id !== id);
    setCart(filteredData);
    localStorage.setItem("ecom-cart", JSON.stringify(filteredData));
  };

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
        {cart.length > 0 ? (
          cart?.map((item) => (
            <div key={item.data.id} className="cart-item-data-list">
              <div className="cart-item-data-left">
                <button onClick={() => onClearProduct(item.data.id)}>
                  <IoMdClose />
                </button>
                <img src={item.data.image} alt={item.data.name} />
                <span>{textShorter(item.data.title, 50)}</span>
              </div>
              <div className="cart-item-data-right">
                <div>
                  {convertSelectedCurrency(
                    roundToTwo(item.data.price * item.count),
                    selectedCurrency
                  )}
                </div>
                <div id="cart-add-btn-sec">
                  <button onClick={() => removeItem(item.data.id)}>-</button>
                  <span>{item.count}</span>
                  <button onClick={() => addItem(item.data.id)}>+</button>
                </div>
                <div>
                  {convertSelectedCurrency(item.data.price, selectedCurrency)}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-data">No Items in the Cart</div>
        )}
      </div>
    </div>
  );
};

export default CartTable;
