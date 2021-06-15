export const plansListAction = (title) => (dispatch) => {
    dispatch({type : 'PLANS-LIST' , payload: title})
    
}

export const removeAction = (title) => (dispatch) => {
    dispatch({type : 'REMOVE-ITEM' , payload: title})
}

export const doneAction = (title) => (dispatch) => {
    dispatch({type : 'DONE-LIST' , payload: title})
}