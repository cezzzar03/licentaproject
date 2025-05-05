const express = require('express');
const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const router = express.Router();

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