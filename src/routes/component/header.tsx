import React from 'react';
import {Box, Text} from '../../theme';
import Avatar from '../../components/avatar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <Box alignItems={'center'} flexDirection={'row'}>
      <Avatar size={45} />
      <Box
        flex={1}
        padding={'s'}
        marginHorizontal={'sm'}
        flexDirection="row"
        borderRadius={5}
        backgroundColor={'background'}>
        <Box flexDirection="row" flex={1}>
          <Icon name={'magnify'} size={25} />
          <Text variant={'boldTitle'} fontSize={18}>
            Search
          </Text>
        </Box>
        <Box>
          <Icon name={'barcode-scan'} size={25} />
        </Box>
      </Box>

      <Icon size={25} name={'message-processing'} />
    </Box>
  );
};
export default Header;
