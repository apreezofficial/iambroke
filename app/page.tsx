'use client';

import React from 'react';

interface BrokeLine {
  id: string;
  language: string;
  text: string;
}

const BROKE_LIST: BrokeLine[] = [
  { id: '1', language: 'Nigerian Pidgin', text: 'I don broke die, abeg I need money!' },
  { id: '2', language: 'Yoruba', text: 'Kò sí owó lọ́wọ́ mi, mo nílò owó jọ̀wọ́!' },
  { id: '3', language: 'Igbo', text: 'Ègó adíghị m, biko m chọrọ ego!' },
  { id: '4', language: 'Hausa', text: 'Ba ni da kudi, don Allah ina bukatar kudi!' },
  { id: '5', language: 'Edo (Bini)', text: 'I ma mwẹn igho, biko I gualọ igho!' },
  { id: '6', language: 'Efik', text: 'Mmenyeneke okuk, mbok mmoyom okuk!' },
  { id: '7', language: 'Tiv', text: 'M ngu a inyaregh ga, m soo inyaregh zungwe!' },
  { id: '8', language: 'French', text: 'Je suis fauché, j\'ai besoin d\'argent s\'il vous plaît !' },
  { id: '9', language: 'Spanish', text: '¡Estoy quebrado, necesito dinero por favor!' },
  { id: '10', language: 'German', text: 'Ich bin pleite, ich brauche bitte Geld!' },
  { id: '11', language: 'Italian', text: 'Sono al verde, ho bisogno di soldi per favore!' },
  { id: '12', language: 'Portuguese', text: 'Estou quebrado, preciso de dinheiro por favor!' },
  { id: '13', language: 'Swahili', text: 'Sina pesa kabisa, ninahitaji pesa tafadhali!' },
  { id: '14', language: 'Arabic', text: 'أَنَا مُفْلِس، أَحْتَاجُ إِلَى نُقُود مِنْ فَضْلِك!' },
  { id: '15', language: 'Japanese', text: 'お金がありません、お金をください、お願いします！' },
  { id: '16', language: 'Korean', text: '나 완전 거지야, 제발 돈 좀 줘!' },
  { id: '17', language: 'Chinese (Mandarin)', text: '我破产了，拜托请给我钱！' },
  { id: '18', language: 'Russian', text: 'Я на меле, пожалуйста, мне нужны деньги!' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-4 py-10 max-w-4xl mx-auto font-sans">
      <div className="border-b border-zinc-800 pb-5 mb-6">
        <h1 className="text-2xl sm:text-3xl font-black text-yellow-400 uppercase tracking-tight">
          I AM BROKE, I NEED MONEY PLEASE
        </h1>
      </div>

      <div className="divide-y divide-zinc-900">
        {BROKE_LIST.map((item) => (
          <div
            key={item.id}
            className="py-3.5 px-3 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 hover:bg-zinc-900/40 rounded-lg transition-colors"
          >
            <span className="text-xs sm:text-sm font-bold text-red-400 sm:w-44 flex-shrink-0 uppercase tracking-wide">
              {item.language}
            </span>
            <span className="text-base sm:text-lg font-medium text-zinc-100">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}
