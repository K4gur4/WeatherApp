import styled from 'styled-components'
export const Container= styled.div`
display: flex;
width: 100%;
background-color: lightgrey;
`
export const NavBar = styled.nav`
    display: flex;
    >li{
        list-style: none;
        padding-right: 20px;
        cursor: pointer;
        font-weight: 600;
    }
    .item {
        text-decoration: none;
        margin: 0px  10px;
        color: black;
        font-weight: 600;
    }
    
`

export const MainData= styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
`


export const Wrapper= styled.div`
padding: 20px;
flex: 3;
`