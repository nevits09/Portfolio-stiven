import styles from './Contact.module.css';

/**
 * Componente que renderiza el formulario de contacto interactivo.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {Function} [props.onSubmitHandler] - Función de callback opcional que se ejecuta al enviar el formulario.
 */
export const ContactForm = ({ onSubmitHandler }) => {
  /**
   * Manejador del evento de envío del formulario.
   * Evita la recarga predeterminada de la página y ejecuta el callback correspondiente.
   * 
   * @param {React.FormEvent<HTMLFormElement>} event - Evento de envío de formulario.
   */
  const handleSubmit = (event) => {
    event.preventDefault(); // Evita la recarga de página por defecto
    
    // Si se pasa un manejador personalizado se invoca; si no, muestra una alerta por defecto
    if (onSubmitHandler) {
      onSubmitHandler(event);
    } else {
      alert('¡Mensaje enviado con éxito!');
    }
  };

  return (
    /* Formulario semántico con su manejador de envío */
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      
      /* Campo: Nombre Completo */
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>
          Nombre Completo
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Tu nombre"
          required /* Validación nativa de HTML5 para campos obligatorios */
          className={styles.input}
        />
      </div>

      /* Campo: Correo Electrónico */
      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>
          Correo Electrónico
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="tu@correo.com"
          required
          className={styles.input}
        />
      </div>

      /* Campo: Mensaje */
      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.label}>
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Escribe tu mensaje aquí..."
          required
          className={styles.textarea}
        />
      </div>

      /* Botón de envío del formulario */
      <button type="submit" className={styles.submitButton}>
        Enviar Mensaje
      </button>
    </form>
  );
};