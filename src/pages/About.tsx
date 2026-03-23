import { Box, Typography, Grid, Avatar, Card, CardContent } from "@mui/material";
import aboutImg from "../assets/images/about.jpg";
import client1 from "../assets/clients/client1.png";
import client2 from "../assets/clients/client2.png";
import client3 from "../assets/clients/client3.jpg"


function About() {

    const clients = [
        { name: "Client 1", logo: client1 },
        { name: "Client 2", logo: client2 },
        { name: "Client 3", logo: client3 },
    ];

    return (
        <Box sx={{ padding: "60px 20px", maxWidth: "1200px", margin: "0 auto" }}>

            <Typography
                variant="h3"
                sx={{
                    textAlign: "center",
                    marginBottom: "40px",
                    color: "#9d0303",
                    fontWeight: "bold",
                }}
            >
                À propos de moi
            </Typography>

            <Grid container spacing={4} alignItems="center" justifyContent={"center"}>

                <Grid item xs={12} md={5} sx={{
                    textAlign: "center",
                }}>
                    <Avatar
                        src={aboutImg}
                        alt="Kelly Make-Up"
                        sx={{
                            width: 280,
                            height: 280,
                            border: "5px solid #9D0303",
                            margin: "0 auto",
                        }}
                    />
                </Grid>

                <Grid item xs={12} md={7}>
                    <Typography
                        sx={{
                            textAlign: "justify",
                            fontSize: "1.15rem",
                            lineHeight: 1.8,
                            color: "#fff",
                        }}
                    >
                        Je m'appelle Kelly, maquilleuse passionnée spécialisée dans le maquillage
                        artistique, glamour et effets spéciaux. J’aide mes clients à exprimer leur
                        identité et leur créativité à travers des looks uniques et professionnels.

                        <br /><br />

                        Mon objectif : créer des maquillages sur mesure, adaptés à chaque
                        personnalité, événement ou univers artistique.
                    </Typography>
                </Grid>
            </Grid>

            <Box sx={{ marginTop: "80px" }}>
                <Typography
                    variant="h4"
                    sx={{
                        textAlign: "center",
                        marginBottom: "30px",
                        color: "#9d0303",
                        fontWeight: "bold",
                    }}
                >
                    Ils m'ont fait confiance
                </Typography>

                <Grid container spacing={4} justifyContent="center">
                    {clients.map((client, index) => (
                        <Grid key={index} item xs={6} sm={4} md={3} lg={2}>
                            <Card
                                sx={{
                                    background: "#1a1a1a",
                                    padding: "20px",
                                    borderRadius: "12px",
                                    border: "2px solid #9D0303",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        objectFit: "contain",
                                        filter: "brightness(0.9)",
                                    }}
                                />
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Box sx={{ marginTop: "80px" }}>
                <Typography
                    variant="h4"
                    sx={{
                        textAlign: "center",
                        marginBottom: "30px",
                        color: "#9d0303",
                        fontWeight: "bold",
                    }}
                >
                    Mon entreprise & mes motivations
                </Typography>

                <Card
                    sx={{
                        background: "#1a1a1a",
                        padding: "30px",
                        borderRadius: "12px",
                        border: "2px solid #9D0303",
                    }}
                >
                    <CardContent>
                        <Typography
                            sx={{
                                textAlign: "justify",
                                fontSize: "1.15rem",
                                lineHeight: 1.8,
                                color: "#fff",
                            }}
                        >
                            J’ai créé mon entreprise pour offrir un espace où l’art, l’esthétique et
                            la confiance en soi se rencontrent. Chaque maquillage est pensé comme une
                            collaboration avec le client, pour mettre en valeur son style, son
                            énergie et son univers.

                            <br /><br />

                            Ce qui me motive chaque jour, c’est de voir mes clients repartir avec le
                            sourire, confiants, transformés… et fiers d’eux-mêmes.
                        </Typography>
                    </CardContent>
                </Card>
            </Box>

        </Box>
    );
}

export default About;