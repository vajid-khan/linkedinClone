import React from 'react';
import Avatar from '../components/avatar';
import {Box, Text} from '../theme';

interface Props {}

const LeftDrawer: React.FC<Props> = () => {
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
            <Box alignItems={'center'} justifyContent={'space-between'}>
              <Text
                variant={'boldTitle'}
                fontWeight={'bold'}
                paddingVertical={'s'}>
                Vajidali Khan
              </Text>
              <Box flexDirection={'row'}>
                <Text color={'primary'}>View Profile</Text>
                <Text>{' . '}</Text>
                <Text color={'primary'}>Settings</Text>
              </Box>
            </Box>
            <Text>X</Text>
          </Box>
        </Box>
      </Box>

      <Box paddingHorizontal={'s'} paddingTop={'m'}>
        <Text variant={'secondary'}>Recent</Text>
        <Link title={'React Native'} />
        <Link title={'React Native Jobs'} />
        <Link title={'UAE Jobs & Careers | React Native'} />
        <Link title={'PHP'} />
      </Box>

      <Box paddingHorizontal={'s'} paddingTop={'m'}>
        <Text variant={'secondary'}>Groups</Text>
        <Link title={'React Native'} />
        <Link title={'PHP'} />
      </Box>
    </>
  );
};

interface ILink {
  title: string;
}

const Link = ({title}: ILink) => (
  <Box paddingHorizontal={'s'} paddingVertical={'m'}>
    <Text fontSize={18} fontWeight={'700'} numberOfLines={1}>
      {title}
    </Text>
  </Box>
);

export default LeftDrawer;
