// Web Audio API Synthesizer & Speech Synthesis for Broke Screamer

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// 1. SAPA SIREN ALARM (Loud sweeping emergency police/ambulance siren)
export function playSapaAlarm(duration = 1.6) {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'sawtooth';
  // Sweep frequency rapidly between 600Hz and 1200Hz
  osc.frequency.setValueAtTime(650, now);
  osc.frequency.linearRampToValueAtTime(1250, now + 0.35);
  osc.frequency.linearRampToValueAtTime(650, now + 0.7);
  osc.frequency.linearRampToValueAtTime(1300, now + 1.05);
  osc.frequency.linearRampToValueAtTime(600, now + duration);

  gain.gain.setValueAtTime(0.22, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + duration);
}

// 2. EMPTY WALLET / CASH REGISTER FAILURE
export function playEmptyCashSound() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;

  // High metallic click followed by a sad descending thud
  const osc1 = ctx.createOscillator();
  const gain1 = ctx.createGain();
  osc1.type = 'triangle';
  osc1.frequency.setValueAtTime(1600, now);
  osc1.frequency.exponentialRampToValueAtTime(300, now + 0.3);
  gain1.gain.setValueAtTime(0.3, now);
  gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.35);

  osc1.connect(gain1);
  gain1.connect(ctx.destination);
  osc1.start(now);
  osc1.stop(now + 0.35);

  // Low sad buzz
  const osc2 = ctx.createOscillator();
  const gain2 = ctx.createGain();
  osc2.type = 'sawtooth';
  osc2.frequency.setValueAtTime(110, now + 0.15);
  osc2.frequency.exponentialRampToValueAtTime(45, now + 0.6);
  gain2.gain.setValueAtTime(0.25, now + 0.15);
  gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.65);

  osc2.connect(gain2);
  gain2.connect(ctx.destination);
  osc2.start(now + 0.15);
  osc2.stop(now + 0.65);
}

// 3. WAHALA BASS BOOM (Dramatic vine boom / African movie suspense sound)
export function playWahalaBoom() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(130, now);
  osc.frequency.exponentialRampToValueAtTime(30, now + 0.8);

  gain.gain.setValueAtTime(0.5, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.85);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + 0.85);
}

// 4. NIGERIAN STADIUM VUVUZELA / EMERGENCY HORN
export function playVuvuzelaHorn() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(233, now); // B-flat approx horn note
  osc.frequency.setValueAtTime(235, now + 0.2);
  osc.frequency.linearRampToValueAtTime(228, now + 0.6);

  gain.gain.setValueAtTime(0.25, now);
  gain.gain.exponentialRampToValueAtTime(0.005, now + 0.65);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + 0.65);
}

// 5. WEB SPEECH API: SHOUT / SCREAM TEXT
export function screamText(
  text: string,
  options?: {
    pitch?: number;
    rate?: number;
    volume?: number;
    lang?: string;
    onEnd?: () => void;
  }
) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return;
  }

  // Cancel ongoing speech to scream immediately
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.pitch = options?.pitch ?? 1.4; // High pitch for screaming energy
  utterance.rate = options?.rate ?? 1.15; // Fast urgent pace
  utterance.volume = options?.volume ?? 1.0;

  if (options?.lang) {
    utterance.lang = options.lang;
  }

  // Try to pick a punchy voice if available
  const voices = window.speechSynthesis.getVoices();
  if (voices.length > 0) {
    // Look for Nigerian or British or expressive English voice
    const foundVoice =
      voices.find(v => v.lang.includes('NG') || v.lang.includes('ng')) ||
      voices.find(v => v.name.includes('Natural') || v.name.includes('Google')) ||
      voices[0];
    if (foundVoice) {
      utterance.voice = foundVoice;
    }
  }

  if (options?.onEnd) {
    utterance.onend = options.onEnd;
    utterance.onerror = options.onEnd;
  }

  window.speechSynthesis.speak(utterance);
}
