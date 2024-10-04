import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./home";

function Main() {
    return (
        <BrowserRouter>
            {/* <HeaderNav /> */}
            <Box>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                </Routes>
            </Box>
        </BrowserRouter>
    );
}

export default Main;
