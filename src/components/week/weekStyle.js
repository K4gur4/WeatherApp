import { blue, lightBlue } from "@mui/material/colors";
import styled from "styled-components";
export const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`


export const ItemData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ItemDesc = styled.div`
  text-align: center;
  color: silver;
  &.data{
    text-align: start;
    font-weight: 500;
    margin: 10px;
    padding: 10px;
  }
  &.title{
    margin: 20px 0px 0px 20px;
    font-size: large;
    color: black ;
    font-weight: 600;
  }
`;

export const Item = styled.li`
  list-style: none;
  width: 220px;
  height: 120px;
  background-color: ${(props) => (props.isSeleted === true ? 'lightblue' : 'white')};
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
`;

export const Img = styled.img`
width: 70px;
`
export const ItemTitle = styled.p`
  color: grey;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const DescContainer = styled.div`
  display: flex;
  background-color: white;
  flex-direction: column;
  align-items: flex-start;
  width: 95%;
  border-radius: 5px;
`;

export const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
`
export const Right = styled.div`
flex: 1;
display: flex;
flex-direction: column;

`
export const Desc = styled.div`
display: flex;
width: 100%;
height: 100%;
`