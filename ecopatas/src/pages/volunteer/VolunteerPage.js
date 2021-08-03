import React from 'react'
import Footer from '../../components/Footer'
import * as S from './styled'
import Navbar from '../../components/Navbar/Navbar';



const VolunteerPage = () => {
 

  return (
    <S.MainVolunteer>

      <Navbar/>
        
      <S.Header>
        <h1>Voluntariado</h1>
      </S.Header>
      <S.Main>
        <p> Na Ecopatas temos duas formas de
            volutariado, uma é você oferecer sua
            residência como posto de arrecadação e a
            outra é você se juntar a nós, aos sábados, para
            triar o material arrecadado.
        </p>

        <h5>Quero ser ponto de arrecadação</h5>

        <p> Sua residência pode se tornar um ponto de
            arrecadação do tipo ABERTO AO PÚBLICO ou
            do tipo PRIVADO.
        </p>

        <p> <strong> Aberto ao público: </strong> Aparece na lista de pontos
            de arrecadação e aceita doações de qualquer
            pessoa.
            <br/>
            <strong> Privado: </strong> Não aparece na lista de pontos de
            arrecadação e aceita doações somente de
            pessoas de um mesmo espaço, como por
            exemplo condomínios residenciais.
        </p>

        <S.Button >
          <a href='https://app.pipefy.com/public/form/QWdlqXog'>
            <button> Quero ser ponto de arrecadação </button>
          </a>
        </S.Button>
        

        <h5>Quero ajudar na triagem do material</h5>

        <p> Você pode nos ajudar na triagem e separação
            do material recebido. Os encontros acontecem
            aos sábados e é necessário que você leia e
            aceite os termos.
        </p>

        <form action="/action_page.php" method="get">
          <input type="checkbox" name="vehicle1" value="Bike"/>
          <label for="vehicle1"> Li e estou de acordo com <n/>
          <a href="https://drive.google.com/file/d/14hMP_ELnrrJVAjye1mnRUak7_p29C-0U/view?usp=sharing">
            os termos do voluntariado Ecopatas </a></label>
          <br/>
        </form>

        <S.Button >
          <a href='https://app.pipefy.com/public/form/SUhsF-Bs'><button> Quero ajudar na triagem do material</button></a>
        </S.Button>

      </S.Main>

      <S.Footer>
        <Footer/>
      </S.Footer>
       
    </S.MainVolunteer>
  )
}

export default VolunteerPage;