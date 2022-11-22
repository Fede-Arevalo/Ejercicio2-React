import "./App.css";
import Counter from "./components/Counter/Counter";
import Greeting from "./components/Greeting/Greeting";

function App() {
  return (
    <div className="App">
      <Counter value={0} />
      <br />
      <hr />
      <br />
      <Greeting />
    </div>
  );
}

export default App;
