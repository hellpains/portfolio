import React from 'react';
import styleContainer from '../common/styles/Container.module.css'
import style from './Projects.module.scss';
import {Project} from "./project/Project";
import {Title} from "../common/components/title/Title";
import socialImage from '../assets/image/social.png'
import todoImage from '../assets/image/todoImage.png'


export const Projects = () => {
    const social = {
        backgroundImage: `url(${socialImage})`
    }

    const todolist = {
        backgroundImage: `url(${todoImage})`
    }


    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={'Projects'}/>
                <div className={style.projects}>
                    <Project
                        style={social}
                        title={'Social network'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing.'}
                    />
                    <Project
                        style={todolist}
                        title={'Todo list'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing.'}
                    />
                </div>
            </div>
        </div>
    );
};
