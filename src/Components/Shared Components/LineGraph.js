import React from 'react';

/*
----------------------------- Notes -------------------------------------
This is a reusable linegraph component. It is only used by the complaints component. 
It inherits data1, data2, width, and height from the component that uses it. 
*/

const LineGraph = ({ data1, data2, width, height }) => {

  const xLabels = ['8am', '10am', '12pm', '2pm', '4pm', '6pm', '8pm'];
  // Determine the maximum value among both datasets for scaling purposes
  const maxValue = Math.max(...data1, ...data2);

  // Calculate the x and y scales to fit the data within the SVG
  const xScale = width / (data1.length - 1);
  const yScale = height / maxValue;

  // Create a path string for the first line (data1)
  const pathData1 = data1.map((value, index) => `${index * xScale},${height - value * yScale}`).join(' ');

  // Create a path string for the second line (data2)
  const pathData2 = data2.map((value, index) => `${index * xScale},${height - value * yScale}`).join(' ');

  return (
    <svg width={width + 30} height={height + 20}>
      {/* Draw first line (data1) */}
      <path d={`M${pathData1}`} fill="none" stroke='#BC2D0D' strokeWidth="4" />

      {/* Draw second line (data2) */}
      <path d={`M${pathData2}`} fill="none" stroke='#FFA840' strokeWidth="4" />

      {/* Draw x-axis labels */}
      {data1.map((_, index) => {
        const x = index * xScale;
        return (
          <text key={`label-${index}`} x={x + 5} y={height + 10} fill="black" fontSize="10" textAnchor="middle">
            {xLabels[index]}
          </text>
        );
      })}
    </svg>
  );
};

export default LineGraph;
