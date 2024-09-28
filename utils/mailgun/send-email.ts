import { mg, MAILGUN_DOMAIN } from './config';

interface EmailData {
  to: string;
  subject: string;
  text: string;
  html: string;
}

export async function sendEmail({ to, subject, text, html }: EmailData) {
  try {
    const msg = await mg.messages.create(MAILGUN_DOMAIN, {
      from: `Your App Name <noreply@${MAILGUN_DOMAIN}>`,
      to: [to],
      subject: subject,
      text: text,
      html: html
    });

    console.log('Email sent successfully:', msg);
    return { success: true, message: 'Email sent successfully' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Failed to send email' };
  }
}