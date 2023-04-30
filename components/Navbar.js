import { Button, Text, Box } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";

import { logoutUser } from "../pages/api/firebase.auth.functions.js";

import Image from "next/image";

const Navbar = ({ isAdmin }) => {
  const router = useRouter();

  const goHome = () => {
    router.push("/");
  };

  const handleLogout = async () => {
    await logoutUser();
    router.push("/");
  };

  function goToLogin() {
    router.push("/login");
  }

  function goToCaller() {
    router.push("/caller");
  }

  return (
    <Box
      display="flex"
      w="100%"
      backgroundColor="#fdf8f4"
      height="80px"
      justifyContent="space-between"
      alignItems="center"
      fontSize="28px"
    >
      <Box
        id="logo-container"
        display="flex"
        justifyContent="center"
        alignItems="center"
        _hover={{ cursor: "pointer" }}
      >
        <Text fontSize="28px" color="#5B8ADC" pl="50px" onClick={goHome}>
          rekindle
        </Text>
        <Image src="/logo.png" width={40} height={40} />
      </Box>
      {!isAdmin ? (
        <Box>
          <Button
            onClick={goToCaller}
            _hover={{ color: "white", backgroundColor: "#5B8ADC" }}
            alignSelf="center"
            border="2px #5B8ADC solid"
            backgroundColor="#fdf8f4"
            color="#5B8ADC"
            mr="50px"
            fontSize="20px"
          >
            Talk to someone
          </Button>
          <Button
            onClick={goToLogin}
            _hover={{ color: "white", backgroundColor: "#5B8ADC" }}
            alignSelf="center"
            border="2px #5B8ADC solid"
            backgroundColor="#fdf8f4"
            color="#5B8ADC"
            mr="50px"
            fontSize="20px"
          >
            Login
          </Button>
        </Box>
      ) : (
        <Button
          onClick={handleLogout}
          _hover={{ color: "white", backgroundColor: "#5B8ADC" }}
          alignSelf="center"
          border="2px #5B8ADC solid"
          backgroundColor="#fdf8f4"
          color="#5B8ADC"
          mr="50px"
          fontSize="20px"
        >
          Logout
        </Button>
      )}
    </Box>
  );
};

export default Navbar;
