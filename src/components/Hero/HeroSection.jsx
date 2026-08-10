// Importación de subcomponentes específicos de la sección Hero
import { ProfileImage } from './ProfileImage';
import { Headline } from './Headline';
import { CallToAction } from './CallToAction';

// Importación de los estilos para el contenedor principal
import styles from './Hero.module.css';

/**
 * Componente contenedor principal de la sección Hero.
 * Se encarga de integrar y componer la imagen de perfil, títulos y el botón CTA.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {Object} props.profileData - Objeto con la información del perfil.
 * @param {string} props.profileData.image - URL de la imagen de perfil.
 * @param {string} props.profileData.name - Nombre completo del usuario (usado como título y alt).
 * @param {string} props.profileData.role - Rol o título profesional (usado como subtítulo).
 */
export const HeroSection = ({ profileData }) => {
  return (
    /* Etiqueta semántica HTML5 <section> configurada en Flexbox centrado */
    <section className={styles.heroContainer}>
      {/* Muestra la foto usando el nombre para la accesibilidad (alt) */}
      <ProfileImage src={profileData.image} alt={profileData.name} />
      
      {/* Muestra el nombre como H1 y el rol profesional como H2 */}
      <Headline title={profileData.name} subtitle={profileData.role} />
      
      {/* Botón principal para ir a la sección de contacto */}
      <CallToAction label="Contactar" href="#contact" />
    </section>
  );
};