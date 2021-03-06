import React from 'react';
import {Box, Text} from '../../theme';
import {StackHeaderProps} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ChatHeader: React.FC<StackHeaderProps> = ({navigation}) => {
  return (
    <Box backgroundColor={'light'}>
      <Box
        alignItems={'center'}
        flexDirection={'row'}
        marginHorizontal={'s'}
        marginBottom={'s'}>
        <Box marginHorizontal={'s'}>
          <Icon
            name={'arrow-left'}
            size={30}
            onPress={() => navigation.pop()}
          />
        </Box>
        <Box
          flex={1}
          padding={'s'}
          marginHorizontal={'sm'}
          flexDirection="row"
          borderRadius={5}>
          <Text variant={'bold'} fontSize={20}>
            Messaging
          </Text>
        </Box>
        <Box marginHorizontal={'s'}>
          <Icon name={'pencil'} size={20} />
        </Box>
        <Box marginHorizontal={'s'}>
          <Icon name={'dots-vertical'} size={30} />
        </Box>
      </Box>
    </Box>
  );
};
export default ChatHeader;
