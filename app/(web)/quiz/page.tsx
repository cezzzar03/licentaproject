'use client';

import { useState, useEffect } from 'react';
import { allQuestions } from '../quiz/questions';
import jwt_decode from 'jwt-decode';


type DecodedToken = {
  email: string;
};

export default function QuizPage() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300);
  const [timeExpired, setTimeExpired] = useState(false);

  const startQuiz = () => {
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 10);
    setQuestions(selected);
    setQuizStarted(true);
    setTimeLeft(300);
    setTimeExpired(false);
  };

  const handleAnswer = async (selectedOption: string) => {
    const currentQuestion = questions[currentIndex];
    const isCorrect = selectedOption === currentQuestion.correctAnswer;

    let newScore = score;
    if (isCorrect) {
      newScore = score + 1;
      setScore(newScore);
    }

    const isLast = currentIndex === 9;

    if (isLast) {
      setQuizFinished(true);

      // ✅ Dacă userul a trecut testul, trimitem PATCH la DB
      if (newScore >= 9) {
        const token = localStorage.getItem('token');
        if (token) {
          const decoded = jwt_decode<DecodedToken>(token);
          const email = decoded.email;

          console.log("✅ Trimitem PATCH cu email:", email); // 👈 LOG DE TEST
          
          await fetch('/api/quiz-passed', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email }),
          });
        }
      }
    } else {
      setCurrentIndex(prev => prev + 1);
    }
  };

  useEffect(() => {
    if (!quizStarted || quizFinished) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev === 1) {
          clearInterval(timer);
          setTimeExpired(true);
          setQuizFinished(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [quizStarted, quizFinished]);

  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60).toString().padStart(2, '0');
    const sec = (seconds % 60).toString().padStart(2, '0');
    return `${min}:${sec}`;
  };

  return (
    <div className="p-6 space-y-12 bg-white rounded-lg shadow-md max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">📚 Quiz Cripto</h1>

      {!quizStarted && (
        <>
          <div className="space-y-6 text-lg">
            <p>
              Acest quiz conține <strong>10 întrebări grilă</strong>, fiecare cu o singură variantă corectă.
            </p>
            <p>
              Dacă răspunzi corect la <strong>cel puțin 9</strong>, vei primi o <strong>surpriză specială</strong> 🎁
            </p>
            <p>
              Timp maxim de lucru: <strong>5 minute</strong>. Mult succes! 🚀
            </p>
          </div>
          <button
            onClick={startQuiz}
            className="mt-6 px-6 py-2 text-white rounded bg-gradient-to-r from-slate-900 to-blue-800 hover:from-slate-800 hover:to-blue-700 transition"
          >
            Începe Quiz-ul
          </button>
        </>
      )}

      {quizStarted && !quizFinished && (
        <>
          <div className="text-right text-sm text-gray-600 mb-2">
            ⏳ Timp rămas: {formatTime(timeLeft)}
          </div>
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Întrebarea {currentIndex + 1} din 10</h2>
            <p className="text-lg">{questions[currentIndex]?.text}</p>
            <div className="space-y-3">
              {questions[currentIndex]?.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(option)}
                  className="w-full px-4 py-2 rounded border bg-gray-100 hover:bg-gray-200"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      {quizFinished && (
        <div className="text-center space-y-4">
          {timeExpired ? (
            <p className="text-red-600 text-xl font-semibold">⏱️ Timpul a expirat!</p>
          ) : (
            <>
              <h2 className="text-2xl font-bold">Rezultat Final</h2>
              <p>Ai răspuns corect la {score} din 10 întrebări.</p>
              {score >= 9 ? (
                <>
                  <p className="text-green-600 font-semibold">
                    🎉 Felicitări! Ai deblocat UN GHID DE TRANZACȚIONARE! 🚀
                  </p>
                  <p className="text-sm text-gray-600">
                    Acesta este acum disponibil în meniul site-ului! (refresh la pagină ca să apară)
                  </p>
                </>
              ) : (
                <p className="text-red-600">Mai încearcă o dată pentru a debloca surpriza 🔒</p>
              )}
            </>
          )}

          {(score < 9 || timeExpired) && (
            <button
              onClick={() => {
                setQuizStarted(false);
                setQuizFinished(false);
                setCurrentIndex(0);
                setScore(0);
                setTimeLeft(300);
                setTimeExpired(false);
              }}
              className="mt-4 px-6 py-2 text-white rounded bg-gradient-to-r from-slate-900 to-blue-800 hover:from-slate-800 hover:to-blue-700 transition"
            >
              Reîncepe Quiz-ul
            </button>
          )}
        </div>
      )}
    </div>
  );
}
