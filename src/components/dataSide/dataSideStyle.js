import styled from "styled-components";
export const Container= styled.div`
display: flex;
flex: 1;
background-color: white;
flex-direction: column;
padding: 30px;
`
export const DataHeader = styled.h1`
max-width: 200px;
min-width: 100px;
font-size: 40px;
&.footer{
    position: absolute;
    color: white;
}
`

export const DataDesc= styled.p`
margin: 5px 0px;
`

export const Img = styled.img`
width: 150px;
&.footer{
    width: 100%;
    position: relative;
    border-radius: 10px;
    opacity: 0.7;
}
`
export const Footer = styled.div`
margin-top: 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`