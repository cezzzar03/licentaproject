const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const router = express.Router();


// ───── REGISTER ─────
router.post('/register', async (req, res) => {
  const { nume, prenume, email, parola } = req.body;

  if (!nume || !prenume || !email || !parola) {
    return res.status(400).json({ error: 'Toate câmpurile sunt necesare' });
  }

  try {
    const existingUser = await prisma.utilizator.findUnique({
      where: { email }
    });

    if (existingUser) {
      return res.status(409).json({ error: 'Email deja înregistrat' });
    }

    const hashedPassword = await bcrypt.hash(parola, 10);

    await prisma.utilizator.create({
      data: {
        nume,
        prenume,
        email,
        parola: hashedPassword,
      }
    });

    res.status(201).json({ message: 'Utilizator înregistrat cu succes' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Eroare la înregistrare' });
  }
});


// ───── LOGIN ─────
router.post('/login', async (req, res) => {
  const { email, parola } = req.body;

  if (!email || !parola) {
    return res.status(400).json({ error: 'Email și parolă sunt necesare' });
  }

  try {
    const utilizator = await prisma.utilizator.findUnique({
      where: { email }
    });

    if (!utilizator) {
      return res.status(400).json({ error: 'Email sau parolă incorecte' });
    }

    const parolaValida = await bcrypt.compare(parola, utilizator.parola);

    if (!parolaValida) {
      return res.status(400).json({ error: 'Email sau parolă incorecte' });
    }

    const token = jwt.sign(
      { id: utilizator.id, email: utilizator.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    return res.status(200).json({
      success: true,
      message: 'Autentificare reușită!',
      token: token
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Eroare server. Încearcă din nou mai târziu.' });
  }
});


// ───── FORGOT PASSWORD ─────
router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ success: false, message: "Email lipsă." });
  }

  try {
    const utilizator = await prisma.utilizator.findUnique({
      where: { email },
    });

    if (!utilizator) {
      return res.status(404).json({ success: false, message: "Email inexistent." });
    }

    const token = jwt.sign(
      { email },
      process.env.JWT_SECRET,
      { expiresIn: "15m" }
    );

    const resetLink = `http://localhost:3000/reset-password?token=${token}`;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"CriptoHub" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Resetare parolă CriptoHub",
      html: `
        <h3>Salut!</h3>
        <p>Ai cerut o resetare a parolei. Dă click pe link-ul de mai jos:</p>
        <a href="${resetLink}">${resetLink}</a>
        <p>Link-ul este valabil 15 minute.</p>
      `,
    });

    res.json({ success: true, message: "Email trimis!" });

  } catch (err) {
    console.error("Eroare la forgot-password:", err);
    res.status(500).json({ success: false, message: "Eroare server." });
  }
});


// ───── RESET PASSWORD ─────
router.post("/reset-password", async (req, res) => {
  const { token, parolaNoua } = req.body;

  if (!token || !parolaNoua) {
    return res.status(400).json({ success: false, message: "Token sau parolă lipsă." });
  }

  try {
    // 1. Verificăm tokenul JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const email = decoded.email;

    // 2. Verificăm dacă userul există
    const utilizator = await prisma.utilizator.findUnique({
      where: { email },
    });

    if (!utilizator) {
      return res.status(404).json({ success: false, message: "Utilizator inexistent." });
    }

    // 3. Hash-uim noua parolă
    const hashedParola = await bcrypt.hash(parolaNoua, 10);

    // 4. Update parolă în DB
    await prisma.utilizator.update({
      where: { email },
      data: { parola: hashedParola },
    });

    return res.status(200).json({ success: true, message: "Parola a fost resetată cu succes!" });
  } catch (err) {
    console.error("Eroare resetare:", err);
    return res.status(401).json({ success: false, message: "Token invalid sau expirat." });
  }
});


module.exports = router;