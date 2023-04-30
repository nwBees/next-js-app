import Head from "next/head";
import NextLink from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { addEntry } from "./api/firebase.functions.js";
import {
  Box,
  Button,
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  UnorderedList,
  ListItem,
  Link,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar.js";

const openAiApiKey = process.env.NEXT_PUBLIC_OPEN_AI_API_KEY;

export default function CallerPage() {
  const [summary, setSummary] = useState("");
  const [remedies, setRemedies] = useState("");
  const [phone, setPhone] = useState("");
  const [content, setContent] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let tempSummary;
    let tempRemedies;

    const summaryResponse = await fetch(
      "https://api.openai.com/v1/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${openAiApiKey}`,
        },
        body: JSON.stringify({
          model: "text-davinci-003",
          prompt: `Please summarize the general feelings/state of a person in crisis who has provided this information assuming that you are providing a report that a crisis line responder will use to help respond to the person in crisis: "${content}".`,
          temperature: 0.5,
        }),
      }
    );
    const summaryData = await summaryResponse.json();

    setSummary(summaryData.choices[0].text);
    tempSummary = summaryData.choices[0].text;

    const remediesResponse = await fetch(
      "https://api.openai.com/v1/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${openAiApiKey}`,
        },
        body: JSON.stringify({
          model: "text-davinci-003",
          prompt: `Please provide some potential solutions using grammatically correct sentences to help a person in crisis who has provided this information about their situation: "${content}".`,
          temperature: 0.5,
        }),
      }
    );
    const remediesData = await remediesResponse.json();

    setRemedies(remediesData.choices[0].text);
    tempRemedies = remediesData.choices[0].text;

    await addEntry(
      firstName,
      lastName,
      phone,
      content,
      tempSummary,
      tempRemedies
    );

    setHasSubmitted(!hasSubmitted);
  };

  useEffect(() => {
    const phoneRegex = /^(\([0-9]{3}\)\s*|[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;

    const isValidPhone = (phone) => {
      return phoneRegex.test(phone);
    };

    if (!isValidPhone(phone)) {
      setErrorMessage("Phone is invalid. Please enter in XXX-XXX-XXXX format.");
    } else {
      setErrorMessage("");
    }
  }, [phone]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      backgroundColor="#fef4ea"
      // minHeight="100vh"
    >
      <Head>
        <title>rekindle - Caller Information</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar isAdmin={false} />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        w="100vw"
        fontWeight="bold"
      >
        {!hasSubmitted && (
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            h="calc(100vh - 80px)"
          >
            <Text fontSize="30px" pb="40px" color="#6da9d6" textAlign="center">
              Tell us about what's going on
            </Text>
            <form onSubmit={handleSubmit}>
              <Box
                display="flex"
                pl="50px"
                pr="50px"
                flexDirection="column"
                w="700px"
                justifyContent="center"
                alignItems="center"
              >
                <FormControl id="first-name">
                  <FormLabel>First Name (optional)</FormLabel>
                  <Input
                    type="text"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </FormControl>
                <FormControl id="last-name" pt="20px">
                  <FormLabel>Last Name (optional)</FormLabel>
                  <Input
                    type="text"
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </FormControl>
                <FormControl id="phone" pt="20px" isRequired>
                  <FormLabel>Phone Number</FormLabel>
                  <Input
                    type="phone"
                    value={phone}
                    placeholder="Please enter in XXX-XXX-XXXX format."
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </FormControl>
                <FormControl id="caller-text" pt="20px" isRequired>
                  <FormLabel>Information</FormLabel>
                  <Textarea
                    placeholder="Start typing here! Feel free to share as much as you're comfortable sharing."
                    value={content}
                    onChange={(e) => {
                      setContent(e.target.value);
                    }}
                  ></Textarea>
                </FormControl>
                {errorMessage && (
                  <Box mt="20px" color="red.500" w="400px" textAlign="center">
                    <Text>{errorMessage}</Text>
                  </Box>
                )}
                <Button
                  mt="30px"
                  w="100px"
                  border="2px #6da9d6 solid"
                  backgroundColor="#00000000"
                  color="#6da9d6"
                  _hover={{ color: "white", backgroundColor: "#5B8ADC" }}
                  type="submit"
                >
                  Submit
                </Button>
              </Box>
            </form>
          </Box>
        )}
      </Box>

      {hasSubmitted && (
        <Box
          fontSize="40px"
          display="flex"
          flexDirection="column"
          color="#6da9d6"
          padding="50px"
          minHeight="calc(100vh - 80px)"
        >
          <Text fontWeight="700">Thank you for submitting!</Text>
          <Text fontSize="35px" pt="20px" pb="20px">
            One of our responders will be contacting you shortly! :)
          </Text>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            pt="20px"
            pb="20px"
          >
            <Box display="flex" justifyContent="center">
              <Image
                id="shiba-img"
                src="/shiba.jpg"
                height={200}
                width={300}
                alt="a happy dog"
              />
            </Box>
            <Text textAlign="center" fontSize="20px" fontStyle="italic">
              A happy shiba inu!
            </Text>
          </Box>
          <Text fontSize="35px" pb="20px">
            In the meantime, please check out any of the following links if they
            are useful to you:
          </Text>
          <UnorderedList fontSize="25px">
            <ListItem>
              <Link as={NextLink} href="/">
                Our AI Kiply :)
              </Link>
            </ListItem>
            <ListItem>
              <Link
                as={NextLink}
                href="https://www.iasp.info/resources/Crisis_Centres/"
              >
                International Association for Suicide Prevention (IASP)
              </Link>
            </ListItem>
            <ListItem>
              <Link as={NextLink} href="https://www.befrienders.org/">
                Befrienders Worldwide
              </Link>
            </ListItem>
            <ListItem>
              <Link as={NextLink} href="https://www.crisistextline.org/">
                Crisis Text Line
              </Link>
            </ListItem>
            <ListItem>
              <Link as={NextLink} href="https://www.samaritans.org/">
                Samaritans
              </Link>
            </ListItem>
            <ListItem>
              <Link
                as={NextLink}
                href="https://media.ifrc.org/ifrc/what-we-do/health/mental-health-psychosocial-support/"
              >
                The International Federation of Red Cross and Red Crescent
                Societies
              </Link>
            </ListItem>
            <ListItem>
              <Link
                as={NextLink}
                href="https://www.icrc.org/en/what-we-do/restoring-family-links"
              >
                The International Red Cross
              </Link>
            </ListItem>
          </UnorderedList>
        </Box>
      )}
    </Box>
  );
}
