import {
  Box,
  Button,
  Checkbox,
  Dialog,
  FormControlLabel,
  FormHelperText,
  Paper,
  TextField,
} from "@mui/material";
import React, { useReducer, useState } from "react";
import { Stack } from "react-bootstrap";
import { LoadingButton } from "@mui/lab";

const initialState = {
  name: "",
  surname: "",
  email: "",
  accept: false,
  nameError: false,
  surnameError: false,
  emailError: false,
  acceptError: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "change":
      return { ...state, [action.payload.name]: action.payload.value };
    case "reset":
      return { ...initialState };

    default:
      throw new Error();
  }
};

export const Formularz = ({ modalOpen, setModalOpen }) => {
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const change = (e, name) => {
    if (name === "accept") {
      dispatch({ type: "change", payload: { name, value: e.target.checked } });
      return;
    }
    dispatch({ type: "change", payload: { name, value: e.target.value } });
  };
  const submit = () => {
    const { name, surname, email, accept } = state;
    setIsSubmiting(true);
    setTimeout(() => {
      setIsSubmiting(false);
    }, 2000);
    let error = false;
    if (!name) {
      error = true;
      dispatch({ type: "change", payload: { name: "nameError", value: true } });
    } else {
      dispatch({
        type: "change",
        payload: { name: "nameError", value: false },
      });
    }

    if (!surname) {
      error = true;
      dispatch({
        type: "change",
        payload: { name: "surnameError", value: true },
      });
    } else {
      dispatch({
        type: "change",
        payload: { name: "surnameError", value: false },
      });
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      error = true;
      dispatch({
        type: "change",
        payload: { name: "emailError", value: true },
      });
    } else {
      dispatch({
        type: "change",
        payload: { name: "emailError", value: false },
      });
    }

    if (!accept) {
      error = true;
      dispatch({
        type: "change",
        payload: { name: "acceptError", value: true },
      });
    } else {
      dispatch({
        type: "change",
        payload: { name: "acceptError", value: false },
      });
    }

    if (error) return;
    let response = state;
    delete response.nameError;
    delete response.surnameError;
    delete response.emailError;
    delete response.acceptError;
    console.log(response);
  };
  return (
    <Dialog
      open={modalOpen}
      onClose={() => setModalOpen(false)}
    >
      <Paper
        elevation={3}
        sx={{ p: 12 }}
      >
        <Stack gap={3}>
          <TextField
            required
            label="Imię"
            value={state.name}
            error={state.nameError}
            helperText={state.nameError && "Proszę wypełnić wymagane pola!"}
            onChange={(e) => change(e, "name")}
          />
          <TextField
            required
            label="Nazwisko"
            value={state.surname}
            error={state.surnameError}
            helperText={state.surnameError && "Proszę wypełnić wymagane pola!"}
            onChange={(e) => change(e, "surname")}
          />
          <TextField
            required
            label="E-mail"
            value={state.email}
            error={state.emailError}
            onChange={(e) => change(e, "email")}
            helperText={state.emailError && "Proszę wpisać prawidłowy email!"}
          />
          <FormControlLabel
            required
            label="Potwierdzam"
            onChange={(e) => change(e, "accept")}
            checked={state.accept}
            control={<Checkbox />}
          ></FormControlLabel>
          <LoadingButton
            loading={isSubmiting}
            variant="outlined"
            onClick={submit}
          >
            WYŚLIJ
          </LoadingButton>
        </Stack>
      </Paper>
    </Dialog>
  );
};
