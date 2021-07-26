import styled from 'styled-components'

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    height: 106px;
    left: 0px;
    top: 100px;
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
export const MainVolunteer = styled.div`
    display: flex;
    flex-direction: column;   
`

export const Main = styled.div`
    position: absolute;
    top:200px;
    background-color: #FFFFFF;
    padding: 5px 15px;
    font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 130%;
    text-align: justify;
    letter-spacing: 0.16px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #394442;
    h5{
        color: #007A68;
        font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 25px;
        text-align: left;
    } 
    a {
        text-decoration: subline;
        color: #E96B2B;
    }   
`
export const Button = styled.div`
    button {
        display:flex;
        justify-content:center;
        align-items: center;
        width: 242px;
        height: 69px;
        margin-top: 50px;
        margin-left: 60px;
        background-color: #007A68;
        color: #F6F7EB;
        border-radius: 15px;
        font-family:  'Roboto', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 21px;
    }
    a{
        text-decoration:none;
    }
    button:hover {
        padding:20px;
        color:black;
        background-color:white;
    } 
    
`

export const Footer = styled.div`
    position: absolute;
    top:1200px;
    
`