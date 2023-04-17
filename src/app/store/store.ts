import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { cardApi } from '../services/CardService';
import searchReducer from './reducers/CardSlice';
import formReducer from './reducers/FormSlice';

const rootReducer = combineReducers({
  searchReducer,
  formReducer,
  [cardApi.reducerPath]: cardApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cardApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
