import logo from './logo.svg';
import './App.css';
import {Inventory} from "./Components/Inventory"
function App() {
  const books = 13
  const pens = 10
  const notebooks = 44
  const inkpens = 78
  return (
    <div className="App">
      <h2>inventory management application </h2>
         < Inventory books={books} pens={pens} notebooks={notebooks} inkpens={inkpens} />
    
    </div>
  );
}

export default App;
