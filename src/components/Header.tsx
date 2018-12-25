import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
  background-color: #ffa9b8;
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 1200px;
  padding: 0.5rem 1rem;
`;

const Nav = styled.nav``;

const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0;
  color: white;
`;

export function Header() {
  return (
    <Container>
      <HeaderContent>
        <Title>CRA</Title>
      </HeaderContent>
    </Container>
  );
}
