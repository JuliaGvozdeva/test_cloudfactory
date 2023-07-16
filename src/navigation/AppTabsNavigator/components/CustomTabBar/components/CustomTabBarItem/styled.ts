import { styled } from 'styled-components/native';

type TContainer = {
  isFocused?: boolean;
};

export const Container = styled.TouchableOpacity<TContainer>`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ isFocused }) => (isFocused ? '#778da9' : 'white')};
`;

export const Label = styled.Text`
  color: #1b263b;
`;
