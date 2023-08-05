import React from "react";
import {Container, Typography} from "@mui/material";

const Header: React.FC = () => {
    return (
        <header className={"!h-14 bg-white text-center py-3 mb-6"}>
            <Container maxWidth={"xl"}>
                <Typography variant="h5" component="h2">Todos Application</Typography>
            </Container>
        </header>
    )
}

export default Header