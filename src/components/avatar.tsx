import React from 'react';
import {Box} from '../theme';

interface Props {}

const Avatar: React.FC<Props> = () => {
  return (
    <Box
      height={60}
      width={60}
      borderRadius={30}
      backgroundColor={'secondary'}
    />
  );
};
export default Avatar;
