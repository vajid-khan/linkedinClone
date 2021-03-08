import React from 'react';
import {TextInput} from 'react-native';
import {useTheme} from '@shopify/restyle';
import {Box, Theme} from '../../theme';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {}

const ChatHeader: React.FC<Props> = () => {
  const navigation = useNavigation();
  const theme = useTheme<Theme>();

  return (
    <Box backgroundColor={'light'}>
      <Box alignItems={'center'} flexDirection={'row'}>
        <Box marginHorizontal={'s'}>
          <Icon
            name={'arrow-left'}
            size={30}
            onPress={() => navigation.goBack()}
          />
        </Box>
        <Box flex={1} flexDirection="row" borderRadius={5}>
          <TextInput
            autoFocus
            numberOfLines={1}
            placeholder={'Seach messages'}
            style={{
              fontSize: 20,
              backgroundColor: theme.colors.light,
            }}
          />
        </Box>
        <Box marginRight={'sm'}>
          <Icon name={'barcode-scan'} size={25} color={theme.colors.primary} />
        </Box>
      </Box>
    </Box>
  );
};
export default ChatHeader;
