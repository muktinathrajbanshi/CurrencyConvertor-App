
// https://v6.exchangerate-api.com/v6/c0e4651455bb1b1672349f0d/latest/USD

import axios from "axios";

const api = axios.create({
    baseURL: "https://v6.exchangerate-api.com/v6/c0e4651455bb1b1672349f0d",
});

// we need to create a get request 

export const currencyConverter = (fromCurrency, toCurrency, amount) => {
    return api.get(`/pair/${fromCurrency}/${toCurrency}/${amount}`);
};