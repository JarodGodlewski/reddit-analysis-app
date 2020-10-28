import React, { useEffect } from 'react';
import * as d3 from 'd3';


// const AvgPostSuccessGraph = (props) => {
//     const { data, width, height } = props;

//     useEffect(() => {
//         const drawChart = ()  => {
//             // Add logic to draw the chart here
//             const margin = { top: 50, right: 50, bottom: 50, left: 50 };
//             const yMinValue = d3.min(data, d => d.y);
//             const yMaxValue = d3.max(data, d => d.y);
//             const xMinValue = d3.min(data, d => d.x);
//             const xMaxValue = d3.max(data, d => d.x);
//             const warningBar = document.getElementById("container");
//             console.log(data, width, height)
//             console.log(warningBar);
//             const svg = d3
//                 .select('#container')
//                 .append('svg')
//                 .attr('width', width + margin.left + margin.right)
//                 .attr('height', height + margin.top + margin.bottom)
//                 .append('g')
//                 .attr('transform', `translate(${margin.left},${margin.top})`)
//                 .append('path')
//                 .attr("stroke", "steelblue");
//             const xScale = d3
//                 .scaleLinear()
//                 .domain([xMinValue, xMaxValue])
//                 .range([0, width]);
//             const yScale = d3
//                 .scaleLinear()
//                 .range([height, 0])
//                 .domain([0, yMaxValue]);
//             const line = d3
//                 .line()
//                 .x(d => xScale(d.x))
//                 .y(d => yScale(d.y))
//                 .curve(d3.curveMonotoneX);
//         }
        
//         drawChart();
//         console.log("running man")
//     }, [data, width, height]);
//     return (
//         < div id="container" />
//     );

// }


function AvgPostSuccessGraph(props) {
    const { data, width, height } = props;
  
    useEffect(() => {
      drawChart();
    }, [data]);
    
    function drawChart() {
      // Add logic to draw the chart here
      const margin = { top: 50, right: 50, bottom: 50, left: 50 };
      const yMinValue = d3.min(data, d => d.y);
      const yMaxValue = d3.max(data, d => d.y);
      const xMinValue = d3.min(data, d => d.x);
      const xMaxValue = d3.max(data, d => d.x);
      const svg = d3
          .select('#container')
          .append('svg')
          .attr('width', width + margin.left + margin.right)
          .attr('height', height + margin.top + margin.bottom)
          .append('g')
          .attr('transform', `translate(${margin.left},${margin.top})`);
      const xScale = d3
          .scaleLinear()
          .domain([xMinValue, xMaxValue])
          .range([0, width]);
      const yScale = d3
          .scaleLinear()
          .range([height, 0])
          .domain([0, yMaxValue]);
      const line = d3
          .line()
          .x(d => xScale(d.x))
          .y(d => yScale(d.y))
          .curve(d3.curveMonotoneX);
    }
    return <div id="container" />;
  }

export default AvgPostSuccessGraph;