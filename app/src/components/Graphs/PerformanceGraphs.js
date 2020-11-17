import React, { useEffect, useState } from 'react';
import AvgPostSuccessGraph from './AvgPostSuccessGraph';
import CommentsSincePostGraph from './CommentsSincePostGraph';
 
const PerformanceGraphs = () => {
   const [graphAPSData,  setGraphAPSData] = useState([]);
   const [graphCommentData, setGraphCommentData] = useState([]);
   const [receivedAPS, setReceivedAPS] = useState(false);
   const [receivedCmt, setReceivedCmt] = useState(false);
   useEffect( () => {
       const getAPSData = () => {fetch('/get_avg_upvote_time')
       .then(res => res.json())
       .then(data => {
         setGraphAPSData(data);
         setReceivedAPS(true);
       }) };

       const getCommentData = () => {fetch('/get_comment_times')
       .then(res => res.json())
       .then(data => {
          console.log("we move");
         console.log(data);
         setGraphCommentData(data);
         setReceivedCmt(true);
       }) };

      getAPSData();
      getCommentData();
   }, []);

   const chartData = [{x: graphAPSData.x_values, y: graphAPSData.y_values }];
   const chartCommentData = [{x: graphCommentData.x_values, y: graphCommentData.y_values }];
//    console.log(graphAPSData.y_values.length);
   // remove the , [] to allow for constant updates

    return (
       <div >
          <h1>Performance Graphs</h1>
          <p>This page will show graphs of sub-reddit and post performance.</p>

         <div id="APSGraph">
          <h1>Average Post Success Per Hour</h1>
    <p>This chart describes the amount of upvotes a post is likely to have based on the time it was posted. This is based upon analysis of the top xx posts on a given subreddit.</p>
            {receivedAPS ? <div id="APSGraph"> <AvgPostSuccessGraph freshData={chartData}/> </div>: <div/>}
         </div>

         <div id="CommentGraph">
          <h1>Top Level Comments Since Post Created</h1>
    <p>This chart describes</p>
            {receivedCmt ? <div id="CommentGraph"> <CommentsSincePostGraph freshData={chartCommentData}/> </div>: <div/>}
         </div>
       </div>
    );
}
 


export default PerformanceGraphs;