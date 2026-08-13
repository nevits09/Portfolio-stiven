// Importación de los subcomponentes del formulario y los enlaces a redes sociales
import { ContactForm } from './ContactForm';
import { SocialLinks } from './SocialLinks';

// Importación de los estilos locales mediante CSS Modules
import styles from './Contact.module.css';

/**
 * Componente contenedor principal para la sección de Contacto.
 * Integra de forma flexible el formulario de interacción y los enlaces a redes sociales.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {Array<Object>} props.socialMediaList - Lista de plataformas y enlaces de redes sociales.
 * @param {Function} [props.onFormSubmit] - Callback opcional que gestiona el envío del formulario.
 */
export const ContactSection = ({ socialMediaList, onFormSubmit }) => {
  return (
    /* Etiqueta semántica HTML5 con 'id="contact"' para navegación mediante anclas (#contact) */
    <section className={styles.contactSection} id="contact">
      {/* Título principal de la sección */}
      <h2 className={styles.title}>Contacto</h2>
      
      {/* Contenedor que agrupa y alinea el formulario junto con las redes sociales */}
      <div className={styles.contactWrapper}>
        /* Subcomponente para capturar y enviar el mensaje del usuario */
        <ContactForm onSubmitHandler={onFormSubmit} />

        /* Subcomponente para mostrar los accesos a perfiles sociales */
        <SocialLinks socialMediaList={socialMediaList} />
      </div>
    </section>
  );
};