'use client';

import React, { useState } from 'react';
import { Copy, Check, MessageSquare, Send, HeartHandshake } from 'lucide-react';
import confetti from 'canvas-confetti';

const BEGGING_TEMPLATES = [
  {
    id: 'respect-boss',
    title: '👑 Senior Man / Chairman Respect Protocol',
    subtitle: 'Best for rich uncles, generous bosses & older cousins',
    generate: (name: string, bank: string, acc: string) =>
      `Greetings my Chairman ${name || 'Sir'}! The highest cap in the territory! 🙇‍♂️\n\nI won't lie to you boss, life has currently dealt your boy a technical knockout. Sapa has seized the steering wheel of my life and the engine is smoking.\n\nIf your heart moves you with compassion, kindly bless your boy with Urgent 2K to buy fuel for life:\n🏦 Bank: ${bank || 'Opay / Kuda / GTBank'}\n🔢 Account: ${acc || '0123456789'}\n\nMay your oil never run dry! 🙏✨`
  },
  {
    id: 'garri-truth',
    title: '🥣 The Raw Trench Truth',
    subtitle: 'Best for close guys, secondary school classmates & homies',
    generate: (name: string, bank: string, acc: string) =>
      `Guy ${name || 'Bro'}, no long story. As I dey type this message so, I just finished drinking Garri with salt and water from tap.\n\nEven mosquito don bite me check my blood group say "Insufficient Plasma".\n\nAbeg save your brother with urgent 2k or even 1k make I see tomorrow morning:\n🏦 ${bank || 'Palmpay / Kuda'}\n🔢 ${acc || '8123456789'}\n\nI owe you my life and loyalty! 😭🤝`
  },
  {
    id: 'spiritual-humble',
    title: '🕊️ The Humble Faithful Plea',
    subtitle: 'Best for church fellowship members & respectable aunties',
    generate: (name: string, bank: string, acc: string) =>
      `Peace be unto you ${name || 'Ma/Sir'}. 🕊️\n\nA man that is down need fear no fall. Truly, man shall not live by bread alone, but right now bread is urgently needed. Faith is strong but stomach is singing soprano.\n\nIf the spirit leads you to be a blessing to my life this evening, please send Urgent 2k token:\n🏦 Bank: ${bank || 'Zenith / Access'}\n🔢 Acc: ${acc || '1234567890'}\n\nMay the storehouses of heaven open wide over your destiny! 🌟`
  },
  {
    id: 'poetic-emergency',
    title: '🎭 The Shakespearean Tragedy',
    subtitle: 'Comical dramatic broadcast for Twitter / WhatsApp status',
    generate: (name: string, bank: string, acc: string) =>
      `To be, or not to be hungry: that is the dilemma. 🥀\n\nNoble ${name || 'Patron of Mercy'}, behold a wounded warrior whose treasury has withered like harmattan grass. My phone battery cries at 3%, and my wallet holds only cobwebs and receipts from 2023.\n\nDispatch the sacred Urgent 2,000 relief package to:\n🏦 ${bank || 'UBA / First Bank'}\n🔢 ${acc || '2049876543'}\n\nAnd write your name into my hall of saviors! 🕯️`
  }
];

export default function Urgent2kGenerator() {
  const [recipient, setRecipient] = useState('');
  const [bankName, setBankName] = useState('');
  const [accNumber, setAccNumber] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState(BEGGING_TEMPLATES[0]);
  const [copied, setCopied] = useState(false);

  const generatedText = selectedTemplate.generate(recipient, bankName, accNumber);

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedText);
    setCopied(true);
    try {
      confetti({
        particleCount: 30,
        spread: 50,
        origin: { y: 0.8 },
      });
    } catch {}
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsAppShare = () => {
    const encoded = encodeURIComponent(generatedText);
    window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
  };

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-8">
      <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-yellow-400 flex items-center gap-1.5">
              <HeartHandshake className="w-4 h-4 text-yellow-400" /> Emergency Survival Suite
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
              URGENT 2K BROADCAST GENERATOR 📩
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Scientifically engineered begging copy-pastes designed to touch hearts and unlock bank transfers.
            </p>
          </div>
        </div>

        {/* Input Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          <div>
            <label className="text-xs font-bold text-zinc-300 mb-1 block">
              Target Helper (e.g. Chief Emeka / Sis Bola):
            </label>
            <input
              type="text"
              placeholder="Chairman of Life"
              value={recipient}
              onChange={e => setRecipient(e.target.value)}
              className="w-full px-3.5 py-2 bg-black/60 border border-zinc-700 rounded-xl text-sm text-white focus:outline-none focus:border-yellow-400 transition-colors"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-zinc-300 mb-1 block">
              Your Bank Name:
            </label>
            <input
              type="text"
              placeholder="Opay / Kuda / GTBank"
              value={bankName}
              onChange={e => setBankName(e.target.value)}
              className="w-full px-3.5 py-2 bg-black/60 border border-zinc-700 rounded-xl text-sm text-white focus:outline-none focus:border-yellow-400 transition-colors"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-zinc-300 mb-1 block">
              Your Account Number:
            </label>
            <input
              type="text"
              placeholder="7012345678"
              value={accNumber}
              onChange={e => setAccNumber(e.target.value)}
              className="w-full px-3.5 py-2 bg-black/60 border border-zinc-700 rounded-xl text-sm text-white focus:outline-none focus:border-yellow-400 transition-colors"
            />
          </div>
        </div>

        {/* Template Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 mb-6">
          {BEGGING_TEMPLATES.map(tpl => (
            <button
              key={tpl.id}
              onClick={() => setSelectedTemplate(tpl)}
              className={`p-3 rounded-xl border text-left transition-all ${
                selectedTemplate.id === tpl.id
                  ? 'bg-yellow-500/10 border-yellow-400 text-yellow-300 shadow-md'
                  : 'bg-black/40 hover:bg-zinc-800 border-zinc-800 text-zinc-400'
              }`}
            >
              <span className="text-xs font-bold block">{tpl.title}</span>
              <span className="text-[10px] text-zinc-500 mt-1 block line-clamp-1">{tpl.subtitle}</span>
            </button>
          ))}
        </div>

        {/* Generated Letter Preview */}
        <div className="relative bg-black/70 border border-zinc-800 rounded-2xl p-5 font-mono text-xs sm:text-sm text-zinc-200 whitespace-pre-wrap leading-relaxed">
          {generatedText}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-end gap-3 mt-5">
          <button
            onClick={handleCopy}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 ${
              copied
                ? 'bg-emerald-600 text-white'
                : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 hover:border-yellow-400'
            }`}
          >
            {copied ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Broadcast Copied to Clipboard!' : 'Copy Begging Message'}</span>
          </button>

          <button
            onClick={handleWhatsAppShare}
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-emerald-700/30"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Send Directly to WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
}
