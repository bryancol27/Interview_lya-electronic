import React from 'react';

//Import context to create a component
import { context } from './context';

//Import propTypes
import PropTypes from 'prop-types';

//Import hook
import { useLogicToDo } from '@hooks/useLogicToDo';

// This components is going to distribute all of the toDo list through the app and her updaters
const GlobalContext = ({ children }) => {
    
    const logicToDo = useLogicToDo();
    
    return(
        <context.Provider value={logicToDo}>
            {/* The children component to render all inside this element */}
            { children }
        </context.Provider>
    );
};

GlobalContext.propTypes = {
    children: PropTypes.node
};

export { GlobalContext };