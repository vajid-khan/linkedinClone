import React from 'react';
import {Theme} from '../../theme';
import {FlatList} from 'react-native';
import {useTheme} from '@shopify/restyle';
import withHeader from '../../hoc/withHeader';
import NotificationItem, {INotification} from './notificationItem';

interface Props {}

const notifications: INotification[] = [
  {
    id: 1,
    description: 'Trendging: Zoom Fatigue is hitting us hard',
    time: '2h',
  },
  {
    id: 2,
    description:
      'Jhon Doe shared a post: Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book.',
    time: '2h',
  },
  {
    id: 3,
    description: 'Checkout this new job posting',
    time: '6h',
  },
  {
    id: 4,
    title: 'Your Job Alert',
    description: 'Vajidali, 14 new jobs for laravel developer in world',
    time: '6h',
    actions: [
      {
        title: 'View new Jobs',
      },
    ],
  },
  {
    id: 5,
    title: 'Your Job Alert',
    description: 'Vajidali, 1 new job for full stack developer in world',
    time: '6h',
    actions: [
      {
        title: 'View new Jobs',
      },
    ],
  },
  {
    id: 6,
    description: 'Trendging: Zoom Fatigue is hitting us hard',
    time: '2h',
  },
  {
    id: 7,
    description:
      'Jhon Doe shared a post: Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book.',
    time: '2h',
  },
  {
    id: 8,
    description: 'Checkout this new job posting',
    time: '6h',
  },
  {
    id: 9,
    title: 'Your Job Alert',
    description: 'Vajidali, 14 new jobs for laravel developer in world',
    time: '6h',
    actions: [
      {
        title: 'View new Jobs',
      },
    ],
  },
  {
    id: 10,
    title: 'Your Job Alert',
    description: 'Vajidali, 1 new job for full stack developer in world',
    time: '6h',
    actions: [
      {
        title: 'View new Jobs',
      },
    ],
  },
];

const Notification: React.FC<Props> = () => {
  const theme = useTheme<Theme>();

  return (
    <FlatList
      contentContainerStyle={{
        backgroundColor: theme.colors.light,
      }}
      data={notifications}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => <NotificationItem notification={item} />}
    />
  );
};

export default withHeader(Notification);
