import Resend from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || '');

export async function sendContactEmail(to: string, subject: string, body: string){
  if(!process.env.RESEND_API_KEY) return;
  await resend.emails.send({
    from: 'The Heaven Connection <no-reply@theheavenconnection.example>',
    to: [to],
    subject,
    html: `<div>${body}</div>`
  });
}
