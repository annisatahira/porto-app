import React from "react";
import {
  Box,
  Flex,
  Heading,
  VStack,
  Text,
  Link,
  Image,
} from "@chakra-ui/react";
// import { ArrowForwardIcon } from "@chakra-ui/icons";

const WorkSection = () => {
  const workItems = [
    {
      title: "Decodable.co",
      description: "A platform for AI-based content generation and publishing.",
      link: "/projects/alpha",
    },
    {
      title: "Gofirefly.io",
      description: "An analytics dashboard for tracking performance metrics.",
      link: "/projects/beta",
    },
    {
      title: "Blinkops.com",
      description: "A mobile app for managing daily tasks and productivity.",
      link: "/projects/gamma",
    },
    {
      title: "Withkanvas.com",
      description: "A mobile app for managing daily tasks and productivity.",
      link: "/projects/gamma",
    },
  ];

  return (
    <Flex
      id="work"
      bg="gray.50"
      flexDirection="column"
      alignItems="center"
      pb={20}
    >
      <Box bg="gray.50" maxW="1440px" w="100%" mx="auto" px={20}>
        <Flex
          direction={{ base: "column", md: "row" }}
          align="start"
          gap={12}
          width="100%"
        >
          {/* Left Side - Title */}
          <Flex width="30%">
            <Heading as="h1" size="4xl" textAlign="left">
              Recent Work
            </Heading>
          </Flex>

          {/* Right Side - Description */}
          <Flex width="70%">
            <VStack align="start" spacing={8} width="100%">
              {workItems.map((item, index) => (
                <Box key={index} w="100%" pb="2rem">
                  <Flex justifyContent="space-between">
                    <Box pb="1rem">
                      <Heading
                        fontSize="60px"
                        mb={10}
                        color="gray.800"
                        textAlign="left"
                      >
                        {item.title}
                      </Heading>
                      <Flex justify="space-between" align="center">
                        <Text color="gray.600" fontSize="18px">
                          {item.description}
                        </Text>
                      </Flex>
                    </Box>
                    <Link href={item.link} _hover={{ textDecoration: "none" }}>
                      <Image
                        src="/arrow.png"
                        alt=""
                        height="85px"
                        cursor="pointer"
                      />
                    </Link>
                  </Flex>
                  <hr />
                </Box>
              ))}
            </VStack>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default WorkSection;
