import {
  Container,
  DescContainer,
  Item,
  Img,
  ItemData,
  ItemDesc,
  Desc,
  Left,
  Right,
  ItemContainer,
} from "./weekStyle";
import { useSelector } from "react-redux";
import DayFomat from "../weekItem/DayFomat.jsx";
import { useState } from "react";
const Week = () => {
  const dailyItem = useSelector((state) => state?.weatherSlice?.data?.daily);
  const [desc, setDesc] = useState();
  const [data, setData] = useState("");
  const getId = (index) => {
    setData(index);
    setDesc(index.weather[0]);
  };
  const sunRise = new Date(data?.sunrise * 1000).toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  const sunSet = new Date(data?.sunset * 1000).toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <Container>
      <ItemContainer>
        {dailyItem?.map((day, index) => (
          <Item key={index} onClick={() => getId(day)}>
            <DayFomat dt={day.dt} />
            <ItemData>
              <Img
                src={`http://openweathermap.org/img/wn/${day?.weather[0]?.icon}@2x.png`}
                alt=""
              />
              <ItemDesc>
                {Number(day.temp.min).toFixed()}
                <sup>o</sup>C - {Number(day.temp.max).toFixed()} <sup>o</sup>C
              </ItemDesc>
            </ItemData>
          </Item>
        ))}
      </ItemContainer>
      {data ? (
        <DescContainer>
          <ItemDesc className="title">
            <DayFomat dt={data?.dt} />
          </ItemDesc>
          <Desc>
            <Left>
              <ItemDesc className="data">
                Temp current : {Number(data?.temp?.day ?? 0).toFixed()}{" "}
                <sup>o</sup>C{" "}
              </ItemDesc>
              <ItemDesc className="data">
                Temp : {Number(data?.temp?.min ?? 0).toFixed()}
                <sup>o</sup>C - {Number(data?.temp?.max ?? 0).toFixed() ?? 0}
                <sup>o</sup>C
              </ItemDesc>
              <ItemDesc className="data">
                Humidity : {data?.humidity ?? 0} %
              </ItemDesc>
              <ItemDesc className="data">
                Wind speed : {data?.wind_speed ?? 0} m/s
              </ItemDesc>
            </Left>
            <Right>
              <ItemDesc className="data">Sunrise : {sunRise ?? 0}</ItemDesc>
              <ItemDesc className="data">Sunset : {sunSet ?? 0}</ItemDesc>
              <ItemDesc className="data">
                Description : {desc?.description}
              </ItemDesc>
              <ItemDesc className="data">
                Atmospheric pressure : {data.pressure ?? 0} hPa{" "}
              </ItemDesc>
            </Right>
          </Desc>
        </DescContainer>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default Week;
