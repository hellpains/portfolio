import React from 'react';
import styleContainer from '../common/styles/Container.module.css'
import style from './Footer.module.scss'



export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}` }>
                    <h2 className={style.title}>Rustam Sadulaev</h2>
                    <div className={style.socialIcons}>
                        <a href={'https://github.com/hellpains'} className={style.socialIcon}>Github</a>
                        <a href={'https://t.me/hellpains'} className={style.socialIcon}>Telegram</a>
                        <a href={'https://www.linkedin.com/in/%D1%80%D1%83%D1%81%D1%82%D0%B0%D0%BC-%D1%81%D0%B0%D0%B4%D1%83%D0%BB%D0%B0%D0%B5%D0%B2-49606823b/'} className={style.socialIcon}>Linkedin</a>
                        <a href={'https://www.codewars.com/users/hellpains'} className={style.socialIcon}>Codewars</a>
                    </div>
                    <span className={style.copyright}>Все права защищены</span>

            </div>
        </div>
    );
};


// https://t.me/hellpains