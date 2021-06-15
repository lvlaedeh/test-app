const initialState = {
    plans : [],
    listDone : [] ,
}

export const plansListReducer = (state = initialState ,action) => {
    switch (action.type) {
         case 'PLANS-LIST' :
            return {
                ...state ,
                plans : [...state.plans,action.payload]
            }
        case 'REMOVE-ITEM' :
            return{
                ...state,
                plans : state.plans.filter((i)=> i.title !== action.payload.title)
            }
        case 'DONE-LIST' :
            return{
                ...state,
                listDone : [...state.listDone,action.payload]
            }    
         default : 
            return state    
    }
}
