import React from 'react';
import { createContext, useContext, useRef, useState } from "react";
import PropTypes from 'prop-types';

const PopupModalContext = createContext(false);
const MenuModalContext = createContext(false);

export const usePopupModal = () => useContext(PopupModalContext);
export const useMenuModal = () => useContext(MenuModalContext);

const PopupModalProvider = ({ children }) => {
  const popupRef = useRef();

  const [popupItem, changePopupItem] = useState({});
  const [popup, togglePopup] = useState(false);
  const [menuModal, toggleMenuModal] = useState(false);

  const togglePopupHandler = (item) => {
    changePopupItem(item);
    togglePopup(true);
  };

  const closePopup = (e) => {
    e.target === popupRef.current && togglePopup(false);
  };

  return (
    <PopupModalContext.Provider
      value={{
        popupRef,
        popupItem,
        popup,
        closePopup,
        togglePopup,
        togglePopupHandler,
      }}
    >
      <MenuModalContext.Provider value={{ menuModal, toggleMenuModal }}>
        {children}
      </MenuModalContext.Provider>
    </PopupModalContext.Provider>
  );
};

PopupModalProvider.propTypes = {
  nodeProp: PropTypes.node.isRequired
}

export default PopupModalProvider;
