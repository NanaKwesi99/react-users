import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import UsersReducer from "../Reducers/UsersReducer";
import {getFirebase, reactReduxFirebase, firebaseReducer} from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";
import thunk from "redux-thunk";
import firebase from "../firebase/config";


let reducers = combineReducers({
    user: UsersReducer,
    firebase: firebaseReducer,
  });


const Store = createStore(reducers, compose (
     applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reactReduxFirebase(firebase),
    reduxFirestore(firebase)
    )); 




export default Store;