import { Box, Flex, useColorModeValue, Stack, Button } from "@chakra-ui/react";
import React from "react";
import { Image } from "@chakra-ui/react";
import Link from "next/link";

interface Props {}

export const Navbar = (props: Props) => {
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
              <Image src="/medicine-tracker-logo.png" alt="Logo"></Image>
            </a>
          </Link>
        </Flex>

        <Stack flex={{ base: 1, md: 0 }} justify={"flex-end"} direction={"row"} spacing={6}>
          <Button as={"a"} fontSize={"sm"} fontWeight={400} variant={"link"} href={"#"}>
            Sign In
          </Button>
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
            Sign Up
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};
