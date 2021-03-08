import React from 'react';
import {Box, Text} from '../../theme';

interface Props {}

const News: React.FC<Props> = () => {
  return (
    <Box padding={'sm'} marginTop={'s'} backgroundColor={'light'}>
      <Text>Today's news and views</Text>
      {new Array(10)
        .fill(0)
        .map((_, i) => i)
        .map((index) => (
          <Box key={index} paddingVertical={'m'} flexDirection={'row'}>
            <Box flex={1} paddingLeft={'s'}>
              <Text variant={'bold'} fontSize={16} numberOfLines={1}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                provident, nam quis omnis magnam perspiciatis, illo sit nostrum
                veritatis veniam excepturi inventore adipisci nemo ipsum
                temporibus placeat repellendus fugit. Ex?
              </Text>
              <Text numberOfLines={2}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                provident, nam quis omnis magnam perspiciatis, illo sit nostrum
                veritatis veniam excepturi inventore adipisci nemo ipsum
                temporibus placeat repellendus fugit. Ex?
              </Text>
            </Box>
            <Box
              height={60}
              width={80}
              marginLeft={'s'}
              backgroundColor={'primary'}
            />
          </Box>
        ))}
    </Box>
  );
};
export default News;
