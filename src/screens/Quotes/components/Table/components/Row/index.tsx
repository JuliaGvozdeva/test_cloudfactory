import React from 'react';
import { Container } from './styled';
import { roundValue } from './utils';
import Cell from './components/Cell';
import { TExchangeItem } from '../../../../../../stores/ExchangeStore';

type TRow = {
  item: TExchangeItem;
  isFirstRow: boolean;
  isLastRow: boolean;
};

const Row: React.FC<TRow> = ({ item, isFirstRow, isLastRow }) => (
  <Container isFirstRow={isFirstRow} isLastRow={isLastRow}>
    <Cell key={`${item.id}_name`} first={true} value={item.name} />
    <Cell key={`${item.id}_last`} value={roundValue(item.last)} />
    <Cell key={`${item.id}_highestBid`} value={roundValue(item.highestBid)} />
    <Cell key={`${item.id}_percentChange`} value={roundValue(item.percentChange)} />
  </Container>
);

export default Row;
