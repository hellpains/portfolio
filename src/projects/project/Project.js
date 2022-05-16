import React from 'react';
import style from './Project.module.css';



export const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.projectImg}>
                <a href="">
                    <div className={style.button}>
                        Check
                    </div>
                </a>
            </div>
            <h4 className={style.projectTitle}>{props.title}</h4>
            <span className={style.description}>{props.description}</span>
        </div>
    );
};
