import InputButton from "../../../components/inputButton/InputButton";
import PaymentCard from "../../../components/paymentCard/PaymentCard";
import "./cartPaymentStyle.css";

const CartPayment = ({ subTotalPrice = 0 }) => {
  return (
    <div className="cart-payment-mainWrapper">
      <div id="voucher-section">
        <InputButton />
      </div>
      <div id="payment-section">
        <PaymentCard
          subTotal={subTotalPrice}
          shipCharge={subTotalPrice ? 20 : 0}
        />
      </div>
    </div>
  );
};

export default CartPayment;
