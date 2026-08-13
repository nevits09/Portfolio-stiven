import styles from './Contact.module.css';

/**
 * Componente que muestra un listado de enlaces a redes sociales y plataformas profesionales.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {Array<Object>} props.socialMediaList - Lista de objetos con los perfiles sociales.
 * @param {string|number} props.socialMediaList[].id - Identificador único de la red social.
 * @param {string} props.socialMediaList[].platform - Nombre de la plataforma (ej. "GitHub", "LinkedIn").
 * @param {string} props.socialMediaList[].url - Enlace directo al perfil.
 */
export const SocialLinks = ({ socialMediaList }) => {
  return (
    /* Contenedor de la sección de redes sociales */
    <div className={styles.socialContainer}>
      /* Subtítulo de llamada a conectar */
      <h3 className={styles.socialSubtitle}>Conectemos</h3>
      
      /* Listado dinámico de accesos a redes sociales */
      <div className={styles.socialList}>
        {socialMediaList.map((item) => (
          <a
            key={item.id} /* Clave única para la reconciliación eficiente del DOM en React */
            href={item.url}
            target="_blank" /* Abre la red social en una nueva pestaña */
            rel="noopener noreferrer" /* Seguridad adicional para evitar vulnerabilidades al abrir pestañas externas */
            className={styles.socialCard}
          >
            <span>{item.platform}</span>
          </a>
        ))}
      </div>
    </div>
  );
};