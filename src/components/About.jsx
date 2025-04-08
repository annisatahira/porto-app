import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const AboutSection = () => {
  return (
    <Flex
      id="about"
      bg="gray.50"
      flexDirection="column"
      alignItems="center"
      py={20}
    >
      <Box bg="gray.50" py={16} maxW="1440px" w="100%" mx="auto" px={20}>
        <Flex
          direction={{ base: "column", md: "row" }}
          align="start"
          gap={12}
          width="100%"
        >
          {/* Left Side - Title */}
          <Flex width="30%">
            <Heading as="h1" size="4xl" textAlign="left">
              About
            </Heading>
          </Flex>

          {/* Right Side - Description */}
          <Flex width="70%">
            <Text
              fontSize="xl"
              color="gray.700"
              textAlign="left"
              lineHeight="2rem"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default AboutSection;
