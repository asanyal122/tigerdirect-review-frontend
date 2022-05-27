import styled from "styled-components"
import RatingComponent from "./RatingComponent";

const Container = styled.div`
    align-items: center;
    margin:10px;
    display: flex;
    flex-wrap: wrap;

`

const RatingsComponent = (props) => {
  let ratings = props.rating;
  //console.log(props.rating);
  let ratingsElements = [];
  for(let  category in ratings){
      ratingsElements.push(<RatingComponent ratingCategory={category} ratingVal={ratings[category]} key={category}></RatingComponent>)
  }
  return (
    <Container>
        {
            ratingsElements
        }
    </Container>
  )
}

export default RatingsComponent
