import styles from './Projects.module.css';

/**
 * Componente que muestra una tarjeta individual con la información de un proyecto.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.title - Título o nombre del proyecto.
 * @param {string} props.description - Descripción detallada del proyecto.
 * @param {Array<string>} props.technologies - Lista de tecnologías o herramientas utilizadas.
 * @param {string} [props.githubUrl] - URL opcional del repositorio de código en GitHub.
 * @param {string} [props.demoUrl] - URL opcional del sitio web o aplicación desplegada.
 * @param {string} props.imageUrl - URL o ruta de la imagen miniatura del proyecto.
 */
export const ProjectCard = ({ title, description, technologies, githubUrl, demoUrl, imageUrl }) => {
  return (
    /* Uso de la etiqueta semántica <article> para representar un contenido independiente */
    <article className={styles.card}>
      /* Imagen previa del proyecto con texto alternativo dinámico para accesibilidad */
      <img src={imageUrl} alt={`Captura del proyecto ${title}`} className={styles.cardImage} />
      
      /* Cuerpos y detalles del proyecto */
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        
        /* Contenedor y mapeo dinámico de las etiquetas de tecnologías */
        <div className={styles.techList}>
          {technologies.map((tech, index) => (
            <span key={index} className={styles.techTag}>
              {tech}
            </span>
          ))}
        </div>
        
        /* Botones de acción con renderizado condicional */
        <div className={styles.cardActions}>
          /* Muestra el botón a la demo solo si existe demoUrl */
          {demoUrl && (
            <a 
              href={demoUrl} 
              target="_blank" 
              rel="noopener noreferrer" /* Buenas prácticas de seguridad para enlaces externos */
              className={`${styles.linkButton} ${styles.primaryLink}`}
            >
              Ver Demo
            </a>
          )}
          
          /* Muestra el botón al repositorio solo si existe githubUrl */
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`${styles.linkButton} ${styles.secondaryLink}`}
            >
              Código GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
