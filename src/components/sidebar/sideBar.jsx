import { useRef, useState } from "react";
import React , { Suspense}from 'react'
import {
  Container,
  DataContainer,
  Search,
  Wrapper,
  DataHeader,
  DataDesc,
  Img,
} from "./sideBarStyle";
import axios from "axios";
import { useDispatch } from "react-redux/es/exports";
import { getData } from "../../redux/currentCity.slice";
const DataSide = React.lazy(() => import("../dataSide/DataSide"));
const Sidebar = () => {
  const [city, setCity] = useState('');
  const [datas, setData] = useState([]);
  const [active,setActive]= useState(false)
  const dispatch = useDispatch();
  const typing = useRef(null);
  const getApi = async (value) => {
    if (value.length === 0) {
      setActive(false)
    } else {
      try {
        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${value},VN&limit=5&appid=ac2e59088cbe65dddd76cc799a3f7efb`;
        await axios.get(url).then((response) => {
          setData(response.data);
          console.log("data input", response.data);
        });
      } catch (error) {
        console.log(error.message);
      }
    }
  };
const getLoaction = async (e)=>{
  if(e.key==='Enter'){
    setActive(true)
    try {
    const  locationUrl= `https://api.openweathermap.org/data/2.5/onecall?lat=${datas[0]?.lat}&lon=${datas[0]?.lon}&units=metric&lang=vi&appid=ac2e59088cbe65dddd76cc799a3f7efb`
    await axios.get(locationUrl).then((response) => {
      dispatch(getData(response.data));
    });  
  } catch (error) {
      console.log(error.message);
    }
  }
}
  const search = (e) => {
    const value = e.target.value;
    setCity(value);
    if (typing.current) {
      clearTimeout(typing.current);
    }
    typing.current = setTimeout(() => {
      getApi(value);
    }, 200);
  };

  return (
    <Container>
      <Wrapper>
        <Search
          pattern={"[A-Za-z]{4}"}
          onChange={(e) => search(e)}
          list={"data"} 
          onKeyDown={getLoaction}
          placeholder={'Search...'}
        />
        <datalist id="data">
          {datas?.map((data,index) => (
            <option key={index} value={`${data.name}`}/>
          ))}
        </datalist>
      </Wrapper>
      <DataContainer>
        <Suspense fallback= {<div>Loading...</div>}>
        {active ? (<DataSide name={datas[0]?.name}/>): ('')}
        </Suspense>
      </DataContainer>
    </Container>
  );
};

export default Sidebar;
