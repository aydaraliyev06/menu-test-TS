import React, { FC } from 'react';
import icon from './Vector 86.png'
import './style.css';

interface IOpenClose {
    isOpenClose: boolean;
    handleOpenClose: () => void;
}

const BtnOpenClose: FC<IOpenClose> = ({isOpenClose, handleOpenClose}) => {
    return (
        <div className="menu-openclose">
            <button id={isOpenClose ? "on-btn" : "off-btn"} onClick={handleOpenClose} className="menu-btn-openclose">
                <img src={icon} alt="icon" />
            </button>
        </div>
    );
};

export default BtnOpenClose;