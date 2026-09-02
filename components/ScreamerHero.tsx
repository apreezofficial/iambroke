'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { BrokePhrase, BROKE_PHRASES } from '@/lib/phrases';
import { playSapaAlarm, playWahalaBoom, playEmptyCashSound, playVuvuzelaHorn, screamText } from '@/lib/soundEffects';
import { Volume2, VolumeX, Flame, Zap, Shuffle, Play, Pause, BellRing, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ScreamerHeroProps {
  activePhrase: BrokePhrase;
  setActivePhrase: (phrase: BrokePhrase) => void;
  isShaking: boolean;
  setIsShaking: (shaking: boolean) => void;
}

export default function ScreamerHero({
  activePhrase,
  setActivePhrase,
  isShaking,
  setIsShaking,
}: ScreamerHeroProps) {
  const [isScreaming, setIsScreaming] = useState(false);
  const [autoParty, setAutoParty] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [speechEnabled, setSpeechEnabled] = useState(true);
  const [soundType, setSoundType] = useState<'siren' | 'boom' | 'empty' | 'horn'>('siren');
  const autoIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Trigger full screaming experience
  const triggerScream = useCallback((phrase: BrokePhrase = activePhrase) => {
    setIsScreaming(true);
    setIsShaking(true);

    if (soundEnabled) {
      if (soundType === 'siren') {
        playSapaAlarm(1.6);
      } else if (soundType === 'boom') {
        playWahalaBoom();
      } else if (soundType === 'empty') {
        playEmptyCashSound();
      } else if (soundType === 'horn') {
        playVuvuzelaHorn();
      }
    }

    if (speechEnabled) {
      screamText(phrase.ttsVoiceText, {
        pitch: 1.4,
        rate: 1.18,
        volume: soundEnabled ? 1.0 : 0.0,
      });
    }

    // Explode tears / empty wallet confetti!
    try {
      confetti({
        particleCount: 45,
        spread: 70,
        origin: { y: 0.5 },
        colors: ['#ff1744', '#ffea00', '#00e5ff', '#ffffff'],
      });
    } catch {
      // ignore in environments without canvas
    }

    // Reset shaking after duration
    setTimeout(() => {
      setIsScreaming(false);
      setIsShaking(false);
    }, 1800);
  }, [activePhrase, soundEnabled, soundType, speechEnabled, setIsShaking]);

  // Pick random phrase and scream
  const screamRandom = () => {
    const randomIndex = Math.floor(Math.random() * BROKE_PHRASES.length);
    const randomPhrase = BROKE_PHRASES[randomIndex];
    setActivePhrase(randomPhrase);
    triggerScream(randomPhrase);
  };

  // Auto party mode
  useEffect(() => {
    if (autoParty) {
      autoIntervalRef.current = setInterval(() => {
        const nextIndex = Math.floor(Math.random() * BROKE_PHRASES.length);
        const nextPhrase = BROKE_PHRASES[nextIndex];
        setActivePhrase(nextPhrase);
        triggerScream(nextPhrase);
      }, 4500);
    } else {
      if (autoIntervalRef.current) {
        clearInterval(autoIntervalRef.current);
      }
    }

    return () => {
      if (autoIntervalRef.current) clearInterval(autoIntervalRef.current);
    };
  }, [autoParty, triggerScream, setActivePhrase]);

  return (
    <section className="relative w-full max-w-5xl mx-auto px-4 py-8">
      {/* Top Warning Banner */}
      <div className="hazard-stripes-red rounded-lg p-2.5 mb-6 text-center shadow-lg border border-red-500/50">
        <div className="bg-black/90 py-1.5 px-4 rounded font-mono text-xs sm:text-sm font-bold tracking-widest text-yellow-300 flex items-center justify-center gap-2 uppercase">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-red-600 animate-ping" />
          <span>SAPA PROTOCOL LEVEL 5 INITIATED • MAXIMUM BROKENESS DETECTED</span>
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-red-600 animate-ping" />
        </div>
      </div>

      {/* Main Screaming Stage */}
      <div
        className={`relative overflow-hidden rounded-3xl border-2 transition-all duration-300 ${
          isScreaming
            ? 'siren-box bg-red-950/40 border-red-500'
            : 'bg-zinc-900/90 border-zinc-800 hover:border-red-500/40'
        } backdrop-blur-xl p-6 sm:p-10 shadow-2xl`}
      >
        {/* Decorative sound wave rings when screaming */}
        {isScreaming && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <div className="absolute w-72 h-72 rounded-full border-4 border-red-500/40 sound-ring-1" />
            <div className="absolute w-96 h-96 rounded-full border-4 border-yellow-400/30 sound-ring-2" />
            <div className="absolute w-[30rem] h-[30rem] rounded-full border-4 border-red-600/20 sound-ring-3" />
          </div>
        )}

        {/* Badge & Language indicator */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 relative z-10">
          <div className="flex items-center gap-2">
            <span className="text-3xl">{activePhrase.flag}</span>
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-red-400 block">
                Language / Dialect
              </span>
              <span className="font-extrabold text-white text-lg sm:text-xl">
                {activePhrase.language}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-red-600/30 border border-red-500/60 text-red-300">
              {activePhrase.badge}
            </span>
            <div className="flex items-center bg-black/60 px-3 py-1 rounded-full border border-zinc-700">
              <span className="text-xs text-zinc-400 mr-1.5">Pain Level:</span>
              <span className="text-sm font-bold text-yellow-400">
                {'🔥'.repeat(activePhrase.painLevel)}
              </span>
            </div>
          </div>
        </div>

        {/* Big Screaming Text */}
        <div className="text-center my-6 sm:my-8 relative z-10">
          <h1
            className={`font-black tracking-tight leading-none text-3xl sm:text-5xl md:text-6xl uppercase transition-transform ${
              isScreaming ? 'scale-105 text-yellow-300' : 'text-white'
            }`}
            style={{
              textShadow: isScreaming
                ? '0 0 35px rgba(255, 23, 68, 0.9), 0 0 15px rgba(255, 234, 0, 0.8)'
                : '0 4px 20px rgba(0,0,0,0.8)',
            }}
          >
            &ldquo;{activePhrase.originalText}&rdquo;
          </h1>

          {/* Phonetics & Meaning */}
          {activePhrase.pronunciation && (
            <p className="mt-3 text-sm sm:text-base text-zinc-400 font-mono tracking-wide italic">
              📢 How to shout it: <span className="text-yellow-400 font-semibold">{activePhrase.pronunciation}</span>
            </p>
          )}

          <div className="mt-4 inline-block bg-black/70 border border-zinc-800 px-5 py-2.5 rounded-xl max-w-2xl">
            <p className="text-xs sm:text-sm text-zinc-300">
              <span className="text-red-400 font-bold">English Meaning: </span>
              {activePhrase.englishMeaning}
            </p>
          </div>

          {/* Floating Reaction Emojis */}
          <div className="flex justify-center items-center gap-3 mt-4">
            {activePhrase.reactions.map((emoji, idx) => (
              <span
                key={idx}
                className={`text-2xl sm:text-3xl transition-transform ${
                  isScreaming ? 'scale-125 animate-bounce' : 'hover:scale-110'
                }`}
              >
                {emoji}
              </span>
            ))}
          </div>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 relative z-10">
          <button
            onClick={() => triggerScream()}
            disabled={isScreaming}
            className={`w-full sm:w-auto px-8 py-4 rounded-2xl font-black text-lg sm:text-xl uppercase tracking-wider transition-all transform active:scale-95 shadow-xl flex items-center justify-center gap-3 ${
              isScreaming
                ? 'bg-yellow-400 text-black animate-pulse'
                : 'bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-600 text-white shadow-red-900/50 hover:shadow-red-600/40 hover:-translate-y-0.5'
            }`}
          >
            <BellRing className={`w-6 h-6 ${isScreaming ? 'animate-spin' : 'animate-bounce'}`} />
            <span>{isScreaming ? 'SCREAMING OUT LOUD! 😱' : 'SHOUT "I AM BROKE!" 📢'}</span>
          </button>

          <button
            onClick={screamRandom}
            className="w-full sm:w-auto px-6 py-4 rounded-2xl font-bold text-base uppercase tracking-wider bg-zinc-800/90 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 hover:border-yellow-400/50 transition-all flex items-center justify-center gap-2"
          >
            <Shuffle className="w-5 h-5 text-yellow-400" />
            <span>Surprise Broke Shout</span>
          </button>

          <button
            onClick={() => setAutoParty(!autoParty)}
            className={`w-full sm:w-auto px-6 py-4 rounded-2xl font-bold text-base uppercase tracking-wider border transition-all flex items-center justify-center gap-2 ${
              autoParty
                ? 'bg-yellow-500 text-black border-yellow-400 font-extrabold shadow-lg shadow-yellow-500/30 animate-pulse'
                : 'bg-zinc-800/90 hover:bg-zinc-700 text-zinc-300 border-zinc-700'
            }`}
          >
            {autoParty ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 text-green-400" />}
            <span>{autoParty ? 'Stop Sapa DJ Mode' : 'Continuous Sapa Loop'}</span>
          </button>
        </div>

        {/* Audio Synthesizer Controls Bar */}
        <div className="mt-8 pt-6 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-400 relative z-10">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-zinc-300 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-yellow-400" /> Sound FX:
            </span>
            {(['siren', 'boom', 'empty', 'horn'] as const).map(type => (
              <button
                key={type}
                onClick={() => {
                  setSoundType(type);
                  if (type === 'siren') playSapaAlarm(1);
                  if (type === 'boom') playWahalaBoom();
                  if (type === 'empty') playEmptyCashSound();
                  if (type === 'horn') playVuvuzelaHorn();
                }}
                className={`px-3 py-1.5 rounded-lg font-medium capitalize transition-colors ${
                  soundType === type
                    ? 'bg-red-600 text-white font-bold'
                    : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300'
                }`}
              >
                {type === 'siren' && '🚨 Police Siren'}
                {type === 'boom' && '💥 Wahala Boom'}
                {type === 'empty' && '🪙 Empty Cash'}
                {type === 'horn' && '🎺 Vuvuzela'}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setSpeechEnabled(!speechEnabled)}
              className={`px-3 py-1.5 rounded-lg border font-medium transition-colors flex items-center gap-1.5 ${
                speechEnabled
                  ? 'border-green-500/60 bg-green-950/40 text-green-400'
                  : 'border-zinc-700 bg-zinc-800 text-zinc-500'
              }`}
            >
              <span>{speechEnabled ? '🗣️ Shouting Voice ON' : '🤐 Voice Muted'}</span>
            </button>

            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className={`p-2 rounded-lg border transition-colors ${
                soundEnabled
                  ? 'border-yellow-500/50 bg-yellow-950/30 text-yellow-400'
                  : 'border-zinc-700 bg-zinc-800 text-zinc-500'
              }`}
              title="Toggle Audio Effects"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setIsShaking(!isShaking)}
              className={`px-3 py-1.5 rounded-lg border transition-colors flex items-center gap-1 ${
                isShaking
                  ? 'border-red-500 bg-red-600 text-white font-bold animate-bounce'
                  : 'border-zinc-700 bg-zinc-800 text-zinc-400 hover:text-white'
              }`}
              title="Toggle Screen Tremor"
            >
              <Flame className="w-3.5 h-3.5 text-red-500" />
              <span>{isShaking ? 'Earthquake Active' : 'Screen Shake'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
