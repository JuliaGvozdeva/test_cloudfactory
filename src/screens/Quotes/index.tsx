import React, { useEffect } from 'react';
import { ActivityIndicator, Text } from 'react-native';
import { ExchangeStore } from '../../stores';
import { Container, CenterContainer } from './styled';
import { observer } from 'mobx-react';

const Quotes: React.FC = () => {
  const { getExchangeData, exchangeDataArray, exchangeData } = ExchangeStore;

  useEffect(() => {
    getExchangeData();
  }, []);

  if (!exchangeDataArray.length && exchangeData.isLoading) {
    return (
      <CenterContainer>
        <ActivityIndicator />
      </CenterContainer>
    );
  }

  return (
    <Container>
      <Text>{`${exchangeDataArray.length}${exchangeData?.data?.[0]?.id}`}</Text>
    </Container>
  );
};

export default observer(Quotes);
