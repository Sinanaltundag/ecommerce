import { Link } from "react-router-dom"
import styled from "styled-components"
import media from "../helpers/responsive"


const Container = styled.div`
flex: 1;
margin: 0.5rem;
height: 70vh;
position: relative;
`
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
${media.sm`
height: 40vh;
`}
${media.xs`
height: 33vh;
`}
`
const Info = styled.div`
position: absolute;
top: 0;
width: 100%;
height: 140%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Title = styled.h1`
color: white;
margin: 1.2rem;
`
const Button = styled.button`
border: none;
border-radius: 0.5rem;
padding: 0.5rem;
background-color: #fff7f7;
color: gray;
cursor: pointer;
font-weight: 600;
font-size: 1.2rem;
transition: all 0.3s ease-in-out;
&:hover{
    background-color: #008080;
    color: white;
    box-shadow: 0 0 0.5rem #008080;
}
`

const CategoryItem = ({title,img}) => {
  return (
    <Container>
    <Image src={img} alt={title}/>
    <Info>
    <Title>{title}</Title>
    <Link style={{textDecoration:"none"}} to={'/productlist'}><Button>Shop Now</Button></Link> 
    </Info>

    </Container>
  )
}

export default CategoryItem