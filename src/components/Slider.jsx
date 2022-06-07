import styled from "styled-components";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { useState } from "react";
import { sliderItems } from "../helpers/data";
import media from "../helpers/responsive";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  position: relative;
  overflow: hidden;
  ${media.xs`
  height: 50vh;

`}
  ${media.xl`
  height: 80vh;

`}
`;
const Arrow = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.left && "10px"};
  right: ${(props) => props.right && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${props=>props.slideIndex*-100}vw);
  transition: all 1.5s ease-in-out;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #${(props) => props.bg};
  ${media.xs`
  height: 50vh;

`}
  ${media.lg`

position: relative;
`}
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  ${media.xs`

text-align: center;
`}
  ${media.lg`
position: absolute;
text-shadow: 0 0 10px #000;
text-align: center;
width: 100%;
color: white;
`}
`;
const Image = styled.img`
  height: 80%;
  ${media.xs`
  height: 90%;
  
  `}
  ${media.xl`
  width: 100%;
  object-fit: cover;
  `}
`;
const Title = styled.h1`
  font-size: 5rem;
  ${media.xs`

font-size: 2rem;
`}
`;
const Desc = styled.p`
  margin: 50px 0;
  font-size: 1.2rem;
  font-weight: bold;
  letter-spacing: 3px;
  ${media.xs`
color: white;
font-size: 1rem;
margin: 0.5rem;
`}
`;
const Button = styled.button`
  padding: 10px;
  font-size: 1.2rem;
  background-color: transparent;
  cursor: pointer;
  ${media.lg`
color: white;
text-shadow: 0 0 10px #000;
`}
`;
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
// usestate ile 0 dan başlattığımız slide indexi handleclick ile direction parametresine göre değiştiriyoruz. Bu index sayısını slide elementinin parentine props olarak gönderip styled bölümünde translateX değerini değiştiriyoruz. 
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex === 0 ? sliderItems.length - 1 : slideIndex - 1);
    } else {
      setSlideIndex(slideIndex === sliderItems.length - 1 ? 0 : slideIndex + 1);
    }
  };

  return (
    <Container>
      <Arrow left onClick={() => handleClick("left")}>
        <ArrowCircleLeftOutlinedIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>Shop Now</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow right onClick={() => handleClick("right")}>
        <ArrowCircleRightOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
