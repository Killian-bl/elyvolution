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
                background: "#0f0f0f",
                padding: "40px 20px",
                borderRadius: "12px",
                maxWidth: "500px",
                margin: "40px auto",
                boxShadow: "0 0 20px rgba(0,0,0,0.5)",
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    textAlign: "center",
                    marginBottom: "30px",
                    color: "#9D0303",
                    fontWeight: "bold",
                }}
            >
                Prendre un rendez-vous
            </Typography>

            <Box
                component="form"
                onSubmit={handleAppointment}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                }}
            >
                <TextField
                    label="Nom"
                    variant="outlined"
                    value={appointment.name}
                    onChange={(e) =>
                        setAppointment({ ...appointment, name: e.target.value })
                    }
                    required
                    fullWidth
                    sx={{
                        input: { color: "#fff" },
                        label: { color: "#aaa" },
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": { borderColor: "#333" },
                            "&:hover fieldset": { borderColor: "#9D0303" },
                            "&.Mui-focused fieldset": { borderColor: "#9D0303" },
                        },
                    }}
                />

                <TextField
                    label="Email"
                    type="email"
                    value={appointment.email}
                    onChange={(e) =>
                        setAppointment({ ...appointment, email: e.target.value })
                    }
                    required
                    fullWidth
                    sx={{
                        input: { color: "#fff" },
                        label: { color: "#aaa" },
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": { borderColor: "#333" },
                            "&:hover fieldset": { borderColor: "#9D0303" },
                            "&.Mui-focused fieldset": { borderColor: "#9D0303" },
                        },
                    }}
                />

                <TextField
                    type="datetime-local"
                    value={appointment.date}
                    onChange={(e) =>
                        setAppointment({ ...appointment, date: e.target.value })
                    }
                    required
                    fullWidth
                    sx={{
                        input: { color: "#fff" },
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": { borderColor: "#333" },
                            "&:hover fieldset": { borderColor: "#9D0303" },
                            "&.Mui-focused fieldset": { borderColor: "#9D0303" },
                        },
                    }}
                />

                <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        background: "#9D0303",
                        padding: "12px",
                        fontWeight: "bold",
                        "&:hover": {
                            background: "#c00404",
                        },
                    }}
                >
                    Envoyer
                </Button>
            </Box>
        </Box>
    );
};

export default Form;