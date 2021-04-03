import React from 'react';
import { Image } from 'react-native';
import { Box } from '../../theme';

interface Props {
	size?: number;
	picture?: string;
}

const Avatar: React.FC<Props> = ({ size, picture }) => {
	size = size ? size : 60;

	return (
		<Box
			height={size}
			width={size}
			borderRadius={size / 2}
			backgroundColor={'secondary'}
			overflow={'hidden'}
		>
			<Image
				style={{ flex: 1 }}
				source={{ uri: picture || 'https://cdn.dribbble.com/users/2052072/screenshots/4121937/face-rb.jpg' }}
			/>
		</Box>
	);
};
export default Avatar;
