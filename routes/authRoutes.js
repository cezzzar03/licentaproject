const express = require('express');
const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const router = express.Router();

//ruta register
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
module.exports = router;

//ruta login
const jwt = require('jsonwebtoken');

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