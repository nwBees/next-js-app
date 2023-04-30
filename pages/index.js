import { Button, Icon, Text, Box } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Chatbot from "../components/Chatbot";
import { FaAngleDoubleDown } from "react-icons/fa";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  function goToCaller() {
    router.push("/caller");
  }

  return (
    <Box>
      <Head>
        <title>rekindle</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box display="flex" flexDirection="column" justifyContent="center">
        <Navbar isAdmin={false} />
        <Box
          id="hero-container"
          display="grid"
          gridTemplateRows="1.5fr 1fr 1fr"
          alignItems="center"
          w="100%"
          height="1135px"
          fontSize="20px"
          style={{
            backgroundImage: `url(/hero.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
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
          gridTemplateRows="repeat(2, 1fr)"
          justifyContent="center"
          alignItems="center"
          style={{
            backgroundImage: `url(/about.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Box>
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
              Extensive wait times for mental health hotlines repress people
              from receiving the care and support they deserve. rekindle equips
              helpline personnel with the tools they need to provide
              professional help and resources as responsively as possible. Once
              an individual describes their immediate circumstance and state of
              mind, rekindle optimizes the information with AI, instantly
              informing a human responder with critical details along with
              suggested resources and ways to help. With a database that grows
              with the people who use it, rekindle augments the one system that
              saves lives: human to human connection.
            </Text>
          </Box>
          <Box
            pl="50px"
            pr="50px"
            display="flex"
            flexDirection="column"
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
              Meet our Responders
            </Text>
            <Box display="flex" justifyContent="center">
              <Box
                display="flex"
                flexDirection="column"
                minWidth="30%"
                backgroundColor="#6da9d6"
                p="20px"
                borderRadius="20px"
                color="white"
              >
                <Box display="flex" justifyContent="center">
                  <Image src="/profilePics/jeff.jpg" width={300} height={200} />
                </Box>
                <Text textAlign="center" pt="10px" pb="10px">
                  Jeff Rossum
                </Text>
                <Text textAlign="center" fontSize="16px">
                  "Volunteering at a crisis center is a unique opportunity to
                  make a real difference in someone's life during their most
                  vulnerable moments."
                </Text>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                minWidth="30%"
                backgroundColor="#6da9d6"
                p="20px"
                borderRadius="20px"
                color="white"
                ml="20px"
                mr="20px"
              >
                <Box display="flex" justifyContent="center">
                  <Image
                    src="/profilePics/janet.jpg"
                    width={300}
                    height={200}
                  />
                </Box>
                <Text textAlign="center" pt="10px" pb="10px">
                  Janet Bertuzzi
                </Text>
                <Text textAlign="center" fontSize="16px">
                  "It's not always easy, but being a crisis center responder is
                  one of the most fulfilling experiences I've ever had. Knowing
                  that I've helped someone in their time of need is an
                  indescribable feeling."
                </Text>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                minWidth="30%"
                backgroundColor="#6da9d6"
                p="20px"
                borderRadius="20px"
                color="white"
              >
                <Box display="flex" justifyContent="center">
                  <Image
                    src="/profilePics/laura.jpg"
                    width={300}
                    height={200}
                  />
                </Box>
                <Text textAlign="center" pt="10px" pb="10px">
                  Laura Tarter
                </Text>
                <Text textAlign="center" fontSize="16px">
                  "Being a crisis center responder is not just about helping
                  others; it's also about personal growth and self-discovery.
                  It's an opportunity to learn and grow as a person while making
                  a difference in the world."
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          w="100%"
          id="start-container"
          display="grid"
          justifyContent="center"
          alignItems="center"
          h="1135px"
          style={{
            backgroundImage: `url(/start.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          gridTemplateRows="500px 1fr"
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Text
              fontWeight="bold"
              fontSize="40px"
              color="#6da9d6"
              textAlign="center"
            >
              Get Started
            </Text>
            <Text
              color="#6da9d6"
              pl="100px"
              pr="100px"
              pb="30px"
              pt="10px"
              textAlign="center"
              fontSize="20px"
            >
              Jot down a quick description of how you're feeling, and we'll
              match you with a responder as soon as possible! Enjoy some
              relaxing images while you wait! You can also take the chance to
              talk to Kiply, our resident AI Responder that has been built to
              listen to you.
            </Text>
            <Button
              onClick={goToCaller}
              height="60px"
              fontSize="20px"
              _hover={{ color: "white", backgroundColor: "#5B8ADC" }}
              border="2px #6da9d6 solid"
              backgroundColor="#00000000"
              color="#6da9d6"
              w="200px"
            >
              Talk to someone
            </Button>
          </Box>
          <Box display="flex" flexDirection="column">
            <Text
              fontSize="40px"
              fontWeight="700"
              color="#6da9d6"
              textAlign="center"
            >
              Interested in volunteering as a responder?
            </Text>
            <Text
              color="#6da9d6"
              pl="100px"
              pr="100px"
              pb="70px"
              pt="70px"
              textAlign="center"
              fontSize="20px"
            >
              Apply to become a responder to provide support and care for people
              in need. Responders must provide proper certification and undergo
              specialized training before responding to callers. Only selected
              applicants will be contacted by our team to continue forward with
              the training process.
            </Text>
            <Box
              display="flex"
              color="#6da9d6"
              justifyContent="center"
              alignItems="center"
            >
              <Text fontSize="30px" textAlign="center" pr="6px">
                {" "}
                Ready to respond to the call? Apply{" "}
              </Text>
              <Link id="admin-link" href="/admin">
                <Text
                  fontWeight="700"
                  fontSize="30px"
                  _hover={{ cursor: "pointer", textDecoration: "underline" }}
                >
                  here
                </Text>
              </Link>
            </Box>
          </Box>
        </Box>
        <Chatbot />
      </Box>
    </Box>
  );
}
