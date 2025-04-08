import React from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  Avatar,
  Button,
  Link,
  HStack,
  VStack,
  Spacer,
} from "@chakra-ui/react";

const CallToActionFooter = () => {
  return (
    <Flex flexDirection="column" bg="#0B0C0E" color="white" px={8} py={12}>
      <Flex direction={{ base: "column", md: "row" }} justify="space-between">
        {/* Left: Text + Avatar */}
        <Flex flexDirection="column" alignItems="start">
          <Text fontSize="60px">Have something in mind?</Text>
          <Text fontSize="60px">lets build it together.</Text>
        </Flex>

        {/* Right: Get in touch Button */}
        <Flex mt={{ base: 8, md: 0 }} alignItems="center">
          <Button
            rounded="full"
            backgroundColor="white"
            color="black"
            variant="outline"
            size="lg"
            px={8}
            py={8}
          >
            Get in touch
          </Button>
        </Flex>
      </Flex>

      {/* Social media links */}
      <Flex justifyContent="space-between" mt={20}>
        <Text>Build with 💖 by Brightscout & Ayush</Text>
        <HStack spacing={6} justify={{ base: "center", md: "flex-end" }}>
          <Link
            href="#"
            fontSize="18px"
            color="gray.400"
            _hover={{ color: "white" }}
          >
            Linkedin
          </Link>
          <Link
            href="#"
            fontSize="18px"
            color="gray.400"
            _hover={{ color: "white" }}
          >
            Twitter
          </Link>
          <Link
            href="#"
            fontSize="18px"
            color="gray.400"
            _hover={{ color: "white" }}
          >
            Instagram
          </Link>
          <Link
            href="#"
            fontSize="18px"
            color="gray.400"
            _hover={{ color: "white" }}
          >
            Webflow
          </Link>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default CallToActionFooter;
