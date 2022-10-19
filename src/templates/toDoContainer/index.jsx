import React from 'react';

//Import components Needed
import { ToDo } from '@components/toDo';

//Import module Styles
import { toDoContainer } from './styles.module.scss';

//Import custom Hook
import { useLogicToDo } from '@hooks/useLogicToDo';

const ToDoContainer = () => {

    const {         
        toDo,
        changeCompleted,
        deleteToDo 
    } = useLogicToDo();

    return(
        <div className={toDoContainer}>

            {/* A map for each Task */}
            { toDo.map((element, index) => 
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