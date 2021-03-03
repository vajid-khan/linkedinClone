import React from 'react';
import {Box} from '../theme';

interface Props {
  size?: number;
}

const Avatar: React.FC<Props> = ({size}) => {
  size = size ? size : 60;

  return (
    <Box
      height={size}
      width={size}
      borderRadius={size / 2}
      backgroundColor={'secondary'}
    />
  );
};
export default Avatar;
