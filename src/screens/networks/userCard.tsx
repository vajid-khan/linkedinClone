import React from 'react';
import {Dimensions} from 'react-native';
import Avatar from '../../components/avatar';
import {Box, Text} from '../../theme';
import Icon from 'react-native-vector-icons/Feather';

const {width} = Dimensions.get('screen');

interface Props {}

const User: React.FC<Props> = () => {
  return (
    <Box style={{width: width / 2}}>
      <Box margin={'s'} borderColor={'background'}>
        <Box
          height={100}
          backgroundColor={'background'}
          borderTopLeftRadius={15}
          borderTopRightRadius={15}
        />
        <Box
          alignItems={'center'}
          borderRightWidth={1}
          borderLeftWidth={1}
          borderBottomWidth={1}
          borderColor={'background'}
          style={{
            top: -50,
          }}>
          <Avatar size={100} />
          <Text>Jhon Doe</Text>
          <Text>Full Stack Developer</Text>
          <Box marginVertical={'s'} flexDirection={'row'} alignItems={'center'}>
            <Icon name={'user-plus'} size={20} />
            <Text>10 mutual connections</Text>
          </Box>
          <Box
            paddingVertical={'s'}
            paddingHorizontal={'l'}
            borderRadius={50}
            marginRight={'s'}
            marginBottom={'l'}
            borderColor={'primary'}
            borderWidth={2}>
            <Text color={'primary'}>Connect</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default User;
