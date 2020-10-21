import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/Home';
import WordGraphs from './components/WordGraphs';
import PerformanceGraphs from './components/PerformanceGraphs';
import Error from './components/Error';
import Navigation from './components/Navigation';
import styled from 'styled-components'
 
const App = () => {
    return (      
       <BrowserRouter>
        <LayoutWrapper>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/graphs/word-correlation" component={WordGraphs}/>
             <Route path="/graphs/performance" component={PerformanceGraphs}/>
            <Route component={Error}/>
           </Switch>
        </LayoutWrapper> 
      </BrowserRouter>
    );
  }

  const LayoutWrapper = styled.div`
     background: #414073;
  `;
 
export default App;