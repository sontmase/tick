"use client";
import React from "react";
import { signIn, signOut } from "next-auth/react";
import { Button } from "@chakra-ui/react";
export function TwitterSignInButton() {
  const handleClick = () => {
    signIn("twitter");
  };

  return (
    <Button
      display={"flex"}
      gap={2}
      minW={{ base: "10px", md: "10px" }}
      fontSize={{ base: "18px", md: "18px" }}
      p={{ base: "10px", md: "20px" }}
      onClick={handleClick}
    >
      Login
    </Button>
  );
}
export function TwitterSignOutButton() {
  const handleClick = () => {
    signOut("twitter");
  };

  return (
    <Button
      display={"flex"}
      gap={2}
      minW={{ base: "10px", md: "10px" }}
      fontSize={{ base: "18px", md: "18px" }}
      p={{ base: "10px", md: "20px" }}
      onClick={handleClick}
    >
      Logout
    </Button>
  );
}
