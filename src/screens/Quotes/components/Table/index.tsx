import React, { useCallback } from 'react';
import { ListRenderItem } from 'react-native';
import { ExchangeStore } from '../../../../stores';
import Row from './components/Row';
import { TExchangeItem } from 'stores/ExchangeStore';
import { FlatListComponent } from './styled';
import { observer } from 'mobx-react';
import { useFocusEffect } from '@react-navigation/native';

const Table: React.FC = () => {
  const { getExchangeData, exchangeDataArray } = ExchangeStore;

  const init = () => {
    getExchangeData();
  };

  useFocusEffect(
    useCallback(() => {
      init();
      const interval = setInterval(() => init(), 5000);

      return () => {
        clearInterval(interval);
      };
    }, []),
  );

  const renderItem: ListRenderItem<TExchangeItem> = ({ item, index }) => (
    <Row isFirstRow={!index} isLastRow={index === exchangeDataArray.length - 1} item={item} />
  );

  return <FlatListComponent data={exchangeDataArray} renderItem={renderItem} keyExtractor={(item) => `${item.id}`} />;
};

export default observer(Table);
