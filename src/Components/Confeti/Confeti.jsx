import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";

const Confeti = () => {
    const [pageHeight, setPageHeight] = useState(0);

    useEffect(() => {
        const updatePageHeight = () => {
            const height = document.documentElement.scrollHeight;
            setPageHeight(height);
        };

        updatePageHeight();
        window.addEventListener("resize", updatePageHeight);

        return () => {
            window.removeEventListener("resize", updatePageHeight);
        };
    }, []);

    return(
        <Confetti
            width={window.innerWidth-20}
            height={pageHeight} 
        />
    )
}

export default Confeti;