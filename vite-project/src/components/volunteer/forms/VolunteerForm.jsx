import s from './VolunteerForm.module.scss'
import Input from '../../ui/input/Input'
import Button from '../../ui/button/Button'

const VolunteerForm = () => {
  return (
    <section className={s.volunteerForm}>
      <form className="form">

         <h3>Inscrição para Voluntários</h3>

         <fieldset>
            
            <legend>Dados Pessoais</legend>
            
            <div className="input-row">
              <Input content="Seu Nome *" variant="input-small" />
              <Input content="Seu Email *" variant="input-small" />
            </div>
            
            <Input content="Seu Telefone *" variant="input-full" />
            
            <fieldset className={s.mensagem}>
              
              <legend>Mensagem Adicional</legend>

              <Input 
                content="Conte-nos porque você quer ser voluntário..." 
                variant="input-multiline" 
                multiline 
              />
            
            </fieldset>

            <fieldset className={s.buttonContainer}>
              <legend>Entraremos em contato para mais informações</legend>
               <Button content="Enviar Inscrição" variant="btn-green" />
            </fieldset>

          </fieldset>
      </form>
    </section>
  )
}

export default VolunteerForm
