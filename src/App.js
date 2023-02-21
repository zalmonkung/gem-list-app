import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Gems from "./components/Gems";
import GemsCreate from "./components/GemsCreate";
import GemsUpdate from "./components/GemsUpdate";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Gems />} />
        <Route path="create" element={<GemsCreate />} />
        <Route path="update/:id" element={<GemsUpdate />} />
      </Routes>
    </div>
  );
}
