import React, { FC, useEffect, useState } from 'react';
import './Buttons.css';

interface IButtonsProps{
    icon: string;
    text: string;
    id: number;
    color: string;
    colorActive: string;
    isActive: boolean;
    handleActive?: () => void;
}

const Butttons: FC<IButtonsProps> = ({ icon, color, id, text, handleActive, colorActive }) => {

    const [active, setActive] = useState<boolean>(false);

    useEffect(()=>{console.log(id)}, [id])
    return (
        <div key={id} onClick={()=>setActive(true)} className="menu-button">
            <svg width="22" style={{display:'flex', justifyContent:'center', alignItems:'center'}} height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d={icon} fill={active ? colorActive : color}/>
            </svg>
            <span className="menu-button-text">{text}</span>
        </div>
    );
};

export default Butttons;