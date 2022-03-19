import React, { useState } from "react";
import { ContainerForm } from "./StyleApplicationForm";
import Header from "../../components/Header";
import {
  ButtonForm,
  Form,
  Input,
  Select,
} from "../../components/styles/StyleGeral";
import { useForm } from "../../hooks/useForm";
import useRequestData from "../../hooks/useRequestData";
import { BaseURL } from "../../constants/urls";
import Countries from "../../components/Countries";
import axios from "axios";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import CircularProgress from '@material-ui/core/CircularProgress';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function ApplicationFormPage() {
  const { form, onChange, cleanFields } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });
  const [id, setId] = useState("");
  const [trips, isLoading, error] = useRequestData(`${BaseURL}trips`);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [msgError, setMsgError] = useState("");

  const onChangeId = (event) => {
    setId(event.target.value);
  };
  const tripsList =
    trips &&
    trips.trips.map((item) => {
      return <option value={item.id}>{item.name}</option>;
    });

  const handleCloseSuccess = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSuccess(false);
  };
  const handleCloseError = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenError(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const url = `${BaseURL}trips/${id}/apply`;

    const headers = {
      "Content-Type": "application/json",
    };
    axios
      .post(url, form, { headers })
      .then((resp) => {
        setOpenSuccess(true);
      })
      .catch((err) => {
        setOpenError(true);
        setMsgError(err.response.data.message);
      });

    cleanFields();
  };

  return (
    <ContainerForm>
      <Header path={-1} />
      <h1>Inscreva-se</h1>
      {isLoading && <CircularProgress color="primary" />}
      {!isLoading && error && <p>Ocorreu um erro</p>}
      {!isLoading && tripsList &&
      <Form onSubmit={onSubmit}>
        <Select required onChange={onChangeId}>
          <option disabled selected value={""}>
            Viagem:
          </option>
          {tripsList}
        </Select>
        <Input
          required
          placeholder="Nome"
          name="name"
          value={form.name}
          onChange={onChange}
        />
        <Input
          required
          placeholder="Idade"
          name="age"
          value={form.age}
          onChange={onChange}
          type="number"
          min={18}
        />
        <Input
          required
          placeholder="Sua história"
          name="applicationText"
          value={form.applicationText}
          onChange={onChange}
        />
        <Input
          required
          placeholder="Profissão"
          name="profession"
          value={form.profession}
          onChange={onChange}
        />
        <Countries value={form.country} onChange={onChange} />
        <ButtonForm>APLICAR</ButtonForm>
      </Form>}
      <Snackbar
        open={openSuccess}
        autoHideDuration={6000}
        onClose={handleCloseSuccess}
      >
        <Alert onClose={handleCloseSuccess} severity="success">
          Aplicação bem sucedida!
        </Alert>
      </Snackbar>
      <Snackbar
        open={openError}
        autoHideDuration={6000}
        onClose={handleCloseError}
      >
        <Alert onClose={handleCloseError} severity="error">
          {msgError}
        </Alert>
      </Snackbar>
    </ContainerForm>
  );
}
