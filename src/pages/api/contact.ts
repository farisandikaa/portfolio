import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";
import * as nodemailer from "nodemailer";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

type Data = { success: boolean; message: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "Missing fields" });
  }

  try {
   
    const { error: supabaseError } = await supabase
      .from("contacts")
      .insert([{ name, email, message }]);

    if (supabaseError) {
      console.error("Supabase Error:", supabaseError.message);
      return res.status(500).json({
        success: false,
        message: `Supabase Error: ${supabaseError.message}`,
      });
    }

   
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    try {
      await transporter.sendMail({
        from: email,
        to: process.env.EMAIL_RECEIVER,
        subject: `New message from ${name}`,
        text: message,
      });
    } catch (mailErr: any) {
      console.error("Nodemailer Error:", mailErr.message);
      return res.status(500).json({
        success: false,
        message: `Email Error: ${mailErr.message}`,
      });
    }

    return res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (err: any) {
    console.error("Unexpected Error:", err.message);
    return res.status(500).json({
      success: false,
      message: `Unexpected Error: ${err.message || "Failed to send message"}`,
    });
  }
}
