import React, {useState} from 'react';
import {Box, Text} from '../../theme';
import {useTheme} from '@shopify/restyle';
import RecentSearch from './recentSearch';
import withHeader from '../../hoc/withHeader';
import {Theme} from '@react-navigation/native';
import {ScrollView, FlatList} from 'react-native';
import JobHighlightCard from './JobHighlightCard';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {}

const Job: React.FC<Props> = () => {
  const theme = useTheme<Theme>();

  const [jobs, setJobs] = useState(() => new Array(5).fill(1).map((_, i) => i));

  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: theme.colors.background,
      }}>
      {jobs.length ? (
        <Box padding={'s'}>
          <Text variant={'bold'} fontSize={26}>
            Highlights
          </Text>
        </Box>
      ) : null}
      <Box>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={jobs}
          renderItem={({item}) => (
            <JobHighlightCard
              onRemove={() => setJobs(jobs.filter((j) => j !== item))}
            />
          )}
          keyExtractor={(item) => item.toString()}
        />
      </Box>
      <RecentSearch />
    </ScrollView>
  );
};

const actions = (
  <>
    <Box marginHorizontal={'s'}>
      <Icon name={'dots-vertical'} size={20} />
    </Box>
  </>
);

export default withHeader(Job, actions);
