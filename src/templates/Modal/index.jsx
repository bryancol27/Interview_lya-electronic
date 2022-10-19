import React, { useRef, useContext } from 'react';
import ReactDOM from 'react-dom';

// Path of the container 
const modalContainer = document.getElementById('modalContainer');

// Module styles
import { modalContainerS, modalForm } from './styles.module.scss';

//Import Context
import { context } from '@context/context';

const Modal = ({ isShow,  closeModal}) => {

    const { addToDo } = useContext(context);

    const Ref = useRef(null);

    const handlerSend = () => {
        const formData = new FormData(Ref.current);
        const task = formData.get('task');
        
        addToDo(task);
    };

    return (
        isShow 
            && ReactDOM.createPortal(
                <div className={modalContainerS}>
                    
                    <form className={modalForm} ref={Ref}>
                        <label htmlFor="task">Introduce la tarea</label>
                        <input type="text" name='task' required/>

                        <div className=''>
                            <button onClick={() => closeModal(false)} type='button'>Cancelar</button>
                            <button onClick={handlerSend} type='button'>Agregar To Do</button>
                        </div>
                    </form>

                </div>,
                modalContainer
            ));
};
        
export { Modal };