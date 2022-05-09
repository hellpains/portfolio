import React from 'react';
import style from './Projects.module.css';
import styleContainer from '../common/styles/Container.module.css'
import {Project} from "./project/Project";



export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h2>Projects</h2>
                <div className={style.projects}>
                    <Project title={'Todolist'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing.'}/>
                    <Project title={'Social network'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing.'}/>
                </div>
            </div>
        </div>
    );
};
