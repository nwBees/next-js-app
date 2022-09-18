import { Button, Flex, Icon, Img, Text, VStack } from '@chakra-ui/react';
import Head from 'next/head'
import Link from 'next/link';
import Navbar from '../components/Navbar';
import {FaAngleDoubleDown} from 'react-icons/fa'
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  function goToCaller() {
    router.push("/caller")
  }

  return (
    <div className="container">
      <Head>
        <title>cofyde</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex position="absolute" zIndex={1000} flexDirection="column" alignItems="center">
        <Navbar zIndex={1}/>
        <Text zIndex={0} fontWeight="bold" position="absolute" pt="220px" fontSize={45} color="#6da9d6">Cofyde</Text>
        <Text zIndex={0} position="absolute" pt="315px" fontSize={20} color="#6da9d6">Where help doesn't wait.</Text>
        <Text zIndex={0} position="absolute" pt="615px" fontSize={20} color="white"> Learn more <Icon as={FaAngleDoubleDown} top="2px" position="relative" boxSize={4}/> </Text>
        <Text zIndex={0} fontWeight="bold" position="absolute" pt="2180px" fontSize={40} color="#6da9d6">Get Started</Text>
        <Button onClick={goToCaller} height="60px" fontSize={14} _hover={{color: "white", backgroundColor: "#5B8ADC"}} position="absolute" pt="20px" pb="20px" mt="2280px" border="2px #6da9d6 solid" backgroundColor="#00000000" color="#6da9d6">Talk to someone</Button>
        <Text zIndex={0} position="absolute" top="2380px" fontSize={20} color="#6da9d6"> Admin? Enter <Link textDecoration="underline" href="/admin">here</Link> </Text>
        <VStack w="900px" zIndex={0} position="absolute" pt="1005px" fontSize={20} color="white">
        <Text fontSize={30} pb="70px">Help Shouldn't Have a Waitlist.</Text>
          <Text>Extensive wait times for mental health hotlines repress people from receiving the care and support they deserve. Cofyde equips helpline personnel with the tools they need to provide professional help and resources as responsively as possible. Once an individual describes their immediate circumstance and state of mind, Cofyde optimizes the information with AI, instantly informing a human responder with critical details along with suggested resources and ways to help. With a database that grows with the people who use it, Cofyde augments the one system that saves lives: human to human connection.</Text>
        </VStack>
        <Img src="/hero.png"/>
        <Img id='about' src="/about.png"/>
        <Img src="/start.png"/>
      </Flex>
    </div>
  )
}
