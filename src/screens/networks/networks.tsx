import React from 'react';
import {ScrollView} from 'react-native';
import {Box, Text, Theme} from '../../theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '@shopify/restyle';
import User from './userCard';

interface Props {}

const Networks: React.FC<Props> = () => {
  const theme = useTheme<Theme>();

  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: theme.colors.background,
      }}>
      <Box
        padding={'sm'}
        flexDirection={'row'}
        backgroundColor={'light'}
        justifyContent={'space-between'}
        alignItems={'center'}>
        <Text color={'primary'} fontSize={20}>
          Manage my network
        </Text>
        <Icon name={'chevron-right'} size={30} />
      </Box>
      <Box
        marginTop={'s'}
        padding={'sm'}
        flexDirection={'row'}
        backgroundColor={'light'}
        justifyContent={'space-between'}
        alignItems={'center'}>
        <Text color={'primary'} fontSize={20}>
          Invitations
        </Text>
        <Icon name={'chevron-right'} size={30} />
      </Box>

      <Box marginTop={'s'} backgroundColor={'light'}>
        <Text padding={'s'} fontSize={18}>
          People you may know from your university
        </Text>
        <Box flexWrap={'wrap'} flexDirection={'row'}>
          {new Array(6).fill(0).map((_, index) => (
            <User key={index} />
          ))}
        </Box>
      </Box>
      <Box marginTop={'s'} backgroundColor={'light'}>
        <Text padding={'s'} fontSize={18}>
          Software Engineer you may know
        </Text>
        <Box flexWrap={'wrap'} flexDirection={'row'}>
          {new Array(8).fill(0).map((_, index) => (
            <User key={index} />
          ))}
        </Box>
      </Box>
    </ScrollView>
  );
};
export default Networks;
