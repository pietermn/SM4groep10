import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ChartComponent.scss"
import DonutChart from "react-donut-chart";
import { display } from "@mui/system";
import { Car } from "../../globaltypes";
import { Item } from "react-donut-chart/dist/DonutChart";
import SquareIcon from "@mui/icons-material/Square"
  
interface IChartComponent{
  car: Car
} 
export default function ChartComponent(props: IChartComponent){
    const navigate = useNavigate();

    const[data] = useState<Item[]>([])
    const[colours] = useState<string[]>([])

// Sample data
function createData(car: Car){
  car.users.forEach(user => {
    const percentage = car.percentages.find((c) => c.user.id === user.id)?.percentage || 0;
    data.push(
      {
        label: user.name,
        value: percentage
    })
    colours.push(
      user.colour 
    )
  }); 
}
// const reactDonutChartdata = [
//     {
//       label: "Givan Wiggers",
//       value: 25,
//     },
//     {
//       label: "Pieter van der Mullen",
//       value: 25,
//     },
//     {
//       label: "Givan Wiggasders",
//       value: 25,
//     },
//     {
//       label: "Pieter van der fredasMullen",
//       value: 25,
//     },
//     {
//       label: "Givan Wdsahjiggers",
//       value: 25,
//     },
//     {
//       label: "Pieter van Nunen Mullen",
//       value: 25,
//     }
//   ];
  // const reactDonutChartBackgroundColor = [
  //   "#E42C64",
  //   "#4D909E",
  //   "#D970DB",
  //   "#775DD0"
  // ];

  const reactDonutChartInnerRadius = 0.75;
  //const reactDonutChartSelectedOffset = 0.04;

  let reactDonutChartStrokeColor = "#1A1C1F";
  
const options = {
  responsive: true,
  cutoutPercentage: 85,
  maintainAspectRatio: false,
  legend: {
    display: true,
    position: "bottom",
    usePointStyle: "true",
    labels: {
      fontsize: 12,
      padding: 25,
      fontColor: "#ffffff",
      fontFamily: "Inter-bold"
    }
  }
}
useEffect(() => {

},[createData(props.car)])
    return (
      
        <div className="chart-container">
          <div className="donutchart-container">
            <DonutChart
            width={250}
            height={250}
            strokeColor={reactDonutChartStrokeColor}
            data={data}
            interactive={false}
            colors={colours}
            innerRadius={reactDonutChartInnerRadius}
            clickToggle={false} 
            legend={false}
            />
            </div>
            {/* EIGEN GEMAAKTE LEGENDA */}
            {/* <div className="chart-info">
            {data.map((item) => {
              console.log(colours[data.findIndex(c => c.label == item.label)].toString()) 
                    return (
                        <div className="chartInfo-person"> 
                            <SquareIcon className="chartInfo-colour" style={{ color: colours[data.findIndex(c => c.label == item.label)].toString()}}/>
                            <h3 className="chartInfo-name">{item.label}</h3> 
                            <h3 className="chartInfo-percentage">{item.value}%</h3>
                        </div>
                    );
                })}  
            </div> */}
       </div>
    );
};
