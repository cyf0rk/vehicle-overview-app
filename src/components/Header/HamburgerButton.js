import React from 'react';
import './HamburgerButton.scss';

const HamburgerButton = ({ toggleMenuModal, menuModal }) => {
    return (
        <a
            className={!menuModal ? 'hamburger_menu' : 'hamburger_menu open'}
            onClick={() => !menuModal ? toggleMenuModal(true) : toggleMenuModal(false)}
        >
            <span></span>
            <span></span>
            <span></span>
        </a>
    )
}

export default HamburgerButton;
