import React from 'react'
import { useDispatch } from 'react-redux';
import {ItemTitle} from'./DayFomat'
const DayFomat = ({dt,index}) => {
  const disPatch= useDispatch()
  const time = new Date(dt * 1000);
  const weekDay = time.toLocaleString("vi", {
    month:'numeric',
    day:'numeric'
  });   
  var days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];
  const d = time.getDay();

  return (
            <ItemTitle>{days[d] + ',' + weekDay}</ItemTitle>    
  )
}

export default DayFomat
