import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const handler = async (event: any) => {
    try {
        const data = JSON.parse(event.body);

        const { name, email, date } = data;

        await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",
            to: "killian.bastardy@gmail.com",
            subject: "Nouveau rendez-vous",
            html: `
        <h2>Nouveau rendez-vous</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Date :</strong> ${date}</p>
      `,
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Email envoyé" }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Erreur envoi mail" }),
        };
    }
};