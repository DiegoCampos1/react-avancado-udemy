import styled from 'styled-components';

export const Title = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;600;700&display=swap');

  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  letter-spacing: 2px;
`;

export const Content = styled.div`
  p,
  li {
    font-size: 20px;
    font-weight: 300;
  }

  ul {
    list-style-type: none;
    padding-left: 0px;
  }

  li::before {
    content: '\\2713\\0020';
  }
`;
