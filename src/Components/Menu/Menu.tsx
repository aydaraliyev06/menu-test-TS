import React, { FC, useEffect, useState } from 'react';
import BtnOpenClose from './btnOpenClose/BtnOpenClose';
import Butttons from './buttons/Butttons';
import icon from './ClientCue.png';
import './Menu.css';

const Menu: FC = () => {
    const [openClose, setOpenClose] = useState<boolean>(true);
    const [active, setActive] = useState<boolean>(false);
    // const [active2, setActive2] = useState<boolean>();
    // const [active3, setActive3] = useState<boolean>();

    const btnText = {
        item: [
            {
                id: 0,
                name: 'Dashboard',
                icon: "M8.02953 0.590611C8.58933 0.115629 9.41067 0.11563 9.97047 0.590611L17.4705 6.95425C17.8064 7.23925 18 7.6575 18 8.09801V17.5008C18 18.3292 17.3284 19.0008 16.5 19.0008H10.75C10.3358 19.0008 10 18.665 10 18.2508V12.0008H8V18.2508C8 18.665 7.66421 19.0008 7.25 19.0008H1.5C0.671573 19.0008 0 18.3292 0 17.5008V8.09801C0 7.6575 0.193637 7.23925 0.529534 6.95425L8.02953 0.590611ZM9 1.73438L1.5 8.09801L1.5 17.5008H6.5V11.2508C6.5 10.8366 6.83579 10.5008 7.25 10.5008H10.75C11.1642 10.5008 11.5 10.8366 11.5 11.2508V17.5008H16.5V8.09801L9 1.73438Z",
            },
            {
                id: 1,
                name: 'Business',
                icon: "M6.5 1.75C6.5 0.784 7.284 0 8.25 0H13.75C14.716 0 15.5 0.784 15.5 1.75V4H20.25C21.216 4 22 4.784 22 5.75V20.25C22 20.7141 21.8156 21.1592 21.4874 21.4874C21.1592 21.8156 20.7141 22 20.25 22H1.75C1.28587 22 0.840752 21.8156 0.512563 21.4874C0.184374 21.1592 0 20.7141 0 20.25V5.75C0 4.784 0.784 4 1.75 4H6.5V1.75ZM1.5 11.99V20.25C1.5 20.388 1.612 20.5 1.75 20.5H20.25C20.3163 20.5 20.3799 20.4737 20.4268 20.4268C20.4737 20.3799 20.5 20.3163 20.5 20.25V11.99C19.7328 12.6433 18.7577 13.0014 17.75 13H4.25C3.24234 13.0014 2.26723 12.6433 1.5 11.99ZM20.5 8.75C20.5 9.47935 20.2103 10.1788 19.6945 10.6945C19.1788 11.2103 18.4793 11.5 17.75 11.5H4.25C3.52065 11.5 2.82118 11.2103 2.30546 10.6945C1.78973 10.1788 1.5 9.47935 1.5 8.75V5.75C1.5 5.6837 1.52634 5.62011 1.57322 5.57322C1.62011 5.52634 1.6837 5.5 1.75 5.5H20.25C20.3163 5.5 20.3799 5.52634 20.4268 5.57322C20.4737 5.62011 20.5 5.6837 20.5 5.75V8.75ZM14 1.75V4H8V1.75C8 1.6837 8.02634 1.62011 8.07322 1.57322C8.12011 1.52634 8.1837 1.5 8.25 1.5H13.75C13.8163 1.5 13.8799 1.52634 13.9268 1.57322C13.9737 1.62011 14 1.6837 14 1.75Z",
            },
            {
                id: 2,
                name: 'Reviews',
                icon: "M11.0006 0.229004C11.2623 0.229004 11.5013 0.377572 11.6171 0.61224L14.4206 6.29266L20.6893 7.20356C20.9483 7.24119 21.1634 7.42258 21.2443 7.67147C21.3251 7.92035 21.2577 8.19356 21.0703 8.37623L16.5342 12.7978L17.605 19.0412C17.6493 19.2991 17.5433 19.5598 17.3315 19.7136C17.1198 19.8674 16.8391 19.8877 16.6075 19.766L11.0006 16.8182L5.39369 19.766C5.16206 19.8877 4.88138 19.8674 4.66967 19.7136C4.45796 19.5598 4.35193 19.2991 4.39617 19.0412L5.46699 12.7978L0.930904 8.37623C0.74351 8.19356 0.676068 7.92035 0.756935 7.67147C0.837802 7.42258 1.05295 7.24119 1.31193 7.20356L7.58064 6.29266L10.3841 0.61224C10.4999 0.377572 10.7389 0.229004 11.0006 0.229004ZM11.0006 2.46995L8.6537 7.22531C8.55355 7.42822 8.35998 7.56886 8.13605 7.6014L2.8882 8.36396L6.68558 12.0655C6.84761 12.2234 6.92155 12.451 6.8833 12.674L5.98686 17.9007L10.6807 15.433C10.881 15.3277 11.1202 15.3277 11.3205 15.433L16.0144 17.9007L15.1179 12.674C15.0797 12.451 15.1536 12.2234 15.3156 12.0655L19.113 8.36396L13.8652 7.6014C13.6412 7.56886 13.4477 7.42822 13.3475 7.22531L11.0006 2.46995Z",
            },
            {
                id: 3,
                name: 'Inbox',
                icon: "M1.60417 0.666504C0.71821 0.666504 0 1.38471 0 2.27067V15.104C0 15.99 0.71821 16.7082 1.60417 16.7082H20.3958C21.2818 16.7082 22 15.99 22 15.104V2.27067C22 1.38471 21.2818 0.666504 20.3958 0.666504H1.60417ZM1.375 2.27067C1.375 2.14411 1.4776 2.0415 1.60417 2.0415H20.3958C20.5224 2.0415 20.625 2.14411 20.625 2.27067V3.05127L11.1283 9.46798C11.0508 9.52036 10.9492 9.52036 10.8717 9.46798L1.375 3.05131V2.27067ZM1.375 4.71076V15.104C1.375 15.2306 1.4776 15.3332 1.60417 15.3332H20.3958C20.5224 15.3332 20.625 15.2306 20.625 15.104V4.71072L11.8981 10.6073C11.3555 10.9739 10.6445 10.9739 10.1019 10.6073L1.375 4.71076Z",
            },
        ]
    }

    useEffect(()=>{
        console.log(openClose)
    },[openClose])

    return (
        <div className="menu" id={openClose ? "on" : "off"}>
            <img src={icon} alt="icon" className="menu-img" />
            <div className="menu-buttons">
                {btnText.item.map((item)=>(
                    <Butttons isActive={item.id === 0 ? true : false} color="#4F5B67" colorActive="#2C5DE5" icon={item.icon} text={item.name}  id={item.id} />
                ))}
                <BtnOpenClose isOpenClose={openClose} handleOpenClose={()=>setOpenClose(!openClose)} />
            </div>
        </div>
    );
};

export default Menu;