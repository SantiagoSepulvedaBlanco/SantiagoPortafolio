import { useState } from 'react';
import project1Image from '../assets/Project1.png';
import project2Image from '../assets/Project2.png';
import project3Image from '../assets/Project3.png';

const projectsData = [
  {
    id: 1,
    title: 'Portafolio Web',
    description: 'Un portafolio web personal moderno y responsivo para mostrar proyectos de desarrollo de software.',
    image: project1Image,
    tags: ['React', 'Vite', 'CSS Modules'],
    demoUrl: 'https://github.com/SantiagoSepulvedaBlanco/SantiagoPortafolio',
    codeUrl: 'https://github.com/SantiagoSepulvedaBlanco/SantiagoPortafolio'
  },
  {
    id: 2,
    title: 'Salary Prediction Model',
    description: 'Un conjunto de distintos modelos de clasificación para predecir el salario aproximado que tendra una persona.',
    image: project2Image,
    tags: ['Python', 'Jupyter NoteBook'],
    demoUrl: 'https://github.com/SantiagoSepulvedaBlanco/SalaryPredictionModel',
    codeUrl: 'https://github.com/SantiagoSepulvedaBlanco/SalaryPredictionModel'
  },
  {
    id: 3,
    title: 'Sea Level Predictor',
    description: 'Aplicación que permite ver el nivel del mar estimado a futuro gracias a tecnicas de regresión.',
    image: project3Image,
    tags: ['Python'],
    demoUrl: 'https://github.com/SantiagoSepulvedaBlanco/sea-level-prediction',
    codeUrl: 'https://github.com/SantiagoSepulvedaBlanco/sea-level-prediction'
  }
];

export default function Projects() {
  const [projects] = useState(projectsData);

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Mis Proyectos</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.demoUrl} className="project-link">
            <span>▸</span> Demo
          </a>
          <a href={project.codeUrl} target="_blank" className="project-link">
            <span>&lt;/&gt;</span> Código
          </a>
        </div>
      </div>
    </div>
  );
}
