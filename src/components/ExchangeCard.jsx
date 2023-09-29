import React from 'react'
import { VStack,Heading,Image,Text } from '@chakra-ui/react'

const ExchangeCard = ({name,img,rank,url}) => {

        <a href={url} target='blank'>
          <VStack w={"52"} shadow={"lg"} p={8} borderRadius={"lg"} transition={"all 0.3s"} >
            <Image src= {img} w={"10"} h={"10"} objectFit={"contain"} alt = {"Exchnage"}/>
            <Heading size={"md"} noOfLines={"1"} >
              {rank}
            </Heading>
            <Text noOfLines={"1"}>
              {name}
            </Text>
          </VStack>
        </a>
}

export default ExchangeCard