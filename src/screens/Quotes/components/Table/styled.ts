import { FlatList } from 'react-native';
import { TExchangeItem } from 'stores/ExchangeStore';
import styled from 'styled-components/native';

export const FlatListComponent = styled(FlatList<TExchangeItem>)`
  padding: 2%;
`;
