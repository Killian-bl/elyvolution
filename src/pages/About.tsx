import { Box, Typography, Avatar, Card } from "@mui/material";

import aboutImg from "../assets/images/about.jpg";
import client1 from "../assets/clients/client1.png";
import client2 from "../assets/clients/client2.png";
import client3 from "../assets/clients/client3.jpg";

function About() {
    const clients = [
        { name: "Client 1", logo: client1 },
        { name: "Client 2", logo: client2 },
        { name: "Client 3", logo: client3 },
    ];

    return (
        <Box
            sx={{
                px: { xs: 3, md: 6 },
                py: { xs: 8, md: 12 },
                maxWidth: "1000px",
                margin: "0 auto",
                textAlign: "center",
            }}
        >
            {/* TITLE */}
            <Typography
                sx={{
                    fontSize: { xs: "2rem", md: "2.8rem" },
                    fontWeight: 600,
                    mb: 6,
                    color: "#fff",
                    letterSpacing: "1px",
                }}
            >
                À propos
            </Typography>

            {/* IMAGE */}
            <Avatar
                src={aboutImg}
                alt="Kelly Make-Up"
                sx={{
                    width: { xs: 160, md: 220 },
                    height: { xs: 160, md: 220 },
                    margin: "0 auto",
                    mb: 5,
                    boxShadow: "0 10px 40px rgba(157,3,3,0.3)", // glow subtil
                }}
            />

            {/* TEXT */}
            <Typography
                sx={{
                    maxWidth: "600px",
                    margin: "0 auto",
                    fontSize: "1.1rem",
                    lineHeight: 1.9,
                    color: "rgba(255,255,255,0.8)",
                }}
            >
                Je m'appelle Kelly, maquilleuse passionnée spécialisée dans le maquillage
                artistique, glamour et effets spéciaux. J’aide mes clients à exprimer leur
                identité et leur créativité à travers des looks uniques et professionnels.

                <br /><br />

                Mon objectif : créer des maquillages sur mesure, adaptés à chaque
                personnalité et univers.
            </Typography>

            {/* CLIENTS */}
            <Box sx={{ mt: 12 }}>
                <Typography
                    sx={{
                        fontSize: "1.4rem",
                        mb: 5,
                        color: "rgba(255,255,255,0.7)",
                        letterSpacing: "2px",
                    }}
                >
                    Ils m'ont fait confiance
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        gap: 5,
                        opacity: 0.8,
                    }}
                >
                    {clients.map((client, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: 90,
                                transition: "0.3s",
                                "&:hover": {
                                    transform: "scale(1.1)",
                                    opacity: 1,
                                },
                            }}
                        >
                            <img
                                src={client.logo}
                                alt={client.name}
                                style={{
                                    width: "100%",
                                    filter: "grayscale(100%)",
                                }}
                            />
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* ENTREPRISE */}
            <Box sx={{ mt: 12 }}>
                <Card
                    sx={{
                        maxWidth: "650px",
                        margin: "0 auto",
                        p: { xs: 3, md: 5 },
                        borderRadius: "20px",
                        background: "rgba(255,255,255,0.03)", // effet glass
                        backdropFilter: "blur(10px)",
                        boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "1.05rem",
                            lineHeight: 1.9,
                            color: "rgba(255,255,255,0.85)",
                        }}
                    >
                        J’ai créé mon entreprise pour offrir un espace où l’art, l’esthétique et
                        la confiance en soi se rencontrent. Chaque maquillage est pensé comme une
                        collaboration avec le client.

                        <br /><br />

                        Ce qui me motive chaque jour, c’est de voir mes clients repartir confiants,
                        transformés… et fiers d’eux-mêmes.
                    </Typography>
                </Card>
            </Box>
        </Box>
    );
}

export default About;