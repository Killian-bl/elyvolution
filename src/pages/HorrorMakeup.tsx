import { useState } from "react";
import {Box, Button, Typography} from "@mui/material";
import { useNavigate } from "react-router-dom";

import horror1 from "../assets/horror/horror1.jpeg";
import horror2 from "../assets/horror/horror2.jpeg";
import horror3 from "../assets/horror/horror3.jpeg";
import horror4 from "../assets/horror/horror4.jpeg";
import horror5 from "../assets/horror/horror5.jpeg";
import horror6 from "../assets/horror/horror10.jpeg";
import horror7 from "../assets/horror/horror7.jpeg";
import horror8 from "../assets/horror/horror8.jpeg";
import horror9 from "../assets/horror/horror9.jpeg";

const MAKEUP_LIST = [
    { id: 1, title: "Bloody Girl", img: horror1, duration: "1h30", price: "80€" },
    { id: 2, title: "Zombie Look", img: horror2, duration: "2h", price: "120€" },
    { id: 3, title: "Clown", img: horror3, duration: "1h45", price: "100€" },
    { id: 4, title: "Morticia", img: horror4, duration: "1h45", price: "100€" },
    { id: 5, title: "Mouth", img: horror5, duration: "1h45", price: "100€" },
    { id: 6, title: "Eye", img: horror6, duration: "1h45", price: "100€" },
    { id: 7, title: "Skinless", img: horror7, duration: "1h45", price: "100€" },
    { id: 8, title: "Brain", img: horror8, duration: "1h45", price: "100€" },
    { id: 9, title: "Burn", img: horror9, duration: "1h45", price: "100€" },
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
                Galerie Horreur
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
                            transition: "0.4s",

                            "&:hover": {
                                boxShadow: "0 0 25px rgba(157, 3, 3, 0.6)", // 🔥 glow rouge
                            },

                            "&:hover img": {
                                transform: "scale(1.1)",
                            },

                            "&:hover .overlay": {
                                opacity: 1,
                            },
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
                                sx={{
                                    color: "#fff",
                                    fontSize: "1.1rem",
                                    fontWeight: 500,
                                }}
                            >
                                {m.title}
                            </Typography>

                            <Typography
                                sx={{
                                    color: "rgba(255,255,255,0.7)",
                                    fontSize: "0.9rem",
                                }}
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