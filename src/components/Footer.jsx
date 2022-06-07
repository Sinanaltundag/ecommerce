import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@mui/icons-material";
import styled from "styled-components";
import media from "../helpers/responsive";

const Container = styled.div`
  display: flex;
  ${media.xs`
  flex-direction: column;
  text-align: center;
`}
`;
const InnerContainer = styled.div`
  flex: 1;
  padding: 20px;
  display: ${props=>props.column&&'flex'};
  flex-direction: ${props=>props.column&&'column'};
  ${media.xs`
background-color: ${props=>props.column||'#f4f4f4'};
`}
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
  
  ${media.xs`
  align-items: center;
  justify-content: space-between;

  `}
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;
const ContactText = styled.span`
    margin-left: 10px;
`;

const Footer = () => {
  return (
    <Container>
    <InnerContainer column>
      <Logo>ELITE</Logo>
      <Desc>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, consequatur? Possimus ullam corrupti perspiciatis non facere, nostrum repellendus dolor quos beatae, iste enim! Accusamus quod asperiores earum voluptatibus quisquam assumenda.
      </Desc>
      <SocialContainer>
        <SocialIcon color="3B5999">
          <Facebook />
        </SocialIcon>
        <SocialIcon color="E4405F">
          <Instagram />
        </SocialIcon>
        <SocialIcon color="55ACEE">
          <Twitter />
        </SocialIcon>
        <SocialIcon color="E60023">
          <Pinterest />
        </SocialIcon>
      </SocialContainer>
    </InnerContainer>
    <InnerContainer>
      <Title>Useful Links</Title>
      <List>
        <ListItem>Home</ListItem>
        <ListItem>Cart</ListItem>
        <ListItem>Man Fashion</ListItem>
        <ListItem>Woman Fashion</ListItem>
        <ListItem>Accessories</ListItem>
        <ListItem>My Account</ListItem>
        <ListItem>Order Tracking</ListItem>
        <ListItem>Wishlist</ListItem>
        <ListItem>Wishlist</ListItem>
        <ListItem>Terms</ListItem>
      </List>
    </InnerContainer>
    <InnerContainer>
      <Title>Contact</Title>
      <ContactItem>
        <Room /> 
        <ContactText>Trabzon / Turkey</ContactText>
         
      </ContactItem>
      <ContactItem>
        <Phone /> 
        <ContactText>555-555-5555</ContactText>
      </ContactItem>
      <ContactItem>
        <MailOutline  /> 
        <ContactText>peykani@gmail.com</ContactText>
      </ContactItem>
      <Payment src={require('../assets/images/payment-methods.png')} />
    </InnerContainer>
  </Container>
  );
};

export default Footer;
