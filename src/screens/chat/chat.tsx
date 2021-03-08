import React from 'react';
import ChatItem from './chatItem';
import {ChatHeader} from '../../routes';
import {Box, Theme} from '../../theme';
import {useTheme} from '@shopify/restyle';
import {FlatList, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {}

const Chat: React.FC<Props> = () => {
  const theme = useTheme<Theme>();
  return (
    <>
      <ChatHeader />
      <FlatList
        contentContainerStyle={{
          backgroundColor: theme.colors.light,
        }}
        ListHeaderComponent={() => (
          <Box
            borderTopWidth={1}
            borderTopColor={'background'}
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
    </>
  );
};
export default Chat;
