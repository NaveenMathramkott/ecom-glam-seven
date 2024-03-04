import { useState, useContext, createContext, useEffect } from "react";

const CurrencyContext = createContext();
const CurrencyProvider = ({ children }) => {
  const [selectedCurrency, setSelectedCurrency] = useState([]);

  useEffect(() => {
    let existingCurrencyItem = localStorage.getItem("ecom-currency");
    if (existingCurrencyItem)
      setSelectedCurrency(JSON.parse(existingCurrencyItem));
  }, []);

  return (
    <CurrencyContext.Provider value={[selectedCurrency, setSelectedCurrency]}>
      {children}
    </CurrencyContext.Provider>
  );
};

const useCurrency = () => useContext(CurrencyContext);

export { useCurrency, CurrencyProvider };
