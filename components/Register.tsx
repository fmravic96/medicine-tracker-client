import {
  Flex,
  Stack,
  Checkbox,
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
import { Formik } from "formik";
import * as yup from "yup";
import { InputControl } from "formik-chakra-ui";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { register } from "../lib/register";

interface Props {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

interface FormValues {
  username: string;
  password: string;
  email: string;
}

const onSubmit = async (values: FormValues) => {
  const res = await register(values.username, values.password, values.email);
  if (res && res.status === 200) {
    console.log(res);
    toast.success(`Created new user ${res.data.user.username}, redirecting to dashboard...`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    return true;
  }
  if (res && res.status === 400) {
    toast.error("Username/email is already taken.", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    return false;
  }
};

const validationSchema = yup.object({
  username: yup
    .string()
    .required("Username is required.")
    .min(3, "Username should have 3 characters min.")
    .max(25, "Username should have less than 25 characters")
    .trim(),
  password: yup.string().required("Password is required.").min(6, "Password should have 6 characters min.").trim(),
  email: yup.string().required("Email is required.").email("Email must be valid.").trim(),
});

const RegisterBody = () => {
  return (
    <Flex align={"center"} justify={"center"}>
      <Stack spacing={4}>
        <Formik initialValues={{ username: "", password: "", email: "" }} validationSchema={validationSchema} onSubmit={onSubmit}>
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <InputControl name="username" label="Username" />
              <InputControl name="password" label="Password" inputProps={{ type: "password" }} />
              <InputControl name="email" label="Email" inputProps={{ type: "email" }} />
              <Stack spacing={10}>
                <Stack direction={{ base: "column", sm: "row" }} align={"start"} justify={"space-between"}>
                  <Checkbox>Remember me</Checkbox>
                </Stack>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  type="submit"
                >
                  Register
                </Button>
              </Stack>
            </form>
          )}
        </Formik>
      </Stack>
    </Flex>
  );
};

export const Register = (props: Props) => {
  return (
    <>
      <Modal onClose={props.onClose} size="md" isOpen={props.isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Register</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <RegisterBody />
          </ModalBody>
          <ModalFooter>
            <Button onClick={props.onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};
