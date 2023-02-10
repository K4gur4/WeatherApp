import styled from 'styled-components'

export const Container= styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
`
export const Item= styled.div`
width: 260px;
background-color: white;
padding: 20px;
margin: 20px;
border-radius: 10px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
export const ItemTitle= styled.p`
    color:grey;
`
export const ItemData= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const ItemIcon= styled.div`
`
export const ItemDesc= styled.p`
font-size: 20px;
font-weight: 600;
text-align: center;
`

export const RireSet= styled.div`
display: flex;
align-items: center;
`