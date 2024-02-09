"use client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../redux/Store";

type HomeChildren = {
  children: ReactNode;
};

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
  cache: new InMemoryCache(),
});

const HomePage = ({ children }: HomeChildren) => {
  return (
    <div className="w-full ">
      <ApolloProvider client={client}>
        <Provider store={store}>{children}</Provider>
      </ApolloProvider>
    </div>
  );
};

export default HomePage;
