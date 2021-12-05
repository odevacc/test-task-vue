export const fetchCities= [
    {name: "Москва", code:140, audience: 35416, views: 45345345},
    {name: "Владимир", code:139, audience: 56486, views: 34454125},
    {name: "Вологда", code:138, audience: 46572, views: 87721555},
    {name: "Джерзжинск", code:137, audience: 98751, views: 24566245},
    {name: "Иваново", code:136, audience: 91859, views: 81251233},
    {name: "Калуга Болдина", code:135, audience: 15678, views: 62544841},
    {name: "Калуга Московская", code:134, audience: 98475, views: 32482425},
    {name: "Кинешма", code:133, audience: 51952, views: 51238774},
    {name: "Кострома", code:132, audience: 65195, views: 45135421},
    {name: "Нижний Новгород", code:131, audience: 97892, views: 12875135},
    {name: "Рыбинск", code:130, audience: 65455, views: 92110701},
    {name: "Смоленск", code:129, audience: 65471, views: 23482775},
    {name: "Тамбов", code:128, audience: 65219, views: 11234825},
    {name: "Тула", code:127, audience: 23546, views: 79135792},
    {name: "Тутаев", code:126, audience: 75171, views: 96871324},
    {name: "Череповец", code:125, audience: 57751, views: 75135483},
    {name: "Ярославль Громова", code:124, audience: 17417, views: 48633243},
    {name: "Ярославль Фрунзе", code:123, audience: 56846, views: 51354892}
]

const wait = () => {
    return new Promise((resolve) => setTimeout(resolve, 1000));
};

export const returnCities = async () => {
    await wait()
    return fetchCities
}

export const returnStats = async (code) => {
    await wait()
    return fetchCities.find(f => f.code === code)
}