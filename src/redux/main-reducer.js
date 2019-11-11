import { combineReducers } from "redux";
// import { routerReducer as router } from 'react-router-redux';


import cart from "./reducers/cartReducer";

export default combineReducers({
    cart
});