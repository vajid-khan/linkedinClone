import React from 'react';
import Avatar from '../../components/avatar';
import {Box, Text} from '../../theme';
import Icon from 'react-native-vector-icons/Ionicons';
import { Image } from 'react-native';
import { IPost } from '../../lib/interface';
interface Props {
  post:IPost;
  openAction: () => void;
}

const PostCard: React.FC<Props> = ({openAction,post}) => {
  return (
    <Box paddingTop={'m'} backgroundColor={'light'} marginTop={'s'}>
      <Box paddingHorizontal={'s'} flexDirection={'row'}>
        <Avatar picture={post.owner.picture} />
        <Box flex={1} marginLeft={'s'}>
          <Text variant={'bold'} fontSize={20} numberOfLines={1}>
            {`${post.owner.firstName} ${post.owner.lastName}`}
          </Text>
          <Text>1.2m followers</Text>
          <Text>1h</Text>
        </Box>
        <Box>
          <Icon name={'chevron-down'} size={30} onPress={openAction} />
        </Box>
      </Box>
      <Box padding={'s'}>
        <Text>
          {post.text}
        </Text>
      </Box>
      <Box height={200} backgroundColor={'primary'}>
        <Image
          resizeMode={'cover'}
          style={{height:200,}}
          source={{uri:post.image}}
        />
        </Box>

      <Box padding={'s'}>
        <Text fontWeight={'bold'}>{post.text}</Text>
        <Text>{post.link}</Text>
      </Box>
      <Box margin={'sm'} flexDirection={'row'}>
        <Box
          backgroundColor={'primary'}
          borderRadius={100}
          marginRight={'s'}
          style={{padding: 3}}>
          <Icon name={'thumbs-up-outline'} size={15} color={'#fff'} />
        </Box>
        <Text>{post.likes}</Text>
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
          <Icon
            name={'md-send'}
            size={20}
            style={{transform: [{rotate: '-45deg'}]}}
          />
          <Text>Send</Text>
        </Box>
      </Box>
    </Box>
  );
};
export default PostCard;
