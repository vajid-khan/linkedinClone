import React from 'react';
import Avatar from '../../components/avatar';
import {Box, Text} from '../../theme';

interface Props {}

const CHatItem: React.FC<Props> = () => {
  return (
    <Box flexDirection={'row'} paddingHorizontal={'s'} marginVertical={'s'}>
      <Avatar />
      <Box
        flex={1}
        paddingVertical={'s'}
        marginHorizontal={'s'}
        flexDirection={'row'}
        borderBottomWidth={1}
        borderBottomColor={'background'}>
        <Box flex={1}>
          <Text variant={'bold'}>Jhon Doe</Text>
          <Text>this is message body</Text>
        </Box>
        <Text>day</Text>
      </Box>
    </Box>
  );
};
export default CHatItem;
