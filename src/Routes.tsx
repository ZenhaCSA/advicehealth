import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Agendamentos from "./Pages/Agendamentos";
import Consultas from "./Pages/Consultas";

function Routing() {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/agendamentos" element={<Agendamentos />} />
        <Route path="/consultas" element={<Consultas />} />
      </Route>
    </Routes>
  );
}

export default Routing;
