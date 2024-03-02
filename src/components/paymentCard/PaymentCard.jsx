import "./paymentCardStyle.css";

const PaymentCard = ({ subTotal = "$677", coupon, total = "697" }) => {
  return (
    <div id="payment-card-mainWrapper">
      <div>
        <span>Subtotal</span>
        <span>{subTotal}</span>
      </div>
      <div>
        <span>Shipping fee</span>
        <span>{`$${20}`}</span>
      </div>
      <div>
        <span>Coupon</span>
        <span>{coupon ? `Yes` : `No`}</span>
      </div>
      <div>
        <span>TOTAL</span>
        <span>{`$${total}`}</span>
      </div>
      <button>Check Out</button>
    </div>
  );
};

export default PaymentCard;
