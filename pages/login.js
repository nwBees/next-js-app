import {
  Box,
  Button,
  Text,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import { useRouter } from "next/router.js";
import { useEffect, useState } from "react";
import { getEntries } from "./api/firebase.functions.js";

import Navbar from "../components/Navbar.js";
import AdminLoginForm from "../components/AdminLoginForm.js";

export default function AdminPage() {
  const [code, setCode] = useState("");

  const correctCode = "HTN2022";
  let router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code == correctCode) {
      router.push("/admin/authenticated");
    } else {
      alert("Wrong code. Try again.");
    }
  };

  return (
    <Box>
      <Navbar />
      <Box
        textAlign="center"
        backgroundColor="#fef4ea"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        h="calc(100vh - 80px)"
        className="enter"
      >
        <Text
          fontWeight="bold"
          color="#295ebb"
          fontSize="30px"
          className="title"
          pb="40px"
        >
          Login
        </Text>
        <AdminLoginForm />
      </Box>
    </Box>
  );
}
