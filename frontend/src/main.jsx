import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { defaultSystem } from "@chakra-ui/react"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <ChakraProvider value={defaultSystem}>
                <App />
            </ChakraProvider>
        </BrowserRouter>
    </React.StrictMode>
);