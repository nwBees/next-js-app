import { Button, Icon, Text, Box } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { FaAngleDoubleDown } from "react-icons/fa";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  function goToCaller() {
    router.push("/caller");
  }

  return (
    <div className="container">
      <Head>
        <title>rekindle</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box display="flex" flexDirection="column" justifyContent="center">
        <Navbar />
        <Box
          id="hero-container"
          display="grid"
          gridTemplateRows="1.5fr 1fr 1fr"
          alignItems="center"
          w="100%"
          height="1135px"
          fontSize="20px"
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Text
              fontWeight="bold"
              fontSize="45px"
              color="#6da9d6"
              textAlign="center"
            >
              rekindle
            </Text>
            <Text fontSize="20px" color="#6da9d6" textAlign="center">
              Fortifying Human Connection
            </Text>
          </Box>
          <Box
            display="flex"
            color="white"
            justifyContent="center"
            alignItems="center"
          >
            <Text fontSize="26px" textAlign="center" pr="10px">
              Learn more
            </Text>
            <Icon fontSize="30px" as={FaAngleDoubleDown} />
          </Box>
        </Box>
        <Box
          id="about-container"
          w="100%"
          fontSize={20}
          h="1012px"
          display="grid"
          gridTemplateRows="1.5fr 0.5fr 3fr"
          justifyContent="center"
          alignItems="center"
        >
          <Text
            fontSize="40px"
            fontWeight="700"
            pb="70px"
            color="white"
            textAlign="center"
          >
            Help Shouldn't Have a Waitlist.
          </Text>
          <Text color="white" pl="100px" pr="100px" textAlign="center">
            Extensive wait times for mental health hotlines repress people from
            receiving the care and support they deserve. rekindle equips
            helpline personnel with the tools they need to provide professional
            help and resources as responsively as possible. Once an individual
            describes their immediate circumstance and state of mind, rekindle
            optimizes the information with AI, instantly informing a human
            responder with critical details along with suggested resources and
            ways to help. With a database that grows with the people who use it,
            rekindle augments the one system that saves lives: human to human
            connection.
          </Text>
        </Box>
        <Box
          w="100%"
          id="start-container"
          display="grid"
          justifyContent="center"
          alignItems="center"
          h="1135px"
        >
          <Box display="flex" flexDirection="column">
            <Text fontWeight="bold" fontSize="40px" color="#6da9d6" pb="30px" textAlign="center">
              Get Started
            </Text>
            <Button
              onClick={goToCaller}
              height="60px"
              fontSize="20px"
              _hover={{ color: "white", backgroundColor: "#5B8ADC" }}
              border="2px #6da9d6 solid"
              backgroundColor="#00000000"
              color="#6da9d6"
            >
              Talk to someone
            </Button>
          </Box>
          <Text fontSize="30px" color="#6da9d6" textAlign="center">
            {" "}
            Admin? Enter{" "}
            <Link id="admin-link" href="/admin">
              here
            </Link>{" "}
          </Text>
        </Box>
      </Box>
    </div>
  );
}
