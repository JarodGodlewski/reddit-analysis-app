import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import WordGraphs from './components/Graphs/WordGraphs';
import PerformanceGraphs from './components/Graphs/PerformanceGraphs';
import styled from 'styled-components'
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
 
const App = () => {
    return (      
       <BrowserRouter>
        <GlobalStyle />
        <Hero />
        <PerformanceGraphs />
        <WordGraphs />
      </BrowserRouter>
    );
  }

 
export default App;