import { Flex, Img, Text } from '@chakra-ui/react';
import Head from 'next/head'
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>cofyde</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex position="absolute" zIndex={1000} flexDirection="column" alignItems="center">
        <Navbar/>
        <Text zIndex={0} position="absolute" pt="220px" fontSize={45} color="#6da9d6">Cofyde</Text>
        <Text zIndex={0} position="absolute" pt="315px" fontSize={20} color="#6da9d6">Where help doesn't wait.</Text>
        <Img src="/hero.png"/>
        <Img src="/about.png"/>
        <Img src="/start.png"/>
      </Flex>
    </div>
  )
}
