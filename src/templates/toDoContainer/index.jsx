import React, { useContext } from 'react';

//Import components Needed
import { ToDo } from '@components/toDo';

//Import module Styles
import { toDoContainer, noToDoTitle } from './styles.module.scss';

//Import context
import { context } from '@context/context';

const ToDoContainer = () => {

    const {      
        searchedToDos,
        changeCompleted,
        deleteToDo 
    } = useContext(context);

    return(
        <div className={toDoContainer}>

            { (searchedToDos.length <= 0) && <h1 className={noToDoTitle}>¡Crea tu primer ToDo!</h1> }

            {/* A map for each Task */}
            { searchedToDos.map((element, index) => 
                <ToDo 
                    key={index} 
                    index={index}
                    fCompleted={changeCompleted}
                    fDelete={deleteToDo}
                    element={element}
                />) }
        </div>
    );
};

export { ToDoContainer };