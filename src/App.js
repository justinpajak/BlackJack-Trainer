import './App.css';
import { Header } from "./components/Header.js";

function App() {
  const points = 42;

  return (
    <div id="background">
      <Header title="Blackjack Counting Trainer" points={points} />
    </div>
  );
}

export default App;