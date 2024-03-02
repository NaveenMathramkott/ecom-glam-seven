import InputButton from "../../../components/inputButton/InputButton";
import PaymentCard from "../../../components/paymentCard/PaymentCard";
import "./cartPaymentStyle.css";

const CartPayment = () => {
  return (
    <div className="cart-payment-mainWrapper">
      <div id="voucher-section">
        <InputButton />
      </div>
      <div id="payment-section">
        <PaymentCard />
      </div>
    </div>
  );
};

export default CartPayment;
