import { createContext, useContext, useRef, useState } from "react"

const PopupModalContext = createContext(false) 

export const usePopupModal = () => useContext(PopupModalContext)

const PopupModalProvider = ({children}) => {
    const popupRef = useRef();

    const [popupItem, changePopupItem] = useState({});
    const [popup, togglePopup] = useState(false);

    const togglePopupHandler = (item) => {
        changePopupItem(item);
        togglePopup(true);
    };

    const closePopup = (e) => {
        e.target === popupRef.current && togglePopup(false);
    }

    return (
        <PopupModalContext.Provider value={{ popupRef, popupItem, popup, closePopup, togglePopup, togglePopupHandler}}>
            {children}
        </PopupModalContext.Provider>
    )
}

export default PopupModalProvider 