import { FlatList } from 'react-native';
import { TExchangeItem } from 'stores/ExchangeStore';
import styled from 'styled-components/native';

type TColor = {
  color?: string;
};

export const FlatListComponent = styled(FlatList<TExchangeItem>).attrs(() => ({
  contentContainerStyle: {
    flex: 1,
    padding: '2%',
  },
}))`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Placeholder = styled.Text<TColor>`
  color: ${({ color }) => color ?? 'black'};
`;

export const ErrorContainer = styled.View`
  padding: 10px;
  justify-content: center;
  align-items: center;

  border-top-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
`;
