import React from 'react';
import {Dimensions} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Box, Text} from '../../theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CARD_WIDTH = Dimensions.get('screen').width * 0.8;

interface Props {
  onRemove: () => void;
}

const JobHighlightCard: React.FC<Props> = ({onRemove}) => {
  const animatedScale = useSharedValue(1);

  const removeCard = () => {
    animatedScale.value = withTiming(0, undefined, () => runOnJS(onRemove)());
  };

  const style = useAnimatedStyle(() => {

    return {
      width: interpolate(
        animatedScale.value,
        [0, 1],
        [0, CARD_WIDTH],
        Extrapolate.CLAMP,
      ),
      opacity: interpolate(
        animatedScale.value,
        [0, 1],
        [0, 1],
        Extrapolate.CLAMP,
      ),
      transform: [{scale: animatedScale.value}],
    };
  });

  return (
    <Animated.View style={style}>
      <Box marginHorizontal={'s'} width={CARD_WIDTH * 0.95}>
        <Box padding={'m'} backgroundColor={'light'} borderRadius={10}>
          <Box
            flexDirection={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}>
            <Text variant={'bold'} fontSize={16}>
              Resume Downloaded 6d
            </Text>
            <Icon name={'close'} size={25} onPress={removeCard} />
          </Box>
          <Text>
            Your resume has been downloade.Earn a skill badge to stand out even
            more.
          </Text>
          <Box margin={'m'} flexDirection={'row'}>
            <Icon name={'office-building'} size={40} />
            <Box>
              <Text variant={'bold'}>Full Stack Engineer</Text>
              <Text>Google Inc</Text>
              <Text>India</Text>
            </Box>
          </Box>
          <Box
            marginTop={'l'}
            paddingVertical={'s'}
            paddingHorizontal={'l'}
            backgroundColor={'primary'}
            borderRadius={100}
            alignItems={'center'}>
            <Text color={'light'} fontSize={20}>
              Earn Skill Badges
            </Text>
          </Box>
        </Box>
      </Box>
    </Animated.View>
  );
};
export default JobHighlightCard;
