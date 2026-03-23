import { useState } from "react";

type Appointment = {
    name: string;
    email: string;
    date: string;
};

type Comment = {
    name: string;
    message: string;
};

function Home() {
    const [appointment, setAppointment] = useState<Appointment>({
        name: "",
        email: "",
        date: "",
    });

    const [comment, setComment] = useState<Comment>({
        name: "",
        message: "",
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
        <div style={{ padding: "2rem" }}>
            <h1>Bienvenue sur le portfolio</h1>

            {/* RENDEZ-VOUS */}
            <section>
                <h2>Prendre un rendez-vous</h2>

                <form onSubmit={handleAppointment}>
                    <input
                        type="text"
                        placeholder="Nom"
                        value={appointment.name}
                        onChange={(e) =>
                            setAppointment({ ...appointment, name: e.target.value })
                        }
                        required
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        value={appointment.email}
                        onChange={(e) =>
                            setAppointment({ ...appointment, email: e.target.value })
                        }
                        required
                    />

                    <input
                        type="datetime-local"
                        value={appointment.date}
                        onChange={(e) =>
                            setAppointment({ ...appointment, date: e.target.value })
                        }
                        required
                    />

                    <button type="submit">Envoyer</button>
                </form>
            </section>

            {/* COMMENTAIRES */}
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
        </div>
    );
}

export default Home;