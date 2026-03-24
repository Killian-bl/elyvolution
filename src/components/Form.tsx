import { useState } from "react";

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
    )
};

export default Form;