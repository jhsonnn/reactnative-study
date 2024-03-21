import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import ProfileBody from '../components/ProfileBody';
import ProfileButton from '../components/ProfileButton';

const Profile = () => {
  let circles = [];
  let numberCircles = 10;

  for (let index = 0; index < numberCircles; index++) {
    circles.push(
      <View key={index}>
        {index === 0 ? (
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              borderWidth: 1,
              opacity: 0.7,
              marginHorizontal: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Entypo
              name="plus"
              style={{
                fontSize: 40,
                color: 'black',
              }}
            />
          </View>
        ) : (
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              backgroundColor: 'black',
              opacity: 0.1,
              marginHorizontal: 5,
            }}
          />
        )}
      </View>,
    );
  }

  return (
    <SafeAreaView style={{width: '100%', backgroundColor: 'white'}}>
      <View style={{width: '100%', padding: 10}}>
        <ProfileBody
          name="Johnny"
          accountName="johnny"
          profileImage={require('../assets/images/userProfile.jpeg')}
          followers="300"
          following="35"
          post="458"
        />
        <ProfileButton
          id={0}
          name="Johnny"
          accountName="johnny"
          profileImage={require('../assets/images/userProfile.jpeg')}
        />
      </View>
      <View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            paddingVertical: 5,
            paddingHorizontal: 10,
          }}>
          {circles}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
