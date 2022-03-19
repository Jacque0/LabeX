import React from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import Header from "../../components/Header";
import {
  ButtonsArea,
  ContainerAdminHome,
  TripsArea,
} from "./StyleAdmin";
import { BaseURL } from "../../constants/urls";
import useRequestData from "../../hooks/useRequestData";
import CardTripAdmin from "../../components/CardTripAdmin";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import CircularProgress from '@material-ui/core/CircularProgress';

export default function AdminHomePage() {
  useProtectedPage();
  const [trips, isLoading, error] = useRequestData(`${BaseURL}trips`);
  const navigate = useNavigate();

  const tripsList =
    trips &&
    trips.trips.map((item) => {
      return <CardTripAdmin key={item.id} trip={item} />;
    });

  const goToCreateTrip = () => {
    navigate("/admin/trips/create");
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <ContainerAdminHome>
      <Header path={-1} />
      <ButtonsArea>
        <h2>Painel Adiministrativo</h2>
        <Button
          onClick={goToCreateTrip}
          color="primary"
          variant="contained"
          className="button-green"
        >
          Criar Viagem
        </Button>
        <Button
          variant="contained"
          className="button-white"
          onClick={logout}
        >
          Logout
        </Button>
      </ButtonsArea>
      <TripsArea>
        {isLoading && <CircularProgress color="primary" />}
        {!isLoading && error && <p>Ocorreu um erro</p>}
        {!isLoading && tripsList && tripsList}
      </TripsArea>
    </ContainerAdminHome>
  );
}
