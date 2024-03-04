import { useCurrency } from "../../context/currencyProvider";
import { convertSelectedCurrency, roundToTwo } from "../../utils/utils";
import "./paymentCardStyle.css";
import toast from "react-hot-toast";

const PaymentCard = ({ subTotal = 0, coupon, shipCharge = 0 }) => {
  const [selectedCurrency] = useCurrency();

  const total = subTotal + shipCharge;

  return (
    <div id="payment-card-mainWrapper">
      <div>
        <span>Subtotal</span>
        <span>
          {convertSelectedCurrency(roundToTwo(subTotal), selectedCurrency)}
        </span>
      </div>
      <div>
        <span>Shipping fee</span>
        <span>{convertSelectedCurrency(shipCharge, selectedCurrency)}</span>
      </div>
      <div>
        <span>Coupon</span>
        <span>{coupon ? `Yes` : `No`}</span>
      </div>
      <div>
        <span>TOTAL</span>
        <span>
          {convertSelectedCurrency(roundToTwo(total), selectedCurrency)}
        </span>
      </div>
      <button
        onClick={() => toast.success(`Checkout Completed`)}
        disabled={subTotal === 0}
      >
        Check Out
      </button>
    </div>
  );
};

export default PaymentCard;
