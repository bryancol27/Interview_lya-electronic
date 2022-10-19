let baseURL = 'https://catfact.ninja/fact';

const getFacts = async (fact = 0) => {
    //If the person wants more than 1 task it change the url endpoint
    if (fact > 1) baseURL += `s?limit=${fact}`;

    //Data fetch
    const res = await fetch(baseURL);
    const data = res.json();

    return data;
};

export { getFacts };
