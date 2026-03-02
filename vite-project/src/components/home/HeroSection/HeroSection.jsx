import Button from '../../ui/button/Button' 
import medico from '../../../assets/medico.png'
import './HeroSection.scss'


const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <Button content="Saúde para todos" variant="btn-gray" />
          <h1>Saúde e cuidado sem barreiras</h1>
          <p>Um projeto dedicado a oferecer atendimento médico e odontológico gratuito para pessoas que mais precisam na nossa comunidade.</p>
          <div className="hero-buttons">
            <Button content="Seja Voluntário" variant="btn-green" />
            <Button content="Como Ajudar" variant="btn-white" />
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img src={medico} alt="Médico voluntario foto de perfil" />
      </div>

      
      
    </section>
  )
}

export default HeroSection
