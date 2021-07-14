import "./App.css";
import Card from "./Component/card.jsx";

export default function App() {
  return (
    <body>
      <div className="App">
        <div class="container">
          <Card name="pizza" cal="110" />
          <Card name="burger" cal="80" />
          <Card name="french fries" cal="50" />
          <Card name="manchurian" cal="150" />
          <Card name="maxican rolls" cal="90" />
          <Card name="sweet rolls" cal="40" />
          <Card name="vadapav" cal="95" />
          <Card name="dabeli" cal="66" />
          <Card name="panipuri" cal="200" />
        </div>
      </div>
    </body>
  );
}
