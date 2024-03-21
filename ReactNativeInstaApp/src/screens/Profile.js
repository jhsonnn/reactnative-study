import React from 'react';
import {SafeAreaView, View} from 'react-native';
import ProfileBody from '../components/ProfileBody';
import ProfileButton from '../components/ProfileButton';

const Profile = () => {
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
    </SafeAreaView>
  );
};

export default Profile;
