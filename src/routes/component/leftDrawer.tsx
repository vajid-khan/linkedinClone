import React from 'react';
import {ScrollView} from 'react-native';
import {Box, Text} from '../../theme';
import Avatar from '../../components/avatar';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinkGroup from './linkGroup';

const LeftDrawer: React.FC<DrawerContentComponentProps> = ({navigation}) => {
  return (
    <>
      <Box
        paddingVertical={'l'}
        paddingHorizontal={'s'}
        backgroundColor={'background'}>
        <Box>
          <Box
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-around'}>
            <Avatar />
            <Box alignItems={'center'}>
              <Text
                variant={'bold'}
                fontWeight={'bold'}
                paddingVertical={'s'}
                fontSize={20}
                numberOfLines={1}>
                Vajidali Khan
              </Text>
              <Box flexDirection={'row'} alignItems={'center'}>
                <Text color={'primary'} paddingRight={'s'}>
                  View Profile
                </Text>
                <Icon name={'checkbox-blank-circle'} size={5} />
                <Text color={'primary'} paddingLeft={'s'}>
                  Settings
                </Text>
              </Box>
            </Box>
            <Icon name={'close'} size={30} onPress={navigation.closeDrawer} />
          </Box>
        </Box>
      </Box>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box marginRight={'s'} paddingHorizontal={'m'}>
          <LinkGroup
            title={'Recent'}
            initialLinkCount={5}
            links={[
              {
                icon: 'users',
                title: 'React Native',
                onPress: () => false,
              },
              {
                icon: 'users',
                title: 'React Native Jobs',
                onPress: () => false,
              },
              {
                icon: 'users',
                title: 'UAE Jobs & Careers | React Native',
                onPress: () => false,
              },
              {
                icon: 'users',
                title: 'Jobs & Careers | React Native',
                onPress: () => false,
              },
              {
                icon: 'users',
                title: 'PHP Developers',
                onPress: () => false,
              },
            ]}
          />

          <LinkGroup
            initialLinkCount={3}
            title={'Groups'}
            links={[
              {
                icon: 'users',
                title: 'React Native',
                onPress: () => false,
              },
              {
                icon: 'users',
                title: 'React',
                onPress: () => false,
              },
              {
                icon: 'users',
                title: 'React Native Web',
                onPress: () => false,
              },
              {
                icon: 'users',
                title: 'PHP Laravel',
                onPress: () => false,
              },
              {
                icon: 'users',
                title: 'React Jobs',
                onPress: () => false,
              },
            ]}
          />

          <LinkGroup
            initialLinkCount={2}
            title={'Followed Hashtags'}
            links={[
              {
                icon: 'hash',
                title: 'javacript',
                onPress: () => false,
              },
              {
                icon: 'hash',
                title: 'reactjs',
                onPress: () => false,
              },
              {
                icon: 'hash',
                title: 'javacript',
                onPress: () => false,
              },
              {
                icon: 'hash',
                title: 'laravel',
                onPress: () => false,
              },
              {
                icon: 'hash',
                title: 'laracon',
                onPress: () => false,
              },
              {
                icon: 'hash',
                title: 'computing',
                onPress: () => false,
              },
            ]}
          />

          <Box
            paddingTop={'m'}
            marginBottom={'l'}
            borderTopColor={'background'}
            borderTopWidth={1}>
            <Text color={'primary'}>Discover More</Text>
          </Box>
        </Box>
      </ScrollView>
    </>
  );
};

export default LeftDrawer;
