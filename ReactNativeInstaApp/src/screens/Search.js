import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Feather from 'react-native-vector-icons/Feather';
import Ionic from 'react-native-vector-icons/Ionicons';
import SearchInput from '../SearchInput';
import SearchContent from '../components/SearchContent';

const Search = () => {
  const [image, setImage] = useState(null);
  const statusBarHeight = getStatusBarHeight();

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const getData = img => {
    setImage(img);
  };

  return (
    <SafeAreaView
      style={{width: '100%', backgroundColor: 'white', position: 'relative'}}>
      <ScrollView>
        <SearchInput />
        <SearchContent getData={getData} />
      </ScrollView>
      {image ? (
        <View
          style={{
            position: 'absolute',
            zIndex: 1,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(52,52,52,0.8)',
            top: Platform.OS === 'ios' ? statusBarHeight : 0,
          }}>
          <StatusBar backgroundColor="#525252" barStyle="dark-content" />
          <View
            style={{
              position: 'absolute',
              backgroundColor: 'white',
              width: '90%',
              top: windowHeight / 6,
              left: windowWidth / 18,
              height: 465,
              borderRadius: 15,
              zIndex: 1,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 10,
                paddingHorizontal: 15,
              }}>
              <Image
                source={image}
                style={{
                  width: 30,
                  height: 20,
                  borderRadius: 100,
                }}
              />
              <View style={{paddingLeft: 7}}>
                <Text style={{fontSize: 13, fontWeight: '600'}}>
                  친구 아이디
                </Text>
              </View>
            </View>
            <Image source={image} style={{width: '100', height: '80%'}} />
            <View
              style={{
                justifyContent: 'space-around',
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                padding: 8,
              }}>
              <Ionic name="heart-outline" style={{fontSize: 26}} />
              <Ionic name="person-circle-outline" style={{fontSize: 26}} />
              <Feather name="navigation" style={{fontSize: 26}} />
            </View>
          </View>
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default Search;
