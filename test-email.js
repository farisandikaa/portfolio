import * as nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: "farisandika2111@gmail.com", pass: "ecfraooxrijmwymw" }
});

transporter.sendMail({
  from: "farisandika2111@gmail.com",
  to: "farisandika2111@gmail.com",
  subject: "Test Email",
  text: "Hello!"
}).then(() => console.log("Email sent!"))
  .catch(err => console.error("Email error:", err));
