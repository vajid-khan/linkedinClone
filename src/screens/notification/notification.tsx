import React, { useState, useEffect } from 'react';
import { Box } from '../../theme';
import { FlatList } from 'react-native';
import withHeader from '../../hoc/withHeader';
import NotificationItem from './notificationItem';
import { IPost } from '../../lib/interface';
import axios from '../../lib/axios';
import Loader from '../../components/loader';

interface Props { }

const Notification: React.FC<Props> = () => {

	const [loading, setLoading] = useState(false);
	const [notifications, setNotifications] = useState<IPost[]>([]);

	useEffect(() => {
		setLoading(true);
		axios.get('post')
			.then(res => {
				setNotifications(res.data.data);
			})
			.catch(console.log)
			.finally(() => setLoading(false));
	}, []);

	return (
			loading ? <Loader/> :
			<FlatList
				data={notifications}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => <NotificationItem notification={item} />}
			/>
	);
};

export default withHeader(Notification);
