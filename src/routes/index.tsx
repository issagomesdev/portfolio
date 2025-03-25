import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages";
import { ThemeProvider } from "@mui/material";
import { LightTheme } from "../shared/themes/Light";

const AppRoutes = () => {
  return (
    <ThemeProvider theme={LightTheme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
};

export default AppRoutes;
