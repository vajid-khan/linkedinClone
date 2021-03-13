import {useTheme} from '@shopify/restyle';
import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import {Theme} from '../../theme';

const SCREEN_HEIGHT = Dimensions.get('screen').height;

interface Props {
  translateY: Animated.SharedValue<number>;
}

const BottomSheet: React.FC<Props> = ({children, translateY}) => {
  const theme = useTheme<Theme>();
  const style = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            translateY.value,
            [0, 1],
            [SCREEN_HEIGHT, 0],
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  });

  return (
    <Animated.View style={[{...StyleSheet.absoluteFillObject}, style]}>
      <TouchableOpacity
        style={{
          height: SCREEN_HEIGHT * 0.4,
          backgroundColor: theme.colors.background,
          opacity: 0.25,
        }}
        onPress={() => (translateY.value = withSpring(0))}
      />
      <View style={{flex: 1, backgroundColor: theme.colors.light}}>
        {children}
      </View>
    </Animated.View>
  );
};
export default BottomSheet;
