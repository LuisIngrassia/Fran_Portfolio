import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SectionsView from "./pages/sections/SectionsView";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sections" element={<SectionsView />} />
      </Routes>
    </Router>
  );
}

export default App;
