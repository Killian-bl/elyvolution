import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/swiper-bundle.css";

import makeup1 from "../assets/horror/horror10.jpeg";
import makeup2 from "../assets/horror/horror2.jpeg";
import makeup3 from "../assets/horror/horror1.jpeg";
import makeup4 from "../assets/horror/horror4.jpeg";
import makeup5 from "../assets/horror/horror5.jpeg";

import makeup6 from "../assets/beauty/beauty4.jpeg";
import makeup7 from "../assets/beauty/beauty2.jpeg";
import makeup8 from "../assets/beauty/beauty16.jpg";
import makeup9 from "../assets/beauty/beauty19.jpg";
import makeup10 from "../assets/beauty/beauty1.jpeg";

import makeup11 from "../assets/scar/scar1.jpeg";
import makeup12 from "../assets/scar/scar2.jpeg";
import makeup13 from "../assets/scar/scar3.jpeg";
import makeup14 from "../assets/scar/scar4.jpeg";
import makeup15 from "../assets/scar/scar5.jpeg";

const horrorMakeups = [
    { title: "Bloody Girl", image: makeup1, price: "250€" },
    { title: "Zombie Look", image: makeup2, price: "200€" },
    { title: "Clown", image: makeup3, price: "300€" },
    { title: "Morticia", image: makeup4, price: "150€" },
    { title: "Mouth", image: makeup5, price: "150€" },
];

const makeups = [
    { title: "Classic", image: makeup6, price: "250€" },
    { title: "Bridal Look", image: makeup7, price: "200€" },
    { title: "Smokey Eyes", image: makeup8, price: "300€" },
    { title: "Colorful Style", image: makeup9, price: "350€" },
    { title: "Green Style", image: makeup10, price: "350€" },
];

const scars = [
    { title: "Clown Scar", image: makeup11, price: "60€" },
    { title: "Razor Cut", image: makeup12, price: "60€" },
    { title: "Frankenstein", image: makeup13, price: "60€" },
    { title: "Exorcist", image: makeup14, price: "60€" },
    { title: "heart", image: makeup15, price: "60€" },
];

type MakeupItem = {
    title: string;
    image: string;
    price: string;
};

export default function Portfolio() {
    const navigate = useNavigate();

    const renderCarousel = (title: string, data: MakeupItem[], route: string) => (
        <Box
            sx={{
                px: { xs: 3, md: 6 },
                py: { xs: 8, md: 12 },
                maxWidth: "1200px",
                margin: "0 auto",
                textAlign: "center",
            }}
        >
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

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop
                breakpoints={{
                    0: { slidesPerView: 1.2 },
                    600: { slidesPerView: 2 },
                    900: { slidesPerView: 3 },
                    1200: { slidesPerView: 4 },
                }}
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Box
                            onClick={() => navigate(route)}
                            sx={{
                                position: "relative",
                                borderRadius: "20px",
                                overflow: "hidden",
                                cursor: "pointer",

                                "&:hover .overlay": {
                                    opacity: 1,
                                },

                                "&:hover img": {
                                    transform: "scale(1.1)",
                                },
                            }}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                style={{
                                    width: "100%",
                                    height: "320px",
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
                                        "linear-gradient(to top, rgba(0,0,0,0.85), transparent)",
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
                                    }}
                                >
                                    {item.title} — {item.price}
                                </Typography>
                            </Box>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );

    return (
        <Box sx={{ background: "#0a0a0a" }}>
            {renderCarousel("Portfolio Horror", horrorMakeups, "/Horror")}
            {renderCarousel("Portfolio Cicatrices", scars, "/Scar")}
            {renderCarousel("Portfolio Classic", makeups, "/Classic")}
        </Box>
    );
}