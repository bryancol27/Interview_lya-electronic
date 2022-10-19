import React, { useEffect } from 'react';

//Import of fetch call
import { getFacts } from '@utils/getRamdonFacts'; 

//Import of needed templates
import { ToDoContainer } from '@templates/toDoContainer';

// Here we call each of templates or big components
const App = () => {

    useEffect(() => {
        getFacts(0)
            .then((res) => console.log(res));
    }, []);

    return(
        <ToDoContainer/>
    );
};

export { App };