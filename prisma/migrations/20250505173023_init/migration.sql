-- CreateTable
CREATE TABLE "Utilizator" (
    "id" SERIAL NOT NULL,
    "nume" TEXT NOT NULL,
    "prenume" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "parola" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Utilizator_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Utilizator_email_key" ON "Utilizator"("email");
