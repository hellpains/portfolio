import React from 'react';
import styleContainer from '../common/styles/Container.module.css'

import style from './Сontacts.module.css'


export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h2 className={style.contactsTitle}>Contacts</h2>

                <form className={style.formBlock}>
                    <input type="text" className={style.input}/>
                    <input type="text" className={style.input}/>
                    <textarea name="text" className={style.input}></textarea>
                </form>

                <div className={style.send}>
                    <button>SEND</button>
                </div>

            </div>
        </div>
    );
};


