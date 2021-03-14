import React from 'react';
import News from './news';
import Header from './header';
import {Box} from '../../theme';
import {ScrollView} from 'react-native';
import RecentSearch from './recentSearch';

interface Props {}

const Search: React.FC<Props> = () => {
  return (
    <ScrollView keyboardShouldPersistTaps={'handled'}>
      <Header />
      <Box paddingHorizontal={'s'}>
        <RecentSearch />
      </Box>
      <News />
    </ScrollView>
  );
};
export default Search;
