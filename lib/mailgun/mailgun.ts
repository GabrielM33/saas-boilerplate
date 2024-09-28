import mailgun from 'mailgun-js';

const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY || '',
  domain: process.env.MAILGUN_DOMAIN || '',
});

interface MailOptions {
  to: string;
  subject: string;
  text: string;
  html?: string;
}

export const sendEmail = async ({ to, subject, text, html }: MailOptions) => {
  const sender = process.env.MAILGUN_SENDER_EMAIL || '';
  
  const data = {
    from: `Your App <${sender}>`,
    to,
    subject,
    text,
    html,
  };

  try {
    const response = await mg.messages().send(data);
    return response;
  } catch (error) {
    throw new Error(`Failed to send email: ${error}`);
  }
};
