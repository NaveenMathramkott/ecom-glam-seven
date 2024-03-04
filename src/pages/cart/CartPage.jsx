import "./cartStyle.css";
import Layout from "../../components/layout/Layout";
import DealHeader from "../../components/dealHeader/DealHeader";
import CartTable from "../../sections/cart/cartTable/CartTable";
import CartPayment from "../../sections/cart/cartPayment/CartPayment";
import { useEffect, useState } from "react";
import { useCart } from "../../context/cartProvider";
import { textShorter } from "../../utils/utils";

const CartPage = () => {
  const [cart] = useCart();
  const [total, setTotal] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const totalCount = cart.map((item) => item.data.price * item.count);
    setTotal(totalCount);
  }, [cart]);
  const summaryTotal = () =>
    total.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return (
    <Layout title={`Cart-ecomm glam seven`}>
      <DealHeader
        name={
          cart.length > 0 ? textShorter(cart[0]?.data?.title, 50) : `No items`
        }
      />
      <div id="cart-table-content-sec">
        <CartTable />
      </div>
      <div id="cart-payment-sec">
        <CartPayment subTotalPrice={summaryTotal()} />
      </div>
    </Layout>
  );
};

export default CartPage;
