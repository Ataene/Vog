import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigations from "./components/Navigations";
import Home from "./pages/Home";
import PostalLookup from "./pages/PostalLookup";
import Universities from "./pages/Universities";

function App() {
  return (
    <div className="App">
      <Navigations />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/universities" element={<Universities />} />
        <Route path="/postalLookup" element={<PostalLookup />} />
      </Routes>
    </div>
  );
}

export default App;
