import estetoscopio from '../../../assets/esteto.png'
import './Button.scss';

// Recebemos o content e a variant (se não passar nada, vira btn-green)
const Button = ({ content, variant = 'btn-green', link }) => {
  const buttonContent = (
    <>
      {variant === 'btn-gray' && (
        <img src={estetoscopio} alt="Estetoscópio" className="btn-icon" />
      )}
      {content}
    </>
  );

  if (link) {
    return (
      <a href={link} className={`btn ${variant}`}>
        {buttonContent}
      </a>
    );
  }

  return (
    // Juntamos a classe base com a variante do botao
    <button className={`btn ${variant}`}>
      {buttonContent}
    </button>
  );
}

export default Button;