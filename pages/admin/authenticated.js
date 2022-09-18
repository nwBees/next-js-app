import { Box, Button } from '@chakra-ui/react';
import React from 'react'
import { useState } from "react";

const Authenticated = () => {
    const [summary, setSummary] = useState("");
    const [entries, setEntries] = useState([
      {
        id: "00000001",
        summary:
          "This person may be struggling with current financial situation(s) and may be in danger of neglecting their child. Offer familial and welfare resources, and potential social service help. Reassure them that they are not alone and offer counselling and child care.",
      },
      {
        id: "00000002",
        summary:
          "This person may be struggling with a distressing mental health issue. Reassure this person that they are not alone, and offer professional mental health resources (therapy, healthcare provider(s)). Encourage this person to reach out to trusted individuals.",
      },
      {
        id: "00000003",
        summary:
          "This person is in a high risk situation. Acknowledge their feelings of fear or anxiety. Try to calm them from their emotional distress. Offer to help with this person’s feelings in the moment. Be a calming listener and connect them.",
      },
    ]);

    const handleClick = (summ) => {
        setSummary(summ);
      };
    
      const handleDel = (item) => {
        setEntries(entries.filter((curr)=>{
            return curr !== item;
        }));
        console.log(entries, " is new entries");
      };

      return (
        <Box pt="30px" textAlign="-webkit-center" className="admin" backgroundColor="#fef4ea" h="100vh">
          <div className="table2">
            <table className='thetable'>
              <thead>
                <tr>
                  <th>ID Number</th>
                  <th>Summary</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {entries.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>
                        <Button border="1px #6da9d6 solid" backgroundColor="#00000000" color="#6da9d6" _hover={{color: "white", backgroundColor: "#5B8ADC"}} onClick={() => handleClick(item.summary)}>
                          View
                        </Button>
                      </td>
                      <td>
                        <Button border="1px #6da9d6 solid" backgroundColor="#00000000" color="#6da9d6" _hover={{color: "white", backgroundColor: "#5B8ADC"}} onClick={() => handleDel(item)}>Delete</Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <Box w="1000px" h="400px" backgroundColor="white" className="summary">{summary}</Box>
        </Box>
      );
}

export default Authenticated