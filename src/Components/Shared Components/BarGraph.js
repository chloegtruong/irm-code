import React from 'react';

/*
----------------------------- Notes -------------------------------------
This is a reusable bargraph component. It is used by Accessions and 
Requisitions. 
*/

const BarGraph = ({data}) => {
  return (
    <div className="bar-graph">
      {/* make bars  */}
      <div className="bars-container">
        {data.map((item, index) => (
          <div
            className="bar"
            key={index}
            style={{ height: `${item.value * 4}px`, backgroundColor: item.color }}
          ></div>
        ))}
      </div>
      {/* add labels */}
      <div className="x-axis">
        {data.map((item, index) => (
          <div className="label" key={index}>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarGraph;
