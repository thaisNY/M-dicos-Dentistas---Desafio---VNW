import estetoscopio from '../../../assets/esteto.png'
import './Button.scss';

// Recebemos o content e a variant (se não passar nada, vira btn-green)
const Button = ({ content, variant = 'btn-green' }) => {
  return (
    // Juntamos a classe base com a variante do botao
    <button className={`btn ${variant}`}>
      {variant === 'btn-gray' && (
        <img src={estetoscopio} alt="Estetoscópio" className="btn-icon" />
      )}
      {content}
    </button>
  );
}

export default Button;