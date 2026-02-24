import s from './Footer.module.scss'
import logo from '../../../assets/logo.png'
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";


const Footer = () => {
  return (
    <>
      <footer className={s.footer}>
        <div className={s.container}>
          <div className={s.imgContainerMaior}>
            <div className={s.imgContainerMenor}>
              <img src={logo} alt="Logo" className={s.imgLogo} />
              <p className={s.title}>Médicos & Dentistas</p>
            </div>
            <div className={s.sobre}>
              <p>Saúde e cuidado sem barreiras para toda comunidade.</p>
            </div>
          </div>
          <div className={s.contato}>
            <p className={s.contatoTitle}>Contato</p>
            <ul className={s.contatoList}>
              <li><MdOutlineEmail/>contato@medico-dentista.org</li>
              <li><FiPhone />(11) 3000-0000</li>
              <li><IoLocationOutline />São Paulo, Brasil</li>
            </ul>
          </div>
          <div className={s.redeSocial}>
            <p className={s.redeSocialTitle}>Redes Sociais</p>
            <ul className={s.redeSocialList}>
              <li><a href="https://www.facebook.com/medicosdentistas" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://www.instagram.com/medicosdentistas" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://www.linkedin.com/company/medicos-dentistas" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className={s.direitos}>
          <p>© 2025 Médicos & Dentistas. Todos os direitos reservados.</p> 
        </div>   
      </footer>
    </>

  )
}

export default Footer
