import { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import pathNames from '../../../utils/pathNames';

const RoutesPrivade = ( { component: Component, requiredRole, path, ...rest } ) => {
    const { role } = useContext( StoreContext );
    return (
        <Route
            { ...rest }
            render={ () => role >= requiredRole
                ? <Component { ...rest } />
                : <Redirect to={ pathNames.acessoNegado } />
            }
        />
    );
}

export default RoutesPrivade;
