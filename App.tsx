import React from 'react';
import AppNavigationContainer from './src/navigation';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Container = styled(SafeAreaView)`
  flex: 1;
`;

export default function App() {
  return (
    <Container>
      <AppNavigationContainer />
    </Container>
  );
}
