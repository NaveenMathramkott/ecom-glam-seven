import "./cartStyle.css";
import Layout from "../../components/layout/Layout";
import DealHeader from "../../components/dealHeader/DealHeader";
import CartTable from "../../sections/cart/cartTable/CartTable";
import CartPayment from "../../sections/cart/cartPayment/CartPayment";

const CartPage = () => {
  return (
    <Layout title={`Cart-ecomm glam seven`}>
      <DealHeader />
      <div id="cart-table-content-sec">
        <CartTable />
      </div>
      <div id="cart-payment-sec">
        <CartPayment />
      </div>
    </Layout>
  );
};

export default CartPage;
