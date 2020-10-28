import React, { useEffect, useState } from 'react';
import * as d3 from "d3";
 
const PerformanceGraphs = () => {

   const [graphData, setGraphData] = useState([]);

   useEffect( () => {
       fetch('/get_avg_upvote_time')
       .then(res => res.json())
       .then(data => {
           setGraphData(data);
       })
   }, []);
   // remove the , [] to allow for constant updates

    return (
       <div>
          <h1>Performance Graphs</h1>
          <p>This page will show graphs of sub-reddit and post performance.</p>

          <h1>Average Post Success Per Hour</h1>
            <p>X Values {graphData.x_values}</p>
            <p>Y Values {graphData.y_values}</p>
       </div>
    );
}
 
export default PerformanceGraphs;