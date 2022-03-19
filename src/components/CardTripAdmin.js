import React, {useState} from "react";
import styled from "styled-components";
import { mainColors } from "../constants/colors";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import DetailsIcon from "@material-ui/icons/Details";
import axios from "axios";
import { BaseURL } from "../constants/urls";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 300px;
  height: 170px;
  margin: 30px 10px;
  background-image: linear-gradient(to bottom left, white, #c0c0c0);
  border-radius: 10px;
  color: ${mainColors.secundario};
  box-shadow: rgb(117 117 117 / 77%) 0px 2px 10px 0px;
  display: ${props => props.displayCard};
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  h3 {
    font-size: 1.4em;
  }
`;
const AreaButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export default function CardTripAdmin(props) {
    const navigate = useNavigate()
    const [displayCard, setDisplayCard] = useState('flex')

    const goToDetails = () =>{
        navigate(`/admin/trips/${props.trip.id}`)
    }

  const onDelete = () => {
    const url = `${BaseURL}trips/${props.trip.id}`;
    const token = localStorage.getItem("token")
    const headers = {
      "Content-Type": "application/json",
      'auth': token,
    };
    if (window.confirm("Deseja apagar essa viagem?")){
      axios
      .delete(url, { headers })
      .then((resp) => {
        setDisplayCard('none');
      })
      .catch((err) => {
        console.log('Deu erro',err.response);
      });
    }
  };

  return (
    <Container displayCard={displayCard}>
      <h3>{props.trip.name}</h3>
      <AreaButtons>
        <Button
          startIcon={<DetailsIcon />}
          variant="contained"
          color="secondary"
          onClick={goToDetails}
        >
          Detalhes
        </Button>
        <Button
          startIcon={<DeleteIcon />}
          variant="contained"
          color="secondary"
          onClick={onDelete}
        >
          Apagar
        </Button>
      </AreaButtons>
    </Container>
  );
}
