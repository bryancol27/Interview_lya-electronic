import React from 'react';

//Import prop-types
import Proptypes from 'prop-types';

const MoreToDoBtn = ({ openModal }) => {

    return(
        <button onClick={ () => openModal(true) }>Hola mundo</button>
    );
};

MoreToDoBtn.propTypes = {
    openModal: Proptypes.func
};

export { MoreToDoBtn };
