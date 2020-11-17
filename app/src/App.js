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
        method:"POST"
    })
    .then(res => res.json())
    .then(data => {
      if(data === true){
        setExists(true);
      }
    })
}, [subReddit]); 

    return ( 
      <>     
        <GlobalStyle />
        <Hero setSubReddit={setSubReddit}/>
        { exists ? <PerformanceGraphs /> : <div/>}
        { exists ? <WordGraphs /> : <div/>}
      </>
    );
  }

 
export default App;