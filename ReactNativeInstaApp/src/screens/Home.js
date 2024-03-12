import React from 'react';
import {ScrollView, StatusBar, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Posts from '../components/Posts';
import Stories from '../components/Stories';

const Home = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: 15,
          alignItems: 'center',
        }}>
        <View>
          <Text style={{fontSize: 25, fontWeight: '500'}}>Instagram</Text>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <FontAwesome
            name="plus-square-o"
            style={{fontSize: 24, paddingHorizontal: 15}}
          />
          <Feather name="navigation" style={{fontSize: 24}} />
        </View>
      </View>
      <ScrollView>
        <Stories />
        <Posts />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
