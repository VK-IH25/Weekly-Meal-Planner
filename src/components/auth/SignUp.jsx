import {
  Anchor,
  Button,
  Checkbox,
  Container,
  Group,
  Paper,
  Input,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { auth } from "../../firebase";
import classes from "./AuthenticationTitle.module.css";
import { useNavigate } from "react-router";

const SignUp = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const signup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Welcome to ForkCast!
      </Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={signup}>
          <TextInput
            label="Email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            mt="md"
          />
          <Group justify="space-between" mt="lg">
            <Checkbox label="Remember me" color="#3d8d7a" />
          </Group>
          <Button
            type="submit"
            variant="filled"
            color="#3d8d7a"
            fullWidth
            mt="xl"
          >
            Sign Up
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default SignUp;
