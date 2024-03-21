import React from 'react';
import {Image, Text, View} from 'react-native';

const ProfileBody = ({name, profileImage, post, followers, following}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 20,
      }}>
      <View
        style={{
          alignItems: 'center',
        }}>
        <Image
          source={profileImage}
          style={{
            width: 80,
            height: 80,
            borderRadius: 100,
          }}
        />
        <Text style={{paddingVertical: 5, fontWeight: 'bold'}}>{name}</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold'}}>{post}</Text>
        <Text>게시물</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold'}}>{followers}</Text>
        <Text>팔로워</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold'}}>{following}</Text>
        <Text>팔로잉</Text>
      </View>
    </View>
  );
};

export default ProfileBody;
