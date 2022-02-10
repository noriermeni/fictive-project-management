export const setLocalData = (key: string, data: any) => {
    try {
        localStorage.setItem(key, JSON.stringify(data))
    } catch (e) {
        throw new Error('Something went wrong with setLocalData service!')
    }
}

export const getLocalData = async (key: string) => {
    try {
        const storedData: string | null = await localStorage.getItem(key);
        return JSON.parse(storedData ? storedData : '');
    } catch (e) {
        throw new Error(`Something went wrong or nothing found in local storage with key: ${key}!`)
    }
}