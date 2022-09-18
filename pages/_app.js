import { ChakraProvider } from "@chakra-ui/react";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
    return (
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

// pages/_app.js
// import { ChakraProvider } from '@chakra-ui/react'

// function MyApp({ Component, pageProps }) {
//   return (
//     <ChakraProvider>
//       <Component {...pageProps} />
//     </ChakraProvider>
//   )
// }

// export default MyApp