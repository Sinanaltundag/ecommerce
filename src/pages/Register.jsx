import styled from "styled-components";
import background from "../assets/images/login_girl.jpg";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.6)
    ),
    url(${background}) center;
  background-repeat: no-repeat;
  background-position: right;
  background-color: #5CD0C2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  &:focus {
      border: 1px solid teal;
    outline: teal 1px solid;
    }
`;

const Agreement = styled.span`
  font-size: 14px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #5CD0C2;
  color: black;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
      background-color: teal;
      color: white;
    }
`;

const Link = styled.a`
text-decoration: underline;
cursor: pointer;
`

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <Link>PRIVACY POLICY</Link>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;