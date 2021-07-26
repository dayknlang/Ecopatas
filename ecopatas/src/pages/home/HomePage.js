import React from 'react'
import { useHistory } from 'react-router-dom'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar/Navbar'
import useScript from '../../hooks/useScript'
import * as S from './styled'
import { FaPaw } from "react-icons/fa"
import volunteerHome from '../../assets/imgs/volunteerHome.png'
import { goToDataPage, goToDonationPage, goToVolunteerPage } from '../../routes/coordinator'


const HomePage = () => {
  const history = useHistory()
  const dataAnimal =  useScript('https://public.flourish.studio/resources/embed.js')  

  return (
    <S.MainHome>
      <Navbar/>

      <S.Main>
        <S.Figure>
          <h2>Somos a Ecopatas!</h2>
        </S.Figure>

        <S.Section>
          <p> Desde 2018 trabalhamos para possibilitar a
              castração de animais de rua através da
              arrecadação de tampas plásticas e lacres de
              alumínio
          </p>
          <S.Button onClick={() => goToDonationPage(history)}> O que Doar? <FaPaw size = {20}/></S.Button>
        </S.Section>

        <S.SectionVolunteer>
          <h3> Seja um voluntário, junte-se a nós</h3>
          <p> Eles chegam através de conhecidos, das redes
              sociais e dos pontos de arrecadação e fazem
              parte do nosso time, resultados e da história
              da Ecopatas.
          </p>
          <img src={volunteerHome}/>
            <ul><FaPaw size = {20}/>  O que faz o voluntário? </ul>
            <ul><FaPaw size = {20}/> Triagem na Ecopatas </ul>
            <ul><FaPaw size = {20}/> Arrecada Tampinhas </ul>
            <ul><FaPaw size = {20}/> Triagem em Casa</ul>
            <ul><FaPaw size = {20}/> Ajuda no transporte do material</ul>
          <S.ButtonGreen onClick={() => goToVolunteerPage(history)}>Quero ser voluntário</S.ButtonGreen>
        </S.SectionVolunteer>

        <S.Photos >
          <section class="flourish-embed flourish-cards" data-src="visualisation/6812885">
            <script src={dataAnimal}>
            </script>
          </section>
      
          <S.ButtonGreenDois onClick={() => goToDataPage(history)}>Ver indicadores </S.ButtonGreenDois>
        </S.Photos>
  
      </S.Main>
        
      <S.Footer>
        <Footer/>
      </S.Footer>
      
    </S.MainHome>
  )
}

export default HomePage;