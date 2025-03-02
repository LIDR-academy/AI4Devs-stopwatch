/**
 * Componente de botón reutilizable.
 * @param {Object} props - Propiedades del botón.
 * @param {string} props.text - Texto a mostrar en el botón.
 * @param {Function} props.onClick - Función a ejecutar al hacer clic.
 * @param {string} props.className - Clases CSS adicionales.
 * @returns {HTMLElement} Elemento de botón.
 */
function Button(props) {
  const { text, onClick, className = "" } = props;

  const button = document.createElement("div");
  button.className = `btn ${className}`;
  button.textContent = text;
  button.addEventListener("click", onClick);

  return button;
}

export default Button;
