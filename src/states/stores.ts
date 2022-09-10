import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import reducers from './reducer';

export const Store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
});
