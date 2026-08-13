import { ProjectCard } from './ProjectCard';
import styles from './Projects.module.css';

/**
 * Componente que se encarga de renderizar la grilla adaptable con la lista de proyectos.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {Array<Object>} props.projects - Arreglo de objetos con los datos de cada proyecto.
 * @param {string|number} props.projects[].id - Identificador único para la propiedad 'key'.
 * @param {string} props.projects[].title - Título del proyecto.
 * @param {string} props.projects[].description - Descripción del proyecto.
 * @param {Array<string>} props.projects[].technologies - Lista de tecnologías.
 * @param {string} [props.projects[].githubUrl] - URL opcional del código en GitHub.
 * @param {string} [props.projects[].demoUrl] - URL opcional del despliegue en vivo.
 * @param {string} props.projects[].imageUrl - Ruta de la imagen del proyecto.
 */
export const ProjectGrid = ({ projects }) => {
  return (
    /* Contenedor tipo CSS Grid que organiza las tarjetas en columnas responsivas */
    <div className={styles.gridContainer}>
      {/* Mapeo dinámico de la lista de proyectos pasados por prop */}
      {projects.map((project) => (
        <ProjectCard
          key={project.id} /* Clave única recomendada por React para la reconciliación del DOM */
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          githubUrl={project.githubUrl}
          demoUrl={project.demoUrl}
          imageUrl={project.imageUrl}
        />
      ))}
    </div>
  );
};