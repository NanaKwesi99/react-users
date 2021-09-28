// import { getFirestore } from "redux-firestore";

export const ADD_USER ="ADD_USER";
export const DELETE_USER ="DELETE_USER";
export const EDIT_USER ="EDIT_USER";

export const addUser = (user) => {
    user.id= Math.random().toString();
    return(dispatch, state, {getFirestore})=>{
        getFirestore()
        .collection('contact')
        .add({...user, timestamp: getFirestore().FieldValue.serverTimestamp()})
        .then((docs)=>{
    console.log(docs);
        });
    }

    // return{
    //     type: ADD_USER,
    //     payload: user
    // }
}     
export const deleteUser = (userId) => {              
    return(dispatch, state, {getFirestore})=>{
        getFirestore().collection('contact').doc(userId).delete().then(()=>{

        })
    }
}
export const editUser = (updatedUser) => { 
    return(dispatch, state, {getFirestore})=>{
        getFirestore()
        .collection('contact')
        .doc(updatedUser.id)
        .set(updatedUser).
        then(()=>{})
    }
    
    // return{
    //     type: "EDIT_USER",
    //     payload: updatedUser
    // }
}

export const getAllusers =()=>{
return(dispatch, state, {getFirestore})=>{
getFirestore().collection('contact').orderBy('name','desc')
.onSnapshot((snapshot)=>{
let contact =[];
snapshot.forEach((doc)=>{
    contact.push({...doc.data(), id:doc.id})
    console.log(contact, (doc))
});
dispatch({
    type: 'SET_ALL_USERS',
    payload: contact
})
})
};
}
