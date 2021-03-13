import React from 'react';
import {Box, Text, Theme} from '../../theme';
import PostCard from './postCard';
import {FlatList} from 'react-native';
import {useTheme} from '@shopify/restyle';
import withHeader from '../../hoc/withHeader';
import BottomSheet from '../../components/sheets/bottom';
import {useSharedValue, withSpring} from 'react-native-reanimated';

interface Props {}

const Home: React.FC<Props> = () => {
  const theme = useTheme<Theme>();
  const menuTranslateY = useSharedValue(0);

  const open = () => {
    menuTranslateY.value = withSpring(1);
  };

  return (
    <>
      <FlatList
        contentContainerStyle={{
          backgroundColor: theme.colors.background,
        }}
        data={new Array(20).fill(0).map((_, i) => i)}
        keyExtractor={(item) => item.toString()}
        renderItem={() => <PostCard openAction={open} />}
      />
      <BottomSheet translateY={menuTranslateY}>
        <Box flex={1} justifyContent={'center'} alignItems={'center'}>
          <Text>List of menu</Text>
        </Box>
      </BottomSheet>
    </>
  );
};
export default withHeader(Home);
