import React from "react";
import { Box, Center, Image, Heading, Text, VStack } from "@chakra-ui/react";

const HeroBanner = () => {
  return (
    <Box
      w="100%"
      bg="#C7D0D9"
      marginTop="-5rem"
      zIndex={1}
      position={"relative"}
    >
      <Center h="100%" position="relative" overflow="hidden">
        <VStack textAlign="center">
          <Box height="700px">
            <Image
              src="/banner-people.png"
              alt="Hero"
              height="100%"
              width="100%"
              objectFit="cover" // or "contain", depending on your preference
            />
          </Box>
          <Heading
            as="h1"
            fontSize="7.5rem"
            color="white"
            whiteSpace="nowrap"
            position="absolute"
            bottom="200px"
            textAlign="center"
            left="50%"
            transform="translateX(-50%)"
            maxWidth="100vw"
          >
            Webflow Developer - UI/UX
          </Heading>
        </VStack>
      </Center>
    </Box>
  );
};

export default HeroBanner;
