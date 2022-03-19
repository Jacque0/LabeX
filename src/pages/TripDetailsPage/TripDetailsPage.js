import React, { useState, useEffect } from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import axios from "axios";
import { BaseURL } from "../../constants/urls";
import { useParams } from "react-router-dom";
import {
  ApprovedArea,
  Area1,
  Area2,
  ContainerTripDetails,
  DescriptionArea,
  Title,
} from "./StyleTripDetails";
import CardCandidate from "../../components/CardCandidate";
import Header from "../../components/Header";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function TripDetailsPage() {
  useProtectedPage();
  const [trip, setTrip] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const pathParams = useParams();
  const [loadingAgain, setLoadingAgain] = useState(false)

  useEffect(() => {
    const url = `${BaseURL}trip/${pathParams.id}`;
    const token = localStorage.getItem("token");
    const headers = {
      auth: token,
    };
    setIsLoading(true);
    axios
      .get(url, { headers })
      .then((resp) => {
        setIsLoading(false);
        setTrip(resp.data.trip);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.response);
      });
  }, [loadingAgain]);

  const onLoad = () =>{
    setLoadingAgain(!loadingAgain)
  }

  return (
    <ContainerTripDetails>
      <Header path={-1} />
      {isLoading && <CircularProgress className="loading" color="primary" />}
      {!isLoading && error && <p>Ocorreu um erro</p>}
      {!isLoading && trip && trip.name && (
        <div>
          <Title>
            <h1>{trip.name}</h1>
          </Title>
          <Area1>
            <DescriptionArea>
              <p>
                <b>{trip.date}</b>
              </p>
              <p>{trip.description}</p>
              <p>
                Duração: <b>{trip.durationInDays}</b> dias
              </p>
            </DescriptionArea>
            <ApprovedArea>
              <h3>Candidatos Aprovados:</h3>
              {trip.approved.length === 0 ? (
                <p>Nenhum candidato aprovado</p>
              ) : (
                <ol>
                  {trip.approved.map((item) => {
                    return (
                      <li key={item.id}>
                        <b>{item.name}</b>, {item.age}, {item.country}
                      </li>
                    );
                  })}
                </ol>
              )}
            </ApprovedArea>
          </Area1>
          <Area2>
            <h2>Candidatos Pendentes:</h2>
            <div>
              {trip.candidates.length === 0 ? (
                <p>Nenhum candidato</p>
              ) : (
                trip.candidates.map((item) => {
                  return <CardCandidate loadingAgain={onLoad} key={item.id} candidate={item} />;
                })
              )}
            </div>
          </Area2>
        </div>
      )}
    </ContainerTripDetails>
  );
}
