import React from 'react';
import {Nav} from "../nav/Nav";
import styleContainer from '../common/styles/Container.module.css'
import style from './Header.module.scss'

export const Header = () => {
    return (
        <div className={style.header}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <Nav/>
            </div>
        </div>
    );
};
