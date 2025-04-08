import React, { useEffect } from "react";
import {
  Box,
  Flex,
  Text,
  VStack,
  Link,
  Textarea,
  Button,
  Image,
} from "@chakra-ui/react";
import CustomInput from "../components/Input";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box bg="gray.50" px={8} py={16} marginTop="-5rem">
      <Flex
        direction={{ base: "column", md: "row" }}
        gap={12}
        width="100%"
        mt="5rem"
      >
        {/* Left: Profile and Social Media */}
        <Box width="40%" textAlign="left">
          <Box>
            <Image src="/pp.png" alt="" height="300px" />
            <Box mt={10}>
              <Text color="gray.500" as="span" fontSize="18px">
                Contact Details
              </Text>
              <Text color="black" fontSize="27px">
                ayush.barnwal@brightscout.com
              </Text>
              <Text mt={2} fontSize="27px" color="gray.600">
                +91 8651447521
              </Text>
            </Box>
          </Box>

          {/* Social Media Links */}

          <Flex
            flexDirection="column"
            gap={3}
            alignItems="base"
            fontSize="27px"
            width="100%"
            mt={10}
          >
            <Text color="gray.500" as="span" fontSize="18px" textAlign="left">
              Social
            </Text>
            <Link href="https://github.com" isExternal>
              Linkedin
            </Link>
            <Link href="https://linkedin.com" isExternal>
              Instagram
            </Link>
            <Link href="https://twitter.com" isExternal>
              Twitter
            </Link>
            <Link href="https://linkedin.com" isExternal>
              Webflow
            </Link>
            <Link href="https://twitter.com" isExternal>
              Figma
            </Link>
          </Flex>
        </Box>

        {/* Right: Contact Form */}
        <Box width="50%" p={8}>
          <Text
            as="h1"
            fontSize="60px"
            textAlign="left"
            fontWeight="bold"
            lineHeight="4rem"
          >
            Lets build something cool together
          </Text>
          <Box mt="10">
            <Box w="100%">
              <VStack spacing={20} align="stretch" textAlign="left" gap={8}>
                <Box>
                  <Text fontSize="18px">Name</Text>
                  <CustomInput type="text" placeholder="James Robert" />
                </Box>

                <Box>
                  <Text fontSize="18px">Email</Text>
                  <CustomInput
                    type="email"
                    placeholder="ayush.barnwal@brighstcout.com"
                  />
                </Box>

                <Box>
                  <Text fontSize="18px">Subject</Text>
                  <CustomInput
                    type="text"
                    placeholder="For web design work Enquire"
                  />
                </Box>

                <Box>
                  <Text fontSize="18px">Message</Text>
                  <Textarea
                    placeholder="Type your Message"
                    fontSize="lg"
                    border="none"
                    borderBottom="1px solid #999"
                    borderRadius="0"
                    px="0"
                    _focus={{
                      border: "none",
                      borderBottom: "1px solid #999",
                      boxShadow: "none",
                      outline: "none",
                    }}
                    _focusVisible={{
                      outline: "none",
                      boxShadow: "none",
                    }}
                    resize="none"
                    rows={4}
                  />
                </Box>

                <Box pt={4}>
                  <Button
                    bg="black"
                    color="white"
                    px={8}
                    py={6}
                    borderRadius="full"
                    _hover={{ bg: "gray.800" }}
                  >
                    Submit
                  </Button>
                </Box>
              </VStack>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default ContactPage;
