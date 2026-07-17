import myImage from "../assets/PhotoPersonal.png"

const skillCategories = [
  {
    title: 'Lenguajes',
    skills: ['Python', 'Java', 'C++', 'Node.js', 'JavaScript', 'TypeScript']
  },
  {
    title: 'Bases de Datos',
    skills: ['SQL', 'MySQL', 'MariaDB']
  },
  {
    title: 'Desarrollo Web',
    skills: ['Angular', 'HTML5', 'CSS3', 'React', 'REST/SOAP APIs']
  },
  {
    title: 'Ciencia de Datos',
    skills: ['Pandas', 'NumPy', 'Scikit-Learn', 'Power BI']
  },
  {
    title: 'Herramientas',
    skills: ['Git / GitHub', 'Linux', 'UML / Draw.io', 'Express', 'MongoDB', 'Vite']
  }
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-text">
          <h2 className="section-title">Sobre mí</h2>
          <p>
            Desarrollador apasionado por la tecnología con experiencia en múltiples lenguajes y frameworks.
            Desde aplicaciones web con Angular y React hasta análisis de datos con Python y Power BI.
          </p>
          <p>
            Enfocado en escribir código limpio, bien estructurado, y en encontrar soluciones eficientes
            para problemas complejos usando las herramientas adecuadas.
          </p>
          <p>
            Siempre explorando nuevas tecnologías y tendencias para mantenerse a la vanguardia del desarrollo.
          </p>
          <img src={myImage} alt="Profesional Photo" className="myImage"/>
        </div>
        <div className="skills-wrapper">
          {skillCategories.map(cat => (
            <div key={cat.title} className="skills">
              <h3>{cat.title}</h3>
              <div className="skills-list">
                {cat.skills.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
