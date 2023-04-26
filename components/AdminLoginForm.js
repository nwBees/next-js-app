import { loginUser } from "../pages/api/firebase.auth.functions";

import {
  Box,
  Button,
  Text,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { useRouter } from "next/router";

const AdminLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await loginUser(email, password);
      router.push("/admin/authenticated");
    } catch (error) {
      setErrorMessage(error.message);
      console.log(errorMessage);
      console.log(error);
    }
  };

  useEffect(() => {
    const emailRegex = /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    const isValidEmail = (email) => {
      return emailRegex.test(email);
    };

    if (!isValidEmail(email)) {
      setErrorMessage("Email is invalid. Please try again.");
      console.log("fail");
    } else {
      setErrorMessage("");
    }
  }, [email]);

  useEffect(() => {
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+-=,./<>?;':"[\]{}|~`]).{8,}$/;

    const isStrongPassword = (password) => {
      //   return passwordRegex.test(password);
      return true;
    };

    if (!isStrongPassword(password)) {
      setErrorMessage(
        "Password must contain at least 8 characters, at least 1 digit, at least 1 uppercase letter, at least 1 lowercase letter, and at least 1 special character"
      );
    } else {
      setErrorMessage("");
    }
  }, [password]);

  return (
    <form onSubmit={handleSubmit}>
      <Box
        width="400px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </FormControl>
        <FormControl id="password" isRequired mt="10px">
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </FormControl>
        <Button
          mt="20px"
          type="submit"
          _hover={{ color: "white", backgroundColor: "#5B8ADC" }}
          border="2px #6da9d6 solid"
          backgroundColor="#00000000"
          color="#6da9d6"
          w="100px"
        >
          Login
        </Button>

        {errorMessage && (
          <Box mt="10px" color="red.500" w="300px">
            <Text>{errorMessage}</Text>
          </Box>
        )}
      </Box>
    </form>
  );
};

export default AdminLoginForm;
