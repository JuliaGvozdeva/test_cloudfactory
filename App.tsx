import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import AppNavigationContainer from "./src/navigation";
import styled from "styled-components/native";

const Container = styled.View`
flex:1;
`

export default function App() {
  return (
    <Container>
      <AppNavigationContainer />
    </Container>
  );
}
