import styled from "@emotion/styled"


const Container = styled.div`
height: 2rem;
background-color: teal;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 0.9rem;
font-weight: bold;
`

const Announcement = () => {
  return (
    <div>
<Container>
    Big Discount!
</Container>

    </div>
  )
}

export default Announcement