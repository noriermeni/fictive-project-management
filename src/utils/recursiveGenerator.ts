/*
*
* TODO: I tried to make a function to generate recursive list from flatten. Work with level fields.
*
* */

export const generateRecursive = (list: Array<any>) => {
    let currentList: Array<any> = [];
    const recursive = (array: Array<any>, level: any, hasChild: boolean = false, currentObject: any, theNewArray: any) => array.forEach(e => {
        if (!hasChild && level === e.level) {
            let tempIndex = theNewArray.push(e) - 1;
            recursive(array, e.id, true, e, theNewArray[tempIndex]);
        }
        if (hasChild && level === e.parent_id) {
            if (!theNewArray.childs) {
                theNewArray.childs = [];
            }
            let tempIndex = theNewArray.childs.push(e) - 1;
            recursive(array, e.id, true, e, theNewArray.childs[tempIndex]);
        }
    })
    recursive(list, 0, false, 0, currentList);
    return currentList;
}