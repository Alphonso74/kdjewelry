export const updateObject = (oldObject, updatedValues) => {

    sessionStorage.setItem('Items', JSON.stringify(updatedValues));
    return {
        ...oldObject,
        ...updatedValues,

    }
};
