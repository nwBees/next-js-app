import {
  Box,
  Button,
  Text,
  UnorderedList,
  ListItem,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import React from "react";
import { useState, useEffect } from "react";
import { getEntries, removeEntryById } from "../api/firebase.functions.js";
import Navbar from "../../components/Navbar.js";
import Head from "next/head";

import { getAdminByUid } from "../api/firebase.admin.functions.js";

import { auth } from "../../persistence/firebase.config.js";

const user = auth.currentUser;

const Authenticated = () => {
  const [callerContent, setCallerContent] = useState("");
  const [localEntries, setLocalEntries] = useState([]);
  const [localAdminCreds, setLocalAdminCreds] = useState({});

  const handleClick = (e, content) => {
    setCallerContent(content);
  };

  const handleDel = async (e, id) => {
    await removeEntryById(id);
    const stored = await getEntries();
    setLocalEntries(stored);
  };

  useEffect(() => {
    const fetchData = async () => {
      let entries = await getEntries();
      setLocalEntries(entries);
    };

    const fetchCurrentAdmin = async () => {
      let adminCreds = await getAdminByUid(user.uid);
      setLocalAdminCreds(adminCreds);
    };

    fetchData();
    fetchCurrentAdmin();
  }, []);

  return (
    <Box>
      <Head>
        <title>rekindle - Responder Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar isAdmin={true} />
      <Box
        textAlign="-webkit-center"
        className="admin"
        backgroundColor="#fef4ea"
        p="50px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        minHeight="calc(100vh - 80px)"
      >
        <Text fontSize="40px" textAlign="left" color="#6da9d6">
          Hello {localAdminCreds.firstName}!
        </Text>
        <UnorderedList pt="30px" pb="50px" pl="200px" pr="200px" color="#6da9d6">
          <ListItem>
            <Text fontSize="25px" textAlign="left">
              Each table entry below represents a person who has filled out the
              crisis request form.
            </Text>
          </ListItem>
          <ListItem>
            <Text fontSize="25px" textAlign="left">
              Click on a summary to view a summary of the caller's situation and
              a remedy to view a list of potential strategies on how to best
              support the caller.
            </Text>
          </ListItem>
          <ListItem>
            <Text fontSize="25px" textAlign="left">
              Please call the caller at the number provided in their table
              entry.
            </Text>
          </ListItem>
        </UnorderedList>
        <Table>
          <TableCaption>A list of caller crisis form submissions</TableCaption>
          <Thead>
            <Tr>
              <Th>First Name (optional)</Th>
              <Th>Last Name (optional)</Th>
              <Th>Phone Number</Th>
              <Th>Raw Content</Th>
              <Th>Summary</Th>
              <Th>Remedies</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {localEntries.map((item) => {
              return (
                <Tr key={Object.keys(item)[0]}>
                  <Td>{Object.values(item)[0].firstName || "None"}</Td>
                  <Td>{Object.values(item)[0].lastName || "None"}</Td>
                  <Td>{Object.values(item)[0].phone}</Td>
                  <Td>
                    <Button
                      border="1px #6da9d6 solid"
                      backgroundColor="#00000000"
                      color="#6da9d6"
                      _hover={{ color: "white", backgroundColor: "#5B8ADC" }}
                      onClick={(e) =>
                        handleClick(e, Object.values(item)[0].rawContent)
                      }
                    >
                      View
                    </Button>
                  </Td>
                  <Td>
                    <Button
                      border="1px #6da9d6 solid"
                      backgroundColor="#00000000"
                      color="#6da9d6"
                      _hover={{ color: "white", backgroundColor: "#5B8ADC" }}
                      onClick={(e) =>
                        handleClick(e, Object.values(item)[0].summary)
                      }
                    >
                      View
                    </Button>
                  </Td>
                  <Td>
                    <Button
                      border="1px #6da9d6 solid"
                      backgroundColor="#00000000"
                      color="#6da9d6"
                      _hover={{ color: "white", backgroundColor: "#5B8ADC" }}
                      onClick={(e) =>
                        handleClick(e, Object.values(item)[0].remedies)
                      }
                    >
                      View
                    </Button>
                  </Td>
                  <Td>
                    <Button
                      border="1px #6da9d6 solid"
                      backgroundColor="#00000000"
                      color="#6da9d6"
                      _hover={{ color: "white", backgroundColor: "#5B8ADC" }}
                      onClick={(e) => handleDel(e, Object.keys(item)[0])}
                    >
                      Delete
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
        <Box mt="50px">
          <Text fontSize="30px" textAlign="center" color="#6da9d6" mb="20px">
            View Caller Information
          </Text>
          <Box
            w="800px"
            minHeight="400px"
            backgroundColor="white"
            p="20px"
            borderRadius="20px"
          >
            {callerContent}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Authenticated;
