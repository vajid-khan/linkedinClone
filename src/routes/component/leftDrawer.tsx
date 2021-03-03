import React from 'react';
import {ScrollView} from 'react-native';
import {Box, Text} from '../../theme';
import Avatar from '../../components/avatar';
import FIcon from 'react-native-vector-icons/Feather';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
                variant={'boldTitle'}
                fontWeight={'bold'}
                paddingVertical={'s'}
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
          <Box paddingTop={'m'}>
            <Text variant={'secondary'}>Recent</Text>
            <Link icon={'users'} title={'React Native'} />
            <Link icon={'users'} title={'React Native Jobs'} />
            <Link icon={'users'} title={'UAE Jobs & Careers | React Native'} />
            <Link icon={'users'} title={'PHP'} />
          </Box>

          <Box
            paddingTop={'m'}
            borderTopColor={'background'}
            borderTopWidth={1}>
            <Text color={'primary'}>Groups</Text>
            <Link icon={'users'} title={'React Native'} />
            <Link icon={'users'} title={'PHP Laravel'} />
            <Link title={'Show More'} />
          </Box>

          <Box
            paddingTop={'m'}
            borderTopColor={'background'}
            borderTopWidth={1}>
            <Text color={'primary'}>Events</Text>
            <Link icon={'plus'} title={'Create Event'} />
          </Box>

          <Box
            paddingTop={'m'}
            borderTopColor={'background'}
            borderTopWidth={1}>
            <Text color={'primary'}>Followed Hashtags</Text>
            <Link icon={'hash'} title={'javascript'} />
            <Link icon={'hash'} title={'reactjs'} />
            <Link icon={'hash'} title={'laravel'} />
            <Link icon={'hash'} title={'laracon'} />
            <Link title={'Show More'} />
          </Box>

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

interface ILink {
  title: string;
  icon?: 'hash' | 'users' | 'plus';
}

const Link = ({title, icon}: ILink) => (
  <Box paddingVertical={'sm'} flexDirection={'row'} alignItems={'center'}>
    {icon && <FIcon name={icon} size={20} />}
    <Text fontSize={16} fontWeight={'700'} numberOfLines={1} paddingLeft={'s'}>
      {title}
    </Text>
  </Box>
);

export default LeftDrawer;
