import { Box, Flex, useColorModeValue, Stack, Button, Text } from "@chakra-ui/react";
import React from "react";
import { Image } from "@chakra-ui/react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";

interface Props {}

export const Navbar = (props: Props) => {
  const { user, error, isLoading } = useUser();
  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex flex={{ base: 1 }} justify={{ base: "start", md: "center" }}>
          <Link href="/">
            <a>
              <Image src="/medicine-tracker-logo.png" alt="Logo" />
            </a>
          </Link>
        </Flex>

        <Stack flex={1} justify={"flex-end"} direction={"row"} spacing={6}>
          {user ? (
            <>
              <Text color={"gray.500"} maxW={"3xl"}>
                Welcome {user.name}!
              </Text>
              {user.picture && <Image borderRadius="full" boxSize="50px" src={user.picture} alt="User profile picture" />}
              <Link href="/api/auth/logout" passHref>
                <Button
                  display="inline-flex"
                  fontSize={"sm"}
                  fontWeight={600}
                  color={"white"}
                  bg={"blue.400"}
                  href={"#"}
                  _hover={{
                    bg: "blue.300",
                  }}
                >
                  Logout
                </Button>
              </Link>
            </>
          ) : (
            <Link href="/api/auth/login" passHref>
              <Button
                display="inline-flex"
                fontSize={"sm"}
                fontWeight={600}
                color={"white"}
                bg={"blue.400"}
                href={"#"}
                _hover={{
                  bg: "blue.300",
                }}
              >
                Login
              </Button>
            </Link>
          )}
        </Stack>
      </Flex>
    </Box>
  );
};
