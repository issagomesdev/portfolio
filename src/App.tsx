import { Toaster } from "sonner";
import AppRoutes from "./routes";
import { useTheme } from "@mui/material";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSectionContext } from "./shared/context/SectionContext";
import LoaderScreen from "./shared/components/Loader/LoaderScreen";

function App() {
  const theme = useTheme();
  const { sectionsLoaded } = useSectionContext();
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMinTimeElapsed(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const isLoading = !sectionsLoaded || !minTimeElapsed;

  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isLoading]);

  return (
    <>
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <AppRoutes />
        </motion.div>
      )}
      <AnimatePresence>
        {isLoading && <LoaderScreen key="loader" />}
      </AnimatePresence>
      <Toaster position="bottom-right" toastOptions={{ style: {
        background: theme.palette.background.paper,
        borderColor: theme.palette.background.paper,
        color: theme.palette.primary.contrastText
      } }} />
    </>
  );
}

export default App;