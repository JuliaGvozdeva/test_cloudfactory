import { EdgeInsets } from 'react-native-safe-area-context';
import { styled } from 'styled-components/native';

const TAB_BAR_HEIGHT = 30;

type TContainer = {
  bottomInsets: EdgeInsets['bottom'];
};

export const Container = styled.View<TContainer>`
  flex-direction: row;
  height: ${({ bottomInsets }) => TAB_BAR_HEIGHT + bottomInsets}px;
`;
