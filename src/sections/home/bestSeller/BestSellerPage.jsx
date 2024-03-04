import { useEffect, useState } from "react";
import ProductCard from "../../../components/productCard/ProductCard";
import ProductTab from "../../../components/productTab/ProductTab";
import { ProductSkeleton } from "../../../components/skeleton/Skeleton";
import { useFetch } from "../../../hooks/hooks";
import "./bestSellerStyle.css";
import { getApiCall } from "../../../utils/utils";

const BestSellerPage = () => {
  const categories = useFetch(
    `${import.meta.env.VITE_BASE_URL}/products/categories`,
    "GET"
  );
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getCateProduct("all");
  }, []);

  const getCateProduct = async (category) => {
    var url;
    if (category === "all") {
      url = `${import.meta.env.VITE_BASE_URL}/products`;
    } else {
      url = `${import.meta.env.VITE_BASE_URL}/products/category/${category}`;
    }
    const response = await getApiCall(url);
    setProducts(response);
  };

  return (
    <div id="bestSeller-mainWrapper">
      <div id="best-seller-header">
        <span>BEST SELLER</span>
        <div className="best-teller-product-tab">
          <ProductTab
            dataList={categories?.data}
            onClick={(itm) => getCateProduct(itm)}
            isLoading={categories?.loading}
          />
        </div>
        <div id="best-seller-product-list">
          {products.loading
            ? [...Array(8)].map((itm) => <ProductSkeleton key={itm} />)
            : products?.map((item) => (
                <ProductCard key={item.id} data={item} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default BestSellerPage;
