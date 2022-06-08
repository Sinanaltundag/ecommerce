import styled from "styled-components";
import Products from "../components/Products";


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
  <Select defaultValue={"Color"}>
            <option disabled value="Color" >
              Color
            </option>
            <option value="White">White</option>
            <option value="Black">Black</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Yellow">Yellow</option>
            <option value="Green">Green</option>
          </Select>
          <Select defaultValue="Size">
            <option disabled value="Size" >
              Size
            </option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort By:</FilterText>
          <Select defaultValue="Newest">
            <option value="Newest">Newest</option>
            <option value="asc">Price (asc)</option>
            <option value="desc">Price (desc)</option>
          </Select>
        </Filter>
</FilterContainer>
<Products/>

    </Container>
  )
}

export default ProductList