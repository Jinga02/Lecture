/** @format */

import React from "react";
import "./App.css";
import MainProducts from "./components/MainProducts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const query = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={query}>
      <MainProducts />
      <ReactQueryDevtools initailIsOpen={true} />
    </QueryClientProvider>
  );
}
