import React from 'react';
import styleContainer from '../common/styles/Container.module.css'
import style from './Projects.module.css';

import {Project} from "./project/Project";



export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h2 className={style.projectsTitle}>Projects</h2>
                <div className={style.projects}>
                    <Project title={'Todolist'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing.'}/>
                    <Project title={'Social network'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing.'}/>
                </div>
            </div>
        </div>
    );
};
