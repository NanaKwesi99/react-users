import { ADD_USER, DELETE_USER, EDIT_USER } from "../Actions/UserActions";

const initialState = {
  users: [
    {
      name: "Manuel",
      email: "manuel222@email.com",
      gen: 20,
      id: "84379843.fsdjhj",
    },
    { name: "Kofi", email: "kofi526@email.com", gen: 5, id: "skdlj4839483" },
  ],
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
    default:
      return state;
  }
};

export default usersReducer;