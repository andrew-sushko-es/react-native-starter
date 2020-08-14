import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider as ReduxProvider} from 'react-redux';
import {ThemeProvider} from 'styled-components';

import configureStore from './store/configureStore';

import RootScreen from './screens/Root';

import theme from './theme';
import './i18n';

const store = configureStore();

const App = () => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <SafeAreaView style={{flex: 1}}>
          <RootScreen />
        </SafeAreaView>
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default App;
