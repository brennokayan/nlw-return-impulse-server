import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';
const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "a88323a482cc7d",
      pass: "00e82a0b828b8c"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData){
        await transport.sendMail({
            from: 'equipe de feedget <oi@gmail.com>',
            to: 'Brenno Kayan <brennok2019@gmail.com>',
            subject,
            html: body,
        });
    };
}