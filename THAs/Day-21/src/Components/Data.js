import React, { useState } from "react";
import Form from "./Form";
import Card from "./Card";
import "./style.css";

const Data = () => {
  const [data, setData] = useState([]);

  const addItem = (item) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newItem = { id: id, food: item.itemName, cals: item.calorie };

    setData([...data, newItem]);
    // console.log(data) -> not required, does not work asynchronously
  };

  return (
    <div className="data">
      <Form addItem={addItem} />
      {data.map((item, index) => {
        return (
          <div>
            <Card
              key={item.id}
              id={item.id}
              food={item.food}
              calorie={item.cals}
              state={data}
              setState={setData}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Data;
