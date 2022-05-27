import data from "../static/data"
import React from 'react'
import styled from "styled-components"
import {Typography} from "@material-ui/core"
import {Rating} from "@material-ui/lab"

const ratingData = data;
const x = 3;

const RatingContainer = styled.div`
    justify-content:center;
    align-items:center;
    font-weight:bold;
    flex: 1;
`

const RatingComponent = (props) => {
  return (
    <RatingContainer>
        <Typography component="legend">{props.ratingCategory}</Typography>
        <Rating name="read-only" value={parseFloat(props.ratingVal)} precision={0.5} readOnly />
    </RatingContainer>
  )
}

export default RatingComponent
