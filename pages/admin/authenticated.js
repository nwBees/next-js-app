import {
  Box,
  Button,
  Text,
  UnorderedList,
  ListItem,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import React from "react";
import { useState, useEffect } from "react";
import { getEntries, removeEntryById } from "../api/firebase.functions.js";
import Navbar from "../../components/Navbar.js";

import { getAdminByUid } from "../api/firebase.admin.functions.js";

import { auth } from "../../persistence/firebase.config.js";

const user = auth.currentUser;

// TODO: make authenticated more personalized to the user who is logged in

const Authenticated = () => {
  const [callerContent, setCallerContent] = useState("");
  const [localEntries, setLocalEntries] = useState([]);
  const [localAdminCreds, setLocalAdminCreds] = useState({});

  const handleClick = (e, content) => {
    console.log(e);
    console.log(content);
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
      console.log(adminCreds);
      setLocalAdminCreds(adminCreds);
    };

    fetchData();
    fetchCurrentAdmin();
  }, []);

  return (
    <Box>
      <Navbar isAdmin={true} />
      <Box
        textAlign="-webkit-center"
        className="admin"
        backgroundColor="#fef4ea"
        p="50px"
        display="grid"
        gridTemplateRows="50px 150px 1fr 1fr"
        rowGap="20px"
      >
        <Text fontSize="30px" textAlign="left">
          Hello {localAdminCreds.firstName}!
        </Text>
        <UnorderedList>
          <ListItem>
            <Text fontSize="20px" textAlign="left">
              Each table entry below represents a person who has filled out the
              crisis request form.
            </Text>
          </ListItem>
          <ListItem>
            <Text fontSize="20px" textAlign="left">
              Click on a summary to view a summary of the caller's situation and
              a remedy to view a list of potential strategies on how to best
              support the caller.
            </Text>
          </ListItem>
          <ListItem>
            <Text fontSize="20px" textAlign="left">
              Please call the caller at the number provided in their table
              entry.
            </Text>
          </ListItem>
        </UnorderedList>
        <Table>
          <TableCaption>A list of caller crisis form submissions</TableCaption>
          <Thead>
            <Tr>
              <Th>ID Number</Th>
              <Th>Summary</Th>
              <Th>Remedies</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {localEntries.map((item) => {
              return (
                <Tr key={Object.keys(item)[0]}>
                  <Td>{Object.keys(item)[0]}</Td>
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
        <Box
          w="1000px"
          h="400px"
          backgroundColor="white"
          className="summary"
          id="summary-value"
          value={callerContent}
          p="20px"
        >
          {callerContent}
        </Box>
      </Box>
    </Box>
  );
};

export default Authenticated;
