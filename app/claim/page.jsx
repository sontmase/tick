"use client";

import { Flex, useColorModeValue, Text, Container } from "@chakra-ui/react";

export default function ClaimPage() {
  return (
    <Flex
      minH={"calc(100vh - 120px)"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Container></Container>
    </Flex>
  );
}
