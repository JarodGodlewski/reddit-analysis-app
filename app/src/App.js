import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import WordGraphs from './components/Graphs/WordGraphs';
import PerformanceGraphs from './components/Graphs/PerformanceGraphs';
import styled from 'styled-components'
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
 
const App = () => {
    return ( 
      <>     
        <GlobalStyle />
        <Hero />
        <div id="PerfGraphs"> 
          <PerformanceGraphs id="PerformanceGraphs" />
        </div>
        <div id="WordGraphs"> 
          <WordGraphs id="WordGraphs" />
        </div>
      </>
    );
  }

 
export default App;