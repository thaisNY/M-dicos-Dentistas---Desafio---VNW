import s from './BenefitsSection.module.scss'
import Card from '../../ui/card/Card'


const BenefitsSection = () => {
  return (
    <section className={s.benefitsSection}>
      <h1 className={s.titleBenefits}>Seja Voluntário</h1>
      <p className={s.subtitleBenefits}>Junte-se a nós e faça a diferença na vida de pessoas que precisam</p>
       <div className={s.cardsContainer}>
        <Card content={{ title: "Impacto Direto", description: "Sua dedicação salva vidas e transforma comunidades" }} variant="card-volunteer" />
        <Card content={{ title: "Crescimento Pessoal", description: "Desenvolva habilidades e cresça profissionalmente" }} variant="card-volunteer" />
        <Card content={{ title: "Comunidade", description: "Faça parte de uma rede de profissionais comprometidos" }} variant="card-volunteer" />
      </div>
    </section>
  )
}

export default BenefitsSection
