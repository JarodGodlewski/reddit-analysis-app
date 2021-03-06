  
import React, { useState } from 'react';
import Navbar from '../Navbar';
import Search from '../Search';
import Sidebar from '../Sidebar';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  RedditButton,
  Row,
  Trash,
  ButtonTableContainer
} from './HeroElements';

const Hero = ( {setSubReddit} ) => {
  const [isOpen, setIsOpen] = useState(false);
  const subRedditNames = ["cscareerquestions", "talesfromretail", "csmajors", "fantheories", "bestoflegaladvice", "legaladvice", "Idontworkherelady", "unresolvedmysteries", "MaliciousCompliance", "lifeofnorman"];

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
          <Search setSubReddit={setSubReddit}/>
        </HeroItems>
        <ButtonTableContainer>
          {subRedditNames.map((name) => {
                return <RedditButton onClick = {() => setSubReddit(name)}>{name}</RedditButton>
            })}
        </ButtonTableContainer>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;