import React from 'react';
import styleContainer from '../common/styles/Container.module.css'
import style from './Projects.module.css';

import {Project} from "./project/Project";
import {Title} from "../common/components/title/Title";


export const Projects = () => {
    // const social = {
    //     backgroundImage: 'url(' + imgUrl + ')'
    // }
    //
    // const todolist = {
    //     backgroundImage: 'url(' + imgUrl + ')'
    // }


    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={'Projects'}/>
                <div className={style.projects}>
                    <Project title={'Social network'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing.'}/>
                    <Project title={'Todo list'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing.'}/>
                </div>
            </div>
        </div>
    );
};
