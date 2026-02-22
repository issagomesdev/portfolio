import { useTheme } from "@mui/material";
import { motion } from "framer-motion";
import LogoComponent from "../ui/components/Logo";

const LoaderScreen = () => {
    const theme = useTheme();

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{
                position: "fixed",
                inset: 0,
                backgroundColor: theme.palette.background.default,
                zIndex: 9999,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "28px",
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
            >
                <LogoComponent />
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                style={{
                    width: "180px",
                    height: "2px",
                    backgroundColor: theme.palette.secondary.main + "30",
                    borderRadius: "2px",
                    overflow: "hidden",
                }}
            >
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: theme.palette.primary.main,
                        transformOrigin: "left",
                        borderRadius: "2px",
                    }}
                />
            </motion.div>
        </motion.div>
    );
};

export default LoaderScreen;
