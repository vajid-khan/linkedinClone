import React, {ReactNode} from 'react';
import {DefaultHeader} from '../routes';

const withHeader = (Screen: any, actions?: ReactNode) => (props: Object) => {
  return (
    <>
      <DefaultHeader rightActions={actions} />
      <Screen {...props} />
    </>
  );
};
export default withHeader;
