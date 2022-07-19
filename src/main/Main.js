import React from 'react';
import styleContainer from '../common/styles/Container.module.css'
import style from './Main.module.scss';
import avaImage from "../assets/image/ava.jpg";


export const Main = () => {
    const ava = {
        backgroundImage: `url(${avaImage})`
    }

    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <div className={style.text}>
                    <span >Hi There</span>
                    <h1>I am Rustam Sadulaev</h1>
                    <p>Frontend Developer.</p>
                </div>

                <div className={style.photo} style={ava}>

                </div>
            </div>
        </div>
    );
};
