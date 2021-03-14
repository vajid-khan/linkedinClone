import React from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';

import {Box, Text} from '../../theme';
import {Modalize} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SCREEN_HEIGHT = Dimensions.get('screen').height;

interface Props {}

const BottomSheet: React.FC<Props> = React.forwardRef(
  ({children}, ref: React.MutableRefObject<Modalize>) => {
    return (
      <Portal>
        <Modalize
          ref={ref}
          onBackButtonPress={() => {
            ref.current?.close();
            return true;
          }}
          closeOnOverlayTap={true}
          panGestureEnabled
          withHandle
          modalHeight={SCREEN_HEIGHT * 0.4}>
          {children}
        </Modalize>
      </Portal>
    );
  },
);

export default BottomSheet;

interface ActionProp {
  icon?: string;
  title: string;
}

export const ActionItem = ({icon, title}: ActionProp) => {
  return (
    <TouchableOpacity>
      <Box padding={'m'} flexDirection={'row'} alignItems={'center'}>
        {icon ? <Icon name={icon} size={25} /> : null}
        <Text paddingLeft={'sm'}>{title}</Text>
      </Box>
    </TouchableOpacity>
  );
};
