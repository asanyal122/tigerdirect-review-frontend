import data from "../static/data"
import styled from "styled-components"
import ReviewerComponent from "../components/ReviewerComponent";





const Container = styled.div`
  justify-content: center;
  border: 1px solid lightgray;
  text-align: center;
`



const ReviewsDashboard = () => {
    return (
        <Container>
            {
                data["reviews"].map((review) => {
                  return <ReviewerComponent data = {review}></ReviewerComponent>
                })
            }
        </Container>
      )
}

export default ReviewsDashboard
