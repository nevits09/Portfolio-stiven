import styles from './About.module.css';

/**
 * Componente atómico que renderiza una etiqueta (badge) individual para una habilidad.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.skill - Nombre de la habilidad a mostrar (ej. "React", "TypeScript").
 */
export const SkillBadge = ({ skill }) => {
  return (
    /* Etiqueta en línea (span) estilizada como píldora interactiva */
    <span className={styles.badge}>
      {skill}
    </span>
  );
};