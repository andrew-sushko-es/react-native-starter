import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider as ReduxProvider} from 'react-redux';

import configureStore from './store/configureStore';

import RootScreen from './screens/RootScreen';

const store = configureStore();

const App = () => {
  return (
    <ReduxProvider store={store}>
      <SafeAreaView>
        <RootScreen />
      </SafeAreaView>
    </ReduxProvider>
  );
};

export default App;
