import { useState } from "react";
import { HeaderSkeleton } from "../skeleton/Skeleton";
import "./productTabStyle.css";

const ProductTab = ({ dataList, onClick, isLoading }) => {
  const [selectedTab, setSelectedTab] = useState();
  const onSelect = (item) => {
    setSelectedTab(item);
    onClick(item);
    console.log("selected", selectedTab, item);
  };
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
            className={`product-tab-header-list-btn ${
              selectedTab === "all" ? ".active-tab" : ""
            }`}
            onClick={() => onClick("all")}
          >
            All
          </button>
          {dataList?.map((item, ind) => (
            <button
              className={`product-tab-header-list-btn ${
                selectedTab === item ? ".active-tab" : ""
              }`}
              key={ind}
              onClick={() => onSelect(item)}
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
