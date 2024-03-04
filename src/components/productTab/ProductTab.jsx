import { HeaderSkeleton } from "../skeleton/Skeleton";
import "./productTabStyle.css";

const ProductTab = ({ dataList, onClick, isLoading }) => {
  return (
    <div className="productTab-mainWrapper">
      {isLoading ? (
        [...Array(5)].map((itm, ind) => (
          <div key={ind} className="product-tab-header-list-btn">
            <HeaderSkeleton />
          </div>
        ))
      ) : (
        <>
          <button
            className={`product-tab-header-list-btn `}
            onClick={() => onClick("all")}
          >
            All
          </button>
          {dataList?.map((item, ind) => (
            <button
              className={`product-tab-header-list-btn `}
              key={ind}
              onClick={() => onClick(item)}
            >
              {item.toUpperCase(0)}
            </button>
          ))}
        </>
      )}
    </div>
  );
};

export default ProductTab;
