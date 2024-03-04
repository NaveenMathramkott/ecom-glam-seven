import { useEffect, useState } from "react";
import { useCurrency } from "../../context/currencyProvider";
import { getApiCall } from "../../utils/utils";
import "./currencyStyle.css";

const CurrencyConverter = () => {
  const [selectedCurrency, setSelectedCurrency] = useCurrency();
  const [currencyList] = useState(["USD", "EUR", "INR", "RUB"]);
  const [currentCurrecy, setCurrentCurrency] = useState();

  useEffect(() => {
    const currencyInStore = localStorage.getItem("ecom-currency");
    const inStore = JSON.parse(currencyInStore);
    setCurrentCurrency(Object.keys(inStore[0]));
    if (inStore?.length === 0) {
      getCurrentRate("USD");
    }
  }, []);

  const getCurrentRate = async (value) => {
    setCurrentCurrency(value);
    if (value !== currentCurrecy) {
      const response = await getApiCall(
        `https://api.freecurrencyapi.com/v1/latest?apikey=${
          import.meta.env.VITE_CURRENCY_API_KEY
        }&currencies=${value}&base_currency=USD`
      );
      setSelectedCurrency([response?.data]);
      localStorage.setItem("ecom-currency", JSON.stringify([response?.data]));
    }
  };

  return (
    <div id="currecy-converter-mainWrapper">
      <select value={["EN"]}>
        <option>EN</option>
      </select>
      <select
        value={currentCurrecy}
        onChange={(e) => getCurrentRate(e.target.value)}
      >
        {currencyList?.map((item, ind) => (
          <option key={ind}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyConverter;
