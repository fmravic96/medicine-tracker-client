import { Container, Stack, Heading, Button, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { IllustrationIcon } from "./IllustrationIcon";

interface Props {}

export const HeroLanding = (props: Props) => {
  return (
    <Flex bg={useColorModeValue("gray.50", "gray.800")}>
      <Container maxW={"5xl"}>
        <Stack textAlign={"center"} align={"center"} spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }}>
          <Heading fontWeight={600} fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }} lineHeight={"110%"}>
            Your tracker for{" "}
            <Text as={"span"} color={"blue.400"}>
              medicine dosage
            </Text>
          </Heading>
          <Text color={"gray.500"} maxW={"3xl"}>
            Register by clicking the button below and keep personal track of your medicine doses.
          </Text>
          <Stack spacing={6} direction={"row"}>
            <Button rounded={"full"} px={6} colorScheme={"blue"} bg={"blue.400"} _hover={{ bg: "blue.500" }}>
              Get started
            </Button>
            <Button rounded={"full"} px={6}>
              Learn more
            </Button>
          </Stack>
          <Flex w={"full"}>
            <IllustrationIcon height={{ sm: "24rem", lg: "28rem" }} mt={{ base: 12, sm: 16 }} />
          </Flex>
        </Stack>
      </Container>
    </Flex>
  );
};
