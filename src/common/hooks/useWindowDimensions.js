import { useEffect, useState } from "react";

const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;

    return {
        width,
        height
    }
}

export const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
       window.addEventListener('resize', resizeHandler);
       return () => window.removeEventListener('resize', resizeHandler)
    }, [])

    const resizeHandler = () => {
        setWindowDimensions(getWindowDimensions())
    }
    
    return windowDimensions
}