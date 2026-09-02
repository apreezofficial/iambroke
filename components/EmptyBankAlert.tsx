'use client';

import React, { useState } from 'react';
import { CreditCard, Eye, EyeOff, ArrowDownLeft, ArrowUpRight, AlertCircle, RefreshCw } from 'lucide-react';
import { playEmptyCashSound, playWahalaBoom, screamText } from '@/lib/soundEffects';
import confetti from 'canvas-confetti';

export default function EmptyBankAlert() {
  const [showBalance, setShowBalance] = useState(true);
  const [balance, setBalance] = useState(1.14);
  const [transactions, setTransactions] = useState([
    { id: 1, title: 'SMS Alert for Being Broke', amount: -4.00, date: 'Today, 2:14 PM', icon: 'sms' },
    { id: 2, title: 'Monthly Debit Card Humiliation Fee', amount: -53.75, date: 'Yesterday', icon: 'fee' },
    { id: 3, title: 'Transfer from Generous Uncle (Failed/Reversed)', amount: 2000.00, status: 'REVERSED', date: '2 days ago', icon: 'rev' },
    { id: 4, title: 'Bole & Fish Emergency Purchase', amount: -1500.00, date: '3 days ago', icon: 'food' },
  ]);

  const simulateUrgentCredit = () => {
    // Give 2k
    setBalance(2001.14);
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {}

    // But after 2.5 seconds, auto debit it!
    setTimeout(() => {
      playWahalaBoom();
      playEmptyCashSound();
      setBalance(0.85);
      screamText("Debit alert! Sapa has reclaimed the urgent 2k!", { pitch: 1.3, rate: 1.2 });
      setTransactions(prev => [
        { id: Date.now(), title: 'Debit: Sapa Emergency Repayment', amount: -2000.29, date: 'Just now', icon: 'fee' },
        ...prev
      ]);
    }, 2800);
  };

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-8">
      <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-red-400 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-red-500" /> Parody Fintech Portal
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
              KUDA-LESS / OPAY-NOTHING WALLET 💳
            </h2>
          </div>
          <button
            onClick={simulateUrgentCredit}
            className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-emerald-700/30"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Simulate Receiving Urgent 2K</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Virtual Empty Debit Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl bg-gradient-to-tr from-zinc-950 via-red-950 to-neutral-900 border border-red-500/30 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-[10px] tracking-widest font-mono uppercase text-red-400 font-bold block">
                  BROKE BANK OF NIGERIA
                </span>
                <span className="text-xs text-zinc-400">Platinum Sapa Card</span>
              </div>
              <CreditCard className="w-8 h-8 text-red-400" />
            </div>

            <div className="my-4">
              <div className="flex items-center gap-2 text-zinc-400 text-xs mb-1">
                <span>Available Ledger Balance:</span>
                <button
                  onClick={() => setShowBalance(!showBalance)}
                  className="hover:text-white"
                >
                  {showBalance ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="text-3xl sm:text-4xl font-mono font-black text-yellow-300">
                {showBalance ? `₦${balance.toFixed(2)}` : '₦ • • • •'}
              </div>
              <span className="text-[10px] text-red-400 font-mono block mt-1">
                ⚠️ Account status: Crying for rescue
              </span>
            </div>

            <div className="flex justify-between items-end pt-4 border-t border-zinc-800 text-xs text-zinc-400 font-mono">
              <div>
                <span className="text-[9px] uppercase tracking-wider block text-zinc-500">CARD HOLDER</span>
                <span className="text-zinc-200 font-bold">VICTIM OF SAPA</span>
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-wider block text-zinc-500">EXPIRES</span>
                <span className="text-zinc-200 font-bold">NEVER/FOREVER</span>
              </div>
            </div>
          </div>

          {/* Transaction History */}
          <div className="lg:col-span-7 bg-black/40 border border-zinc-800 rounded-2xl p-5 flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-black uppercase tracking-wider text-zinc-400 mb-3">
                Recent Humiliations (Transactions)
              </h3>
              <div className="space-y-2.5">
                {transactions.map(item => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/80 border border-zinc-800/80 text-xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                        item.amount > 0
                          ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-800'
                          : 'bg-red-950/60 text-red-400 border border-red-800'
                      }`}>
                        {item.amount > 0 ? (
                          <ArrowDownLeft className="w-3.5 h-3.5" />
                        ) : (
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        )}
                      </div>
                      <div>
                        <span className="font-bold text-zinc-200 block">{item.title}</span>
                        <span className="text-[10px] text-zinc-500">{item.date}</span>
                      </div>
                    </div>

                    <div className="text-right font-mono">
                      <span className={`font-bold block ${
                        item.amount > 0 ? 'text-emerald-400' : 'text-red-400'
                      }`}>
                        {item.amount > 0 ? `+₦${item.amount.toFixed(2)}` : `-₦${Math.abs(item.amount).toFixed(2)}`}
                      </span>
                      {item.status && (
                        <span className="text-[9px] uppercase font-bold text-yellow-400">
                          {item.status}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[11px] text-zinc-500 mt-4 text-center italic">
              * Any resemblance to actual Nigerian banking apps is purely due to shared trauma.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
