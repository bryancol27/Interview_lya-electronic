import React, { useRef, useContext } from 'react';
import ReactDOM from 'react-dom';

// Path of the container 
import { modalContainer } from '@utils/node';

// Module styles
import { modalContainerS, modalForm, buttons } from './styles.module.scss';

//Import Context
import { context } from '@context/context';

//Import propTypes
import PropTypes from 'prop-types';

//Import of fetch call
import { getFacts } from '@utils/getRamdonFacts'; 

// Type 0 is new ToDo, type 1 is random task, type 2 is edit a prev task.
const texts = [
    'Introduce la tarea',
    'Cuantas tareas quieres',
    'Edita la tarea', 
];

// The type evaluate what type of modal have to be loaded.
const Modal = ({ isShow,  closeModal, type}) => {

    const { addToDo } = useContext(context);

    const Ref = useRef(null);

    const handlerSend = async () => {
        const formData = new FormData(Ref.current);
        const task = formData.get('task');

        closeModal(false);

        //If the type is equal to 1 OR 2 it have to make a different process
        if(type == 1){
            const data = await getFacts(task); 
            addToDo(data);
            return;
        }
        else if(type == 2){
            null;
            return;
        }

        // If the process is a simple task it append in the data
        addToDo(task);
    };

    return (
        isShow 
            && ReactDOM.createPortal(
                <div className={modalContainerS}>
                    
                    <form className={modalForm} ref={Ref}>
                        <label htmlFor="task">{texts[type]}</label>
                        <input type="text" name='task' required/>

                        <div className={buttons}>
                            <button 
                                onClick={() => closeModal(false)} 
                                type='button'
                            >Cancelar</button>
                            
                            <button 
                                onClick={handlerSend} 
                                type='button'
                            >Agregar</button>
                        </div>
                    </form>

                </div>,
                modalContainer
            )
    );
};

Modal.propTypes = {
    isShow: PropTypes.bool,
    closeModal: PropTypes.func,
    type: PropTypes.number
};

export { Modal };