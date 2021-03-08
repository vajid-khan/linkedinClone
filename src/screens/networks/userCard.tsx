import React from 'react';
import {Dimensions} from 'react-native';
import Avatar from '../../components/avatar';
import {Box, Text, Theme} from '../../theme';
import Icon from 'react-native-vector-icons/Feather';
import {useTheme} from '@shopify/restyle';

const {width} = Dimensions.get('screen');

interface Props {}

const User: React.FC<Props> = () => {
  const theme = useTheme<Theme>();

  return (
    <Box
      style={{width: width / 2 - theme.spacing.s * 2}}
      borderRadius={15}
      borderWidth={1}
      margin={'s'}
      overflow={'hidden'}
      borderColor={'background'}>
      <Box height={100} backgroundColor={'background'} />
      <Box
        alignItems={'center'}
        style={{
          top: -50,
        }}>
        <Avatar size={100} />
        <Text variant={'bold'}>Jhon Doe</Text>
        <Text>Full Stack Developer</Text>
        <Box marginVertical={'s'} flexDirection={'row'} alignItems={'center'}>
          <Icon name={'user-plus'} size={20} />
          <Text>10 mutual connections</Text>
        </Box>
      </Box>
      <Box
        borderRadius={50}
        marginBottom={'l'}
        paddingVertical={'s'}
        paddingHorizontal={'l'}
        marginHorizontal={'m'}
        borderColor={'primary'}
        alignItems={'center'}
        borderWidth={2}
        style={{marginTop: -25}}>
        <Text color={'primary'}>Connect</Text>
      </Box>
    </Box>
  );
};
export default User;
