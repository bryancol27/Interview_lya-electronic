import { useState } from 'react';

const useShowModals = () => {
    const [modalAddToDo, setModalAddToDo] = useState(false);
    const [randomAddToDo, setRandomAddToDo] = useState(false);

    return {
        modalAddToDo,
        randomAddToDo,
        setModalAddToDo,
        setRandomAddToDo
    };
};

export { useShowModals };
