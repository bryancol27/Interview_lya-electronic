import { useState } from 'react';

//Data Example
const arrayExample = [
    {
        name: 'Cortar Cebolla',
        completed: false
    },
    {
        name: 'Lavar la loza',
        completed: false
    },
    {
        name: 'Limpiar el carro',
        completed: true
    },
    {
        name: 'Hola mundo',
        completed: true
    }
];

const useLogicToDo = () => {
    const [toDo, setToDo] = useState(arrayExample);

    const changeCompleted = (index) => {
        const newList = [...toDo];
        newList[index].completed = !newList[index].completed;

        setToDo(newList);
    };

    const deleteToDo = (index) => {
        const newList = [...toDo];
        newList.splice(index, 1);

        setToDo(newList);
    };

    return {
        toDo,
        changeCompleted,
        deleteToDo
    };
};

export { useLogicToDo };
