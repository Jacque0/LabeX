import React, {useState} from 'react'
import styled from 'styled-components'
import { mainColors } from "../constants/colors";
import { Button } from "@material-ui/core";
import axios from "axios";
import { BaseURL } from "../constants/urls";
import { useParams } from "react-router-dom";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}



const Container = styled.div`
  width: 300px;
  height: 170px;
  margin: 30px 10px;
  background-color: ${mainColors.secundario};
  border-radius: 10px;
  color: white;
  box-shadow: rgb(117 117 117 / 77%) 0px 2px 10px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  padding: 5px;
  h3 {
    font-size: 1.4em;
  }
`;
const AreaButtons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

export default function CardCandidate(props) {
    const pathParams = useParams();
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('')

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
      props.loadingAgain()
    };

  const onDecide = (approve) => {
    const url = `${BaseURL}trips/${pathParams.id}/candidates/${props.candidate.id}/decide`;
    const token = localStorage.getItem("token")
    const headers = {
      "Content-Type": "application/json",
      'auth': token,
    };
    const body = {
        "approve": approve
    }
    axios
      .put(url, body, { headers })
      .then((resp) => {
        if(approve){
          setMessage('Candidato Aprovado')
        } else{
          setMessage('Candidato Reprovado')
        }
        setOpen(true)
      })
      .catch((err) => {
        console.log('Deu erro',err.response);
      });
  };

  return (
    <Container>
      <h3>{props.candidate.name}, {props.candidate.age}</h3>
      <p>{props.candidate.applicationText}</p>
      <p><b>Profissão</b>: {props.candidate.profession}</p>
      <p><b>País</b>: {props.candidate.country}</p>
      <AreaButtons>
        <Button
          variant="contained"
          color="primary"
          size='small'
          onClick={()=>{onDecide(true)}}
        >
          Aprovar
        </Button>
        <Button
          variant="contained"
          color="primary"
          size='small'
          onClick={()=>{onDecide(false)}}
        >
          Reprovar
        </Button>
      </AreaButtons>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="info">
          {message}
        </Alert>
      </Snackbar>
    </Container>
  );
}
