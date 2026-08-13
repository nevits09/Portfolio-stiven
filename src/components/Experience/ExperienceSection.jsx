// Importación del subcomponente que estructura la línea de tiempo
import { Timeline } from './Timeline';

// Importación de los estilos locales mediante CSS Modules
import styles from './Experience.module.css';

/**
 * Componente contenedor principal para la sección de Experiencia y Educación.
 * Enmarca el título y pasa la lista de trayectorias al componente Timeline.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {Array<Object>} props.experiences - Arreglo de objetos con la trayectoria laboral o académica.
 */
export const ExperienceSection = ({ experiences }) => {
  return (
    /* Etiqueta semántica HTML5 con 'id="experience"' para navegación mediante anclas (#experience) */
    <section className={styles.experienceSection} id="experience">
      /* Título principal de la sección */
      <h2 className={styles.title}>Trayectoria y Educación</h2>

      /* Componente encargado de desplegar la secuencia temporal */
      <Timeline experiences={experiences} />
    </section>
  );
};