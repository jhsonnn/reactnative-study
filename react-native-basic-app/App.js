import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './components/screens/MainScreen';
import { Provider } from 'react-redux';
import { store } from './components/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});