import React from 'react';
import {ScrollView} from 'react-native';
import Avatar from '../../components/avatar';
import {Box, Text} from '../../theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {}

const RecentSearch: React.FC<Props> = () => {
  return (
    <Box marginTop={'s'} backgroundColor={'light'}>
      <Text variant={'bold'} fontSize={18}>
        Recent Searches
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {new Array(10)
          .fill(0)
          .map((_, i) => i)
          .map((index) => (
            <Box key={index} margin={'s'} width={60}>
              <Avatar />
              <Text>Jhon Doe</Text>
            </Box>
          ))}
      </ScrollView>
      {new Array(5)
        .fill(0)
        .map((_, i) => i)
        .map((index) => (
          <Box key={index} paddingVertical={'m'} flexDirection={'row'}>
            <Icon name={'clock-outline'} size={25} />
            <Box flex={1} paddingLeft={'s'}>
              <Text variant={'bold'} fontSize={18}>
                application developer
              </Text>
            </Box>
            <Icon
              name={'arrow-up'}
              size={25}
              style={{transform: [{rotate: '-45deg'}]}}
            />
          </Box>
        ))}
    </Box>
  );
};
export default RecentSearch;
