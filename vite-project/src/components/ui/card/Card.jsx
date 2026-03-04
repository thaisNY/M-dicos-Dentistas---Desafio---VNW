import React from 'react'
import s from './Card.module.scss'


const Card = ({ content, variant = 'card-white' }) => {
  return (
    <div className={s[variant]}> {/* Use div aqui */}
      <h2 className={s.title}>{content?.title}</h2> {/* Títulos internos costumam ser h2 ou h3 */}
      <p className={s.description}>{content?.description}</p>
    </div>
  )
}

export default Card 
