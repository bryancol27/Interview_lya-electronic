import React from 'react';

//Import of needed templates
import { ToDoContainer } from '@templates/toDoContainer';

//Import components
import { ButtonFixed } from '@components/ButtonFixed';

//Import portals
import { Modal } from '@templates/Modal';

//Import custom hooks of portals
import { useShowModals } from '@hooks/useShowModals';

// Here we call each of templates or big components
const App = () => {

    const { modalAddToDo, setModalAddToDo, randomAddToDo ,setRandomAddToDo } = useShowModals();

    return(
        <React.Fragment>
            <ToDoContainer/>

            {/* Modal to add a toDo */}
            <Modal isShow={modalAddToDo} closeModal={ setModalAddToDo } type={0}/>
            
            {/* Modal to Do random toDos */}
            <Modal isShow={randomAddToDo} closeModal={ setRandomAddToDo } type={1}/>


            <div className='container__button'>
                <ButtonFixed type={ setModalAddToDo } random={false} />
                <ButtonFixed type={ setRandomAddToDo } random={true} />
            </div>
        </React.Fragment>
    );
};

export { App };