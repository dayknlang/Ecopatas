import styled from 'styled-components'
import bannerHome from '../../assets/imgs/bannerHome.png'

export const MainHome = styled.main`
    display: flex;
    flex-direction: column;
`
export const Main = styled.main`
    display: flex;
    flex-direction: column;
    width: 100vw;
`
export const Figure = styled.div`
    background-image: url(${bannerHome});
    height: 250px;
    width: 375px;

    h2{
        color: pink;
        position: absolute;
        top: 120px;
        height: 96px;
        width: 213px;
        left: 16px;
        border-radius: nullpx;
        font-family:  'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 45px;
        font-style: normal;
        font-weight: 700;
        line-height: 48px;
        letter-spacing: 0.16px;
        text-align: left;
        color:#F6F7EB;
    }
    
`
export const Section = styled.section`
    display: flex;
    flex-direction: column;
    width: 375px;
    height: 219px;
    left: 0px;
    background: #007A68;
    p {
        padding: 0px 16px;
        color: #FFFFFF;
        text-align: left;
        font-family:  'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 130%;
        display: flex;
        align-items: center;
        letter-spacing: 0.16px;
        font-feature-settings: 'pnum' on, 'lnum' on;
    }
    /* button:hover {
        padding:20px;
        color:black;
        background-color:white;
    } */
    
`
export const Button = styled.button`
    display:flex;
    justify-content:center;
    align-items: center;
    width: 242px;
    height: 69px;
    margin-left: 60px;
    background-color: #E96B2B;
    color: #F6F7EB;
    border-radius: 15px;
    font-family:  'Roboto', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 21px;
    button:hover {
        padding:20px;
        color:black;
        background-color:white;
    } 
    
`
export const SectionVolunteer = styled.div`
    display: flex;
    flex-direction: column;
    width: 375px;
    height: 219px;
    left: 0px;
    background: white;
    padding-bottom: 16px;
    h3{
        width: 250px;
        height: 62px;
        padding-left: 17px;
        font-family: 'Roboto', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 130%;
        display: flex;
        align-items: center;
        letter-spacing: 0.16px;
        font-feature-settings: 'pnum' on, 'lnum' on;
        color: #007A68;

    }
    p {
        padding: 0px 17px;
        color:  #394442;
        width: 343px;
        height: 84px;
        text-align: left;
        font-family:  'Roboto', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 130%;
        display: flex;
        align-items: center;
        letter-spacing: 0.16px;
        font-feature-settings: 'pnum' on, 'lnum' on;
    }
    ul {
        width: 350px;
        height: 1px;
        padding-bottom: 16px;
    }
    button {
        position: absolute;
        top: 1180px;
    }
    
`

export const ButtonGreen = styled.button`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    margin-left: 60px;
    background-color: #007A68;
    color: #F6F7EB;
    border-radius: 15px;
    font-family:  'Roboto', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    width: 242px;
    height: 69px;
    left: 8px;
    font-size: 21px;
    
`

export const Photos = styled.section`
    display: flex;
    flex-direction: column;
    width:375px;
    margin-top:100px;
    height:400px;
    position:absolute;
    left: 1px;
    top: 1200px;
    button {
        position: absolute;
        top: 400px;

    }
    
`

export const ButtonGreenDois = styled.button`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    margin-left: 60px;
    background-color: #007A68;
    color: #F6F7EB;
    border-radius: 15px;
    font-family:  'Roboto', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    width: 242px;
    height: 69px;
    left: 8px;
    font-size: 21px;
    
`


export const Footer = styled.div`
    position: absolute;
    top:1750px;
    
`