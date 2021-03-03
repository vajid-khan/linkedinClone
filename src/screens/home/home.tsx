import {useTheme} from '@shopify/restyle';
import React from 'react';
import {FlatList} from 'react-native';
import {Theme} from '../../theme';
import PostCard from './postCard';

interface Props {}

const Home: React.FC<Props> = () => {
  
  const theme = useTheme<Theme>();

  return (
    <FlatList
      contentContainerStyle={{
        backgroundColor: theme.colors.background,
      }}
      data={new Array(20).fill(0).map((_, i) => i)}
      keyExtractor={(item) => item.toString()}
      renderItem={({item}) => <PostCard />}
    />
  );
};
export default Home;
