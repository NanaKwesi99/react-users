import { ADD_USER, DELETE_USER, EDIT_USER } from "../Actions/UserActions";

const initialState = {
  users: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state.users, users: [...state.users, action.payload] };
    case DELETE_USER:
      const savedUsers = state.users.filter((user) => {
        return user.id !== action.payload;
      });
      return {...state, users: savedUsers};
    case EDIT_USER:
      return {...state, users: state.users.map((user) =>
        user.id === action.payload.id ? action.payload : user
      )}
      case'SET_ALL_USERS':
      return{...state, users: action.payload}
    default:
      return state;
  }
};

export default usersReducer;