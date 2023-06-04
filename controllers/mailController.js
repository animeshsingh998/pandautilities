import nodemailer from "nodemailer";

export const sendMail = async (req, res) => {
  const { contactData } = req.body;
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS, 
    },
  });
    const message = `My email: ${contactData.userEmail}\n\n\n My message: ${contactData.userMessage}`
    let mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: "AnimeshWebDev user message,",
      text: message,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error)
            return res.json({ error: error });
        } else {
            return res.json({ message: "Email sent successfully." });
        }
    })
};
