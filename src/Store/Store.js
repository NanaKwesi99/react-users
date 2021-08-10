import { createStore } from "redux";
import UsersReducer from "../Reducers/UsersReducer";

const Store = createStore(UsersReducer) 

export default Store;