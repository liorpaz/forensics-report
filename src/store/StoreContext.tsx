import {createContext, useContext} from 'react';
import {Store} from './store';

export const StoreContext = createContext<Store>(null!);

export const useStore = () => useContext(StoreContext);