import { Box, Card, CardMedia, Typography } from "@mui/material";
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
        <Box
            sx={{
                px: { xs: 3, md: 6 },
                py: { xs: 8, md: 12 },
                maxWidth: "1200px",
                margin: "0 auto",
                textAlign: "center",
            }}
        >
            {/* TITLE */}
            <Typography
                sx={{
                    fontSize: { xs: "1.8rem", md: "2.4rem" },
                    mb: 6,
                    color: "#fff",
                    letterSpacing: "2px",
                }}
            >
                {title}
            </Typography>

            {/* SCROLL GALLERY */}
            <Box
                sx={{
                    display: "flex",
                    gap: 4,
                    overflowX: "auto",
                    pb: 2,
                    scrollSnapType: "x mandatory",

                    "&::-webkit-scrollbar": {
                        height: "6px",
                    },
                    "&::-webkit-scrollbar-thumb": {
                        background: "#333",
                        borderRadius: "10px",
                    },
                }}
            >
                {data.map((item, index) => (
                    <Card
                        key={index}
                        onClick={() => navigate(route)}
                        sx={{
                            minWidth: { xs: 220, md: 260 },
                            flex: "0 0 auto",
                            borderRadius: "20px",
                            overflow: "hidden",
                            cursor: "pointer",
                            position: "relative",

                            background: "transparent",
                            boxShadow: "none",

                            scrollSnapAlign: "start",
                            transition: "0.4s",

                            "&:hover": {
                                transform: "scale(1.05)",
                            },

                            "&:hover .overlay": {
                                opacity: 1,
                            },

                            "&:hover img": {
                                transform: "scale(1.1)",
                            },
                        }}
                    >
                        {/* IMAGE */}
                        <Box sx={{ overflow: "hidden", borderRadius: "20px" }}>
                            <CardMedia
                                component="img"
                                height="320"
                                image={item.image}
                                alt={item.title}
                                sx={{
                                    objectFit: "cover",
                                    transition: "0.5s",
                                }}
                            />
                        </Box>

                        {/* OVERLAY */}
                        <Box
                            className="overlay"
                            sx={{
                                position: "absolute",
                                inset: 0,
                                borderRadius: "20px",
                                background:
                                    "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                                display: "flex",
                                alignItems: "flex-end",
                                justifyContent: "center",
                                opacity: 0,
                                transition: "0.4s",
                                p: 2,
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "#fff",
                                    fontSize: "1rem",
                                    fontWeight: 500,
                                }}
                            >
                                {item.title} — {item.price}
                            </Typography>
                        </Box>
                    </Card>
                ))}
            </Box>
        </Box>
    );

    return (
        <Box sx={{ background: "#0a0a0a" }}>
            {renderSection("Portfolio Horror", horrorMakeups, "/Horror")}
            {renderSection("Cicatrices", scars, "/Scar")}
            {renderSection("Portfolio Classic", makeups, "/Classic")}
        </Box>
    );
}