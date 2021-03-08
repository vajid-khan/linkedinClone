import {createContext} from 'react';

const UserContext = createContext({
  user: undefined,
  setUser: (user: any) => undefined,
});

export default UserContext;
