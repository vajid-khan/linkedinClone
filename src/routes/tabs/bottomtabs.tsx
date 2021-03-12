/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Box, Text, Theme} from '../../theme';
import {useTheme} from '@shopify/restyle';
import {Dimensions, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const TabsIcon = {
  Home: 'home',
  'My Networks': 'users',
  Post: 'plus-circle',
  Notification: 'bell',
  Jobs: 'shopping-bag',
};

const SCEEN_WIDTH = Dimensions.get('screen').width;

const BottomTabs: React.FC<BottomTabBarProps> = (props) => {
  const theme = useTheme<Theme>();
  const {state, descriptors, navigation} = props;
  const width = SCEEN_WIDTH / state.routes.length;
  const topBorderTranslateY = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: topBorderTranslateY.value}],
    };
  });

  return (
    <>
      <Animated.View
        style={[
          {
            backgroundColor: theme.colors.primary,
            width,
            height: 2,
          },
          animatedStyle,
        ]}
      />

      <Box flexDirection={'row'}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            topBorderTranslateY.value = withTiming(width * index);
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <Box
              flex={1}
              key={index}
              paddingVertical={'s'}
              alignItems={'center'}
              justifyContent={'center'}>
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={{alignItems: 'center'}}>
                <Icon
                  name={TabsIcon[route.name]}
                  size={20}
                  color={
                    isFocused ? theme.colors.primary : theme.colors.background
                  }
                />
                <Text numberOfLines={1} fontSize={12}>
                  {label}
                </Text>
              </TouchableOpacity>
            </Box>
          );
        })}
      </Box>
    </>
  );
};
export default BottomTabs;
