import styled from "styled-components"
import { categories } from "../helpers/data"
import media from "../helpers/responsive"
import CategoryItem from "./CategoryItem"

const Container= styled.div`
display: flex;
padding: 20px;
${media.xs`
flex-direction: column;
padding: 0px;
`}
`

const Categories = () => {
  return (
    <Container>
{categories.map(item => (
    <CategoryItem key={item.id} {...item} />
))}
    </Container>

  )
}

export default Categories