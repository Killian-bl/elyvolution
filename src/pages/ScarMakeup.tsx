import { useState } from "react";
import scar1 from "../assets/scar/scar1.jpeg";
import scar2 from "../assets/scar/scar2.jpeg";
import scar3 from "../assets/scar/scar3.jpeg";

import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

const MAKEUP_LIST = [
    {
        id: 1,
        title: "Maquillage Glamour",
        img: scar1,
        duration: "1h30",
        price: "80€",
    },
    {
        id: 2,
        title: "Maquillage Mariage",
        img: scar2,
        duration: "2h",
        price: "120€",
    },
    {
        id: 3,
        title: "Maquillage Artistique",
        img: scar3,
        duration: "1h45",
        price: "100€",
    },
];

export default function MakeupGallery() {
    const [makeups] = useState(MAKEUP_LIST);

    return (
        <Box sx={{ padding: "40px 20px", maxWidth: "1200px", margin: "0 auto" }}>

            <Typography
                variant="h3"
                sx={{
                    textAlign: "center",
                    marginBottom: "40px",
                    fontWeight: "bold",
                }}
            >
                Galerie Cicatrice
            </Typography>

            {/* GRID CSS */}
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        sm: "repeat(2, 1fr)",
                        md: "repeat(3, 1fr)",
                    },
                    gap: 4,
                }}
            >
                {makeups.map((m) => (
                    <Card
                        key={m.id}
                        sx={{
                            borderRadius: "16px",
                            boxShadow: 3,
                            overflow: "hidden",
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="250"
                            image={m.img}
                            alt={m.title}
                        />

                        <CardContent>
                            <Typography
                                variant="h6"
                                sx={{ fontWeight: "bold", marginBottom: "8px" }}
                            >
                                {m.title}
                            </Typography>

                            <Typography sx={{ color: "#aaa" }}>
                                Durée : {m.duration}
                            </Typography>

                            <Typography sx={{ color: "#aaa" }}>
                                Prix : {m.price}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>

        </Box>
    );
}