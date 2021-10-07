import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect, dispatch  } from "react-redux";
import {
    registerUserWithEmail,
    loginWIthEmail,
} from "../action/authActions";

function LoginForm(props) {
    const dispatch = useDispatch();
    const { replace } = useHistory();
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      let email = e.target.elements.email.value;
      let password = e.target.elements.password.value;
  
      dispatch(loginWIthEmail(email, password, replace));
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input name="email" type="email" />
          <label>Password</label>
          <input name="password" type="password" />
          <hr />
          <button type="submit" className="btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
  
  const mapSTateToProps = (state) => ({
    isAuth: state.auth.isAuth,
  });
  
  export default connect(mapSTateToProps)(LoginForm);