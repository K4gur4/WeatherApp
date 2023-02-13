import styled from "styled-components";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Container,
  Item,
  ItemData,
  ItemDesc,
  ItemIcon,
  ItemTitle,
  RireSet
} from "./todayStyle";
import { useEffect } from "react";
import { FaSun } from "react-icons/fa";
import { WiDayWindy, WiSunrise, WiSunset, WiHumidity } from "react-icons/wi";
import { IoMdSpeedometer, IoMdThermometer } from "react-icons/io";

const Today = () => {
  const today = useSelector((state) => state.weatherSlice.data.current);
  const sunRise = new Date(today?.sunrise * 1000).toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  const sunSet = new Date(today?.sunset * 1000).toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  return today ? (
    <Container>
      <Item>
        <ItemTitle>UV index</ItemTitle>
        <ItemData>
          <ItemIcon>
            <FaSun style={{ fontSize: "70px", color: "yellow" }} />
          </ItemIcon>
          <ItemDesc>{today.uvi}</ItemDesc>
        </ItemData>
      </Item>
      <Item>
        <ItemTitle>Wind Status</ItemTitle>
        <ItemData>
          <ItemIcon>
            <WiDayWindy style={{ fontSize: "70px", color: "blue" }} />
          </ItemIcon>
          <ItemDesc>{today.wind_speed + " m/s"}</ItemDesc>
        </ItemData>
      </Item>{" "}
      <Item>
        <ItemTitle>Sunrise & Sunset</ItemTitle>
        <ItemData>
          <RireSet>
          <ItemIcon>
            <WiSunrise style={{ fontSize: "50px", color: "yellow" }} />
          </ItemIcon>
          <ItemDesc>{sunRise}</ItemDesc>
          </RireSet>
          <RireSet>
          <ItemIcon>
            <WiSunset style={{ fontSize: "50px", color: "yellow" }} />
          </ItemIcon>
          <ItemDesc>{sunSet}</ItemDesc>
          </RireSet>
        </ItemData>
      </Item>{" "}
      <Item>
        <ItemTitle>Humidity</ItemTitle>
        <ItemData>
          <ItemIcon>
            <WiHumidity style={{ fontSize: "70px", color: "blue" }} />
          </ItemIcon>
          <ItemDesc>{today.humidity + " %"}</ItemDesc>
        </ItemData>
      </Item>
      <Item>
        <ItemTitle>visibility</ItemTitle>
        <ItemData>
          <ItemIcon>
            <IoMdSpeedometer style={{ fontSize: "70px", color: "yellow" }} />
          </ItemIcon>
          <ItemDesc>{today.visibility/1000} km</ItemDesc>
        </ItemData>
      </Item>
      <Item>
        <ItemTitle>Pressure</ItemTitle>
        <ItemData>
          <ItemIcon style={{ fontSize: "70px", color: "blue" }}>
            <IoMdThermometer />
          </ItemIcon>
          <ItemDesc>{today.pressure}</ItemDesc>
        </ItemData>
      </Item>
    </Container>
  ) : (
    ""
  );
};

export default Today;
