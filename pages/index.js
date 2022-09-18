import { Button, Flex, Icon, Img, Text } from '@chakra-ui/react';
import Head from 'next/head'
import Link from 'next/link';
import Navbar from '../components/Navbar';
import {FaAngleDoubleDown} from 'react-icons/fa'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>cofyde</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex position="absolute" zIndex={1000} flexDirection="column" alignItems="center">
        <Navbar/>
        <Text zIndex={0} fontWeight="bold" position="absolute" pt="220px" fontSize={45} color="#6da9d6">Cofyde</Text>
        <Text zIndex={0} position="absolute" pt="315px" fontSize={20} color="#6da9d6">Where help doesn't wait.</Text>
        <Text zIndex={0} position="absolute" pt="615px" fontSize={20} color="white"> Learn more <Icon as={FaAngleDoubleDown} top="2px" position="relative" boxSize={4}/> </Text>
        <Text zIndex={0} fontWeight="bold" position="absolute" pt="2180px" fontSize={40} color="#6da9d6">Get Started</Text>
        <Button height="60px" fontSize={14} _hover={{color: "white", backgroundColor: "#5B8ADC"}} position="absolute" pt="20px" pb="20px" mt="2280px" border="2px #6da9d6 solid" backgroundColor="#00000000" color="#6da9d6">Talk to someone</Button>
        <Text zIndex={0} position="absolute" pt="2380px" fontSize={20} color="#6da9d6"> Admin? Enter <Link textDecoration="underline" href="/admin">here</Link> </Text>
        <Img src="/hero.png"/>
        <Img id='about' src="/about.png"/>
        <Img src="/start.png"/>
      </Flex>
    </div>
  )
}
