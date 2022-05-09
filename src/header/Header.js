import React from 'react';
import style from './Header.module.css';
import {Nav} from "../nav/Nav";
import styleContainer from '../common/styles/Container.module.css'

export const Header = () => {
    return (
        <div className={style.header}>
            <div className={`${styleContainer.container} ${style.headerContainer}`}>
                <Nav/>
            </div>
        </div>
    );
};
