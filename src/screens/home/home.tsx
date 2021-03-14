import React from 'react';
import {Theme} from '../../theme';
import PostCard from './postCard';
import {FlatList} from 'react-native';
import {useTheme} from '@shopify/restyle';
import withHeader from '../../hoc/withHeader';
import BottomSheet, {ActionItem} from '../../components/sheets/bottom';
import {Modalize} from 'react-native-modalize';

interface Props {}

const Home: React.FC<Props> = () => {
  const theme = useTheme<Theme>();
  const ref = React.useRef<Modalize>(null);

  return (
    <>
      <FlatList
        contentContainerStyle={{
          backgroundColor: theme.colors.background,
        }}
        data={new Array(20).fill(0).map((_, i) => i)}
        keyExtractor={(item) => item.toString()}
        renderItem={() => <PostCard openAction={() => ref.current?.open()} />}
      />
      <BottomSheet ref={ref}>
        <ActionItem icon={'plus'} title={'Action 1'} />
        <ActionItem icon={'home'} title={'Action 2'} />
        <ActionItem icon={'home'} title={'Action 3'} />
        <ActionItem icon={'home'} title={'Action 4'} />
        <ActionItem icon={'home'} title={'Action 5'} />
        <ActionItem icon={'home'} title={'Action 6'} />
      </BottomSheet>
    </>
  );
};
export default withHeader(Home);
