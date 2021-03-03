import React from 'react';
import {Box, Text} from '../../theme';
import Avatar from '../../components/avatar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {StackHeaderProps} from '@react-navigation/stack';

const Header: React.FC<StackHeaderProps> = ({navigation}) => {
  return (
    <Box backgroundColor={'light'}>
      <Box
        alignItems={'center'}
        flexDirection={'row'}
        marginHorizontal={'m'}
        marginBottom={'s'}>
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
            <Text variant={'bold'} fontSize={18}>
              Search
            </Text>
          </Box>
          <Box>
            <Icon name={'barcode-scan'} size={25} />
          </Box>
        </Box>

        <Icon
          size={25}
          name={'message-processing'}
          onPress={() => navigation.push('Chat')}
        />
      </Box>
    </Box>
  );
};
export default Header;
