import React, {useEffect, useState} from 'react';
import {render} from 'react-dom';
import WordCloud from 'react-d3-cloud';

const WordGraphs = () => {
    const [graphData, setGraphData] = useState([]);
    const [received, setReceived] = useState(false);
    useEffect( () => {
        fetch('/get_word_correlation')
            .then(res => res.json())
            .then(data => {
                setGraphData(data);
                setReceived(true);
            })
    }, []);
    {received ? console.log(graphData.words.length) : console.log('ntohing')};

    const wordlist = [];
    if (received) {
        const numWords = graphData.words.length > 50 ? 50 : graphData.words.length;
        for (var i = 0; i < numWords; i++) {
            var x = {text: graphData.words[i], value:graphData.freq[i]}
            wordlist.push(x)
        }

    console.log(wordlist);
    }

    const fontSizeMapper = word => Math.log2(word.value) * 20;
    const rotate = 0;
    //word => word.value % 360;

    return (
       <div id="WordGraphs">
          <h1>Word Correlation Graphs</h1>
          <p>This page will show graphs of sub-reddits word correlations</p>
          {received ? <WordCloud data={wordlist} fontSizeMapper={fontSizeMapper}
                                 rotate={rotate} padding={0} width={1200} height={800}></WordCloud> : <div/>};
       </div>
    );
}
 
export default WordGraphs;
