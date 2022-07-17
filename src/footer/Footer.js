import React from 'react';
import styleContainer from '../common/styles/Container.module.css'
import style from './Footer.module.css'



export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}` }>
                    <h2 className={style.title}>Rustam Sadulaev</h2>
                    <div className={style.socialIcons}>
                        <div className={style.socialIcon}></div>
                        <div className={style.socialIcon}></div>
                        <div className={style.socialIcon}></div>
                        <div className={style.socialIcon}></div>
                    </div>
                    <span className={style.copyrighth}>Все права защищены</span>

            </div>
        </div>
    );
};
