import React from 'react';
import { Dimensions } from 'react-native';
import Avatar from '../../components/avatar';
import { Box, Text, Theme } from '../../theme';
import Icon from 'react-native-vector-icons/Feather';
import { useTheme } from '@shopify/restyle';
import { Iuser } from '../../lib/interface';

const { width } = Dimensions.get('screen');

interface Props {
	user: Iuser;
}

const User: React.FC<Props> = ({ user }) => {
	const theme = useTheme<Theme>();

	return (
		<Box
			style={{ width: width / 2 - theme.spacing.s * 2 }}
			borderRadius={15}
			borderWidth={1}
			margin={'s'}
			overflow={'hidden'}
			borderColor={'background'}>
			<Box height={75} backgroundColor={'background'} />
			<Box
				alignItems={'center'}
				style={{
					top: -50,
				}}>
				<Avatar size={100} picture={user.picture} />
				<Text variant={'bold'}>{`${user.firstName}`}</Text>
				<Text>{user.lastName}</Text>
				<Box marginVertical={'s'} flexDirection={'row'} alignItems={'center'}>
					<Icon name={'user-plus'} size={20} />
					<Text>10 mutual connections</Text>
				</Box>
			</Box>
			<Box
				borderRadius={50}
				marginBottom={'l'}
				paddingVertical={'s'}
				paddingHorizontal={'l'}
				marginHorizontal={'m'}
				borderColor={'primary'}
				alignItems={'center'}
				borderWidth={2}
				style={{ marginTop: -25 }}>
				<Text color={'primary'}>Connect</Text>
			</Box>
		</Box>
	);
};
export default User;
