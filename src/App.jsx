import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SectionsView from "./pages/sections/SectionsView";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <Router>
      <Analytics />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sections" element={<SectionsView />} />
      </Routes>
    </Router>
  );
}

export default App;
