import { Container, Row, Col } from "react-bootstrap";
import Userlist from "../Components/UserList";
import UserForm from "../Components/UserForm";
import { useDispatch } from "react-redux";
import { logout } from "../action/authActions";

const Home = () => {
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(logout())}>Logout</button>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <UserForm />
          </Col>
          <Col xs={6} md={2} className="box">
            <Userlist />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;