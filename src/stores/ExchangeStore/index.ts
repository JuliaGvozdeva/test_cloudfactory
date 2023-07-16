import { makeAutoObservable } from 'mobx';
import LoadingStateModel, { TError } from '../../models/LoadingStateModel';
import { ExchangeService, TExchangeData } from '../../services/ExchangeService';
import { TExchangeItem } from './types';

class ExchangeStoreClass {
  public exchangeData = new LoadingStateModel<TExchangeData>();

  public get exchangeDataArray() {
    return this.exchangeData.data
      ? Object.entries(this.exchangeData.data).map(
        (exchangeItem) =>
          ({
            name: exchangeItem[0],
            ...exchangeItem[1],
          }) as TExchangeItem,
      )
      : [];
  }

  constructor() {
    makeAutoObservable(this);
  }

  public getExchangeData = async () => {
    this.exchangeData.setLoading(true);
    try {
      const data = (await ExchangeService.getExchangeData()).data;

      this.exchangeData.setData(data);
    } catch (error) {
      console.log(error);
      this.exchangeData.setError({ title: 'Error' } as TError);
    } finally {
      this.exchangeData.setLoading(false);
    }
  };

  public reset = () => {
    this.exchangeData = new LoadingStateModel();
  };
}

export default ExchangeStoreClass;
export * from './types';
