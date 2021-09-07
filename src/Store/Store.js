import { applyMiddleware, compose, createStore } from "redux";
import UsersReducer from "../Reducers/UsersReducer";
import {getFirebase, reactReduxFirebase} from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";
import thunk from "redux-thunk";
import firebase from "../firebase/config";




const Store = createStore(UsersReducer, compose (
     applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reactReduxFirebase(firebase),
    reduxFirestore(firebase)
    )); 




export default Store;