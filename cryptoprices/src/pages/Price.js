// Our imports; useParams is designed to read URL params in the address bar
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Price = (props) => {
  // Our api key from coinapi.io
  const apiKey = "25ED38EA-FFCA-40A8-8896-16C5C193D1A0";
  // Grabbing the Currency symbol from the URL Param /extracts the value of the symbol parameter from the current URL
  const { symbol } = useParams();
  // Using the other two variables to create our URL
  const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

  // State to hold the coin data
  const [coin, setCoin] = useState(null);

  // Our function to fetch coin data
  //By using await, we can pause the execution of the getCoin() function until the promise is resolved, 
  // then use the actual data for further processing, like setting it to the coin state with setCoin(data).
  // Without, setCoin() would receive a promise instead of the actual data, leading to unexpected results.
  const getCoin = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setCoin(data);
  }

  // useEffect to run getCoin when component mounts
  useEffect(() => {
    getCoin();
  }, []);

  // Loaded function for when data is fetched
  const loaded = () => {
    return (
      <div>
        <h1>
          {coin.asset_id_base}/{coin.asset_id_quote}
        </h1>
        <h2>{coin.rate}</h2>
      </div>
    );
  };

  // Function for when data doesn't exist
  const loading = () => {
    return <h1>Loading...</h1>;
  };
  // If coin has data, run the loaded function, otherwise, run loading
  return coin ? loaded() : loading();
};

export default Price;