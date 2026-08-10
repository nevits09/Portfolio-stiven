/*Importación de los estilos CSS Modules locales*/
import styles from './Hero.module.css';

/**
 * Componente funcional que renderiza la imagen de perfil del usuario.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.src - Ruta o URL de la imagen.
 * @param {string} props.alt - Texto alternativo para accesibilidad (SEO y lectores de pantalla).
 */
export const ProfileImage = ({src, aly}) => {
    return (
        <img 
        src={src}
        alt={alt}
        className={styles.ProfileImage} /* Aplica la clase .profileImg del archivo CSS Module */
        />
    );
};