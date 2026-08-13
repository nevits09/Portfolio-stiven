import { ExperienceItem } from './ExperienceItem';
import styles from './Experience.module.css';

/**
 * Componente que renderiza la secuencia o línea de tiempo de la experiencia laboral.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {Array<Object>} props.experiences - Lista de experiencias laborales a mapear.
 * @param {string|number} props.experiences[].id - Identificador único de la experiencia para la prop 'key'.
 * @param {string} props.experiences[].role - Cargo o puesto ocupado.
 * @param {string} props.experiences[].company - Nombre de la empresa u organización.
 * @param {string} props.experiences[].period - Rango de fechas o periodo trabajado.
 * @param {string} props.experiences[].description - Descripción de las responsabilidades o logros.
 */
export const Timeline = ({ experiences }) => {
  return (
    /* Contenedor principal que aplicará la línea vertical del timeline */
    <div className={styles.timelineContainer}>

      /* Mapeo dinámico del listado de experiencias */
      
      {experiences.map((exp) => (
        <ExperienceItem
          key={exp.id} /* Clave única para la reconciliación eficiente del DOM en React */
          role={exp.role}
          company={exp.company}
          period={exp.period}
          description={exp.description}
        />
      ))}
    </div>
  );
};