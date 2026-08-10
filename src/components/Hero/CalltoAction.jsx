import styles from './Hero.module.css';

/**
 * Componente para el botón de llamada a la acción (Call To Action).
 * Renderiza un enlace <a> con apariencia de botón.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.label - Texto visible que se mostrará en el botón.
 * @param {string} props.href - Enlace o destino hacia donde redirigirá al hacer clic.
 */
export const CallToAction = ({ label, href }) => {
  return (
    /* Enlace estilizado como botón utilizando la clase .ctaButton */
    <a href={href} className={styles.ctaButton}>
      {label}
    </a>
  );
};