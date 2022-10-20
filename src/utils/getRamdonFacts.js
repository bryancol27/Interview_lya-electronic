let baseURL = 'https://catfact.ninja/fact';

const getFacts = async (fact = 0) => {
    //If the person wants more than 1 task it change the url endpoint
    if (fact > 1) baseURL += `s?limit=${fact}`;

    //Data fetch
    const res = await fetch(baseURL);
    const data = await res.json();

    // The next functions and return make that data map in a object schema for the toDo List
    if (fact > 1) {
        return data.data.map((element) => {
            return { name: element.fact, completed: false };
        });
    }

    return data.fact;
};

export { getFacts };
