import React from 'react';
import {ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import SearchInput from '../SearchInput';
import SearchContent from '../components/SearchContent';

const Search = () => {
  return (
    <SafeAreaView
      style={{width: '100%', backgroundColor: 'white', position: 'relative'}}>
      <ScrollView>
        <SearchInput />
        <SearchContent />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
