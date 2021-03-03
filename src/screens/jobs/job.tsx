import {Theme} from '@react-navigation/native';
import {useTheme} from '@shopify/restyle';
import React from 'react';
import {ScrollView, FlatList} from 'react-native';
import {Box, Text} from '../../theme';
import JobHighlightCard from './JobHighlightCard';
import RecentSearch from './recentSearch';

interface Props {}

const Job: React.FC<Props> = () => {
  const theme = useTheme<Theme>();

  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: theme.colors.background,
      }}>
      <Box paddingHorizontal={'s'}>
        <Text variant={'bold'} fontSize={26}>
          Highlights
        </Text>
      </Box>
      <Box marginVertical={'s'}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={new Array(10).fill(1).map((_, i) => i)}
          renderItem={() => <JobHighlightCard />}
          keyExtractor={(item) => item.toString()}
        />
      </Box>
      <RecentSearch />
    </ScrollView>
  );
};
export default Job;
