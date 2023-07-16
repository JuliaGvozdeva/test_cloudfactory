import React, { useEffect } from 'react';
import { ListRenderItem } from 'react-native';
import { ExchangeStore } from '../../../../stores';
import Row from './components/Row';
import { TExchangeItem } from 'stores/ExchangeStore';
import { FlatListComponent } from './styled';

const Table: React.FC = () => {
  const { getExchangeData, exchangeDataArray } = ExchangeStore;

  useEffect(() => {
    getExchangeData();
  }, []);

  const renderItem: ListRenderItem<TExchangeItem> = ({ item, index }) => (
    <Row isFirstRow={!index} isLastRow={index === exchangeDataArray.length - 1} item={item} />
  );

  return <FlatListComponent data={exchangeDataArray} renderItem={renderItem} />;
};

export default Table;
