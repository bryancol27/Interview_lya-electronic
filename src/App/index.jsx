import React, { useEffect } from 'react';

//Import of fetch call
import { getFacts } from '@utils/getRamdonFacts'; 

//Import of needed templates
import { ToDoContainer } from '@templates/toDoContainer';

//Import components
import { MoreToDoBtn } from '@components/moreToDoBtn';

//Import portal
import { Modal } from '@templates/Modal';

//Import custom hooks of portals
import { useShowModals } from '@hooks/useShowModals';

// Here we call each of templates or big components
const App = () => {

    const { modalAddToDo, setModalAddToDo } = useShowModals();

    useEffect(() => {
        getFacts(0)
            .then((res) => console.log(res));
    }, []);

    return(
        <React.Fragment>
            <ToDoContainer/>

            {/* Modal to add a toDo */}
            <Modal isShow={modalAddToDo} closeModal={ setModalAddToDo } />
            
            {/* Modal to Do random toDos */}


            <MoreToDoBtn openModal={ setModalAddToDo } />
        </React.Fragment>
    );
};

export { App };