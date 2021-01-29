import { createContext } from 'react';
import roleNames from '../../utils/roleNames';

const StoreContext = createContext( {
    token: null,
    setToken: () => { },
    role: roleNames.DEFAULT,
    setRole: () => { },
} );

export default StoreContext;
