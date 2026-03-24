import { useState } from "react";

type Comment = {
    name: string;
    message: string;
};

const Comment = () => {

    const [comment, setComment] = useState<Comment>({
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
        <section style={{ marginTop: "2rem" }}>
            <h2>Laisser un commentaire</h2>

            <form onSubmit={handleComment}>
                <input
                    type="text"
                    placeholder="Nom"
                    value={comment.name}
                    onChange={(e) =>
                        setComment({ ...comment, name: e.target.value })
                    }
                    required
                />

                <textarea
                    placeholder="Message"
                    value={comment.message}
                    onChange={(e) =>
                        setComment({ ...comment, message: e.target.value })
                    }
                    required
                />

                <button type="submit">Envoyer</button>
            </form>
        </section>
    )
};

export default Comment;