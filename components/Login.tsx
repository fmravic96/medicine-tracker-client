import {
  Flex,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Link,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";

interface Props {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const LoginBody = () => {
  return (
    <Flex align={"center"} justify={"center"}>
      <Stack spacing={4}>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input type="password" />
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
        </FormControl>
        <Stack spacing={10}>
          <Stack direction={{ base: "column", sm: "row" }} align={"start"} justify={"space-between"}>
            <Checkbox>Remember me</Checkbox>
            <Link color={"blue.400"}>Forgot password?</Link>
          </Stack>
          <Button
            bg={"blue.400"}
            color={"white"}
            _hover={{
              bg: "blue.500",
            }}
          >
            Login
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
};

export const Login = (props: Props) => {
  return (
    <Modal onClose={props.onClose} size="sm" isOpen={props.isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Login</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <LoginBody />
        </ModalBody>
        <ModalFooter>
          <Button onClick={props.onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
