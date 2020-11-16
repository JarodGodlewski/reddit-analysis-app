import React, {useEffect, useState} from 'react';

const WordGraphs = () => {

    const [graphData, setGraphData] = useState([]);
    const[recieved, setRecieved] = useState(false);
    useEffect( () => {
        fetch('/get_word_correlation')
            .then(res => res.json())
            .then(data => {
                setGraphData(data);
                setRecieved(true);
            })
    }, []);

    console.log(graphData);
    
    return (
       <div>
          <h1>Word Correlation Graphs</h1>
          <p>This page will show graphs of sub-reddits word correlations</p>
       </div>
    );
}
 
export default WordGraphs;
