import { Box, Text } from "@chakra-ui/react";
import Head from "next/head";

import Navbar from "../components/Navbar.js";
import AdminLoginForm from "../components/AdminLoginForm.js";

export default function AdminPage() {
  return (
    <Box>
      <Head>
        <title>rekindle - Responder Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Box
        textAlign="center"
        backgroundColor="#fef4ea"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        minHeight="calc(100vh - 80px)"
        className="enter"
      >
        <Text
          fontWeight="bold"
          color="#6da9d6"
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
