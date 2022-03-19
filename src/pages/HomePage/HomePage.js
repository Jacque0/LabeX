import React from "react";
import {
  ButtonArea,
  ContainerHome,
  ImageArea,
  LateralMenu,
  TitleSubtitle,
} from "./StyleHome";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import foguete from "../../assets/foguete.gif";
import IconLabeX from "../../components/IconLabeX";
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import LockIcon from '@material-ui/icons/Lock';

export default function HomePage() {
  const navigate = useNavigate();

  const goToTrips = () => {
    navigate(`/trips/list`);
  };

  const goToAdmin = () => {
    navigate("/admin/trips/list");
  };

  return (
    <ContainerHome>
      <LateralMenu>
        <TitleSubtitle>
          <div>
            <IconLabeX />
            <Button
              size="small"
              onClick={goToAdmin}
              variant="contained"
              className="button-white"
              startIcon={<LockIcon/>}
            >
              Admin
            </Button>
          </div>
          
          <h3>
            Viagens Interplanetárias! <br />
            Encontre sua viagem dos sonhos e diga-nos porque você a merece.
          </h3>
        </TitleSubtitle>
        <img alt="gif-foguete" src={foguete} />
        <ButtonArea>
          <Button
            onClick={goToTrips}
            color="primary"
            variant="contained"
            className="button-green"
            id="button-trips"
            startIcon={<LoyaltyIcon/>}
          >
            Viagens
          </Button>
        </ButtonArea>
      </LateralMenu>
      <ImageArea></ImageArea>
    </ContainerHome>
  );
}
