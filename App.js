import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <AppNavigator />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1C26',
  },
});

export default App;
