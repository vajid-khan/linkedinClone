import React from 'react';
import { Box, Text } from '../../theme';
import Avatar from '../../components/avatar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { IPost } from '../../lib/interface';

export interface INotification {
	id: number;
	title?: string;
	description: string;
	time: string;
	actions?: {
		title: string;
	}[];
}
interface Props {
	notification: IPost
}

const NotificationItem: React.FC<Props> = ({ notification }) => {
	return (
		<Box
			flexDirection={'row'}
			padding={'m'}
			borderBottomColor={'background'}
			borderBottomWidth={1}>
			<Avatar size={50} picture={notification.owner.picture}  />
			<Box flex={1} marginHorizontal={'s'} justifyContent={'center'}>
				{notification.owner && (
					<Text numberOfLines={1}>{notification.owner.firstName}</Text>
				)}
				<Text numberOfLines={3}>{notification.text}</Text>
				<Box flexDirection={'row'} marginTop={'s'} flexWrap={'wrap'}>
					{[1].map((action) => (
						<Box
							key={action}
							paddingVertical={'s'}
							paddingHorizontal={'m'}
							borderRadius={50}
							marginRight={'s'}
							marginBottom={'s'}
							borderColor={'primary'}
							borderWidth={2}>
							<Text color={'primary'}>Action</Text>
						</Box>
					))}
				</Box>
			</Box>
			<Box>
				<Text marginBottom={'s'}>{Math.floor(Math.random() * 10 + 1)}h</Text>
				<Icon name={'dots-vertical'} size={20} />
			</Box>
		</Box>
	);
};

export default NotificationItem;
