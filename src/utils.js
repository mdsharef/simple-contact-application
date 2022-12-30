function* generateId() {
    let id = 100;
    while(true) {
        yield id++;
    }
}

export const getId = generateId();

export function addValueFunc(obj) {
    return Object.keys(obj).reduce((acc, cur) => {
        acc[cur] = {
            ...obj[cur],
            id: getId.next().value,
            value: '',
        }
        return acc;
    }, {})
}

export function createFormDataArr(obj) {
    return Object.keys(obj).map(key => (
        {
            name: key,
            ...obj[key]
        }
    ))
}

export function createContactObj(obj) {
    return Object.keys(obj).reduce((acc, cur) => {
        acc[cur] = obj[cur].value;
        return acc;
    }, {})
}