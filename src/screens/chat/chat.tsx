import React from 'react';
import Header from './header';
import ChatItem from './chatItem';
import {Box, Theme} from '../../theme';
import {useTheme} from '@shopify/restyle';
import {FlatList, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {}

const Chat: React.FC<Props> = () => {
  const theme = useTheme<Theme>();
  return (
    <>
      <Header />
      <FlatList
        contentContainerStyle={{
          backgroundColor: theme.colors.light,
        }}
        ListHeaderComponent={() => (
          <Box
            borderTopWidth={1}
            flexDirection={'row'}
            alignItems={'center'}
            borderBottomWidth={1}
            paddingHorizontal={'sm'}
            borderTopColor={'background'}
            borderBottomColor={'background'}>
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
