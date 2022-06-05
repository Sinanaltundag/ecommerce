import styled from "styled-components"


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
`

const CategoryItem = ({title,img}) => {
  return (
    <Container>
    <Image src={img} alt={title}/>
    <Info>
    <Title>{title}</Title>
    <Button>Shop Now</Button>
    </Info>

    </Container>
  )
}

export default CategoryItem