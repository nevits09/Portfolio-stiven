import { ProjectGrid } from './ProjectGrid';
import styles from './Projects.module.css';

/**
 * Componente contenedor principal para la sección "Proyectos Destacados".
 * Encapsula la estructura general de la sección, el título y la grilla con los datos.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {Array<Object>} props.projects - Lista de objetos de proyectos que se pasará a la grilla.
 */
export const ProjectsSection = ({ projects }) => {
  return (
    /* Etiqueta semántica HTML5 con 'id="projects"' para navegación mediante anclas (#projects) */
    <section className={styles.projectsSection} id="projects">
      {/* Título de la sección */}
      <h2 className={styles.title}>Proyectos Destacados</h2>

      {/* Componente encargado de renderizar la grilla con las tarjetas individuales */}
      <ProjectGrid projects={projects} />
    </section>
  );
};