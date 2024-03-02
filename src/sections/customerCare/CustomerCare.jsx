import "./customerCareStyle.css";
import {
  FaShippingFast,
  MdSupportAgent,
  RiRefund2Line,
} from "../../components/icons/icons.js";
import "./customerCareStyle.css";

const CustomerCare = () => {
  return (
    <div className="customer-care-mainWrapper">
      <div className="customer-care-icon-wrapper">
        <FaShippingFast id="shipping" />
        <span>FREE SHIPPING</span>
      </div>
      <div className="customer-care-icon-wrapper">
        <RiRefund2Line id="refund" />
        <span>100% REFUND</span>
      </div>
      <div className="customer-care-icon-wrapper">
        <MdSupportAgent id="support" />
        <span>SUPPORT 24/7</span>
      </div>
    </div>
  );
};

export default CustomerCare;
