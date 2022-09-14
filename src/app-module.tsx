import React, { FC } from 'react';
import { StatusBar, TouchableOpacity, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, DefaultTheme, ExtendedTheme } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';

import { AppProviders } from 'src/context';

import { theme } from 'src/theme';

import Routes from '../Routes';
import codePush from 'react-native-code-push';

if (__DEV__) {
  import('../ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

const App: FC = () => {
  const MyTheme: ExtendedTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      ...theme.colors
    }
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={MyTheme}>
        <Routes />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const onButtonPress = () => {
  codePush.sync({
    updateDialog: true,
    installMode: codePush.InstallMode.IMMEDIATE
  });
};

export default (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <AppProviders>
      <StatusBar backgroundColor={theme.colors.secondary} barStyle='dark-content' />

      <TouchableOpacity onPress={onButtonPress}>
        <Text>Check for updates</Text>
      </TouchableOpacity>

      <App />
    </AppProviders>
  </ThemeProvider>
);
