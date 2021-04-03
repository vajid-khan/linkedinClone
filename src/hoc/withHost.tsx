import React, {ReactNode} from 'react';
import { Host } from 'react-native-portalize';
import {DefaultHeader} from '../routes';

const withHost = (Component: any) => (props: Object) => {
  return (
    <Host>
      <Component {...props} />
    </Host>
  );
};
export default withHost;
