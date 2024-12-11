import { Box } from "@mui/material";
import React from "react";

const PolygonWithBezier: React.FC = () => {
  const points = [
    { x: 15, y: 15 }, // P0
    { x: 10, y: 16 }, // P1
    { x: 10, y: 12 }, // P2
    { x: 3, y: 5 },   // P3
    { x: 13, y: 6 },  // P4
    { x: 5, y: 1 },   // P5
  ];

  const bezierPath = `
    M ${points[0].x},${points[0].y} 
    C ${points[1].x},${points[1].y} ${points[2].x},${points[2].y} ${points[3].x},${points[3].y}
    S ${points[4].x},${points[4].y} ${points[5].x},${points[5].y}
  `;
  const polygonPath = points
    .slice(0, -1) 
    .map((point, index) => {
      const nextPoint = points[index + 1];
      return nextPoint ? `M ${point.x},${point.y} L ${nextPoint.x},${nextPoint.y}` : "";
    })
    .join(" ");

  return (
    <Box className=" flex items-center justify-center p-6 bg-gray-50 rounded-lg shadow-md max-w-3xl mx-auto my-10">
      <svg
        width="400"
        height="400"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="scale(1, -1) translate(0, -20)">
          <path
            d={polygonPath}
            fill="none"
            stroke="black"
            strokeWidth="0.2"
          />
          <path
            d={bezierPath}
            fill="none"
            stroke="blue"
            strokeWidth="0.2"
          />
          {points.map((point, index) => (
            <circle
              key={index}
              cx={point.x}
              cy={point.y}
              r="0.2"
              fill="red"
            />
          ))}
        </g>
      </svg>
    </Box>
  );
};

export default PolygonWithBezier;
