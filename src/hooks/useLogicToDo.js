import { useEffect, useState } from 'react';

const useLocalStorage = () => {
    const setLocalStorage = (array) => {
        localStorage.setItem('TODOS_V1', JSON.stringify(array));
    };

    const getLocalStorage = () => {
        const data = JSON.parse(localStorage.getItem('TODOS_V1'));

        if (!data) {
            setLocalStorage([]);
            return [];
        }

        return data;
    };

    return {
        getLocalStorage,
        setLocalStorage
    };
};

const useLogicToDo = () => {
    const [toDo, setToDo] = useState([]);

    // Get the methods of a private state
    const { setLocalStorage, getLocalStorage } = useLocalStorage();

    // Once the app load the effect only get the localStorage one time
    useEffect(() => {
        setToDo(getLocalStorage());
    }, []);

    // Function to save the data in localStorage and in the current state
    const saveNewData = (newArray) => {
        setToDo(newArray);
        setLocalStorage(newArray);
    };

    // Events in the toDoCards
    const changeCompleted = (index) => {
        const newList = [...toDo];
        newList[index].completed = !newList[index].completed;

        saveNewData(newList);
    };

    const deleteToDo = (index) => {
        const newList = [...toDo];
        newList.splice(index, 1);

        saveNewData(newList);
    };

    const addToDo = (data) => {
        const newList = [...toDo];

        if (Array.isArray(data)) {
            newList.push(...data);
        } else {
            const element = {
                name: data,
                completed: false
            };
            newList.push(element);
        }

        saveNewData(newList);
    };

    return {
        toDo,
        changeCompleted,
        deleteToDo,
        addToDo
    };
};

export { useLogicToDo };
