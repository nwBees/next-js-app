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
import AdminSignUpForm from "../components/AdminSignUpForm.js";

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
        <Text fontWeight="bold" color="#295ebb" fontSize="30px" className="title" pb="40px">
          Sign up to save lives
        </Text>
        {/* <Text fontWeight="bold" color="#295ebb" fontSize={30} className="title">
          Enter the code provided to you.
        </Text>
        <FormControl pl="50px" pr="50px" pt="50px" pb="50px">
          <Input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            type="text"
            placeholder="Enter Code here"
            w="200px"
          />
          <FormHelperText>
            Check with your employer for your access code
          </FormHelperText>
        </FormControl>
        <Button
          transition="0.3s ease"
          backgroundColor="#FEF4EA"
          p="15px"
          borderRadius="12px"
          border="1px solid #5B8ADC"
          color="#5B8ADC"
          _hover={{ color: "white", backgroundColor: "#5B8ADC" }}
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </Button> */}
        <AdminSignUpForm />
      </Box>
    </Box>
  );
}
