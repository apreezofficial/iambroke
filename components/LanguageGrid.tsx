'use client';

import React, { useState, useMemo } from 'react';
import { BrokePhrase, BROKE_PHRASES } from '@/lib/phrases';
import { Volume2, Search, Check, Copy, Sparkles, Filter } from 'lucide-react';
import { screamText, playSapaAlarm, playWahalaBoom } from '@/lib/soundEffects';

interface LanguageGridProps {
  onSelectPhrase: (phrase: BrokePhrase) => void;
  activePhraseId: string;
}

export default function LanguageGrid({ onSelectPhrase, activePhraseId }: LanguageGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Naija');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    { label: '🇳🇬 All Naija', value: 'All Naija' },
    { label: 'Pidgin Slangs', value: 'Pidgin' },
    { label: 'Yoruba (Ẹgbà mi)', value: 'Yoruba' },
    { label: 'Igbo (Nwanne Biko)', value: 'Igbo' },
    { label: 'Hausa (Ba Kudi)', value: 'Hausa' },
    { label: 'Street Slangs', value: 'Naija Slang' },
    { label: '🌍 Global Screams', value: 'Global' },
    { label: 'Everything', value: 'All' },
  ];

  const filteredPhrases = useMemo(() => {
    return BROKE_PHRASES.filter(phrase => {
      // Category check
      if (selectedCategory === 'All Naija') {
        if (phrase.category === 'Global') return false;
      } else if (selectedCategory !== 'All') {
        if (phrase.category !== selectedCategory) return false;
      }

      // Search check
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        return (
          phrase.originalText.toLowerCase().includes(q) ||
          phrase.englishMeaning.toLowerCase().includes(q) ||
          phrase.language.toLowerCase().includes(q) ||
          (phrase.pronunciation && phrase.pronunciation.toLowerCase().includes(q))
        );
      }

      return true;
    });
  }, [selectedCategory, searchQuery]);

  const copyToClipboard = (phrase: BrokePhrase, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(`"${phrase.originalText}" (${phrase.language}) — ${phrase.englishMeaning}`);
    setCopiedId(phrase.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleCardClick = (phrase: BrokePhrase) => {
    onSelectPhrase(phrase);
    // Play quick sound + voice
    playWahalaBoom();
    screamText(phrase.ttsVoiceText, { pitch: 1.35, rate: 1.2 });
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2">
            <span className="text-red-500">📢</span> THE SAPA SOUNDBOARD ARCHIVE
          </h2>
          <p className="text-sm text-zinc-400 mt-1">
            Tap any card below to trigger instant vocal scream & emergency alert.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
          <input
            type="text"
            placeholder="Search language, slang..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-zinc-900 border border-zinc-800 focus:border-red-500 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-all"
          />
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
        <Filter className="w-4 h-4 text-zinc-500 flex-shrink-0 mr-1" />
        {categories.map(cat => (
          <button
            key={cat.value}
            onClick={() => setSelectedCategory(cat.value)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex-shrink-0 ${
              selectedCategory === cat.value
                ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Phrases Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPhrases.map(phrase => {
          const isActive = phrase.id === activePhraseId;
          return (
            <div
              key={phrase.id}
              onClick={() => handleCardClick(phrase)}
              className={`group relative p-5 rounded-2xl border cursor-pointer transition-all duration-200 ${
                isActive
                  ? 'bg-gradient-to-br from-red-950/60 to-zinc-900 border-red-500 shadow-xl shadow-red-950/50 scale-[1.02]'
                  : 'bg-zinc-900/80 hover:bg-zinc-800/90 border-zinc-800/90 hover:border-red-500/50 hover:shadow-lg'
              }`}
            >
              {/* Top Row: Language and Badge */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{phrase.flag}</span>
                  <span className="text-xs font-extrabold uppercase tracking-wide text-zinc-300">
                    {phrase.language}
                  </span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-black/40 text-yellow-400 border border-yellow-500/30">
                  {phrase.badge}
                </span>
              </div>

              {/* Original Phrase */}
              <h3 className="text-lg sm:text-xl font-black text-white group-hover:text-yellow-300 transition-colors leading-snug">
                &ldquo;{phrase.originalText}&rdquo;
              </h3>

              {/* Pronunciation */}
              {phrase.pronunciation && (
                <p className="text-xs font-mono text-zinc-400 mt-1 italic">
                  🗣️ {phrase.pronunciation}
                </p>
              )}

              {/* English Meaning */}
              <p className="text-xs text-zinc-300 mt-2.5 bg-black/40 p-2.5 rounded-lg border border-zinc-800/80 line-clamp-2">
                <strong className="text-red-400">Meaning:</strong> {phrase.englishMeaning}
              </p>

              {/* Bottom Row */}
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-zinc-800/80 text-xs text-zinc-400">
                <div className="flex items-center gap-1 text-yellow-400 font-bold">
                  <span>{'🔥'.repeat(phrase.painLevel)}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => copyToClipboard(phrase, e)}
                    className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
                    title="Copy phrase text"
                  >
                    {copiedId === phrase.id ? (
                      <Check className="w-3.5 h-3.5 text-green-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(phrase);
                    }}
                    className="px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold flex items-center gap-1.5 transition-colors shadow-sm"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Scream</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredPhrases.length === 0 && (
        <div className="text-center py-16 bg-zinc-900/50 rounded-2xl border border-zinc-800">
          <p className="text-zinc-400 text-base">No broke shouts found for your search query.</p>
          <button
            onClick={() => {
              setSelectedCategory('All Naija');
              setSearchQuery('');
            }}
            className="mt-3 text-red-400 text-sm font-bold underline hover:text-red-300"
          >
            Reset Filters
          </button>
        </div>
      )}
    </section>
  );
}
