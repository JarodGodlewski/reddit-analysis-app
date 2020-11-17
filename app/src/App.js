import React, { Component, useEffect, useState } from 'react'; 
import WordGraphs from './components/Graphs/WordGraphs';
import PerformanceGraphs from './components/Graphs/PerformanceGraphs';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
 
const App = () => {
  const [subReddit, setSubReddit] = useState("");
  const [exists, setExists] = useState(false);

  useEffect( () => {
    setExists(false);
    fetch('/result', {
        mode: 'same-origin',
        method:"POST",
        body: JSON.stringify({"subreddit": subReddit}),
        headers: {
          'Content-Type': 'application/json'
        },
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data === true){
        console.log(data);
        setExists(true);
      }
    })
}, [subReddit]); 

    return ( 
      <>     
        <GlobalStyle />
        <Hero setSubReddit={setSubReddit}/>
        { exists ? <PerformanceGraphs subName={subReddit} /> : <div/>}
        { exists ? <WordGraphs subName={subReddit}/> : <div/>}
      </>
    );
  }

 
export default App;