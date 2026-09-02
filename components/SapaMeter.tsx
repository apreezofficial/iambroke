'use client';

import React, { useState } from 'react';
import { playSapaAlarm, playWahalaBoom, playEmptyCashSound, screamText } from '@/lib/soundEffects';
import { AlertTriangle, Activity, Skull, Zap } from 'lucide-react';

interface SapaLevel {
  level: number;
  title: string;
  nairaRange: string;
  diet: string;
  symptoms: string[];
  survivalAdvice: string;
  shout: string;
}

const SAPA_LEVELS: SapaLevel[] = [
  {
    level: 1,
    title: 'Stage 1: Soft Warning',
    nairaRange: '₦10,000 – ₦25,000',
    diet: 'Indomie 2-packs with 1 boiled egg',
    symptoms: [
      'Still taking Uber comfort',
      'Ignoring fuel price debates',
      'Says "Money is not everything" with confidence'
    ],
    survivalAdvice: 'Start rationing now, danger is approaching fast!',
    shout: 'Small sapa is knocking, prepare the garri reservoir!'
  },
  {
    level: 2,
    title: 'Stage 2: Cassava Flakes Diet',
    nairaRange: '₦2,500 – ₦8,000',
    diet: 'Garri with iced water, groundnut & Peak milk',
    symptoms: [
      'Switches from Uber to Keke Napep / Danfo',
      'Declines weekend hangout with "I have a spiritual meeting"',
      'Charging phone only at office or church'
    ],
    survivalAdvice: 'Cut unnecessary expenses! Groundnut price is rising!',
    shout: 'Garri water protocol engaged! Milk is now optional luxury!'
  },
  {
    level: 3,
    title: 'Stage 3: Sapa Pro Max',
    nairaRange: '₦400 – ₦1,500',
    diet: 'Pure Garri soaked in warm tap water (No sugar)',
    symptoms: [
      'Checks bank app 17 times an hour expecting a divine error',
      'Using MTN Extra-time loan balance to browse',
      'Eating dinner while lying down so gravity helps the water stay'
    ],
    survivalAdvice: 'Look for rich uncles on Facebook. Compliment their traditional caps.',
    shout: 'Sapa Pro Max! Sugar has resigned from my kitchen!'
  },
  {
    level: 4,
    title: 'Stage 4: Urgent 2K Intensive Care',
    nairaRange: '₦12.50 – ₦150',
    diet: 'Sunlight, holy prayer, and cold water',
    symptoms: [
      'ATM card declined at POS for insufficient fund fee',
      'Phone battery at 4%, borrowing powerbank from neighbor with promises',
      'Re-reading old texts from ex wondering if apology can yield ₦5k'
    ],
    survivalAdvice: 'Full broadcast emergency! Copy our begging broadcast right now!',
    shout: 'Emergency! Who will deliver my urgent two k from the jaws of defeat!'
  },
  {
    level: 5,
    title: 'Stage 5: Federal Disaster Zone',
    nairaRange: '-₦180.00 (Negative Balance due to SMS charges)',
    diet: 'Oxygen and deep thoughts',
    symptoms: [
      'Loan app sent your picture to your secondary school WhatsApp group with caption "Wanted for ₦3,000"',
      'Bank debited maintenance fee on an empty account',
      'Sim card has been placed in airplane mode to avoid reality'
    ],
    survivalAdvice: 'Run to village or submit urgent application for adoption by Dangote.',
    shout: 'Otilo! Total system shutdown! Even the angels are crying for my balance!'
  }
];

export default function SapaMeter() {
  const [currentLevel, setCurrentLevel] = useState<number>(3);
  const activeLevel = SAPA_LEVELS[currentLevel - 1];

  const handleLevelChange = (lvl: number) => {
    setCurrentLevel(lvl);
    const target = SAPA_LEVELS[lvl - 1];
    if (lvl >= 4) {
      playSapaAlarm(1.2);
    } else if (lvl === 3) {
      playWahalaBoom();
    } else {
      playEmptyCashSound();
    }
    screamText(target.shout, { pitch: 1.2 + lvl * 0.08, rate: 1.15 });
  };

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-8">
      <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
        {/* Background glow based on level */}
        <div
          className={`absolute -right-20 -top-20 w-80 h-80 rounded-full blur-3xl pointer-events-none transition-all duration-500 opacity-20 ${
            currentLevel >= 4 ? 'bg-red-600' : currentLevel === 3 ? 'bg-yellow-500' : 'bg-emerald-500'
          }`}
        />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-red-400 flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-red-500 animate-pulse" /> Diagnostic Clinic
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
              THE OFFICIAL SAPA-METER GAUGE 📈
            </h2>
          </div>
          <div className="bg-black/60 border border-zinc-800 px-4 py-2 rounded-xl flex items-center gap-3">
            <span className="text-xs text-zinc-400">Current Diagnosis:</span>
            <span className={`text-sm font-black uppercase ${
              currentLevel >= 4 ? 'text-red-400' : currentLevel === 3 ? 'text-yellow-400' : 'text-emerald-400'
            }`}>
              Level {currentLevel} of 5
            </span>
          </div>
        </div>

        {/* Level selector buttons */}
        <div className="grid grid-cols-5 gap-2 sm:gap-3 mb-8">
          {SAPA_LEVELS.map(item => (
            <button
              key={item.level}
              onClick={() => handleLevelChange(item.level)}
              className={`py-3 sm:py-4 px-2 rounded-xl border text-center transition-all flex flex-col items-center justify-center ${
                currentLevel === item.level
                  ? 'bg-red-600 border-red-500 text-white shadow-lg shadow-red-600/40 scale-105'
                  : 'bg-zinc-800/80 hover:bg-zinc-700/80 border-zinc-700/80 text-zinc-400'
              }`}
            >
              <span className="text-xs sm:text-sm font-black">LVL {item.level}</span>
              <span className="text-lg sm:text-2xl mt-1">
                {item.level === 1 && '🍜'}
                {item.level === 2 && '🥣'}
                {item.level === 3 && '🔥'}
                {item.level === 4 && '🚨'}
                {item.level === 5 && '💀'}
              </span>
            </button>
          ))}
        </div>

        {/* Active Stage Details Card */}
        <div className="bg-black/50 border border-zinc-800 rounded-2xl p-5 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-yellow-400">
                {activeLevel.title}
              </h3>
              <p className="text-xs text-zinc-400 mt-0.5">
                Estimated Wallet Balance: <span className="text-white font-mono font-bold">{activeLevel.nairaRange}</span>
              </p>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-zinc-800 text-zinc-300 border border-zinc-700">
              Primary Fuel: {activeLevel.diet}
            </span>
          </div>

          {/* Symptoms List */}
          <div className="my-4">
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-zinc-400 mb-2">
              Clinically Confirmed Symptoms:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {activeLevel.symptoms.map((symptom, idx) => (
                <div
                  key={idx}
                  className="bg-zinc-900/90 border border-zinc-800/90 p-3 rounded-xl text-xs text-zinc-300 flex items-start gap-2"
                >
                  <span className="text-red-500 font-bold">•</span>
                  <span>{symptom}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Survival Advice & Shout action */}
          <div className="mt-5 pt-4 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-zinc-400">
              <strong className="text-yellow-400">Survival Prescription:</strong> {activeLevel.survivalAdvice}
            </div>

            <button
              onClick={() => handleLevelChange(currentLevel)}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md shadow-red-600/30 flex-shrink-0"
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Broadcast Level {currentLevel} Shout</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
