import axios from "axios";

export const textShorter = (text, position = 28) => {
  const data = text.slice(0, position);
  if (data.length > position - 1) {
    return `${data}...`;
  } else {
    return `${data}`;
  }
};

export const getApiCall = async (url) => {
  try {
    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    return error;
  }
};

export const roundToTwo = (number) => {
  return +(Math.round(number + "e+2") + "e-2");
};

export const getOffer = (orginalPrice, offerPrice) => {
  const discount = orginalPrice - offerPrice;
  const data = (discount / orginalPrice) * 100;
  return Math.round(data);
};

export const convertSelectedCurrency = (
  price,
  exchange_rate,
  getOnlyNum = false
) => {
  try {
    const currencyCode = Object.keys(exchange_rate[0]);
    const currentRate = price * exchange_rate[0][currencyCode[0]];
    if (getOnlyNum) {
      return currentRate;
    }
    switch (currencyCode[0]) {
      case "USD":
        return `$${roundToTwo(currentRate)}`;
      case "EUR":
        return `€${roundToTwo(currentRate)}`;
      case "INR":
        return `₹${roundToTwo(currentRate)}`;
      case "RUB":
        return `₽${roundToTwo(currentRate)}`;
      default:
        return `$${roundToTwo(currentRate)}`;
    }
  } catch (error) {
    console.log(error);
  }
};
