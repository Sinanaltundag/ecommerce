import { Search } from '@mui/icons-material'
import { Badge} from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// Styled Components for override mui components
import { styled as muiStyler } from '@mui/material/styles';

const Container = styled.div`
    height: 60px;
`

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
`
const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`
const Center = styled.div`
flex: 1;
align-items: center;
text-align: center;
`
const Right = styled.div`
display: flex;
align-items: center;
flex: 1;
justify-content: flex-end;
`

const Language = styled.span`
font-size: 0.9rem;
cursor: pointer;
`

const SearchContainer = styled.div`
border: 0.5px solid lightgrey;
display: flex;
align-items: center;
margin-left: 1.5rem;
padding: 0.3rem;
`
const Input = styled.input`
border: none;
`

const Logo = styled.h1`
font-weight: bold;
`

const MenuItem = styled.div`
font-size: 0.9rem;
cursor: pointer;
margin-left: 1.5rem;
`
// Styled Components for override mui components
const NavSearch = muiStyler(Search)`
color: gray;
font-size: 1rem;
`;

const Navbar = () => {
  return (
    <Container>
    <Wrapper>
    <Left>
<Language>EN</Language>
<SearchContainer>
<Input/>
<NavSearch/>

</SearchContainer>
    </Left>
    <Center>
    <Logo>ELIT</Logo>
    </Center>
    <Right>
    <MenuItem>REGISTER</MenuItem>
    <MenuItem>LOGIN</MenuItem>
    <MenuItem>
    <Badge badgeContent={4} color="secondary">
    <ShoppingCartOutlinedIcon />
  </Badge>
    </MenuItem>
    </Right>
    </Wrapper>
    </Container>
  )
}

export default Navbar