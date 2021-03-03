import React from 'react';
import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Box, Text} from '../../theme';

const {width} = Dimensions.get('screen');

interface Props {}

const JobHighlightCard: React.FC<Props> = () => {
  return (
    <Box width={width * 0.8} marginHorizontal={'s'}>
      <Box padding={'m'} backgroundColor={'light'} borderRadius={10}>
        <Box
          flexDirection={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}>
          <Text variant={'bold'} fontSize={16}>
            Resume Downloaded 6d
          </Text>
          <Icon name={'close'} size={25} />
        </Box>
        <Text>
          Your resume has been downloade.Earn a skill badge to stand out even
          more.
        </Text>
        <Box margin={'m'} flexDirection={'row'}>
          <Icon name={'office-building'} size={40} />
          <Box>
            <Text variant={'bold'}>Full Stack Engineer</Text>
            <Text>Google Inc</Text>
            <Text>India</Text>
          </Box>
        </Box>
        <Box
          marginTop={'l'}
          paddingVertical={'s'}
          paddingHorizontal={'l'}
          backgroundColor={'primary'}
          borderRadius={100}
          alignItems={'center'}>
          <Text color={'light'} fontSize={20}>
            Earn Skill Badges
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
export default JobHighlightCard;
