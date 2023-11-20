import React, { useRef } from "react";

export const RefsContext = React.createContext();

export default function RefsProvider({children}) {
    const aboutMeRef = useRef();
    const skillsRef = useRef();
    const projectsRef = useRef();
    const contactRef = useRef();

    return(
        <RefsContext.Provider value={{aboutMeRef, skillsRef, projectsRef, contactRef}}>
            {children}
        </RefsContext.Provider>
    )
}