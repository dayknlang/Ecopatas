import styled from 'styled-components'

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    height: 106px;
    left: 0px;
    top: 137px;
    background-color: #007A68;
    width: 100vw;
    h1 {
        height: 42px;
        padding-left: 16px;
        font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 130%;
        align-items: center;
        letter-spacing: 0.16px;
        font-feature-settings: 'pnum' on, 'lnum' on;
        color: #F6F7EB;
    }
`
export const MainData = styled.div`
    display: flex;
    flex-direction: column;   
`

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    width: 90vw;
    padding-left: 10px;
    padding-top: 267px;    
`
export const Article = styled.div`
    display: flex;
    flex-direction: column;
    height: 295px;
    background-color: white;
    
`
export const ArticleAmbiental = styled.div`
    display: flex;
    flex-direction: column;
    height: 350px;
    background-color: white;
    
`
export const ArticleJuntos = styled.div`
    display: flex;
    flex-direction: column;
    height: 280px;
    background-color: white;
    
`
export const ArticlePhotos = styled.div`
    display: flex;
    flex-direction: column;
    height:400px;
    background-color: white;
    
`
export const ArticleYears = styled.div`
    display: flex;
    flex-direction: column;
    height: 280px;
    background-color: white;
`
export const ArticlePlayData = styled.div`
    display: flex;
    flex-direction: column;
    height: 600px;
    background-color: white;
`

export const Text = styled.div`
    background-color: #F6F7EB;
    padding: 5px 15px;
    display: flex;
    flex-direction: column;
    font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 130%;
    text-align: justify;
    letter-spacing: 0.16px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #394442;
`

export const Footer = styled.div`
    position: absolute;
    top:2700px;
    
`