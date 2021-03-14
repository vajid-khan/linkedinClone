import React, {useEffect} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {
  PanGestureHandler,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Box} from '../../theme';

const SCREEN_HEIGHT = Dimensions.get('screen').height;

interface Props {
  open: boolean;
  close: () => void;
}

const BottomSheet: React.FC<Props> = ({children, open, close}) => {
  const translateY = useSharedValue(0);

  useEffect(() => {
    translateY.value = withTiming(open ? SCREEN_HEIGHT : 0);
  }, [open]);

  const style = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            translateY.value,
            [0, SCREEN_HEIGHT],
            [SCREEN_HEIGHT, 0],
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  });

  const gestureEvent = useAnimatedGestureHandler({
    onActive: ({translationY}) => {
      if (translationY > 0) {
        translateY.value = translationY;
      }
    },
    onEnd: () => {
      translateY.value = withTiming(0);
    },
  });

  return (
    <Animated.View style={[styles.container, style]}>
      <TouchableOpacity style={styles.touchable} onPress={close} />
      <View style={styles.content}>
        <Box flex={1} backgroundColor={'light'}>
          <PanGestureHandler onGestureEvent={gestureEvent}>
            <Animated.View style={styles.drag}>
              <Box
                height={5}
                width={50}
                borderRadius={5}
                marginVertical={'sm'}
                backgroundColor={'background'}
              />
            </Animated.View>
          </PanGestureHandler>
          {children}
        </Box>
      </View>
    </Animated.View>
  );
};
export default React.memo(BottomSheet);

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  touchable: {
    opacity: 0.25,
    height: SCREEN_HEIGHT * 0.5,
  },
  drag: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    elevation: 20,
    overflow: 'hidden',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
