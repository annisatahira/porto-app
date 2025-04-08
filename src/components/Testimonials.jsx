import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Avatar,
  VStack,
  HStack,
  Image,
} from "@chakra-ui/react";

const testimonials = [
  {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Jane Doe",
    image: "/testimonial-1.png",
    job: "VP of Marketing @ Webflow",
  },
  {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "John Smith",
    image: "/testimonial-2.png",
    job: "Founder @ CopyPossy",
  },
];

const TestimonialSection = () => {
  return (
    <Flex bg="white" flexDirection="column" alignItems="center">
      <Box bg="white" pb={20} maxW="1440px" w="100%" mx="auto" px={20}>
        <Flex
          direction={{ base: "column", md: "row" }}
          align="start"
          gap={12}
          width="100%"
        >
          {/* Left Side - Title */}
          <Box width="30%">
            <Heading as="h1" size="4xl" textAlign="left">
              Testimonials
            </Heading>
          </Box>

          {/* Right Side - Description */}
          <Box width="70%">
            <VStack align="start" spacing={8}>
              {testimonials.map((testimonial, index) => (
                <Box key={index} p={6} w="100%" mb={5}>
                  <Text
                    fontSize="27px"
                    color="gray.700"
                    mb={4}
                    textAlign="left"
                  >
                    “{testimonial.content}”
                  </Text>
                  <HStack spacing={4} mt={10}>
                    <Image src={testimonial.image} alt="" height="64px" />
                    <Box>
                      <Text
                        fontWeight="medium"
                        color="gray.800"
                        fontSize="18px"
                        textAlign="left"
                      >
                        {testimonial.name}
                      </Text>
                      <Text color="gray.800" fontSize="14px" textAlign="left">
                        {testimonial.job}
                      </Text>
                    </Box>
                  </HStack>
                </Box>
              ))}
            </VStack>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default TestimonialSection;
