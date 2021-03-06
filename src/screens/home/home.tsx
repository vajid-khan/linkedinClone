import React, { useEffect, useState } from 'react';
import { Box } from '../../theme';
import PostCard from './postCard';
import { FlatList } from 'react-native';
import withHeader from '../../hoc/withHeader';
import BottomSheet, { ActionItem } from '../../components/sheets/bottom';
import { Modalize } from 'react-native-modalize';
import axios from '../../lib/axios';
import { IPost } from '../../lib/interface';
import Loader from '../../components/loader';

interface Props { }

const Home: React.FC<Props> = () => {
	const ref = React.useRef<Modalize>(null);
	const [loading, setLoading] = useState(false);
	const [posts, setPosts] = useState<IPost[]>([]);

	useEffect(() => {
		setLoading(true);
		axios.get('post')
			.then(res => {
				setPosts(res.data.data);
			})
			.catch(console.log)
			.finally(() => setLoading(false));
	}, []);


	return (
		<Box flex={1} backgroundColor={'background'}>
			{loading ? 
				<Loader/> :
				<FlatList
					data={posts}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => <PostCard post={item} openAction={() => ref.current?.open()} />}
				/>
			}

			<BottomSheet ref={ref}>
				<ActionItem icon={'plus'} title={'Action 1'} />
				<ActionItem icon={'home'} title={'Action 2'} />
				<ActionItem icon={'home'} title={'Action 3'} />
				<ActionItem icon={'home'} title={'Action 4'} />
				<ActionItem icon={'home'} title={'Action 5'} />
				<ActionItem icon={'home'} title={'Action 6'} />
			</BottomSheet>
		</Box>
	);
};
export default withHeader(Home);
