import styled from "styled-components"
import RatingsComponent from "./RatingsComponent";
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import InsertCommentOutlinedIcon from '@material-ui/icons/InsertCommentOutlined';

const Container = styled.div`
    border: 1px solid lightgray;
    margin:10px;
    background-color: lightgray;
`
const NameContainer = styled.div`
    font-size: 16px;
    background-color: teal;
    align-items: center;
    justify-content: center;
    color: white;
    display: flex;
    padding: 10px;
    &:hover{
        transform: scale(1.1);
    }
`

const DateContainer = styled.h5`

`;

const CommentContainer = styled.div`
    padding: 5px;
    align-items: center;
    justify-content: center;
    &:hover{
        transform: scale(1.01);
    }
`;

const ReviewerComponent = (props) => {
    console.log(props.data);
  return (
    <Container>
        <NameContainer>
            <AccountCircleOutlinedIcon/>
            <h3>{props.data.reviewerName}</h3>
        </NameContainer>
        <DateContainer>{props.data.reviewDate}</DateContainer>
        <CommentContainer>
            <InsertCommentOutlinedIcon/>
            <h4>{props.data.reviewerComment}</h4>
        </CommentContainer>
        <RatingsComponent rating={props.data.reviewerRating}></RatingsComponent>
    </Container>
  )
}

export default ReviewerComponent
