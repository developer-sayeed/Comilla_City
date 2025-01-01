import React, { useState, useEffect } from "react";
import countriesData from "./countries.json"; // JSON file import
import { BsArrowDownUp } from "react-icons/bs";
import CustomHeading from "../../components/CustomHeading/CustomHeading";
import CustomCrad from "../../components/Card/CustomCrad";
import moneyExchangeShops from "./data";
import money from "../../assets/moneyexchanging.png";

function MoneyExchange() {
  const [rates, setRates] = useState({});
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [amount, setAmount] = useState(1);
  const [loading, setLoading] = useState(true);
  const [isReversed, setIsReversed] = useState(false); // Reverse Toggle

  // API Key and URL
  const apiKey = "939cb24afbbe9637885ca1f8";
  const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/BDT`;

  // Fetching data from API
  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setRates(data.conversion_rates);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
        setLoading(false);
      }
    };

    fetchRates();
  }, []);

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const toggleReverse = () => {
    setIsReversed(!isReversed);
  };

  const renderCountry = (currency) => {
    const country = countriesData.find((item) => item.code === currency);
    return country ? country.country : "Unknown Country"; // Default country name if not found
  };

  const convertedAmount = isReversed
    ? amount / rates[selectedCurrency]
    : rates[selectedCurrency] * amount;

  return (
    <>
      <CustomHeading tittel="Money Exchange Rate" />
      <div className="flex flex-col items-center justify-center p-4 sm:p-8 bg-gray-100 ">
        {loading ? (
          <p className="text-lg text-gray-500">Loading...</p>
        ) : (
          <div className="w-full bg-white p-4  rounded-sm shadow-sm">
            <div className="flex flex-col sm:flex-row items-center gap-2  mb-6">
              <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
                <label
                  htmlFor="amount"
                  className="block text-lg font-medium mb-2 text-gray-700"
                >
                  Amount in {isReversed ? selectedCurrency : "BDT"}:
                </label>
                <input
                  type="number"
                  id="amount"
                  value={amount}
                  onChange={handleAmountChange}
                  min="1"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {/* Reverse toggle between BDT and selected currency */}
              <span
                onClick={toggleReverse}
                className="text-3xl cursor-pointer text-blue-500"
              >
                <BsArrowDownUp />
              </span>

              <div className="w-full sm:w-1/2">
                <label
                  htmlFor="currency"
                  className="block text-lg font-medium mb-2 text-gray-700"
                >
                  Select Currency:
                </label>
                <select
                  id="currency"
                  value={selectedCurrency}
                  onChange={handleCurrencyChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  {Object.keys(rates).map((currency, index) => (
                    <option key={index} value={currency}>
                      {renderCountry(currency)} ({currency})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <p className="text-xl font-medium text-gray-800">
              {amount} {isReversed ? selectedCurrency : "BDT"} ={" "}
              {convertedAmount.toFixed(2)}{" "}
              {isReversed ? "BDT" : selectedCurrency} (
              {renderCountry(isReversed ? "BDT" : selectedCurrency)})
            </p>
          </div>
        )}
      </div>

      {/* Money Exchange Shop */}
      <CustomHeading tittel="Money Exchange Shop" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {moneyExchangeShops.map((item) => {
          return (
            <CustomCrad
              key={item.id + 1}
              name={item.shopName}
              image={item.image ? item.image : money}
              phoneHeading={"Phone : "}
              phone={item.phone}
              tittel5heading={"Email : "}
              tittel5={item.email}
              tittel1heading={"Upzilla"}
              tittel1={item.thana}
              addressHeading={"Address : "}
              address={item.address}
            />
          );
        })}
      </div>
    </>
  );
}

export default MoneyExchange;
