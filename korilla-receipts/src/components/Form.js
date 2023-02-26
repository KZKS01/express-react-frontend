import React, { useState } from "react";

function Form(props) {
  const [form, setForm] = useState("");

  const handleChange = (evt) => {
    const newForm = evt.target.value;
    console.log(evt.target.value);
    setForm(newForm); //set receipt to evt.target.value
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    //console.log("Form submitted!");
    //make a copy of the original arr receipts
    //filter from the input name
    //const filteredReceipts = props.receipts.filter(
    //  (receipt) => receipt.person === form
    //);
    //set state to the filtered arr
    props.setReceipts((receipts) => {
      console.log(receipts);
      return receipts.filter((receipt) => receipt.person === form);
    });
    //clear the form
    setForm("");
  };
  return (
    <form className="Form" onSubmit={handleSubmit}>
      <input
        placeholder="Search By Name"
        value={form}
        onChange={handleChange}
      />
      <input type="submit" value="Submit" />
      <br />
      <br />
      <br />
    </form>
  );
}
export default Form;
