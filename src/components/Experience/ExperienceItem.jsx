// Importación de los estilos locales para la sección de experiencia mediante CSS Modules
import styles from './Experience.module.css';

/**
 * Componente que representa un elemento individual dentro de la línea de tiempo de experiencia laboral.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.role - Cargo o título del puesto (ej. "Frontend Developer").
 * @param {string} props.company - Nombre de la empresa u organización.
 * @param {string} props.period - Periodo o rango de fechas (ej. "2022 - Presente").
 * @param {string} props.description - Resumen de responsabilidades, logros o proyectos destacados.
 */
export const ExperienceItem = ({ role, company, period, description }) => {
  return (
    /* Etiqueta semántica <article> para representar cada hito laboral de forma independiente */
    <article className={styles.itemContainer}>
      /* Punto decorativo en la línea de tiempo. 
          aria-hidden="true" evita que los lectores de pantalla intenten leer este nodo puramente visual */
      <div className={styles.timelineDot} aria-hidden="true" />
      
      /* Contenedor principal con los detalles de la tarjeta */
      <div className={styles.cardContent}>
        /* Cargo desempeñado como encabezado de tercer nivel */
        <h3 className={styles.role}>{role}</h3>

        /* Nombre de la empresa */
        <h4 className={styles.company}>{company}</h4>

        /* Rango de fechas o periodo trabajado */
        <span className={styles.period}>{period}</span>

        /* Descripción de funciones y logros */
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
};