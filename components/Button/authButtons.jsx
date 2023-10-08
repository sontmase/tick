"use client";
import React from "react";
import { signIn, signOut } from "next-auth/react";

export function TwitterSignInButton() {
  const handleClick = () => {
    signIn("twitter");
  };

  return (
    <button onClick={handleClick}>
      <span className="">Continue with Twitter</span>
    </button>
  );
}
export function TwitterSignOutButton() {
  const handleClick = () => {
    signOut("twitter");
  };

  return (
    <button onClick={handleClick}>
      <span className="">Sign Out</span>
    </button>
  );
}
