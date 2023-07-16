import { makeAutoObservable } from 'mobx';
import LoadingStateModel from '../../models/LoadingStateModel';
import { ExchangeService, TExchangeData } from '../../services/ExchangeService';
import { AxiosError } from 'axios';
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
      if (error instanceof AxiosError) {
        const backendError = error?.response?.data?.error;

        if (backendError) {
          this.exchangeData.setError(backendError);
          return;
        }
      }
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
