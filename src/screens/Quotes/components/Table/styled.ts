import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { TExchangeItem } from '../../../../stores/ExchangeStore';

type TColor = {
  color?: string;
};

export const FlatListComponent = styled(FlatList<TExchangeItem>)`
  flex: 1;
  padding: 2%;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Placeholder = styled.Text<TColor>`
  color: ${({ color }) => color ?? '#0d1b2a'};
`;

export const ErrorContainer = styled.View`
  padding: 10px;
  justify-content: center;
  align-items: center;

  border-top-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-color: #0d1b2a;
`;
