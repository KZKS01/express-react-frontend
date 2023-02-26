import './App.css';
// importing Routes
import { Routes, Route } from "react-router-dom";

// importing "page" components
import Main from "./pages/Main";
import Currencies from "./pages/Currencies";
import Price from "./pages/Price";
import Nav from "./components/Nav"

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        {/* go to this path, then render the element */}
        <Route path="/" element={<Main />} />
        <Route path="/currencies" element={<Currencies />} />
        <Route path="/price/:symbol" element={<Price />}/>
      </Routes>
    </div>
  );
}

export default App;

