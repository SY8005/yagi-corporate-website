import { Resend } from 'resend';
import { ContactForm } from '@/app/contact/contact-form';

const resend = new Resend('your-resend-api-key');

export async function sendContactEmail(data: ContactForm) {
  try {
    await resend.emails.send({
      from: 'info@yagi-llc.com',
      to: 'manager@example.com',
      subject: 'New Contact Form Submission',
      text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
    });

    await resend.emails.send({
      from: 'info@yagi-llc.com',
      to: data.email,
      subject: 'Thank you for your message',
      text: `Dear ${data.name},\n\nThank you for reaching out to us. We will get back to you soon.\n\nBest regards,\nYagi LLC`,
    });

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}
