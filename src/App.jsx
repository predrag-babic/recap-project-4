import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";

function App() {
  return (
    <>
      <h1>Theme Creator</h1>

      {initialColors.map((color) => {
        return (
          <li key={color.id}>
            <Color color={color} />
          </li>
        );
      })}
    </>
  );
}

export default App;
