import React, { useEffect } from 'react'
import ArticleData from './ArticleData';
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import * as S from './styled'


const DataPage = () => {
      

  return (
    <S.MainData>
      <Navbar/>

      <S.Header>
        <h1>Nossos Números</h1>
      </S.Header>
        
      <ArticleData/>
    
    <S.Footer>
      <Footer/>
    </S.Footer>
      

    </S.MainData>
  )
}

export default DataPage;