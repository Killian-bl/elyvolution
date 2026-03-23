import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const handler = async (event: any) => {
    try {
        const data = JSON.parse(event.body);

        const { name, message } = data;

        await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",
            to: "email-proprietaire@gmail.com",
            subject: "Nouveau commentaire",
            html: `
        <h2>Nouveau commentaire</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Message :</strong> ${message}</p>
      `,
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Commentaire envoyé" }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Erreur envoi commentaire" }),
        };
    }
};