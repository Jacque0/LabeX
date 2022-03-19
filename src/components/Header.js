import React from "react";
import { ButtonsHeader, ContainerHeader } from "./styles/StyleHeader";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import IconLabeX from "./IconLabeX";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from '@material-ui/icons/Home';

export default function Header(props) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(props.path);
  };
  
  const goHome = () =>{
    navigate("/")
  }

  return (
    <ContainerHeader>
      <IconLabeX />
      <ButtonsHeader>
        <IconButton color='inherit' onClick={goHome}>
          <HomeIcon fontSize="large" />
        </IconButton>
        <Button variant="contained" className="button-white" onClick={goBack}>
          Voltar
        </Button>
      </ButtonsHeader>
    </ContainerHeader>
  );
}
