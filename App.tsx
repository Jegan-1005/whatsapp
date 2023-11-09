/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';

//import routes
import Routes from './app/src/routes/routes';

//import helper
import {Colors} from './app/src/helper/colors';

const App = () => {
  return (
    <>
      {/* <Provider store={store}> */}
      <StatusBar
        animated={true}
        backgroundColor={Colors.black}
        barStyle={'dark-content'}
      />
      <Routes />
      {/* </Provider> */}
    </>
  );
};

export default App;
