import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Filmscoring from "./pages/sections/Filmscoring";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filmscoring" element={<Filmscoring />} />
      </Routes>
    </Router>
  );
}

export default App;
