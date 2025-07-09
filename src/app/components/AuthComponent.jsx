"use client";
import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";

const AuthComponent = () => {
  return (
    <>
      <Auth0Provider
        domain="dev-drwwrwilfvzkhk75.us.auth0.com"
        clientId="uQVyrmFpUu0HLJ456Bma3L51NlS5rrsn"
      ></Auth0Provider>
    </>
  );
};

export default AuthComponent;
