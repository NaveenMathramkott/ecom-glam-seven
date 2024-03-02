import ProductCard from "../../components/productCard/ProductCard";
import ProductTab from "../../components/productTab/ProductTab";
import "./bestSellerStyle.css";
const MENU_LIST = [
  { name: "All", to: "/" },
  { name: "Bags", to: "/bags" },
  { name: "Sneakers", to: "/sneakers" },
  { name: "Belt", to: "/belt" },
  { name: "Sunglasses", to: "/contact" },
];
const BestSellerPage = () => {
  return (
    <div id="bestSeller-mainWrapper">
      <div id="best-seller-header">
        <span>BEST SELLER</span>
        <div className="best-teller-product-tab">
          <ProductTab dataList={MENU_LIST} onClick={(itm) => alert(itm)} />
        </div>
        <div id="best-seller-product-list">
          {[...Array(12)].map((itm) => (
            <ProductCard
              key={itm}
              photo={
                "https://i.pinimg.com/564x/4e/6a/df/4e6adf91172ed61a22619a3caa8f94b7.jpg"
              }
              name={`Nike Air Max 270 React `}
              price={2452}
              offer={24}
              maxPrice={3005}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSellerPage;
