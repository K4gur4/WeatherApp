import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Container } from "./hour.js";
import { Line } from "react-chartjs-2";
import {
  Chart,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
} from "chart.js";
import {Suspense} from 'react'
const Hour = () => {
  const hourly = useSelector((state) => state?.weatherSlice.data.hourly);
  const hour = hourly?.map((data) =>
    new Date(data?.dt * 1000).toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    })
  );
  const temps= hourly?.map ( (data)=>data?.temp.toFixed(1))
  const feel= hourly?.map ( (data)=>data?.feels_like.toFixed(1))
  console.log(temps);
const data = {
    labels : hour,
    datasets: [{
        label: 'Temp(C)',
        data: temps,
        background: 'white',
        borderColor: 'lightblue',
        pointBorderColor: 'aqua',
        fill:true,
        tension: 0.4,
        
    },
    {
        label: 'Feel-like(C)',
        data: feel,
        background: 'white',
        borderColor: 'lightgreen',
        pointBorderColor: 'aqua',
        fill:true,
        tension: 0.4,
        
    }
]
} 

const options = {
    plugins : {
        legend : true
    },
    scales: {
    }
}
  Chart.register(LineElement, CategoryScale, LinearScale, PointElement,Legend,Tooltip);

  return (
    hourly && 
   <Container>
    <Suspense fallback = {<h1>Loading...</h1>}>
    <Line data={data} options={options} />
    </Suspense>
  </Container>
  )
};

export default Hour;
