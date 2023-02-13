import React from "react";
import { useSelector } from "react-redux";
import { Container, DataDesc, DataHeader, Img,Footer } from "./dataSideStyle";
const DataSide = ({ name }) => {
  const data = useSelector((state) => state.weatherSlice.data.current);
  const time = new Date(data?.dt * 1000);
  const weekDay = time.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });   
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = time.getDay();
  return (
    data ? (  <Container>
      <Img
        src={`http://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`}
        alt={"weather icon"}
      />
      <DataHeader>{name}</DataHeader>
      <DataHeader>
        {Number(data?.temp).toFixed()} <sup>o</sup> C
      </DataHeader>
      <DataDesc>{days[day] + ", " + weekDay}</DataDesc>
      <DataDesc>{data?.weather[0]?.description}</DataDesc>
      <DataDesc>{'Clouds '+data?.clouds+'%'}</DataDesc>
      <Footer>
        <Img className='footer'
          src={`https://jackytravel.com/wp-content/uploads/2018/09/hanoi-old-quarter-1.jpg-1.jpg`}
          alt={"weather icon"}
        />
        <DataHeader className="footer">{name}</DataHeader>
      </Footer>
    </Container>)
  : (<></>)
  );
};

export default DataSide;
