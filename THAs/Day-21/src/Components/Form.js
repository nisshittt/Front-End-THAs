import React, { useState } from "react";
import "./style.css";

const Form = ({ addItem }) => {
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    itemName: "",
    calorie: "",
  });


  const handleFormDataChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    const updateFormData = (data) => {
      let object = { ...data, [name]: value };
      return object;
    };
    setFormData(updateFormData);
  };

  const handleonSubmit = (e) => {
    e.preventDefault();
    let { itemName, calorie } = formData;
    if (!itemName) {
      setError("Item Name cannot be empty!");
      return;
    }

    if (!calorie) {
      setError("Calorie Amount cannot be empty!");
      return;
    }

    setError("");

    // console.log(formData)
    addItem(formData);

    setFormData((data) => ({ ...data, itemName: "", calorie: "" }));

    // setFormData("")
  };

  return (
    <form className="form">
      <h2>Calorie Tracker</h2>
      <div className="input">
        {/* Controlled and uncontrolled */}

        <input
          type="text"
          placeholder="Item Name"
          value={formData.itemName}
          name="itemName"
          onChange={handleFormDataChange}
        />
        <input
          type="number"
          placeholder="Calorie Amount"
          value={formData.calorie}
          name="calorie"
          onChange={handleFormDataChange}
        />
      </div>
      <button onClick={handleonSubmit}> Add Item </button>
      <p style={{ color: "red" }}>{error}</p>
      <h2>Start Adding Items</h2>
    </form>
  );
};

export default Form;
