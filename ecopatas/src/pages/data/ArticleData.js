import React from 'react'
import useScript from '../../hooks/useScript';
import * as S from './styled'

const ArticleData = () => {
    const dataAnimal =  useScript('https://public.flourish.studio/resources/embed.js')  
 

  return (
    <S.Main>
        
        <S.Text>
            Desde o início organizamos cuidadosamente os dados
            gerados por nossas ações, para que possamos
            ficar mais conscientes do impacto que nosso trabalho
            voluntário oferece para a sociedade.
        </S.Text>
        
        <S.Article>
            <article class="flourish-embed flourish-chart" data-src="visualisation/6812326">
                <script src={dataAnimal}>
                </script>
            </article>
        </S.Article>

        <S.ArticleAmbiental>
            <article  class="flourish-embed flourish-chart" data-src="visualisation/6813807">
                <script src={dataAnimal}>
                </script>
            </article>
        </S.ArticleAmbiental>

        <S.ArticleJuntos>
            <article class="flourish-embed flourish-chart" data-src="visualisation/6824812">
                <script src={dataAnimal}>
                </script>
            </article>
        </S.ArticleJuntos>

        <S.ArticlePhotos>
            <article class="flourish-embed flourish-cards" data-src="visualisation/6812885">
                <script src={dataAnimal}>
                </script>
            </article>
        </S.ArticlePhotos>
        
        <S.ArticleYears>
            <article class="flourish-embed flourish-bar-chart-race" data-src="visualisation/6823648">
                <script src={dataAnimal}>
                </script>
            </article>
        </S.ArticleYears>
            
        <S.Text>
            Já fizemos muito trabalho, mas sempre precisamos de mais voluntários
            para que possamos impactar ainda mais a qualidade da vida dos nossos
            amados animaizinhos e do nosso meio ambiente.
        </S.Text>
    
        <S.ArticlePlayData>
            <article class="flourish-embed flourish-survey" data-src="visualisation/6812725">
                <script src={dataAnimal}>
                </script>
            </article>
        </S.ArticlePlayData>

    </S.Main>
  )
}

export default ArticleData;