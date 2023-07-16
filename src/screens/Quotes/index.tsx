import React from 'react';
import { ActivityIndicator } from 'react-native';
import { ExchangeStore } from '../../stores';
import { Container } from './styled';
import { observer } from 'mobx-react';
import Table from './components/Table';

const Quotes: React.FC = () => {
  const { exchangeDataArray, exchangeData } = ExchangeStore;

  if (!exchangeDataArray.length && exchangeData.isLoading) {
    return (
      <Container>
        <ActivityIndicator size={'large'} />
      </Container>
    );
  }

  return (
    <Container>
      <Table />
    </Container>
  );
};

export default observer(Quotes);
