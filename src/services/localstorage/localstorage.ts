export const setLocalData = (key: string, data: any) => {
    try {
        localStorage.setItem(key, JSON.stringify(data))
    } catch (e) {
        throw new Error('Something went wrong with setLocalData service!')
    }
}

export const getLocalData = async (key: string) => {
    try {
        const storedData = await localStorage.getItem(key);
        return storedData && JSON.parse(storedData);
    } catch (e) {
        console.log(e)
        throw new Error(`Something went wrong or nothing found in local storage with key: ${key}!`)
    }
}