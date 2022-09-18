import { Box, Button, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router.js';
import {useState} from 'react'
import { getEntries } from './api/firebase.functions.js';

export async function getStaticProps() {
  const entries = await getEntries();
  return {
    props: {
      entries
    },
  };
}

export default function AdminPage({ entries }) {
  const [situation, setSituation] = useState("");
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
      
  }

  return (
    <Box textAlign="center" backgroundColor="#fef4ea" w="100vw" h="100vh" p="0" m="0" className="enter">
            <Text fontWeight="bold" pt="220px" color="#295ebb" fontSize={30} mb="30px" className="title">Enter the code provided to you.</Text>
            <form className="code-form" id="myform2">
                <input className="text-st" value={code} onChange={(e) => setCode(e.target.value)} type="text" placeholder="Type here..."></input>
            </form>
            <Button 
            mt="40px"
            transition="0.3s ease" 
            backgroundColor="#FEF4EA" 
            p="15px" 
            borderRadius="12px" 
            border="1px solid #5B8ADC" 
            color="#5B8ADC"
            _hover={{bc: '#5B8ADC'}}
            type="submit"
            form="myform2"
            onClick={handleSubmit}
            >Submit</Button>
        </Box>
    );
}