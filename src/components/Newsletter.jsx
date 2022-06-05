import { Send } from "@mui/icons-material"
import styled from "styled-components"

const Container = styled.div`
height: 60vh;
background-color: #fafafa;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`
const Title = styled.h1`
font-size: 3rem;
margin-bottom: 1.2rem;
`
const Desc = styled.div`
font-size: 1.5rem;
font-weight: 300;
margin-bottom: 1.2rem;
`
const InputContainer = styled.div`
width: 50%;
height: 2.5rem;
display: flex;
justify-content: space-between;
border: 1px solid lightgray;
border-radius:0  5px 5px 0;
`
const Input = styled.input`
border: none;
flex: 8;
padding-left: 10px;
font-size: 1.1rem;
&:focus{
    outline: 1px solid rgba(0, 80, 80, .6);
}
`
const Button = styled.button`
flex: 1;
border: none;
background-color: teal;
color: white;
font-weight: bold;
border-radius:0  5px 5px 0;
`


const Newsletter = () => {
  return (
    <Container>
<Title>Newsletter</Title>
<Desc>Subscribe to our newsletter and get 10% off your first purchase</Desc>
<InputContainer>
<Input placeholder="Enter your email" />
<Button><Send/></Button>
</InputContainer>
    </Container>
  )
}

export default Newsletter