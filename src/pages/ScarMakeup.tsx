import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import scar1 from "../assets/scar/scar1.jpeg";
import scar2 from "../assets/scar/scar2.jpeg";
import scar3 from "../assets/scar/scar3.jpeg";
import scar4 from "../assets/scar/scar4.jpeg";
import scar5 from "../assets/scar/scar5.jpeg";

const MAKEUP_LIST = [
    { id: 1, title: "Clown Scar", img: scar1, duration: "1h30", price: "80€" },
    { id: 2, title: "Razor Cut", img: scar2, duration: "2h", price: "120€" },
    { id: 3, title: "Frankenstein", img: scar3, duration: "1h45", price: "100€" },
    { id: 4, title: "Exorcist", img: scar4, duration: "1h50", price: "100€" },
    { id: 5, title: "Heart", img: scar5, duration: "1h45", price: "100€" },
];

export default function MakeupGallery() {
    const [makeups] = useState(MAKEUP_LIST);
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                px: { xs: 3, md: 6 },
                py: { xs: 8, md: 12 },
                maxWidth: "1200px",
                margin: "0 auto",
                textAlign: "center",
            }}
        >
            <Box sx={{ mb: 4 }}>
                <Button
                    variant="contained"
                    onClick={() => navigate("/Portfolio")}
                    sx={{
                        backgroundColor: "#9D0303",
                        "&:hover": { backgroundColor: "#c00404" },
                        fontWeight: "bold",
                    }}
                >
                    ← Retour au Portfolio
                </Button>
            </Box>

            <Typography
                sx={{
                    fontSize: { xs: "1.8rem", md: "2.4rem" },
                    mb: 6,
                    color: "#fff",
                    letterSpacing: "2px",
                }}
            >
                Galerie Cicatrices
            </Typography>

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
                    <Box
                        key={m.id}
                        sx={{
                            position: "relative",
                            borderRadius: "20px",
                            overflow: "hidden",
                            cursor: "pointer",
                            transition: "all 0.4s ease",
                            "&:hover": {
                                transform: "translateY(-5px)",
                                boxShadow: "0 10px 40px rgba(157, 3, 3, 0.5)",
                            },
                            "&:hover img": { transform: "scale(1.1)" },
                            "&:hover .overlay": { opacity: 1 },
                        }}
                    >
                        <img
                            src={m.img}
                            alt={m.title}
                            style={{
                                width: "100%",
                                height: "300px",
                                objectFit: "cover",
                                transition: "0.5s",
                            }}
                        />

                        <Box
                            className="overlay"
                            sx={{
                                position: "absolute",
                                inset: 0,
                                background:
                                    "linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "flex-end",
                                alignItems: "center",
                                textAlign: "center",
                                opacity: 0,
                                transition: "0.4s",
                                p: 2,
                            }}
                        >
                            <Typography
                                sx={{ color: "#fff", fontSize: "1.1rem", fontWeight: 500 }}
                            >
                                {m.title}
                            </Typography>
                            <Typography
                                sx={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}
                            >
                                {m.duration} • {m.price}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}