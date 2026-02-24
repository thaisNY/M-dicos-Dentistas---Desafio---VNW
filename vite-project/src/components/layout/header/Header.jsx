import logo from '../../../assets/logo.png' //estudar isso
import { Link} from "react-router-dom"
import Button from '../../ui/button/Button'  //estudar isso
import s from './Header.module.scss'
import { useEffect, useState } from "react"


const Header = () => {

  const [menuAberto, setMenuAberto] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    function menuMobile(){
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMenuAberto(false);
      }
    }
    window.addEventListener("resize", menuMobile);
    return () => window.removeEventListener("resize", menuMobile);
  }, [])

  return (
    <>
      <header className={s.header}>
        <div className={s.logoContainer}>
          <img className={s.logo} src={logo} alt="Logo"  />
          <p className={s.title}>Médicos & Dentistas</p>
        </div>
        
        <div className={s.navLinks}>
          <nav>
            <Link  to="/">
              <p className={s.homelink} >Home</p>
            </Link>
          
            <Link  to="/voluntario">
              <Button content="Seja Voluntário" variant="btn-green" />
            </Link>
          </nav>
          
        </div>
       
      </header>
    </>
  )
}

export default Header
