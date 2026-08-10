import styles from './About.module.css';

/**
 * Componente que muestra la tarjeta con el texto de la biografía.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.text - Párrafo o texto descriptivo de la biografía.
 */
export const Biography = ({ text }) => {
  return (
    /* Tarjeta contenedora con estilos de lectura (ancho máximo, legibilidad) */
    <div className={styles.biographyCard}>
      {/* Párrafo que contiene la descripción biográfica */}
      <p>{text}</p>
    </div>
  );
};