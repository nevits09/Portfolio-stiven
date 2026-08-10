import styles from './Hero.module.css';

/**
 * Componente que renderiza el título principal y subtítulo de la sección Hero.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.title - Texto para el encabezado principal (h1).
 * @param {string} props.subtitle - Texto descriptivo o secundario (h2).
 */
export const Headline = ({ title, subtitle }) => {
  return (
    /* Agrupador de los títulos para controlar el margen inferior */
    <div className={styles.headlineContainer}>
        {/* Título principal de la página/sección */}
      <h1 className={styles.title}>{title}</h1>
      {/* Subtítulo o lema descriptivo */}
      <h2 className={styles.subtitle}>{subtitle}</h2>
    </div>
  );
};