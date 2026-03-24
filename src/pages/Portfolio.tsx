import { Box, Card, CardMedia, CardContent, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

import makeup1 from "../assets/horror/horror10.jpeg";
import makeup2 from "../assets/horror/horror2.jpeg";
import makeup3 from "../assets/horror/horror1.jpeg";
import makeup4 from "../assets/horror/horror4.jpeg";

import makeup5 from "../assets/beauty/beauty4.jpeg";
import makeup6 from "../assets/beauty/beauty2.jpeg";
import makeup7 from "../assets/beauty/beauty16.jpg";
import makeup8 from "../assets/beauty/beauty19.jpg";

import makeup9 from "../assets/scar/scar1.jpeg";
import makeup10 from "../assets/scar/scar2.jpeg";
import makeup11 from "../assets/scar/scar3.jpeg";
import makeup12 from "../assets/scar/scar4.jpeg";

const horrorMakeups = [
    { title: "Bloody Girl", image: makeup1, price: "250€" },
    { title: "Zombie Look", image: makeup2, price: "200€" },
    { title: "Clown", image: makeup3, price: "300€" },
    { title: "Morticia", image: makeup4, price: "150€" },
];

const makeups = [
    { title: "Classic", image: makeup5, price: "250€" },
    { title: "Bridal Look", image: makeup6, price: "200€" },
    { title: "Smokey Eyes", image: makeup7, price: "300€" },
    { title: "Colorful Style", image: makeup8, price: "350€" },
];

const scars = [
    { title: "Clown Scar", image: makeup9, price: "60€" },
    { title: "Razor Cut", image: makeup10, price: "60€" },
    { title: "Frankenstein", image: makeup11, price: "60€" },
    { title: "Exorcist", image: makeup12, price: "60€" },
];

type MakeupItem = {
    title: string;
    image: string;
    price: string;
};

export default function Portfolio() {
    const navigate = useNavigate();

    const renderSection = (title: string, data: MakeupItem[], route: string) => (
        <Box sx={{ padding: "40px 20px" }}>
            <Typography
                variant="h3"
                sx={{
                    textAlign: "center",
                    marginBottom: "40px",
                    fontWeight: "bold",
                    color: "#9D0303",
                }}
            >
                {title}
            </Typography>

            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: "flex",
                        gap: 3,
                        overflowX: "auto",
                        paddingBottom: "10px",
                        scrollSnapType: "x mandatory",
                    }}
                >
                    {data.map((item, index) => (
                        <Card
                            key={index}
                            onClick={() => navigate(route)}
                            sx={{
                                minWidth: "250px",
                                maxWidth: "250px",
                                flex: "0 0 auto",
                                borderRadius: "12px",
                                overflow: "hidden",
                                cursor: "pointer",
                                background: "#1a1a1a",
                                boxShadow: 3,
                                scrollSnapAlign: "start",
                                transition: "0.3s",
                                "&:hover": {
                                    transform: "scale(1.05)",
                                },
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="280"
                                image={item.image}
                                alt={item.title}
                                sx={{ objectFit: "cover" }}
                            />

                            <CardContent>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        color: "#9D0303",
                                        fontWeight: "600",
                                        textAlign: "center",
                                    }}
                                >
                                    {item.title} — {item.price}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Container>
        </Box>
    );

    return (
        <>
            {renderSection("Portfolio Horror", horrorMakeups, "/Horror")}
            {renderSection("Cicatrices", scars, "/Scar")}
            {renderSection("Portfolio Classic", makeups, "/Classic")}
        </>
    );
}