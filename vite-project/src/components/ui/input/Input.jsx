import s from './Input.module.scss';

const Input = ({ content, type = 'text', variant = 'input-default', multiline = false }) => {
  const Tag = multiline ? 'textarea' : 'input';
  
  // Aqui ele pega s['input-small'], s['input-full'], etc.
  const variantClass = s[variant]; 

  return (
    <div className={s['input-wrapper']}>
      <Tag 
        type={multiline ? undefined : type} 
        className={`${s['input-field']} ${variantClass}`} 
        placeholder={content} 
      />
    </div>
  );
}

export default Input;