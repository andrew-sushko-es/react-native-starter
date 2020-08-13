import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider as ReduxProvider} from 'react-redux';

import configureStore from './store/configureStore';

import RootScreen from './screens/Root';

const store = configureStore();

const App = () => {
  return (
    <ReduxProvider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <RootScreen />
      </SafeAreaView>
    </ReduxProvider>
  );
};

export default App;
