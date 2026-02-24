
import './Button.scss';

// Recebemos o content e a variant (se não passar nada, vira btn-green)
const Button = ({ content, variant = 'btn-green' }) => {
  return (
    // Juntamos a classe base com a variante do botao
    <button className={`btn ${variant}`}>
      {content}
    </button>
  );
}

export default Button;