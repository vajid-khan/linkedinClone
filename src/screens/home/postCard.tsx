import React from 'react';
import Avatar from '../../components/avatar';
import {Box, Text} from '../../theme';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {}

const PostCard: React.FC<Props> = () => {
  return (
    <Box paddingVertical={'m'} backgroundColor={'light'} marginBottom={'s'}>
      <Box paddingHorizontal={'s'} flexDirection={'row'}>
        <Avatar />
        <Box flex={1} marginLeft={'s'}>
          <Text fontSize={22}>Title</Text>
          <Text>1.2m followers</Text>
          <Text>1h</Text>
        </Box>
        <Box>
          <Icon name={'chevron-down'} size={30} />
        </Box>
      </Box>
      <Box padding={'s'}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          explicabo in
        </Text>
      </Box>
      <Box height={200} backgroundColor={'primary'} />

      <Box padding={'s'}>
        <Text fontWeight={'bold'}>Lorem ipsum dolor sit amet consectetur</Text>
        <Text>Lorem ipsum dolor sit amet consectetur</Text>
      </Box>
      <Box
        borderTopColor={'background'}
        borderTopWidth={1}
        padding={'s'}
        flexDirection={'row'}>
        <Box flex={1} justifyContent={'center'} alignItems={'center'}>
          <Icon name={'thumbs-up-outline'} size={20} />
          <Text>Like</Text>
        </Box>
        <Box flex={1} justifyContent={'center'} alignItems={'center'}>
          <Icon name={'chatbox-ellipses-outline'} size={20} />
          <Text>Comment</Text>
        </Box>
        <Box flex={1} justifyContent={'center'} alignItems={'center'}>
          <Icon name={'md-share-social'} size={20} />
          <Text>Share</Text>
        </Box>
        <Box flex={1} justifyContent={'center'} alignItems={'center'}>
          <Icon name={'md-send'} size={20} />
          <Text>Send</Text>
        </Box>
      </Box>
    </Box>
  );
};
export default PostCard;
