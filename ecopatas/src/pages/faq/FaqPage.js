import React from 'react'
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/urls';
import Footer from '../../components/Footer';
import * as S from './styled';
import Navbar from '../../components/Navbar/Navbar';

const FaqPage = () => {

  const faq = useRequestData({}, `${BASE_URL}/FAQs.json`)


  const array = Object.values(faq)


  const faqs = array.map((faq) => {
    return (
        <S.FaqStyle>

          <S.Section>
            <div>
              <div key={faq.question}>
                <h2> {faq.question} </h2>
                <p> {faq.answer} </p>
              </div>
            </div>
          </S.Section>
        </S.FaqStyle>
    )
  })

  return (
    <div>

    <Navbar />

      <S.MainFaq>
        <S.Figure>
          <h2>Perguntas Frequentes!</h2>
        </S.Figure>

      <div>
        {array.length > 0 ?
          faqs : <h1>Carregando</h1>}
      </div>

      <S.Footer>
        <Footer/>
      </S.Footer>

      </S.MainFaq>

    </div>


  )
}
export default FaqPage;


