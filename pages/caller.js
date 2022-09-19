import Link from 'next/link';
import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import { addEntry } from './api/firebase.functions.js';
import { Box, Button, Flex, Text } from '@chakra-ui/react';

export default function CallerPage() {
  const [summary, setSummary] = useState('');
  const [remedies, setRemedies] = useState('');
  const [content, setContent] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);
  
  const handleChange = (e) => {
    setContent(e.target.value);
  }

  const handleClick = async (e) => {
    e.preventDefault();
    const prompt = e.target.parentElement.children[0].value;

    const response = await fetch('/api/summarize', {
                                        mode: 'cors',
                                        headers: {
                                          'Accept': 'application/json',
                                          'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify({prompt: prompt}),
                                        method: 'POST'
                                      });
    const json = await response.json();
    console.log(json);
    let oneline = json.body.generations[0].text;
    oneline = oneline.substring(0, oneline.length - 2); 
    // store the summary in database with randomly generated index 
    setSummary(oneline);

    const remediesResponse = await fetch('/api/remedy', {
                                            mode: 'cors',
                                            headers: {
                                              'Accept': 'application/json',
                                              'Content-Type': 'application/json'
                                            },
                                            body: JSON.stringify({prompt: oneline}),
                                            method: 'POST'
                                          });
    const remediesjson = await remediesResponse.json();
    console.log(remediesjson);
    let remediesResults = remediesjson.body.generations[0].text;
    if (remediesResults[remediesResults.length - 2] === "-" && remediesResults[remediesResults.length - 1] === "-") {
      remediesResults = remediesResults.substring(0, remediesResults.length - 2);
    }
    // would need to store this in database
    console.log(remediesResults);
    setRemedies(remediesResults);

    await addEntry(oneline, remediesResults);

    setHasSubmitted(!hasSubmitted);
  }

  useEffect(() => {
    const resultElm = document.getElementById('result');
    resultElm.innerHTML = summary; 
  }, [summary]);

  return (
    <Flex flexDirection="column" backgroundColor="#fef4ea" w="100vw" h="100vh" p="0" m="0">
        <Head>
            <title>Caller</title>
        </Head>
        <Text pt="20px" ml="40px" color="#295ebb"> <Link href="/">Back to home</Link></Text>
      {!hasSubmitted && 
        <Text fontSize={30} ml="40px" pt="20px" pb="40px" color="#295ebb" className="static-text">
            Tell me about what's going on.
        </Text>
      }
      {!hasSubmitted && 
        <form>
          <Flex ml="40px" flexDirection="column" w="1340px">
          <textarea name="" id="" cols="30" rows="10" placeholder='Start typing here!' value={content} onChange={handleChange}></textarea>
          <Button mt="40px" w="100px" border="2px #6da9d6 solid" backgroundColor="#00000000" color="#6da9d6" _hover={{color: "white", backgroundColor: "#5B8ADC"}} type='submit' onClick={handleClick}>Submit</Button>
          </Flex>
        </form>
      }
      {hasSubmitted && 
       <Box fontSize={40} >Thank you for submitting! We'll be with you shortly! :)</Box>
      }
      <div id='result' value={summary}>
        {summary}
      </div>
      <div id='remedies' value={remedies}>
        {remedies}
      </div>
    </Flex>
  );
}