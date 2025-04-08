import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Spacer,
  HStack,
  Text,
  Button,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [showFloatingMenu, setShowFloatingMenu] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
        setShowFloatingMenu(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setShowFloatingMenu((prev) => !prev);

  const closeMenu = () => setShowFloatingMenu(false);

  return (
    <>
      {/* Main Navbar */}
      <Box bg="transparent" px={6} py={4} zIndex={99} position="relative">
        <Flex align="center">
          <HStack spacing={2}>
            <Link to="/">
              <Text fontSize="lg" color="gray.700">
                @AnglingSamarkhandi
              </Text>
            </Link>
          </HStack>
          <Spacer />
          <HStack spacing={20} gap={7}>
            <HashLink smooth to="/#about">
              <Text
                cursor="pointer"
                color="gray.600"
                _hover={{ color: "black" }}
                fontSize="1.25rem"
              >
                About
              </Text>
            </HashLink>
            <HashLink smooth to="/#work">
              <Text
                cursor="pointer"
                color="gray.600"
                _hover={{ color: "black" }}
                fontSize="1.25rem"
              >
                Work
              </Text>
            </HashLink>
            <Link to="/contact">
              <Text
                as="span"
                cursor="pointer"
                color="gray.600"
                _hover={{ color: "black" }}
                fontSize="1.25rem"
              >
                Contact
              </Text>
            </Link>
          </HStack>
        </Flex>
      </Box>

      {/* Floating Button at Top Right */}
      {showButton && (
        <Box position="fixed" top={6} right={6} zIndex={100}>
          <Button
            onClick={toggleMenu}
            borderRadius="full"
            boxSize="56px"
            p={0}
            minW="unset"
            boxShadow="lg"
            bg={showFloatingMenu ? "white" : "black"}
            color={showFloatingMenu ? "gray.800" : "white"}
          >
            {showFloatingMenu ? <FiX size={24} /> : <FiMenu size={24} />}
          </Button>
        </Box>
      )}

      {/* Full Height & Half Width Menu Panel */}
      {showFloatingMenu && (
        <Flex
          position="fixed"
          top={0}
          right={0}
          h="100vh"
          w="50vw"
          bg="black"
          zIndex={99}
          boxShadow="xl"
          p={6}
          flexDirection="column"
          justifyContent="space-between"
        >
          <VStack align="flex-start" spacing={6} gap={5}>
            <Link smooth to="/" onClick={closeMenu}>
              <Text
                fontSize="60px"
                fontWeight="bold"
                color="white"
                _hover={{ color: "teal.300" }}
              >
                Home
              </Text>
            </Link>
            <HashLink smooth to="/#about" onClick={closeMenu}>
              <Text
                fontSize="60px"
                fontWeight="bold"
                color="white"
                _hover={{ color: "teal.300" }}
              >
                About
              </Text>
            </HashLink>
            <HashLink smooth to="/#work" onClick={closeMenu}>
              <Text
                fontSize="60px"
                fontWeight="bold"
                color="white"
                _hover={{ color: "teal.300" }}
              >
                Work
              </Text>
            </HashLink>
            <Link to="/contact" onClick={closeMenu}>
              <Text
                fontSize="60px"
                fontWeight="bold"
                color="white"
                _hover={{ color: "white" }}
              >
                Contact
              </Text>
            </Link>
          </VStack>

          <HStack fontSize="18px" gap={10}>
            <Text color="white">Linkedin</Text>
            <Text color="white">Twitter</Text>
            <Text color="white">Instagram</Text>
            <Text color="white">Webflow</Text>
          </HStack>
        </Flex>
      )}
    </>
  );
};

export default Navbar;
