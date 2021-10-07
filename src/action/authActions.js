export const registerUserWithEmail = (email, password) => {
    return (dispatch, state, { getFirebase }) => {
      const firebase = getFirebase();
  
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
          console.log(user);
        })
        .catch((e) => {
          console.log(e);
        });
    };
  };
  
  
  export const loginWIthEmail = (email, password) => {
    return (dispatch, state, { getFirebase }) => {
      const firebase = getFirebase();
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          console.log(e);
        });
    };
  };
  
  export const logout = () => {
    return (dispatch, state, { getFirebase }) => {
      const firebase = getFirebase();
      firebase.auth().signOut();
    };
  };