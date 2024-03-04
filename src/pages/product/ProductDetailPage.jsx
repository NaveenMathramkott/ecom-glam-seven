import "./productDetailStyle.css";
import Layout from "../../components/layout/Layout";
import { useParams, useLocation } from "react-router-dom";
import {
  convertSelectedCurrency,
  getApiCall,
  getOffer,
} from "../../utils/utils";
import { useCurrency } from "../../context/currencyProvider";
import { useEffect, useState } from "react";
import RateReview from "../../components/rating/RateReview";
import { useCart } from "../../context/cartProvider";
import toast from "react-hot-toast";

const ProductDetailPage = () => {
  const params = useParams();
  const [cart, setCart] = useCart();
  const location = useLocation();
  const [selectedCurrency] = useCurrency();
  const [data, setData] = useState(location.state);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (params?.id) getSingleProduct();
  }, []);

  const getSingleProduct = async () => {
    const response = await getApiCall(
      `${import.meta.env.VITE_BASE_URL}/products/${params?.id}`
    );
    setData(response);
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
    <Layout title={`${data?.title} product page`}>
      {data !== undefined ? (
        <div id="product-detail-mainWrapper">
          <div id="product-detail-left-sec">
            <img src={data?.image} alt={data?.title} />
          </div>
          <div id="product-detail-right-sec">
            <div id="product-detail-title">
              <span>{data?.title}</span>
              <span>{data?.description}</span>
            </div>
            <div id="product-detail-price">
              <span id="prod-rate">
                {convertSelectedCurrency(data?.price, selectedCurrency)}
              </span>
              <span id="prod-max-rate">
                {convertSelectedCurrency(data?.price + 10, selectedCurrency)}
              </span>
              <span id="prod-offer">
                {`${getOffer(
                  convertSelectedCurrency(
                    data?.price + 10,
                    selectedCurrency,
                    true
                  ),
                  convertSelectedCurrency(data?.price, selectedCurrency, true)
                )}% Off`}
              </span>
            </div>
            <RateReview rate={Math.floor(data?.rating?.rate)} />
            <button onClick={() => onAddToCart(data)}>Add to Cart</button>
          </div>
        </div>
      ) : (
        <div>No Data</div>
      )}
    </Layout>
  );
};

export default ProductDetailPage;
