import React from 'react';
import styleContainer from '../common/styles/Container.module.css'

import style from './Сontacts.module.css'


export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${style.contactsContainer} ${styleContainer.container}`}>
                <h2 className={style.title}>Contacts</h2>
                <form className={style.contactsForm}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea/>
                    <button type={"submit"} className={style.submitBtn}>Отправить</button>
                </form>
            </div>
        </div>
    );
};


