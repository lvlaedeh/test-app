import { applyMiddleware, combineReducers, createStore } from "redux";
import { plansListReducer } from "./reducer/plansReducer";
import thunk from "redux-thunk"

const reducer = combineReducers({
    plansList : plansListReducer,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(reducer,initialState,applyMiddleware(...middleware))

export default store