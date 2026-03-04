
import Card from '../../ui/card/Card'
import s from './Mission.module.scss'


const Mission = () => {

  return (
    <section className={s.mission}>
      <h1 className={s.titleMission}>Nossa Missão</h1>

      <p className={s.subtitle}>
        Transformar vidas através do acesso universal à saúde de qualidade
      </p>

      <div className={s.cardsContainer}>
        <Card content={{ title: "Acesso Equitativo", description: "Garantir que todos tenham acesso a cuidados de saúde de qualidade, independentemente de sua condição financeira." }} />
        <Card content={{ title: "Comunidade Forte", description: "Construir uma rede de profissionais de saúde dedicados a servir com compaixão e profissionalismo." }} />
        <Card content={{ title: "Bem-estar Total", description: "Oferecer atendimento integral em medicina geral e odontologia para melhorar a qualidade de vida." }} />
      </div>
    </section>
  )
}

export default Mission 
