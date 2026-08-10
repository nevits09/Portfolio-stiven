// Importación de los subcomponentes para la biografía y las etiquetas de habilidades
import { Biography } from './Biography';
import { SkillBadge } from './SkillBadge';
// Importación de los estilos locales mediante CSS Modules
import styles from './About.module.css';

/**
 * Componente contenedor principal para la sección "Sobre Mí".
 * Integra la tarjeta de biografía y una lista dinámica de habilidades técnicas.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.biographyText - Texto narrativo para la biografía.
 * @param {Array<string>} props.skills - Arreglo con los nombres de las habilidades a mostrar.
 */
export const AboutSection = ({ biographyText, skills }) => {
  return (
    /* Etiqueta semántica HTML5 con 'id="about"' para permitir navegación mediante anclas (#about) */
    <section className={styles.aboutContainer} id="about">
      {/* Título principal de la sección */}
      <h2 className={styles.title}>Sobre Mí</h2>
      
      {/* Subcomponente que renderiza la tarjeta con el texto de la biografía */}
      <Biography text={biographyText} />

      {/* Bloque contenedor para la sección de habilidades */}
      <div className={styles.skillsContainer}>
        <h3 className={styles.skillsSubtitle}>Habilidades Técnicas</h3>
        
        {/* Contenedor flexible para alinear las etiquetas de habilidades */}
        <div className={styles.badgeList}>
          {/* Mapeo dinámico del arreglo de habilidades a componentes SkillBadge */}
          {skills.map((skill, index) => (
            <SkillBadge key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};
