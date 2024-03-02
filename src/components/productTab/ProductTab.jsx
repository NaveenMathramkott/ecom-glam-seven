import "./productTabStyle.css";

const ProductTab = ({ dataList, onClick }) => {
  return (
    <div className="productTab-mainWrapper">
      {dataList.map((item) => (
        <button
          className="product-tab-header-list-btn"
          key={item.to}
          onClick={() => onClick(item.name)}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default ProductTab;
