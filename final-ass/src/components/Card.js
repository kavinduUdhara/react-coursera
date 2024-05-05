import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return(
    <Box bg="white" color="black" borderRadius='2xl' overflow="hidden">
      <Image src={imageSrc} alt={title} borderRadius='2xl'/>
      <Box p={4}>
        <Heading as="h3" size="lg">{title}</Heading>
        <Text style={{marginTop: "10px"}}>{description}</Text>
        <Heading as="h5" size="md" style={{marginTop: "10px", cursor: "pointer"}}>See more <FontAwesomeIcon icon={faArrowRight} size="1x"/></Heading>
      </Box>
    </Box>
  )
};

export default Card;
