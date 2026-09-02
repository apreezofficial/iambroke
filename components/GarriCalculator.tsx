'use client';

import React, { useState } from 'react';
import { Utensils, Award, ShieldAlert } from 'lucide-react';
import { playEmptyCashSound, screamText } from '@/lib/soundEffects';

export default function GarriCalculator() {
  const [cups, setCups] = useState<number>(3);
  const [sugarMode, setSugarMode] = useState<'none' | 'salt' | 'sugar'>('none');
  const [hasGroundnut, setHasGroundnut] = useState(false);

  // Calculate days left
  const daysLeft = Math.max(1, Math.floor(cups / (hasGroundnut ? 1 : 1.5)));

  const handleCalculate = () => {
    playEmptyCashSound();
    screamText(`You have approximately ${daysLeft} days of garri survival remaining before total bankruptcy!`, {
      pitch: 1.3,
      rate: 1.2,
    });
  };

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-8">
      <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
        <div className="flex items-center gap-2 mb-2">
          <Utensils className="w-5 h-5 text-yellow-400" />
          <span className="text-xs font-black uppercase tracking-widest text-yellow-400">
            Nutritional Triage
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-white">
          THE EMERGENCY GARRI SURVIVAL CALCULATOR 🥣
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 mt-1 mb-6">
          Calculate how many days of consciousness you have left based on available cassava supplies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Controls */}
          <div className="md:col-span-2 space-y-4">
            <div>
              <div className="flex justify-between text-xs font-bold text-zinc-300 mb-1">
                <span>Remaining Cups of Garri in Paint Bucket:</span>
                <span className="text-yellow-400 font-mono text-sm">{cups} Cups</span>
              </div>
              <input
                type="range"
                min="0"
                max="15"
                value={cups}
                onChange={e => setCups(Number(e.target.value))}
                className="w-full accent-yellow-400 h-2 bg-zinc-800 rounded-lg cursor-pointer"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div>
                <label className="text-xs font-bold text-zinc-300 block mb-1.5">
                  Sweetener Status:
                </label>
                <div className="grid grid-cols-3 gap-1.5">
                  {(['none', 'salt', 'sugar'] as const).map(mode => (
                    <button
                      key={mode}
                      onClick={() => setSugarMode(mode)}
                      className={`py-2 px-2 rounded-xl text-xs font-bold border transition-colors ${
                        sugarMode === mode
                          ? 'bg-yellow-500 text-black border-yellow-400 font-black'
                          : 'bg-black/50 border-zinc-800 text-zinc-400 hover:text-white'
                      }`}
                    >
                      {mode === 'none' && 'Zero (Raw)'}
                      {mode === 'salt' && 'Pinch Salt'}
                      {mode === 'sugar' && 'Sugar (Rich)'}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-zinc-300 block mb-1.5">
                  Groundnut / Epá Inventory:
                </label>
                <button
                  onClick={() => setHasGroundnut(!hasGroundnut)}
                  className={`w-full py-2 px-3 rounded-xl text-xs font-bold border transition-colors flex items-center justify-center gap-2 ${
                    hasGroundnut
                      ? 'bg-emerald-700/80 border-emerald-500 text-white font-black'
                      : 'bg-black/50 border-zinc-800 text-zinc-400'
                  }`}
                >
                  <span>{hasGroundnut ? '🥜 Groundnuts Present' : '❌ Zero Groundnuts'}</span>
                </button>
              </div>
            </div>

            <button
              onClick={handleCalculate}
              className="mt-2 w-full sm:w-auto px-5 py-2.5 rounded-xl bg-yellow-500 hover:bg-yellow-400 text-black font-black text-xs uppercase tracking-wider transition-colors shadow-md shadow-yellow-500/20"
            >
              Auditor Garri Report
            </button>
          </div>

          {/* Results Box */}
          <div className="bg-black/60 border border-yellow-500/30 rounded-2xl p-5 text-center flex flex-col justify-center">
            <span className="text-xs uppercase font-bold text-zinc-400 tracking-wider">
              Projected Time Until Total Sapa
            </span>
            <div className="text-4xl sm:text-5xl font-black text-yellow-300 font-mono my-2">
              {cups === 0 ? '0 HOURS' : `${daysLeft} DAYS`}
            </div>
            <p className="text-xs text-zinc-300 italic">
              {cups === 0
                ? '💀 Garri reserves empty! Urgent 2K broadcast needed immediately!'
                : sugarMode === 'none'
                ? '⚠️ Trenches level: Drinking water with floating flakes. Stay strong.'
                : '✨ You are practically royalty in the broke community.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
