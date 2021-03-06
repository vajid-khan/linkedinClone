import React from 'react';
import {Box, Text, Theme} from '../../theme';
import {useTheme} from '@shopify/restyle';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

const TabsIcon = {
  Home: 'home',
  'My Networks': 'users',
  Post: 'plus-circle',
  Notification: 'bell',
  Jobs: 'shopping-bag',
};

const BottomTabs: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const theme = useTheme<Theme>();
  return (
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
            justifyContent={'center'}
            borderTopWidth={isFocused ? 2 : 0}
            style={{
              borderTopColor: '#000',
            }}>
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
  );
};
export default BottomTabs;
