import { ScrollView, StyleSheet, View } from 'react-native';
import Banner from './components/Banner';
import { StatusBar } from 'expo-status-bar';
import requests from './api/requests';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Banner fetchUrl={requests.fetchNowPlaying}/>
      </ScrollView>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171717',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  scrollView: {
    width: '100%'
  }
});
