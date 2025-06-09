import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages";
import ProjectPage from "../pages/Project";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:name" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
