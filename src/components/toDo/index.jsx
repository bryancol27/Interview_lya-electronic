import React from 'react';

//Import PropTypes
import PropTypes from 'prop-types';

//Import module styles
import { toDoSimbols, toDoStyles, completedS, incompletedS } from './styles.module.scss';

const ToDo = ({ element, index, fCompleted, fDelete  }) => {

    //Element props
    const { name, completed } = element;

    const handleDelete = () => {
        // If the task doesnt complete it return and not process anything
        if(!completed) return;

        fDelete(index);
    };

    return (
        <div className={toDoStyles}>
            <button
                className={`${toDoSimbols}`}
                onClick={() => fCompleted(index)}
            >✅</button>
            
            <h1 className={completed ? completedS : incompletedS }>{name}</h1>

            <button 
                className={`${toDoSimbols}`}
                onClick={handleDelete}
            >❌</button>
        </div>
    );
};

ToDo.propTypes = {
    element: PropTypes.shape(
        {
            name: PropTypes.string,
            completed: PropTypes.bool,
        }
    ),
    index: PropTypes.number,
    fCompleted: PropTypes.func,
    fDelete: PropTypes.func
};

export { ToDo };