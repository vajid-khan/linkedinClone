import {useTheme} from '@shopify/restyle';
import React, {useContext, useState} from 'react';
import {Box, Text, Theme} from '../../theme';
import UserContext from '../../context/UserContext';
import CheckBox from '@react-native-community/checkbox';
import {
  TextInput,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {}

const Login: React.FC<Props> = () => {
  const theme = useTheme<Theme>();
  const [loading, setLoading] = useState(false);
  const {user, setUser} = useContext(UserContext);

  const loginUser = () => {
    setLoading(true);
    setTimeout(() => {
      setUser(true);
    }, 1000);
  };

  return (
    <ScrollView
      keyboardShouldPersistTaps={'always'}
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: theme.colors.light,
      }}>
      <Box padding={'sm'} backgroundColor={'light'}>
        <Box flexDirection={'row'}>
          <Box flex={1}>
            <Text variant={'bold'} fontSize={20}>
              Linked In
            </Text>
          </Box>
          <Text variant={'bold'} color={'primary'}>
            Join Now
          </Text>
        </Box>
        <Box marginVertical={'l'}>
          <Text variant={'bold'} fontSize={35}>
            Sign In
          </Text>
        </Box>
        <Box flex={1} paddingTop={'l'}>
          <TextInput
            placeholder={'Email'}
            style={{
              fontSize: 20,
              borderBottomWidth: 1,
              borderBottomColor: '#000',
            }}
          />
          <Box
            marginTop={'m'}
            flexDirection={'row'}
            borderBottomWidth={1}
            alignItems={'center'}
            style={{
              borderBottomColor: '#000',
            }}>
            <TextInput
              placeholder={'Password'}
              style={{
                flex: 1,
                fontSize: 20,
              }}
            />
            <Icon name={'eye'} size={25} />
          </Box>
          <Box flexDirection={'row'} alignItems={'center'} marginTop={'l'}>
            <CheckBox value={true} />
            <Text variant={'bold'}>Remember Me. </Text>
            <Text variant={'bold'} color={'primary'}>
              Learn more
            </Text>
          </Box>
          <Box marginTop={'m'}>
            <Text variant={'bold'}>Forgot Password?</Text>
          </Box>
          {loading ? (
            <Box marginTop={'xl'} paddingVertical={'m'}>
              <ActivityIndicator color={theme.colors.primary} />
            </Box>
          ) : (
            <TouchableOpacity onPress={loginUser}>
              <Box
                marginTop={'xl'}
                backgroundColor={'primary'}
                paddingVertical={'m'}
                alignItems={'center'}
                borderRadius={100}>
                <Text color={'light'} fontSize={20}>
                  Continue
                </Text>
              </Box>
            </TouchableOpacity>
          )}
          <Box marginTop={'l'} flexDirection={'row'} alignItems={'center'}>
            <Box
              flex={1}
              borderBottomColor={'background'}
              borderBottomWidth={1}
            />
            <Box marginHorizontal={'m'}>
              <Text>OR</Text>
            </Box>
            <Box
              flex={1}
              borderBottomColor={'background'}
              borderBottomWidth={1}
            />
          </Box>
          <Box
            marginTop={'xl'}
            paddingVertical={'m'}
            alignItems={'center'}
            borderWidth={1}
            borderRadius={100}
            justifyContent={'center'}
            flexDirection={'row'}>
            <Icon name={'google'} size={25} />
            <Text style={{color: '#000'}} fontSize={20}>
              Sign in with Google
            </Text>
          </Box>
        </Box>
      </Box>
    </ScrollView>
  );
};
export default Login;
