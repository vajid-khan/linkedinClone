import React, { useEffect, useState } from 'react';
import User from './userCard';
import { ActivityIndicator, ScrollView } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Box, Text, Theme } from '../../theme';
import withHeader from '../../hoc/withHeader';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { IUser } from '../../lib/interface';
import axios from '../../lib/axios';

interface Props { }

const Networks: React.FC<Props> = () => {
	const theme = useTheme<Theme>();
	const [loading, setLoading] = useState(false);
	const [networks, setNetworks] = useState<IUser[]>([])

	useEffect(() => {
		setLoading(true);
		axios.get('user')
			.then(res => setNetworks(res.data.data))
			.finally(() => setLoading(false));
	}, [])

	return (
		<ScrollView
			contentContainerStyle={{
				flexGrow: 1,
				backgroundColor: theme.colors.background,
			}}>
			<Box
				padding={'sm'}
				flexDirection={'row'}
				backgroundColor={'light'}
				justifyContent={'space-between'}
				alignItems={'center'}>
				<Text color={'primary'} fontSize={20}>
					Manage my network
        		</Text>
				<Icon name={'chevron-right'} size={30} />
			</Box>
			<Box
				marginTop={'s'}
				padding={'sm'}
				flexDirection={'row'}
				backgroundColor={'light'}
				justifyContent={'space-between'}
				alignItems={'center'}>
				<Text color={'primary'} fontSize={20}>
					Invitations
       			</Text>
				<Icon name={'chevron-right'} size={30} />
			</Box>

			{
				loading ? (
					<Box marginVertical={'xl'}>
						<ActivityIndicator />
					</Box>
				)
					:
					<>
						<Box marginTop={'s'} backgroundColor={'light'}>
							<Text padding={'s'} fontSize={18}>
								People you may know from your university
              				</Text>
							<Box flexWrap={'wrap'} flexDirection={'row'}>
								{networks.map((user, index) => (
									<User key={index} user={user} />
								))}
							</Box>
						</Box>
						<Box marginTop={'s'} backgroundColor={'light'}>
							<Text padding={'s'} fontSize={18}>
								Software Engineer you may know
              				</Text>
							<Box flexWrap={'wrap'} flexDirection={'row'}>
								{networks.map((user, index) => (
									<User key={index} user={user} />
								))}
							</Box>
						</Box>
					</>
			}

		</ScrollView>
	);
};
export default withHeader(Networks);
