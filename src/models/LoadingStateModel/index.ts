import { makeAutoObservable } from 'mobx';

export type TError = {
  title?: string;
  description: string;
};

class LoadingStateModel<T> {
  public data?: T | null = null;
  public isLoading = false;
  public error: TError | undefined = undefined;

  constructor() {
    makeAutoObservable(this);
  }

  public setData = (data?: T) => {
    this.data = data;
  };

  public setLoading = (isLoading: boolean) => {
    if (isLoading) {
      this.clearError();
    }
    this.isLoading = isLoading;
  };

  public setError = (error: string | TError) => {
    this.error =
      typeof error === 'string'
        ? {
          description: error,
        }
        : error;
  };

  public clearError = () => {
    this.error = undefined;
  };

  public reset = () => {
    this.setData();
    this.setLoading(false);
    this.clearError();
  };
}

export default LoadingStateModel;
