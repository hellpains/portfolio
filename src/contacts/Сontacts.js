import React from 'react';
import styleContainer from '../common/styles/Container.module.css'

import style from './Сontacts.module.scss'
import {Title} from "../common/components/title/Title";


export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${style.contactsContainer} ${styleContainer.container}`}>
                <Title title={'Contact'}/>
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


