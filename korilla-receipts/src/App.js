import React, { useState } from "react";
import Form from "./components/Form";
import Receipts from "./components/Receipts";
import receiptArr from "./receiptData";
import "./styles.css";

const App = () => {
  const [receipts, setReceipts] = useState(receiptArr);

  return (
    <div className="App">
      <h1>Korilla Receipts</h1>
      {/* Form and Receipts components need to receive props from the App
       bc need to update the receipts state variable in the App component*/}
      <Form receipts={receipts} setReceipts={setReceipts} />
      <Receipts receipts={receipts} setReceipts={setReceipts}/>
    </div>
  );
};

export default App;
