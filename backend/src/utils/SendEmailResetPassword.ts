import * as nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';
dotenv.config();

export async function SendEmailResetPassword(email: string, token: string) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const resetLink = `http://localhost:5173/reset-password/${token}`;

  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: email,
    subject: 'Password Reset',
    html: `
      <h1>Password Reset</h1>
      <br />
      <p>Click on the following <a href="${resetLink}">Link</a> to reset your password.</p>
      <br />
      <p>If you did not request a password reset, please ignore this email.</p>
    `,
  };

  const info = await transporter.sendMail(mailOptions);

  console.log(`Email sent: ${info.response}`);

  return info;
}