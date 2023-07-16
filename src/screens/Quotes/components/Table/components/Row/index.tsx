import React from 'react';
import { TExchangeItem } from 'stores/ExchangeStore';
import { Container, Cell, CellText } from './styled';
import { roundValue } from './utils';

type TRow = {
  item: TExchangeItem;
  isFirstRow: boolean;
  isLastRow: boolean;
};

const Row: React.FC<TRow> = ({ item, isFirstRow, isLastRow }) => (
  <Container isFirstRow={isFirstRow} isLastRow={isLastRow}>
    <Cell first={true}>
      <CellText>{item.name}</CellText>
    </Cell>
    <Cell>
      <CellText>{roundValue(item.last)}</CellText>
    </Cell>
    <Cell>
      <CellText>{roundValue(item.highestBid)}</CellText>
    </Cell>
    <Cell>
      <CellText>{roundValue(item.percentChange)}</CellText>
    </Cell>
  </Container>
);

export default Row;
