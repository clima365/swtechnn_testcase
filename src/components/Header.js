import React from "react";
import styled from "styled-components";

const Container = styled.header`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.h1`
  margin: 0;
`;

const Header = () => (
  <Container>
    <Text>Search singers</Text>
  </Container>
);

export default Header;
