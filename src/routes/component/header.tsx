import React from 'react';
import {Box, Theme} from '../../theme';
import Avatar from '../../components/avatar';
import {TextInput} from 'react-native';
import {useTheme} from '@shopify/restyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {}

const Header: React.FC<Props> = () => {
  const theme = useTheme<Theme>();

  return (
    <Box alignItems={'center'} flexDirection={'row'}>
      <Avatar size={45} />
      <TextInput
        placeholder={'Search'}
        style={{
          flex: 1,
          borderRadius: theme.spacing.s,
          paddingLeft: theme.spacing.m,
          marginHorizontal: theme.spacing.s,
          //   borderWidth: 1,
          //   borderColor: theme.colors.background,
          backgroundColor: theme.colors.background,
        }}
      />
      <Box>
        <Icon size={25} name={'message-processing'} />
      </Box>
    </Box>
  );
};
export default Header;
