import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const projects = [
    { id: 1, name: "Project One", route: "/project/1" },
    { id: 2, name: "Project Two", route: "/project/2"},
];

const Home = () => {
    return (
        <div className="homepage">
            <header className="header">
                <img
                    src="/assets/cat_woman.png"
                    alt="An image of person of interest."
                    className="cover-image"
                />
                <div className="content">
                        <h1 className="title">Name LastName</h1>
                        <h2 className="subtitle">Software Engineer</h2>
                        <p className="description">
                            Project portfolio for Name LastName.
                        </p>
                </div>
            </header>
        <div>
            <h1>My Projects</h1>
            {projects.map((project) => (
                <div key={project.id}>
                    <Link to={project.route}>
                    <h2>{project.name}</h2>
                    </Link>
                </div>
            ))}
        </div>
        </div>
    );
};

export default Home;