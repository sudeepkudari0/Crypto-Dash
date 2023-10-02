import { Box, Container, Image, Text } from "@chakra-ui/react";
import React from "react";
import btcSrc from "../btc.png"
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box display={"flex"}>
    
    <Box bgColor={"cyan.700"} w={"50vw"} h={"92.3vh"}>
      
    <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        {/* <Image
          w={"full"}
          h={"full"}
          objectFit={"contain"}
          src={btcSrc}
          filter={"grayscale(1)"}
        /> */}
        </motion.div>
    
      <Text
        fontSize={"7xl"}
        textAlign={"center"}
        fontWeight={"bold"}
        color={"blackAlpha.900"}
        mt={"-500"}
        >
        Crypto-Board
        <Text
         fontSize={"3xl"}
         fontFamily={"sans-serif"}
         >        
          Welcome to crypto-board, your one-stop destination for real-time cryptocurrency prices across all major cryptocurrency exchanges.
          Stay Updated with ease on the latest crypto market trends
        </Text>

      </Text>
         
    </Box>
    <Box w={"50vw"} bgColor={"blackAlpha.600"}>
          
    <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <Image
          w={"full"}
          h={"full"}
          objectFit={"contain"}
          src={btcSrc}
          filter={"grayscale(1)"}
        />
        </motion.div>

    </Box>
    
     
   
   </Box>
  );
};

export default Home;