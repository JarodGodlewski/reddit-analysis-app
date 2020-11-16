  
import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroSearch
} from './HeroElements';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer id="Home">
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <HeroContent>
        <HeroItems>
          <HeroH1>Choose a Provided Reddit:</HeroH1>
          <HeroP>or</HeroP>
          <HeroSearch>Search for One!</HeroSearch>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;