import React from "react";
import CanvasJSReact from "@canvasjs/react-charts";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Graph = ({ title, xTitle, yTitle, dataPoints }) => {
  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2",
    title: {
      text: title,
    },
    axisY: {
      title: yTitle,
    },
    axisX: {
      title: xTitle,
    },
    data: [
      {
        type: "line",
        toolTipContent: "{x}: {y}",
        dataPoints: dataPoints,
      },
    ],
  };

  return <CanvasJSChart options={options} />;
};

export default Graph;
