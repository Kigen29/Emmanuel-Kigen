"use server";
import nodemailer from "nodemailer";
import * as handlebars from "handlebars";
import { contactTemplate } from "@/templates/contact";

// Define a more specific error type for handling
interface EmailError {
  response?: {
    message?: string;
  };
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export async function sendContactForm(data: FormData): Promise<{ success?: boolean; error?: string }> {
  const transporter = nodemailer.createTransport({
    port: 465,
    secure: true, // true for 465, false for other ports
    host: process.env.CONTACT_FORM_HOST,
    auth: {
      user: process.env.CONTACT_FORM_USER,
      pass: process.env.CONTACT_FORM_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  try {
    const body = await compileTemplate(data);

    await transporter.sendMail({
      from: `<${process.env.CONTACT_FORM_USER}>`,
      replyTo: data.email,
      to: process.env.CONTACT_FORM_RECEIVE_EMAIL,
      subject: `New Message from your Portfolio -- ${data.firstName} ${data.lastName}`,
      html: body,
    });

    return { success: true };
  } catch (err) {
    const error = err as EmailError;
    console.error('Error sending contact form:', error);
    return { error: error.response?.message || 'An unexpected error occurred.' };
  }
}

export async function compileTemplate(data: FormData): Promise<string> {
  const template = handlebars.compile(contactTemplate);
  const htmlBody = template(data);
  return htmlBody;
}
