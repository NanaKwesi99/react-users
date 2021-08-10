const initialstate = {
    users: [
        {
          name: 'John',
          email: 'john@gmail.com',
          age: '20'
        }
      ],
    } 

    const UsersReducer = (state={initialstate}, action)=> { 
        switch (action.type) { 
            case "ADD_USER": 
                return state 
            default: 
               return state; 
        }
     };
    
 export default UsersReducer;