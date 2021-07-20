
import { useState } from "react";
import CalCard from "./component/CalCard";
export default function App() {
  const [data, setData] = useState([
    {
      id: 0,
      cal: 56,
      food: "Pizza"
    },
    {
      id: 1,
      cal: 69,
      food: "Burger"
    },
    {
      id: 2,
      cal: 500,
      food: "Coke"
    },
    {
      id: 3,
      cal: 180,
      food: "Browne"
    },
    {
      id: 4,
      cal: 200,
      food: "Fried Rice"
    },
    {
      id: 5,
      cal: 600,
      food: "Lassania"
    },
    {
      id: 6,
      cal: 10,
      food: "Pani Puri"
    }
  ]);
  return (
    <div className="App">
      
      <div className="cal-app-container">
        {data.length ? (
          data.map(({ cal, food, id }) => (
            <CalCard
              key={id}
              cal={cal}
              data={data}
              setData={setData}
              food={food}
              id={id}
            />
          ))
        ) : (
          <h1 style={{ display: "flex", justifyContent: "center" }}>
            no entry
          </h1>
        )}
      </div>
    </div>
  );
}
