import { AxiosResponse } from 'axios';

export type TExchangeService = {
  getExchangeData: () => Promise<AxiosResponse<TExchangeData>>;
};

export type TExchangeData = {
  [key: string]: TExchangeDataItem;
};

export type TExchangeDataItem = {
  id: number;
  last: string;
  lowestAsk: string;
  highestBid: string;
  percentChange: string;
  baseVolume: string;
  quoteVolume: string;
  isFrozen: string;
  postOnly: string;
  high24hr: string;
  low24hr: string;
};
