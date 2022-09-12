import * as React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter,HashRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./home";
import BuyToken from "./BuyToken";

function Main() {
    return (
        <BrowserRouter>
            {/* <HeaderNav /> */}
            <Box>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/buytoken" element={<BuyToken />} />
                </Routes>
            </Box>
        </BrowserRouter>
    );
}

export default Main;
