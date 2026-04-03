import { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

type CommentType = {
    name: string;
    message: string;
};

const Comment = () => {
    const [comment, setComment] = useState<CommentType>({
        name: "",
        message: "",
    });

    const handleComment = async (e: React.FormEvent) => {
        e.preventDefault();

        await fetch("/.netlify/functions/addComment", {
            method: "POST",
            body: JSON.stringify(comment),
        });

        alert("Commentaire envoyé !");
        setComment({ name: "", message: "" });
    };

    return (
        <Box
            sx={{
                maxWidth: "600px",
                margin: "0 auto",
                p: { xs: 3, md: 5 },
                borderRadius: "20px",

                // 🔥 glass effect
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(12px)",

                boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
            }}
        >
            <Typography
                sx={{
                    textAlign: "center",
                    mb: 4,
                    fontSize: "1.6rem",
                    color: "#fff",
                    letterSpacing: "1px",
                }}
            >
                Laisser un commentaire
            </Typography>

            <Box
                component="form"
                onSubmit={handleComment}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                }}
            >
                <TextField
                    label="Nom"
                    value={comment.name}
                    onChange={(e) =>
                        setComment({ ...comment, name: e.target.value })
                    }
                    fullWidth
                    required
                    sx={inputStyle}
                />

                <TextField
                    label="Message"
                    multiline
                    rows={4}
                    value={comment.message}
                    onChange={(e) =>
                        setComment({ ...comment, message: e.target.value })
                    }
                    fullWidth
                    required
                    sx={inputStyle}
                />

                <Button sx={buttonStyle} type="submit">
                    Envoyer
                </Button>
            </Box>
        </Box>
    );
};

export default Comment;

/* 🎨 Styles communs */
const inputStyle = {
    input: { color: "#fff" },
    textarea: { color: "#fff" },
    label: { color: "rgba(255,255,255,0.6)" },

    "& .MuiOutlinedInput-root": {
        borderRadius: "12px",
        background: "rgba(255,255,255,0.02)",

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
    transition: "0.3s",

    "&:hover": {
        transform: "scale(1.03)",
        boxShadow: "0 5px 20px rgba(157,3,3,0.4)",
    },
};