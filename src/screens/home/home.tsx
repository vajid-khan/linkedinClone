import {useTheme} from '@shopify/restyle';
import React from 'react';
import {FlatList, StatusBar} from 'react-native';
import {Theme} from '../../theme';
import PostCard from './postCard';

interface Props {}

const Home: React.FC<Props> = () => {
  const theme = useTheme<Theme>();

  return (
    <>
      <StatusBar
        backgroundColor={theme.colors.light}
        barStyle={'dark-content'}
      />
      <FlatList
        contentContainerStyle={{
          backgroundColor: theme.colors.background,
        }}
        data={new Array(20).fill(0).map((_, i) => i)}
        keyExtractor={(item) => item.toString()}
        renderItem={() => <PostCard />}
      />
    </>
  );
};
export default Home;
