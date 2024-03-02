import { useState } from "react";
import "./inputButtonStyle.css";

const InputButton = ({ placeHolder = "Voucher code", onClick }) => {
  const [searchText, setSearchText] = useState("");

  const onInputChange = (e) => {
    setSearchText(e.target.value);
  };
  const onSubmit = () => {
    onClick(searchText);
  };
  return (
    <div id="input-button-section">
      <input
        placeholder={placeHolder}
        onChange={(e) => onInputChange(e)}
        value={searchText}
      />
      <button onClick={onSubmit} disabled={!searchText}>
        Reedem
      </button>
    </div>
  );
};

export default InputButton;
