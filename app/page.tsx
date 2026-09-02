'use client';

import React, { useState } from 'react';
import { playSapaAlarm, screamText } from '@/lib/soundEffects';
import { Volume2 } from 'lucide-react';

interface BrokeLine {
  id: string;
  language: string;
  flag: string;
  text: string;
}

const BROKE_LIST: BrokeLine[] = [
  // Nigerian
  { id: '1', language: 'Nigerian Pidgin', flag: '🇳🇬', text: 'I don broke die, abeg I need money!' },
  { id: '2', language: 'Nigerian Pidgin (Sapa)', flag: '🇳🇬', text: 'Sapa dey choke me, make una send me money abeg!' },
  { id: '3', language: 'Yoruba', flag: '🇳🇬', text: 'Kò sí owó lọ́wọ́ mi, mo nílò owó jọ̀wọ́!' },
  { id: '4', language: 'Yoruba (Ẹgbà mi)', flag: '🇳🇬', text: 'Mo ti broke patapata, ẹgbà mi ẹ bùn mi lówó!' },
  { id: '5', language: 'Igbo', flag: '🇳🇬', text: 'Ègó adíghị m, biko m chọrọ ego!' },
  { id: '6', language: 'Igbo (Distress)', flag: '🇳🇬', text: 'Ègó agwụ́la m n\'aka, biko nye m ego!' },
  { id: '7', language: 'Hausa', flag: '🇳🇬', text: 'Ba ni da kudi, don Allah ina bukatar kudi!' },
  { id: '8', language: 'Hausa (Wallahi)', flag: '🇳🇬', text: 'Ba kudi wallahi, don Allah ku taimake ni da kudi!' },
  { id: '9', language: 'Edo (Bini)', flag: '🇳🇬', text: 'I ma mwẹn igho, biko I gualọ igho!' },
  { id: '10', language: 'Efik / Ibibio', flag: '🇳🇬', text: 'Mmenyeneke okuk, mbok mmoyom okuk!' },
  { id: '11', language: 'Tiv', flag: '🇳🇬', text: 'M ngu a inyaregh ga, m soo inyaregh zungwe!' },

  // World
  { id: '12', language: 'English', flag: '🇬🇧', text: 'I am broke, I need money please!' },
  { id: '13', language: 'French', flag: '🇫🇷', text: 'Je suis fauché, j\'ai besoin d\'argent s\'il vous plaît !' },
  { id: '14', language: 'Spanish', flag: '🇪🇸', text: '¡Estoy quebrado, necesito dinero por favor!' },
  { id: '15', language: 'German', flag: '🇩🇪', text: 'Ich bin pleite, ich brauche bitte Geld!' },
  { id: '16', language: 'Italian', flag: '🇮🇹', text: 'Sono al verde, ho bisogno di soldi per favore!' },
  { id: '17', language: 'Portuguese', flag: '🇧🇷', text: 'Estou quebrado, preciso de dinheiro por favor!' },
  { id: '18', language: 'Swahili', flag: '🇰🇪', text: 'Sina pesa kabisa, ninahitaji pesa tafadhali!' },
  { id: '19', language: 'Arabic', flag: '🇸🇦', text: 'أَنَا مُفْلِس، أَحْتَاجُ إِلَى نُقُود مِنْ فَضْلِك!' },
  { id: '20', language: 'Japanese', flag: '🇯🇵', text: 'お金がありません、お金をください、お願いします！' },
  { id: '21', language: 'Korean', flag: '🇰🇷', text: '나 완전 거지야, 제발 돈 좀 줘!' },
  { id: '22', language: 'Chinese (Mandarin)', flag: '🇨🇳', text: '我破产了，拜托请给我钱！' },
  { id: '23', language: 'Russian', flag: '🇷🇺', text: 'Я на меле, пожалуйста, мне нужны деньги!' },
];

export default function Home() {
  const [playingId, setPlayingId] = useState<string | null>(null);

  const scream = (item: BrokeLine) => {
    setPlayingId(item.id);
    playSapaAlarm(0.7);
    screamText(item.text, { pitch: 1.4, rate: 1.2 });
    setTimeout(() => setPlayingId(null), 1200);
  };

  return (
    <main className="min-h-screen bg-black text-white px-4 py-8 max-w-4xl mx-auto font-sans">
      <div className="border-b border-zinc-800 pb-6 mb-6">
        <h1 className="text-2xl sm:text-4xl font-black text-yellow-400 uppercase tracking-tight">
          📢 I AM BROKE, I NEED MONEY PLEASE
        </h1>
        <p className="text-zinc-400 text-sm mt-1">
          Click any sentence below to scream it out loud.
        </p>
      </div>

      <div className="divide-y divide-zinc-800/80">
        {BROKE_LIST.map((item) => (
          <div
            key={item.id}
            onClick={() => scream(item)}
            className={`py-4 px-3 flex items-center justify-between cursor-pointer transition-colors ${
              playingId === item.id ? 'bg-red-950/60 text-yellow-300' : 'hover:bg-zinc-900/80'
            }`}
          >
            <div className="pr-4">
              <div className="flex items-center gap-2 mb-1">
                <span>{item.flag}</span>
                <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
                  {item.language}
                </span>
              </div>
              <div className="text-base sm:text-xl font-bold">
                &ldquo;{item.text}&rdquo;
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                scream(item);
              }}
              className="p-2.5 rounded-lg bg-zinc-800 hover:bg-red-600 text-zinc-300 hover:text-white transition-colors flex-shrink-0"
              title="Scream"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
