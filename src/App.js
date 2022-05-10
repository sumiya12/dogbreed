import breedList from "./Api/api";
import { useState } from "react";
import "./App.css";
// import Dogs from "./components/Dogs";

function App() {
  const [dogs, setDogs] = useState([]);
  function handler() {
    breedList()
      .then((res) => res.json())
      .then((res) => setDogs(res.message));
  }
  return (
    <div>
      <button onClick={handler} className="button">
        FETCH
      </button>
      <select onChange={handler}>
        {dogs ?
        Object.keys(dogs).map((name, i) => {
          return (
            <option placeholder="choose breed" key={i + 1}>
              {i + 1}. {name}
            </option>
          );
        })  : (
          <></>
        )}
      </select>
    </div>
  );
}

export default App;
