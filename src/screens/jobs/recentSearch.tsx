import React from 'react';
import {Box, Text} from '../../theme';

interface Props {}

const RecentSearch: React.FC<Props> = () => {
  return (
    <Box marginTop={'s'} backgroundColor={'light'} padding={'s'}>
      <Box flexDirection={'row'} justifyContent={'space-between'}>
        <Text variant={'bold'} fontSize={20}>
          Recent Searches
        </Text>
        <Text fontSize={20}>Clear</Text>
      </Box>
      {new Array(4)
        .fill(1)
        .map((_, i) => i)
        .map((item) => (
          <Box
            key={item}
            paddingVertical={'m'}
            borderBottomWidth={1}
            borderBottomColor={'background'}>
            <Box flexDirection={'row'}>
              <Text variant={'bold'} fontSize={18}>
                {item + 1} Search item
              </Text>
              <Text variant={'bold'} fontSize={16} color={'primary'}>
                {' 1 new'}
              </Text>
            </Box>
            <Text>search item 1 description</Text>
          </Box>
        ))}
      <Box
        paddingVertical={'sm'}
        paddingHorizontal={'l'}
        borderColor={'background'}
        borderWidth={1}
        marginTop={'l'}
        borderRadius={100}
        alignItems={'center'}>
        <Text>See More</Text>
      </Box>
    </Box>
  );
};
export default RecentSearch;
