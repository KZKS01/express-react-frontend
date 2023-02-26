import React from "react";
import "../styles.css";

function Receipt(props) {
  return (
    <div className="Receipt">
      <h1>{props.receipt.person}</h1>
      <h3>{props.receipt.main}</h3>
      <hr />
      <p>Protein: {props.receipt.order.protein}</p>
      <p>Rice: {props.receipt.order.rice}</p>
      <p>Sauce: {props.receipt.order.sauce}</p>
      <p>Drink: {props.receipt.order.drink}</p>
      <p>Cost: ${props.receipt.order.cost}</p>
      {/* boolean does not show up in the DOM, can turn into a string as well */}
      <p>
        Paid: {props.paid ? "Yes" : "No"}{" "}
        <button onClick={() => props.handleClick(props.receipt.id)}>Pay</button>
      </p>
    </div>
  );
}

export default Receipt;
