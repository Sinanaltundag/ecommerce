import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material"
import styled from "styled-components"

const Info= styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.2);
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease-in-out;

`

const Container= styled.div`
flex: 1;
margin: 0.3rem;
min-width: 280px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
background-color: #faf8f6;
position: relative;
&:hover ${Info} {
opacity: 1;

}
`
const Circle= styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
background-color: #faf8f6;
position: absolute;
`
const Image= styled.img`
height: 75%;
max-width: 280px;
object-fit: cover;
z-index: 2;
`
const Icon= styled.div`
width:2.5rem;
height:2.5rem;
border-radius: 50%;
background-color: #faf8f6;
display: flex;
align-items: center;
justify-content: center;
margin: 0.3rem;
transition: all 0.3s ease-in-out;
cursor: pointer;
&:hover{
    background-color: #008080;
    color: white;
    transform: scale(1.1);
}
`

const Product = ({img}) => {
  return (
<Container>
    <Circle/>
    <Image src={img} />
    <Info>
        <Icon>
            <ShoppingCartOutlined/>
        </Icon>
        <Icon>
            <SearchOutlined/>
        </Icon>
        <Icon>
            <FavoriteBorderOutlined/>
        </Icon>
    </Info>
</Container>
  )
}

export default Product