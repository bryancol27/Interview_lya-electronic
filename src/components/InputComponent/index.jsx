import React, { useContext } from 'react';

// Import module styles
import { form } from './styles.module.scss';

// Import context
import { context } from '@context/context';

const InputComponent = () => {

    const { searchToDoFunc } = useContext(context);

    const handlerChange = ({ target }) => {
        searchToDoFunc(target.value);
    };

    return(
        <form action="" className={form}>
            <label htmlFor="">Genera una busqueda</label>
            <input 
                type="text" 
                name='search' 
                onChange={handlerChange}
            />
        </form>
    );
};

export { InputComponent };