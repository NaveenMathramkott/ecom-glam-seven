import "./dealHeaderStyle.css";

const DealHeader = ({ name = "cart empty" }) => {
  return (
    <div id="deal-header-mainWrapper">
      <span>Home</span>
      <span>/</span>
      <span>Hot Deal</span>
      <span>/</span>
      <span>{name}</span>
    </div>
  );
};

export default DealHeader;
