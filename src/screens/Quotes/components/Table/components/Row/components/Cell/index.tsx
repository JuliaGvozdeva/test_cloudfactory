import React, { useEffect, useRef } from 'react';
import { Container, Text } from './styled';
import { Animated } from 'react-native';

type TCell = {
  value: string | number;
  first?: boolean;
};

const Cell: React.FC<TCell> = ({ value, first }) => {
  const valueRef = useRef(value);

  const backgroundColourIndex = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!first && valueRef.current && valueRef.current !== value) {
      backgroundAnimation.start();
    }
  }, [value]);

  const backgroundAnimation = Animated.sequence([
    Animated.timing(backgroundColourIndex, {
      duration: 500,
      toValue: 1,
      useNativeDriver: false,
    }),
    Animated.timing(backgroundColourIndex, {
      duration: 500,
      toValue: 0,
      useNativeDriver: false,
    }),
  ]);

  const backgroundColor = backgroundColourIndex.interpolate({
    inputRange: [0, 1],
    outputRange: ['#415a77', '#e0e1dd'],
  });

  return (
    <Container first={first} style={!first ? { backgroundColor: backgroundColor } : {}}>
      <Text>{value}</Text>
    </Container>
  );
};

export default Cell;
