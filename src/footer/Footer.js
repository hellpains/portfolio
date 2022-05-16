import React from 'react';
import styleContainer from '../common/styles/Container.module.css'
import style from './Footer.module.css'



export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.container}` }>

                    <h2 className={style.footerTitle}>Rustam Sadulaev</h2>
                    <div className={style.blocks}>
                        <div className={style.block}></div>
                        <div className={style.block}></div>
                        <div className={style.block}></div>
                        <div className={style.block}></div>
                    </div>
                    <h3 className={style.footerTitle}>Все права защищены</h3>

            </div>
        </div>
    );
};
