import s from './Impact.module.scss'
import Card from '../../ui/card/Card'


const Impact = () => {
  return (
    <section className={s.impact}>
      <h1 className={s.titleImpact}>Nosso Impacto</h1>
      <p className={s.subtitle}>Transformando a saúde de nossa comunidade, um paciente de cada vez</p>

      <div className={s.cardsContainer}>
        <Card content={{ title: "2,500+", description: "Pessoas Atendidas" }} variant="card-impact" />
        <Card content={{ title: "150+", description: "Profissionais Voluntários" }} variant="card-impact" />
        <Card content={{ title: "98%", description: "Satisfação dos Pacientes" }} variant="card-impact" />
        <Card content={{ title: "5+", description: "Anos de Dedicação" }} variant="card-impact" />
      </div>

    </section>
  )
}

export default Impact
