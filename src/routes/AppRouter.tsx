import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SeguroSalud from "../components/pages/SeguroSalud/SeguroSalud";
import Planes from "../components/pages/Planes/Planes";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SeguroSalud />} />
        <Route path="/planes" element={<Planes />} />
        {/* <Route path="/*" element={<PrivateRoute user={user} />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
