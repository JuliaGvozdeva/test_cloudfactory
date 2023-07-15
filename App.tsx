import React from 'react';
import AppNavigationContainer from './src/navigation';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
`;

export default function App() {
  return (
    <Container>
      <AppNavigationContainer />
    </Container>
  );
}
