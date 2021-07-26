import React from 'react'
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/urls';


const FaqPage = () => {
 
  const faq = useRequestData({}, `${BASE_URL}/FAQs.json`)


  const array = Object.values(faq)


  const faqs = array.map((faq) => {
    return (
      <div>
        <div key={faq.question}>
          <h2> {faq.question} </h2>
          <p> {faq.answer} </p>
        </div>
      </div>
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