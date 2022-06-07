import { Search } from '@mui/icons-material'
import { Badge} from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// Styled Components for override mui components
import { styled as muiStyler } from '@mui/material/styles';
import media from '../helpers/responsive';

const Container = styled.div`
    height: 80px;
    ${media.xs`
        height: auto;
        
        `}
`

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
${media.xs`

padding: 10px 0px;
`}
`

const NavBox = styled.div`
display: flex;
align-items: center;
flex: 1;
justify-content:${props=>props.align?props.align:'center'};
${media.xs`
flex-direction: column;
`}
`

const Language = styled.span`
font-size: 0.9rem;
cursor: pointer;
${media.xs`
display: none;
`}
`

const SearchContainer = styled.div`
border: 0.5px solid lightgrey;
display: flex;
align-items: center;
margin-left: 1.5rem;
padding: 0.3rem;
${media.xs`

`}

`
const Input = styled.input`
border: none;
${media.xs`
width: 70px;
`}
`

const Logo = styled.h1`
font-weight: bold;
`

const MenuItem = styled.div`
font-size: 0.9rem;
cursor: pointer;
margin-left: 1.5rem;
${media.xs`
margin-bottom: 0.7rem;
`}
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
    <NavBox align="flex-start">
<Language>EN</Language>
<SearchContainer>
<Input placeholder="Search..."/>
<NavSearch/>

</SearchContainer>
    </NavBox>
    <NavBox>
    {media.xs&&<Logo>ELITE</Logo>}
    
    </NavBox>
    <NavBox align="flex-end">
    <MenuItem>REGISTER</MenuItem>
    <MenuItem>LOGIN</MenuItem>
    <MenuItem>
    <Badge badgeContent={4} color="secondary">
    <ShoppingCartOutlinedIcon />
  </Badge>
    </MenuItem>
    </NavBox>
    </Wrapper>
    </Container>
  )
}

export default Navbar