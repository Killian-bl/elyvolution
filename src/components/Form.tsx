import { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

type Appointment = {
    name: string;
    email: string;
    date: string;
};

const Form = () => {
    const [appointment, setAppointment] = useState<Appointment>({
        name: "",
        email: "",
        date: "",
    });

    const handleAppointment = async (e: React.FormEvent) => {
        e.preventDefault();

        await fetch("/.netlify/functions/sendEmail", {
            method: "POST",
            body: JSON.stringify(appointment),
        });

        alert("Rendez-vous envoyé !");
        setAppointment({ name: "", email: "", date: "" });
    };

    return (
        <Box
            sx={{
                p: { xs: 2, md: 3 },
            }}
        >
            <Typography
                sx={{
                    textAlign: "center",
                    mb: 3,
                    fontSize: "1.4rem",
                    color: "#fff",
                }}
            >
                Prendre rendez-vous
            </Typography>

            <Box
                component="form"
                onSubmit={handleAppointment}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2.5,
                }}
            >
                <TextField
                    label="Nom"
                    value={appointment.name}
                    onChange={(e) =>
                        setAppointment({ ...appointment, name: e.target.value })
                    }
                    fullWidth
                    required
                    sx={inputStyle}
                />

                <TextField
                    label="Email"
                    type="email"
                    value={appointment.email}
                    onChange={(e) =>
                        setAppointment({ ...appointment, email: e.target.value })
                    }
                    fullWidth
                    required
                    sx={inputStyle}
                />

                <TextField
                    type="datetime-local"
                    value={appointment.date}
                    onChange={(e) =>
                        setAppointment({ ...appointment, date: e.target.value })
                    }
                    fullWidth
                    required
                    sx={inputStyle}
                />

                <Button sx={buttonStyle} type="submit">
                    Réserver
                </Button>
            </Box>
        </Box>
    );
};

export default Form;

/* 🎨 mêmes styles */
const inputStyle = {
    input: { color: "#fff" },
    label: { color: "rgba(255,255,255,0.6)" },

    "& .MuiOutlinedInput-root": {
        borderRadius: "12px",
        background: "rgba(255,255,255,0.03)",

        "& fieldset": {
            borderColor: "rgba(255,255,255,0.1)",
        },
        "&:hover fieldset": {
            borderColor: "#9D0303",
        },
        "&.Mui-focused fieldset": {
            borderColor: "#9D0303",
            boxShadow: "0 0 10px rgba(157,3,3,0.4)",
        },
    },
};

const buttonStyle = {
    mt: 1,
    py: 1.5,
    borderRadius: "30px",
    fontWeight: 600,
    background: "linear-gradient(45deg, #9D0303, #c00404)",
    color: "#fff",
    textTransform: "none",

    "&:hover": {
        transform: "scale(1.03)",
        boxShadow: "0 5px 20px rgba(157,3,3,0.4)",
    },
};