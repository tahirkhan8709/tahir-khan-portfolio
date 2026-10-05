"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: { name: string; email: string; message: string }) {
  try {
    const { name, email, message } = formData;

    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'tahir.tayyab8709@gmail.com', // <--- TYPE YOUR REAL EMAIL HERE
      subject: `New Message from ${name}`,
      html: `
        <h3>New Portfolio Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Email Error:", error);
    return { success: false };
  }
}