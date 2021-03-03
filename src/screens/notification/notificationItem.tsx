import React from 'react';
import {Box, Text} from '../../theme';
import Avatar from '../../components/avatar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export interface INotification {
  id: number;
  title?: string;
  description: string;
  time: string;
  actions?: {
    title: string;
  }[];
}
interface Props {
  notification: INotification;
}

const NotificationItem: React.FC<Props> = ({notification}) => {
  return (
    <Box
      flexDirection={'row'}
      padding={'m'}
      borderBottomColor={'background'}
      borderBottomWidth={1}>
      <Avatar size={50} />
      <Box flex={1} marginHorizontal={'s'} justifyContent={'center'}>
        {notification.title && (
          <Text numberOfLines={1}>{notification.title.toUpperCase()}</Text>
        )}
        <Text numberOfLines={3}>{notification.description}</Text>
        <Box flexDirection={'row'} marginTop={'s'} flexWrap={'wrap'}>
          {notification.actions?.map((action) => (
            <Box
              key={action.title}
              paddingVertical={'s'}
              paddingHorizontal={'m'}
              borderRadius={50}
              marginRight={'s'}
              marginBottom={'s'}
              borderColor={'primary'}
              borderWidth={2}>
              <Text color={'primary'}>{action.title}</Text>
            </Box>
          ))}
        </Box>
      </Box>
      <Box>
        <Text marginBottom={'s'}>{notification.time}</Text>
        <Icon name={'dots-vertical'} size={20} />
      </Box>
    </Box>
  );
};

export default NotificationItem;
