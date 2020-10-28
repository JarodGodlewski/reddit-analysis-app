import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
 
const Home = () => {
    const [currentTime, setCurrentTime] = useState(0);

    useEffect( () => {
        fetch('/time')
        .then(res => res.json())
        .then(data => {
            setCurrentTime(data.time);
        })
    },[]);
    // remove the , [] to allow for constant updates

    return (
       <SplashPage>
          <Header>Sub-Reddit Analysis</Header>
          <p>This program uses and analyzes data from the Reddit API, the current time is {currentTime}</p>
       </SplashPage>
    );
}

const SplashPage = styled.div`
   background: #414073;
`;

const Header = styled.h1`
    font-size: 20;
    text-align: center;
    color: #BBD5ED;
`;
export default Home;