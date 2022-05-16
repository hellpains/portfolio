import React from 'react';
import styleContainer from '../common/styles/Container.module.css'
import style from './Main.module.css';


export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>I am <br/> Rustam Sadulaev</h1>
                    <p>Frontend Developer.</p>
                </div>

                <div className={style.photo}>
                    photo
                </div>
            </div>
        </div>
    );
};
