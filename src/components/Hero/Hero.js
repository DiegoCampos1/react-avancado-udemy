import React from 'react';
import { Title, Content } from './StyledComponents';

const Hero = ({ title, children }) => {
  return (
    <div>
      <div>
        <Title>{title}</Title>
        <Content>{children}</Content>
      </div>
    </div>
  );
};

export default Hero;
