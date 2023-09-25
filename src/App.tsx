import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/LogIn/LogIn";
import Register from "./components/Register/Register";
import Vacations from "./components/Vacations/Vacations";
import AdminPage from "./components/AdminPage/AdminPage";
import AddVacation from "./components/AddVacation/AddVacation";

function App() {
  return (
    <Routes>
      <Route index element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/vacations" element={<Vacations />} />

      <Route path="/adminPage" element={<AdminPage />} />

     <Route path="/addVacation" element={<AddVacation />} />  

     

      
    </Routes>
  );
}

export default App;
