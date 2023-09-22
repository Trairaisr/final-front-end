import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/LogIn/LogIn";
import Register from "./components/Register/Register";
import Vacations from "./components/Vacations/Vacations";

function App() {
  return (
    <Routes>
      <Route index element={<Login />} />

      <Route path="/register" element={<Register />} />
      
      
      <Route path="/vacations" element={<Vacations />} />
    </Routes>
  );
}

export default App;
