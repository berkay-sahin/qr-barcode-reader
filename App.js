import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LoginPage } from './src/componenets/login-form';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { Scanner } from './src/componenets/scanner';
import { Route } from './src/route/route';

export default function App() {
  return (
    <Provider store={store}>

    <View style={styles.container}>
      <Route />
    </View>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    height:"100%",
  },
});
