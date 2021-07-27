import React from 'react'
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/urls';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import * as S from './styled';

const FaqPage = () => {

  const faq = useRequestData({}, `${BASE_URL}/FAQs.json`)


  const array = Object.values(faq)


  const faqs = array.map((faq) => {
    return (
      <S.MainFaq>
        <Navbar />
        <S.Figure>
          <h2>Perguntas Frequentes!</h2>
        </S.Figure>
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

        <S.Footer>
        <Footer/>
      </S.Footer>

      </S.MainFaq>
    )
  })

  return (
    <div>

      <div>
        {array.length > 0 ?
          faqs : <h1>Carregando</h1>}
      </div>

    </div>


  )
}
export default FaqPage;


