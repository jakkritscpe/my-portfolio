import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import Profile from '../../images/profile.jpg'
import { Button } from '../ButtonElements';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroBtnWrapper,
  HeroP,
  ArrowForward,
  ArrowRight,
  HeroAvatarWrap,
  HeroAvatar,
} from './HeroElements';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroAvatarWrap>
          <HeroAvatar src={Profile} />
        </HeroAvatarWrap>
        <HeroH1>I'm Software Engineer.</HeroH1>
        <HeroP>
          Hello everyone, My name's Jakkrit Sueakhonburee.
        </HeroP>
        <HeroBtnWrapper>
          <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
