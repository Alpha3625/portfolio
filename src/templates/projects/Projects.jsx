import React, {useState} from 'react';
import MOGO from '../../assets/images/MoGo.jpg';
import Conquest from '../../assets/images/Conquest.jpeg';
import GithubSearch from '../../assets/images/GithubSearch.jpeg';
import Comments from '../../assets/images/Comments.jpeg';
import Burgers from '../../assets/images/Burgers.jpeg';
import ProjectItem from '../../components/project-item/ProjectItem';

function Projects() {

    const [projects] = useState([
        {
            title: 'Burgers',
            stack: 'Стек: HTML5 + SCSS + TypeScript + Angular',
            description: '',
            image: Burgers,
            deploy: 'https://alpha3625.github.io/burgers/',
            source: 'https://github.com/alpha3625/burgers'
        }, {
            title: 'MOGO',
            stack: 'Стек: HTML5 + SCSS + JavaScript + Gulp',
            description: '',
            image: MOGO,
            deploy: 'https://alpha3625.github.io/MOGO/',
            source: 'https://github.com/alpha3625/MOGO'
        }, {
            title: 'Conquest',
            stack: 'Стек: HTML5 + SCSS + JavaScript + Gulp',
            description: '',
            image: Conquest,
            deploy: 'https://alpha3625.github.io/Conquest/',
            source: 'https://github.com/alpha3625/Conquest'
        }, {
            title: 'Страница с комментариями',
            stack: 'Стек: HTML5 + SCSS + JavaScript + prepros.config',
            description: 'Описание проекта: Проект представляет собой страницу блога с возможностью коммен' +
                    'тирования, реализованную на чистом JavaScript.',
            image: Comments,
            deploy: 'https://alpha3625.github.io/Comments/',
            source: 'https://github.com/alpha3625/Comments'
        }, {
            title: 'Страница поиска репозиториев GitHub',
            stack: 'Стек: HTML5 + SCSS + JavaScript + prepros.config',
            description: '',
            image: GithubSearch,
            deploy: 'https://alpha3625.github.io/Github-repos-search/',
            source: 'https://github.com/alpha3625/Github-repos-search'
        }
    ]);

    return (
        <section className="section" id="projects">
            <div className="container">
                <div className="section__header">
                    <h1 className="section__title">Портфолио</h1>
                </div>
                <div className="projects">
                    {projects.map(post =>
                        <ProjectItem post={post} />
                    )}
                </div>
            </div>
        </section>
    );
}

export default Projects;