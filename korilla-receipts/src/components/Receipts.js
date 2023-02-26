import React from "react";
import receipts from "../receiptData";
import Receipt from "./Receipt";
import "../styles.css";

function Receipts(props) {
   // console.log(typeof props.setReceipts);
  const handleClick = (id) => {
    //find the receipt that needs to be modified
    //change paid status
    props.setReceipts((receipts) => {
      //rule of thumb: when modify an arr, always make a copy, modify the copy, then replace the original
      //make copy of receipts
      const receiptsCopy = [...receipts];
      //find the index of the receipt obj that need modifying
      const foundReceiptIndex = receiptsCopy.findIndex((r) => r.id === id);
      console.log(foundReceiptIndex);
      //using arrary.splice, replace the receipt obj with its modified version
      receiptsCopy.splice(foundReceiptIndex, 1, {
        //{}: replace with a brand new obj.
        //a new object is created by spreading (...) the properties of the original object at the same index in the array into a new object literal ({})
        //then overwriting any properties that were changed. creates a new object with the same properties as the old one except for any changes.
        //using the spread operator (...) to create a new object with the same properties as the object at the foundReceiptIndex in the receiptsCopy array.
        ...receiptsCopy[foundReceiptIndex],
        paid: !receiptsCopy[foundReceiptIndex].paid
      });
      //return the modifiedcopy
      return receiptsCopy;
    });
  };

  const receipt = receipts.map((receipt, index) => (
    <Receipt
      key={index}
      receipt={receipt}
      person={receipt.person}
      main={receipt.order.main}
      protein={receipt.order.protein}
      rice={receipt.order.rice}
      sauce={receipt.order.sauce}
      drink={receipt.order.drink}
      cost={receipt.order.cost}
      paid={receipt.paid}
      handleClick={handleClick}
    />
  ));
  return <div className="Receipts">{receipt}</div>;
}

export default Receipts;
