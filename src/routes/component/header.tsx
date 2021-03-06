import React from 'react';
import {Box, Text} from '../../theme';
import Avatar from '../../components/avatar';
import {DrawerActions} from '@react-navigation/native';
import {StackHeaderProps} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Header: React.FC<StackHeaderProps> = ({navigation, scene}) => {
  return (
    <Box backgroundColor={'light'}>
      <Box
        alignItems={'center'}
        flexDirection={'row'}
        marginHorizontal={'m'}
        marginBottom={'s'}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Avatar size={35} />
        </TouchableOpacity>
        <Box
          flex={1}
          padding={'s'}
          marginHorizontal={'sm'}
          flexDirection="row"
          borderRadius={5}
          backgroundColor={'background'}>
          <Box flexDirection="row" flex={1}>
            <Icon name={'magnify'} size={20} />
            <Text variant={'bold'} fontSize={16}>
              Search {scene.route.name === 'Jobs' ? 'jobs' : ''}
            </Text>
          </Box>
          <Box>
            <Icon name={'barcode-scan'} size={20} />
          </Box>
        </Box>
        {scene.route.name === 'Jobs' && (
          <Box marginHorizontal={'s'}>
            <Icon name={'dots-vertical'} size={20} />
          </Box>
        )}

        <Icon
          size={20}
          name={'message-processing'}
          onPress={() => navigation.push('Chat')}
        />
      </Box>
    </Box>
  );
};
export default Header;
