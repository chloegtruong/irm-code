import React from 'react';

/*
----------------------------- Notes -------------------------------------
This is a reusable pie chart component. It is used by the scans component.
It inherits its data from the component that uses it. 
*/

const PieChart = ({ data }) => {
  // Calculate the total value of the data
  const total = data.reduce((sum, item) => sum + item.value, 0);

  let startAngle = 0;

  return (
    <div>
      <svg width="200" height="200">
        {data.map((item, index) => {
          const percentage = (item.value / total) * 100;
          const endAngle = startAngle + (percentage * 360) / 100;
          const largeArcFlag = percentage > 50 ? 1 : 0;

          const x1 = Math.cos((startAngle * Math.PI) / 180) * 100 + 100;
          const y1 = Math.sin((startAngle * Math.PI) / 180) * 100 + 100;
          const x2 = Math.cos((endAngle * Math.PI) / 180) * 100 + 100;
          const y2 = Math.sin((endAngle * Math.PI) / 180) * 100 + 100;

          startAngle = endAngle;

          return (
            <path
              key={index}
              d={`M100,100 L${x1},${y1} A100,100 0 ${largeArcFlag},1 ${x2},${y2} Z`}
              fill={item.color}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default PieChart;
