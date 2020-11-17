import React, { useEffect, useState } from 'react';
import AvgPostSuccessGraph from './AvgPostSuccessGraph';
 
const PerformanceGraphs = () => {
   const [graphData, setGraphData] = useState([]);
   const [received, setReceived] = useState(false);
   useEffect( () => {
       fetch('/get_avg_upvote_time')
       .then(res => res.json())
       .then(data => {
           setGraphData(data);
           setReceived(true);
       })
   }, []);

   const chartData = [{x: graphData.x_values, y: graphData.y_values }];
//    console.log(graphData.y_values.length);
   // remove the , [] to allow for constant updates

    return (
       <div id="PerfGraphs" >
          <h1>Performance Graphs</h1>
          <p>This page will show graphs of sub-reddit and post performance.</p>

          <h1>Average Post Success Per Hour</h1>
            <p>X Values {graphData.x_values}</p>
            <p>Y Values {graphData.y_values}</p>
            {recieved ? <div id="APSGraph"> <AvgPostSuccessGraph freshData={chartData} width={400} height={300}/> </div>: <div/>}
       </div>
    );
}
 


export default PerformanceGraphs;