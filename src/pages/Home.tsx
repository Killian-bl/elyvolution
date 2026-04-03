import { Box, Typography } from "@mui/material";
import Form from "../components/Form.tsx";
import Comment from "../components/Comment.tsx";
import fond from "../assets/images/fond.png";

const Home = () => {
    return (
        <Box>

            {/* HERO */}
            <Box
                sx={{
                    minHeight: "90vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    px: 3,
                    position: "relative",

                    backgroundImage: `url(${fond})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",

                    // 🔥 overlay sombre + effet luxe
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.9))",
                    },
                }}
            >
                {/* contenu au-dessus de l’overlay */}
                <Box sx={{ position: "relative", zIndex: 1, maxWidth: "700px" }}>

                    <Typography
                        sx={{
                            fontSize: { xs: "2.5rem", md: "4rem" },
                            fontWeight: 600,
                            color: "#fff",
                            mb: 2,
                            letterSpacing: "2px",
                        }}
                    >
                        Elyvolution
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: { xs: "1.2rem", md: "1.5rem" },
                            color: "rgba(255,255,255,0.75)",
                            mb: 5,
                        }}
                    >
                        Sublimez votre beauté naturelle
                    </Typography>

                    {/* FORM */}
                    <Box
                        sx={{
                            maxWidth: "400px",
                            margin: "0 auto",
                            p: 3,
                            borderRadius: "20px",
                            background: "rgba(255,255,255,0.05)",
                            backdropFilter: "blur(10px)",
                            boxShadow: "0 10px 40px rgba(157,3,3,0.2)",
                        }}
                    >
                        <Form />
                    </Box>
                </Box>
            </Box>

            {/* ABOUT PREVIEW */}
            <Box
                sx={{
                    px: { xs: 3, md: 6 },
                    py: { xs: 10, md: 14 },
                    maxWidth: "900px",
                    margin: "0 auto",
                    textAlign: "center",
                }}
            >
                <Typography
                    sx={{
                        fontSize: "1.6rem",
                        mb: 4,
                        color: "#fff",
                        letterSpacing: "1px",
                    }}
                >
                    À propos
                </Typography>

                <Typography
                    sx={{
                        fontSize: "1.1rem",
                        lineHeight: 1.9,
                        color: "rgba(255,255,255,0.75)",
                    }}
                >
                    Je sublime chaque visage avec une approche artistique et sur mesure.
                    Chaque création est pensée pour révéler votre personnalité, votre style
                    et votre confiance.

                    <br /><br />

                    Du maquillage glamour aux effets spéciaux, mon objectif est simple :
                    vous faire sentir unique.
                </Typography>
            </Box>

            {/* COMMENTAIRES */}
            <Box
                sx={{
                    py: { xs: 10, md: 14 },
                    px: 3,
                    textAlign: "center",
                    background: "linear-gradient(180deg, #0f0f0f, #1a1a1a)",
                }}
            >
                <Box
                    sx={{
                        maxWidth: "800px",
                        margin: "0 auto",
                        p: { xs: 3, md: 5 },
                        borderRadius: "20px",
                        background: "rgba(255,255,255,0.03)",
                        backdropFilter: "blur(10px)",
                        boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
                    }}
                >
                    <Comment />
                </Box>
            </Box>
        </Box>
    );
};

export default Home;