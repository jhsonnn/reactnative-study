import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import { getFeaturedRestaurants } from "../api";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    getFeaturedRestaurants()
      .then((data) => {
        setFeaturedCategories(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <SafeAreaView className='pt-6 pb-12 bg-white'>
      {/* header */}
      <View className='flex-row items-center pb-3 mx-4 space-x-2'>
        <Image
          source={require("../assets/images/noprofile.jpeg")}
          className='p-4 bg-gray-300 rounded-full h-7 w-7'
        />
        <View className='flex-1'>
          <Text className='text-xs font=bolde text-gray-400'>배송 앱</Text>
          <Text className='text-xl font-bold'>
            현재위치
            <ChevronDownIcon size={20} color='#00CCBB' />
          </Text>
        </View>

        <UserIcon size={35} color='#00CCBB' />
      </View>
      {/* search */}
      <View className='flex-row items-center pb-2 mx-4 space-x-2'>
        <View className='flex-row flex-1 p-3 space-x-2 bg-gray-200 rounded-lg'>
          <MagnifyingGlassIcon size={20} color={"gray"} />
          <TextInput placeholder='검색해주세요' keyboardType='default' />
        </View>
      </View>

      {/* body */}
      <ScrollView
        className='bg-gray-100'
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <Categories />
        {/* {console.log(featuredCategories)} */}
        {featuredCategories?.map((category) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
