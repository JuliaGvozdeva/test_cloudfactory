import ExchangeStoreClass from '../ExchangeStore';

class RootStoreClass {
  public readonly ExchangeStore = new ExchangeStoreClass();

  public reset = () => {
    this.ExchangeStore.reset();
  };
}

const RootStore = new RootStoreClass();

export const { ExchangeStore } = RootStore;
export { RootStoreClass };
export default RootStore;
