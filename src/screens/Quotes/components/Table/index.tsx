import React, { useCallback } from 'react';
import { ListRenderItem } from 'react-native';
import { ExchangeStore } from '../../../../stores';
import Row from './components/Row';
import { Container, ErrorContainer, FlatListComponent, Placeholder } from './styled';
import { observer } from 'mobx-react';
import { useFocusEffect } from '@react-navigation/native';
import { TExchangeItem } from '../../../../stores/ExchangeStore';

const Table: React.FC = () => {
  const { getExchangeData, exchangeDataArray, exchangeData } = ExchangeStore;

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

  const renderHeader = () =>
    exchangeData?.error?.title ? (
      <ErrorContainer>
        <Placeholder color={'red'}>{exchangeData.error.title}</Placeholder>
      </ErrorContainer>
    ) : null;

  const renderPlaceholder = () => (
    <Container>
      <Placeholder>{'No items yet'}</Placeholder>
    </Container>
  );

  return (
    <FlatListComponent
      data={exchangeDataArray}
      keyExtractor={(item) => `${item.id}`}
      renderItem={renderItem}
      ListHeaderComponent={renderHeader}
      ListEmptyComponent={renderPlaceholder}
    />
  );
};

export default observer(Table);
