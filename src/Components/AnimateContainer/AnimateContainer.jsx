import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const AnimateContainer = ({children}) => {

    const location = useLocation();

    const slide = {
        initial: { opacity: 0, y: 150 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 150 }
    };

    return(
        <>
            <motion.main
                key={location.pathname}
                variants={slide}
                initial='initial'
                animate='animate'
                exit='exit'
                transition={{ duration: 0.5 }}
                className="content"
            >
                {children}
            </motion.main>
        </>
    );
}

export default AnimateContainer;