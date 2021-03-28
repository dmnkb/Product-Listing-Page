import React, { createContext, useReducer } from 'react';
import { reducer } from './Reducer'

import * as api from '../api/Api'

type InitialStateType = {
  isError: boolean;
  isLoading: boolean;
  productData: any;
  page: number;
  gender: api.gender;
  releaseYear: number;
  favs: string[] | null;
  favCount: number;
  comparisonOpen: boolean;
}

const initialState = {
  isError: false,
  isLoading: true,
  productData: {},
  page: 1,
  gender: "all",
  releaseYear: 2020,
  favs: null,
  favCount: 0,
  comparisonOpen: false
}

const StoreContext = createContext<{ state: InitialStateType; dispatch: React.Dispatch<any> }>({
  state: initialState as InitialStateType,
  dispatch: () => {}
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{state, dispatch}}>
      {children}
    </StoreContext.Provider>
  )
}

export { StoreContext, AppProvider };