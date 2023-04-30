import { createUser } from "../pages/api/firebase.auth.functions";
import { createAdmin } from "../pages/api/firebase.admin.functions";

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

const AdminSignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [pictureId, setPictureId] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userCreds = await createUser(email, password);
    await createAdmin(
      userCreds.uid,
      firstName,
      lastName,
      email,
      password,
      dateOfBirth,
      pictureId,
      pdfFile
    );

    router.push("/admin/authenticated");
  };

  useEffect(() => {
    const emailRegex = /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    const isValidEmail = (email) => {
      return emailRegex.test(email);
    };

    if (!isValidEmail(email)) {
      setError("Email is invalid. Please try again.");
    } else {
      setError("");
    }
  }, [email]);

  useEffect(() => {
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+-=,./<>?;':"[\]{}|~`]).{8,}$/;

    const isStrongPassword = (password) => {
      return passwordRegex.test(password);
    };

    if (!isStrongPassword(password)) {
      setError(
        "Password must contain at least 8 characters, at least 1 digit, at least 1 uppercase letter, at least 1 lowercase letter, and at least 1 special character"
      );
    } else {
      setError("");
    }
  }, [password]);

  return (
    <form onSubmit={handleSubmit}>
      <Box w="700px">
        <FormControl id="first-name" isRequired>
          <FormLabel>First name</FormLabel>
          <Input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </FormControl>
        <FormControl id="last-name" pt="10px" pb="10px" isRequired>
          <FormLabel>Last name</FormLabel>
          <Input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </FormControl>
        <FormControl id="email" pt="10px" pb="10px" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </FormControl>
        <FormControl id="password" pt="10px" pb="10px" isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </FormControl>
        <FormControl id="date-of-birth" pt="10px" pb="10px" isRequired>
          <FormLabel>Date of birth</FormLabel>
          <Input
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </FormControl>
        <FormControl id="picture-id" pt="10px" pb="10px" isRequired>
          <FormLabel>Government ID</FormLabel>
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => setPictureId(e.target.files[0])}
          />
          <FormHelperText>
            Upload a picture of a piece of government issued ID
          </FormHelperText>
        </FormControl>
        <FormControl id="pdf-file" pt="10px" pb="10px" isRequired>
          <FormLabel>Certification Upload</FormLabel>
          <Input
            type="file"
            accept="application/pdf"
            onChange={(e) => setPdfFile(e.target.files[0])}
          />
          <FormHelperText>
            Upload a PDF file of your certification
          </FormHelperText>
        </FormControl>
        <Button
          mt="10px"
          isLoading={isLoading}
          type="submit"
          _hover={{ color: "white", backgroundColor: "#5B8ADC" }}
          border="2px #6da9d6 solid"
          backgroundColor="#00000000"
          color="#6da9d6"
        >
          Sign up
        </Button>
        {error && (
          <Box mt="10px" color="red.500" w="100%">
            <Text>{error}</Text>
          </Box>
        )}
      </Box>
    </form>
  );
};

export default AdminSignUpForm;
