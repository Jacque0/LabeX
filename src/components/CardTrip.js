import React from 'react'
import styled from 'styled-components'
import planets from '../constants/planets'
import { mainColors } from "../constants/colors";

const Container = styled.div`
    width: 200px;
    height: 400px;
    margin: 30px 10px;
    border-radius: 10px;
    color: ${mainColors.secundario};
    box-shadow: rgb(117 117 117 / 77%) 0px 2px 10px 0px;
    display: flex;
    flex-direction: column;
`
const AreaImg = styled.div`
    height: 200px;
    border-radius: 10px 10px 0 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-image: url(${props => props.url});
    p{
      background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
      color: white;
      text-align: center;
      margin-top: 2px;
    }
`
const AreaText = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-image: linear-gradient(to bottom left, white, #C0C0C0);
  border-radius: 0px 0px 10px 10px;
  h3{
      align-self: center;
      text-align: center;
      margin: 5px 0;
    }
    p{
      margin: 0 5px;
      text-align: justify;
    }
`

export default function CardTrip(props) {
  return (
    <Container>
        <AreaImg url={planets(props.trip.planet)}><p>{props.trip.planet}</p></AreaImg>
        <AreaText>
          <h3>{props.trip.name}</h3>
          <p>{props.trip.description}</p>
          <h3>{props.trip.date}</h3>
          <p>Duração de <b>{props.trip.durationInDays}</b> dias</p>
        </AreaText>
    </Container>
  )
}
