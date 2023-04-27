import {
  Box,
  Text
} from "@chakra-ui/react";

import Navbar from "../components/Navbar.js";
import AdminLoginForm from "../components/AdminLoginForm.js";

export default function AdminPage() {
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
