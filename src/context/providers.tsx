import React, { ReactNode } from 'react';

import { UserProvider } from './user';
import { Provider } from 'react-redux';
import { Store } from '../states/stores';

interface Props {
  children: ReactNode;
}

const AppProviders = ({ children }: Props): JSX.Element => (
  <Provider store={Store}>
    <UserProvider>{children}</UserProvider>
  </Provider>
);

export default AppProviders;
