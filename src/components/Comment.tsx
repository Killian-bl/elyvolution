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
                    label="Message"
                    multiline
                    rows={4}
                    value={comment.message}
                    onChange={(e) =>
                        setComment({ ...comment, message: e.target.value })
                    }
                    required
                    fullWidth
                    sx={{
                        textarea: { color: "#fff" },
                        label: { color: "#aaa" },
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

export default Comment;