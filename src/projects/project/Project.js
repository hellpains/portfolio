import React from 'react';
import style from './Projects.module.css';
import styleContainer from '../common/styles/Container.module.css'



export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h2>Projects</h2>
                <div className={style.skills}>
                    <Project title={'JS'} />

                </div>
            </div>
        </div>
    );
};
