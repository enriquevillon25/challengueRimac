import React, { useState } from 'react';
import './header.scss';
import { IoIosCall } from 'react-icons/io';
import logoRimac from '../../assets/logorimac.png';
import { Link } from 'react-router-dom';
const header = () => {
    return (
        <>
            <div className="container__header row">
                <img className="logo" src={logoRimac}>
                    
                </img>
                <div className="subcontainer__right row ">
                    <span className="question__user gray__color--4"> ¿Tienes alguna Duda? </span>
                    <div className="contact row acian__color--1 ">
                        <IoIosCall />
                        <span className="number"> (01) 411 6001 </span>
                        <span className="letter__call "> Llamanos </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default header;
