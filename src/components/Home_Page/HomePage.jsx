import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
    { id: 1, name: "Project One", route: "/project/1" },
    { id: 2, name: "Project Two", route: "/project/2"},
];

const Home = () => {
    return (
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
    );
};

export default Home;