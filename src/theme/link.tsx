import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Box, Text} from '.';

interface Props {
  title: string;
  icon?: string;
  boldTitle?: boolean;
  onPress: () => void;
}

const Link: React.FC<Props> = ({title, icon, boldTitle, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Box paddingVertical={'sm'} flexDirection={'row'} alignItems={'center'}>
        {icon ? (
          <Box marginRight={'s'}>
            <Icon name={icon} size={20} />
          </Box>
        ) : null}
        <Text variant={boldTitle ? 'bold' : 'title'}>{title}</Text>
      </Box>
    </TouchableOpacity>
  );
};
export default Link;
