import {useTheme} from '@shopify/restyle';
import React from 'react';
import {FlatList, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Box, Theme} from '../../theme';
import ChatItem from './chatItem';

interface Props {}

const Chat: React.FC<Props> = () => {
  const theme = useTheme<Theme>();
  return (
    <FlatList
      contentContainerStyle={{
        backgroundColor: theme.colors.light,
      }}
      ListHeaderComponent={() => (
        <Box
          paddingHorizontal={'sm'}
          flexDirection={'row'}
          alignItems={'center'}
          paddingVertical={'s'}
          borderBottomColor={'background'}
          borderBottomWidth={1}>
          <Box flexDirection={'row'} alignItems={'center'}>
            <Icon name={'magnify'} size={30} />
            <Box flex={1}>
              <TextInput
                numberOfLines={1}
                placeholder={'Seach messages'}
                style={{
                  fontSize: 20,
                  backgroundColor: theme.colors.light,
                }}
              />
            </Box>
            <Icon name={'filter-variant'} size={30} />
          </Box>
        </Box>
      )}
      data={new Array(20).fill(0).map((_, i) => i)}
      renderItem={() => <ChatItem />}
      keyExtractor={(item) => item.toString()}
    />
  );
};
export default Chat;
