'use client';

import React, { useState } from 'react';
import { BROKE_PHRASES, BrokePhrase } from '@/lib/phrases';
import ScreamerHero from '@/components/ScreamerHero';
import LanguageGrid from '@/components/LanguageGrid';
import SapaMeter from '@/components/SapaMeter';
import Urgent2kGenerator from '@/components/Urgent2kGenerator';
import EmptyBankAlert from '@/components/EmptyBankAlert';
import GarriCalculator from '@/components/GarriCalculator';
import { Megaphone, AlertOctagon, Heart, Share2, Sparkles } from 'lucide-react';

export default function Home() {
  const [activePhrase, setActivePhrase] = useState<BrokePhrase>(BROKE_PHRASES[0]);
  const [isShaking, setIsShaking] = useState<boolean>(false);

  return (
    <div className={`min-h-screen text-white flex flex-col transition-all duration-75 ${isShaking ? 'shake-active' : ''}`}>
      {/* Top Ticker / Marquee */}
      <div className="bg-yellow-400 text-black py-1.5 px-4 overflow-hidden whitespace-nowrap font-mono font-black text-xs uppercase tracking-wider flex items-center border-b border-black">
        <div className="flex animate-marquee gap-8">
          <span>🚨 RED ALERT: NAIJA SAPA INDEX REACHES CRITICAL RECORD</span>
          <span>•</span>
          <span>📢 OFFICIAL ADVICE: RESIST CHECKING ACCOUNT BALANCE TODAY</span>
          <span>•</span>
          <span>🥣 CASHEW NUT IS NOT FOR BROKE BOYS: STICK TO SOAKED GARRI</span>
          <span>•</span>
          <span>💸 URGENT 2K IS A BASIC HUMAN RIGHT</span>
          <span>•</span>
          <span>🚨 RED ALERT: NAIJA SAPA INDEX REACHES CRITICAL RECORD</span>
          <span>•</span>
          <span>📢 OFFICIAL ADVICE: RESIST CHECKING ACCOUNT BALANCE TODAY</span>
          <span>•</span>
          <span>🥣 CASHEW NUT IS NOT FOR BROKE BOYS: STICK TO SOAKED GARRI</span>
          <span>•</span>
          <span>💸 URGENT 2K IS A BASIC HUMAN RIGHT</span>
        </div>
      </div>

      {/* Header / Navbar */}
      <header className="border-b border-zinc-800/80 bg-zinc-950/70 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-rose-700 flex items-center justify-center shadow-lg shadow-red-600/40 animate-pulse">
              <Megaphone className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-black text-lg sm:text-xl tracking-tight text-white">
                  SAPA<span className="text-red-500">911</span>
                </span>
                <span className="bg-red-600/30 border border-red-500/50 text-[10px] font-black text-red-400 px-2 py-0.5 rounded-full uppercase">
                  Naija Screamer
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 -mt-0.5">
                Multi-lingual Emergency Broke Screamer
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-full text-xs text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              <span>Sapa Threat: <strong className="text-yellow-400">MAXIMUM</strong></span>
            </div>

            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: 'SAPA 911 | I Am Broke Screamer',
                    text: 'Come and hear me scream that I am broke in Yoruba, Igbo, Hausa and Pidgin! 😭💸',
                    url: window.location.href,
                  });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Sapa emergency link copied to clipboard!');
                }
              }}
              className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors border border-zinc-700"
              title="Share this app"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 pb-16">
        {/* Hero Section with Interactive Megaphone */}
        <ScreamerHero
          activePhrase={activePhrase}
          setActivePhrase={setActivePhrase}
          isShaking={isShaking}
          setIsShaking={setIsShaking}
        />

        {/* Soundboard Archive */}
        <LanguageGrid
          onSelectPhrase={(phrase) => {
            setActivePhrase(phrase);
            window.scrollTo({ top: 120, behavior: 'smooth' });
          }}
          activePhraseId={activePhrase.id}
        />

        {/* Sapa-Meter Diagnostic */}
        <SapaMeter />

        {/* Urgent 2K Generator */}
        <Urgent2kGenerator />

        {/* Empty Parody Bank Card */}
        <EmptyBankAlert />

        {/* Garri Survival Calculator */}
        <GarriCalculator />
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-900 bg-black/80 py-10 px-4 text-center text-xs text-zinc-500">
        <div className="max-w-4xl mx-auto space-y-3">
          <p className="font-medium text-zinc-400">
            Dedicated to all warriors surviving on Garri, cold water, pure hope, and urgent 2k miracles. 🥣🇳🇬
          </p>
          <p className="text-[11px] text-zinc-600">
            Disclaimer: No Central Bank governors or commercial banks were harmed. Purely built for comedic relief and stress ventilation.
          </p>
          <div className="pt-2 flex justify-center items-center gap-1 text-[11px] text-zinc-500">
            <span>Built with excessive screams & Naija humor</span>
            <Heart className="w-3 h-3 text-red-500 inline fill-red-500" />
            <span>• 2026</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
