import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container= styled.div`

`
const Title= styled.h1`
margin: 1.2rem;
`
const FilterContainer= styled.div`
display: flex;
justify-content: space-between;
`
const Filter= styled.div`
margin: 1.2rem;
`

const FilterText= styled.span`
font-size: 1.2rem;
font-weight: 600;
`

const Select = styled.select`
  padding: 10px;
  margin-left: 20px;
`;
const ProductList = () => {
  return (
    <Container>

<Title>Product List</Title>
<FilterContainer>
<Filter>
  <FilterText>Filter by:</FilterText>
  <Select>
            <option disabled selected>
              Color
            </option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Green</option>
          </Select>
          <Select>
            <option disabled selected>
              Size
            </option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort By:</FilterText>
          <Select>
            <option selected>Newest</option>
            <option>Price (asc)</option>
            <option>Price (desc)</option>
          </Select>
        </Filter>
</FilterContainer>
<Products/>
<Newsletter/>
<Footer/>
    </Container>
  )
}

export default ProductList