import useStorage from '../../utils/useStora';
import StoreContext from './Context';

const StoreProvider = ( { children } ) => {
    const [ token, setToken ] = useStorage( 'token' );
    const [ role, setRole ] = useStorage( 'role' );

    return (
        <StoreContext.Provider
            value={ {
                token, setToken,
                role, setRole,
            } }
        >
            {children }
        </StoreContext.Provider>
    );
}

export default StoreProvider;
