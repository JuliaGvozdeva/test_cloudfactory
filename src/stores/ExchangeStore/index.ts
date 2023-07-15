import { makeAutoObservable } from 'mobx';
import LoadingStateModel from '../../models/LoadingStateModel';
import { ExchangeService, TExchangeData } from '../../services/ExchangeService';
import { AxiosError } from 'axios';

class ExchangeStoreClass {
  public exchangeDataLoading = new LoadingStateModel<TExchangeData>();

  constructor() {
    makeAutoObservable(this);
  }

  public getExchangeData = async () => {
    this.exchangeDataLoading.setLoading(true);
    try {
      const data = await ExchangeService.getExchangeData();

      this.exchangeDataLoading.setData(data);
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        const backendError = error?.response?.data?.error;

        if (backendError) {
          this.exchangeDataLoading.setError(backendError);
          return;
        }
      }
    } finally {
      this.exchangeDataLoading.setLoading(false);
    }
  };

  public reset = () => {
    this.exchangeDataLoading = new LoadingStateModel();
  };
}

export default ExchangeStoreClass;
