import { Box, Text } from "@chakra-ui/react";

import Navbar from "../components/Navbar.js";
import AdminSignUpForm from "../components/AdminSignUpForm.js";

export default function AdminPage() {
  return (
    <Box>
      <Head>
        <title>rekindle - Responder Sign Up</title>
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
          Sign up to save lives
        </Text>
        <AdminSignUpForm />
      </Box>
    </Box>
  );
}
