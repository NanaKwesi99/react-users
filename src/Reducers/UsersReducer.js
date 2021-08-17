import { ADD_USER } from '../Actions/UserActions';

const initialState = {
    users: [
        {
          name: 'John',
          email: 'john@gmail.com',
          age: '20'
        }
      ],
    } 

    const UsersReducer = (state=initialState, action)=> { 
        switch (action.type) { 
            case ADD_USER: 
                return  {...state.users,users:[...state.users,action.payload] };
            default: 
               return state; 
        }
     };
    
 export default UsersReducer;