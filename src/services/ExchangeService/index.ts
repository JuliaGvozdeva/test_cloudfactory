import axios from 'axios';
import { TExchangeService } from './types';

export const ExchangeService: TExchangeService = {
  getExchangeData: async () =>
    await axios.get('https://poloniex.com/public?command=returnTicker'),
};

export * from './types';
