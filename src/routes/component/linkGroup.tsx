import React from 'react';
import Animated, {
	Extrapolate,
	interpolate,
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated';
import { Box, Text } from '../../theme';

import { Platform, TouchableOpacity,TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const LINK_HEIGHT = 50;

interface Props {
	title: string;
	initialLinkCount?: number;
	links: {
		icon: string;
		title: string;
		onPress: () => void;
	}[];
}
interface LinkProps {
	title: string;
	icon?: string;
	boldTitle?: boolean;
	onPress: () => void;
}

const BtnLink: React.FC<LinkProps> = ({ title, icon, boldTitle, onPress }) => {
	const BTN = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
	
	return (
		<BTN onPress={onPress}>
			<Box paddingHorizontal={'s'} flexDirection={'row'} alignItems={'center'}>
				{icon ? (
					<Box marginRight={'s'}>
						<Icon name={icon} size={20} />
					</Box>
				) : null}
				<Text variant={boldTitle ? 'bold' : 'title'}>{title}</Text>
			</Box>
		</BTN>
	);
};

const LinkGroup = ({ links, title, initialLinkCount = 3 }: Props) => {
	const more = links.splice(initialLinkCount);

	const height = useSharedValue(0);
	const style = useAnimatedStyle(() => {
		return {
			height: interpolate(
				height.value,
				[0, 1],
				[0, more.length * LINK_HEIGHT],
				Extrapolate.CLAMP,
			),
			opacity: interpolate(height.value, [0, 1], [0, 1], Extrapolate.CLAMP),
		};
	});

	const showMoreStyle = useAnimatedStyle(() => {
		return {
			height: interpolate(
				height.value,
				[0, 1],
				[LINK_HEIGHT, 0],
				Extrapolate.CLAMP,
			),
			opacity: interpolate(
				height.value,
				[0, 0.5, 1],
				[1, 0, 0],
				Extrapolate.CLAMP,
			),
		};
	});

	return (
		<Box paddingTop={'m'} borderTopColor={'background'} borderTopWidth={1}>
			<Text color={'primary'} padding={'s'}>{title}</Text>
			{links.map((link, index) => (
				<Box key={index} height={LINK_HEIGHT}>
					<BtnLink key={index} boldTitle {...link} />
				</Box>
			))}
			{more.length ? (
				<>
					<Animated.View style={style}>
						{more.map((link, index) => (
							<Box key={index} height={LINK_HEIGHT}>
								<BtnLink key={index} boldTitle {...link} />
							</Box>
						))}
					</Animated.View>
					<Animated.View style={showMoreStyle}>
						<BtnLink
							boldTitle
							title={'Show More'}
							onPress={() => (height.value = withTiming(1))}
						/>
					</Animated.View>
				</>
			) : null}
		</Box>
	);
};

export default LinkGroup;
