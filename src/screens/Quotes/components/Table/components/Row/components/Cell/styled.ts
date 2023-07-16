import { Animated } from 'react-native';
import { css } from 'styled-components';
import styled from 'styled-components/native';

type TContainer = {
  first?: boolean;
};

export const Container = styled(Animated.View) <TContainer>`
  width: 20%;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #415a77;
  border: 1px solid #0d1b2a;

  ${({ first }) =>
    first &&
    css`
      width: 40%;
      background-color: #778da9;
    `}
`;

export const Text = styled.Text`
  text-align: center;
  color: #0d1b2a;
`;
