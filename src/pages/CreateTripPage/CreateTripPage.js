import React, { useState } from "react";
import Header from "../../components/Header";
import { ContainerForm } from "../ApplicationFormPage/StyleApplicationForm";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import {
  ButtonForm,
  Form,
  Input,
  Select,
} from "../../components/styles/StyleGeral";
import axios from "axios";
import { BaseURL } from "../../constants/urls";
import { useForm } from "../../hooks/useForm";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function CreateTripPage() {
  useProtectedPage();
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [msgError, setMsgError] = useState("");

  const { form, onChange, cleanFields } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
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
    const url = `${BaseURL}trips`;
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      auth: token,
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
      <h1>Criar Viagem</h1>
      <Form onSubmit={onSubmit}>
        <Select required name="planet" value={form.planet} onChange={onChange}>
          <option disabled selected value={""}>
            Planeta:
          </option>
          <option value={"Mercúrio"}>Mercúrio</option>
          <option value={"Vênus"}>Vênus</option>
          <option value={"Terra"}>Terra</option>
          <option value={"Marte"}>Marte</option>
          <option value={"Jupiter"}>Jupiter</option>
          <option value={"Saturno"}>Saturno</option>
          <option value={"Urano"}>Urano</option>
          <option value={"Netuno"}>Netuno</option>
          <option value={"Plutão"}>Plutão</option>
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
          placeholder="Descrição"
          name="description"
          value={form.description}
          onChange={onChange}
        />
        <Input
          required
          placeholder="Data"
          name="date"
          value={form.date}
          onChange={onChange}
          type="date"
        />
        <Input
          required
          placeholder="Duração em dias"
          name="durationInDays"
          value={form.durationInDays}
          onChange={onChange}
          type="number"
        />
        <ButtonForm>CRIAR</ButtonForm>
      </Form>
      <Snackbar
        open={openSuccess}
        autoHideDuration={6000}
        onClose={handleCloseSuccess}
      >
        <Alert onClose={handleCloseSuccess} severity="success">
          Viagem Criada!
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
