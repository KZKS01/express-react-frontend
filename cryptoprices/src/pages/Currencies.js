
import { Link } from "react-router-dom";

const Currencies = (props) => {
  const currencies = [
    { name: "Bitcoin", symbol: "BTC" },
    { name: "Litecoin", symbol: "LTC" },
    { name: "Ethereum", symbol: "ETH" },
    { name: "Ethereum Classic", symbol: "ETC" },
    { name: "Stellar Lumens", symbol: "XLM" },
    { name: "Dash", symbol: "DASH" },
    { name: "Ripple", symbol: "XRP" },
    { name: "Zcash", symbol: "ZEC" },
  ];

  return (
    <div className="currencies">
        {/* getting coins into differnt links, map returns arr of links, forEach does not */}
      {currencies.map((coin, index) => {
        // object destructuring syntax: build a new object, two properties
        // creates two new variables name & symbol and 
        // extract the name & symbol properties from each currency object and assign them to new variables
        {/* const name = coin.name;
            const symbol = coin.symbol; */}
        const { name, symbol } = coin;

        return (
          <Link to={`/price/${symbol}`} key={index}>
            <h2>{name}</h2>
          </Link>
        );
      })}
    </div>
  )
}

export default Currencies;