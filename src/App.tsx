import { Toaster } from "sonner";
import AppRoutes from "./routes";
import { Box, Typography, useTheme, Input, Button, useMediaQuery } from "@mui/material";

function App() {
  const theme = useTheme();
  return (
    <>
      <AppRoutes />
      <Toaster position="bottom-right" toastOptions={{ style: {
      background: theme.palette.background.paper,
      borderColor: theme.palette.background.paper,
      color: theme.palette.primary.contrastText
    } }} />
    </>
  );
}

export default App;