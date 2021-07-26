import React, { useEffect } from 'react'
import ArticleData from './ArticleData';
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import * as S from './styled'


const DataPage = () => {
      

  return (
    <>
      <Navbar/>

      <S.Header>
        <h1>Nossos Números</h1>
      </S.Header>
        
      <ArticleData/>

      <Footer/>

    </>
  )
}

export default DataPage;