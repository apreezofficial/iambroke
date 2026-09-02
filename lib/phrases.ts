export interface BrokePhrase {
  id: string;
  language: string;
  category: 'Pidgin' | 'Yoruba' | 'Igbo' | 'Hausa' | 'Naija Slang' | 'Global';
  flag: string;
  originalText: string;
  pronunciation?: string;
  englishMeaning: string;
  ttsVoiceText: string;
  painLevel: 1 | 2 | 3 | 4 | 5;
  badge: string;
  reactions: string[];
}

export const BROKE_PHRASES: BrokePhrase[] = [
  // ================= NIGERIAN LANGUAGES =================
  {
    id: 'pidgin-core',
    language: 'Nigerian Pidgin',
    category: 'Pidgin',
    flag: '🇳🇬',
    originalText: 'I DON BROKE DIE, ABEG I NEED MONEY!',
    pronunciation: 'Eye don broke dye, ah-beg eye need muh-ney!',
    englishMeaning: 'I am completely broke, please I need money!',
    ttsVoiceText: 'I don broke die, abeg I need money! Send urgent 2k!',
    painLevel: 5,
    badge: '🚨 NAIJA PIDGIN',
    reactions: ['😩', '💸', '🙏']
  },
  {
    id: 'pidgin-sapa',
    language: 'Nigerian Pidgin (Sapa Style)',
    category: 'Pidgin',
    flag: '🇳🇬',
    originalText: 'SAPA DEY CHOKE ME, MAKE UNA SEND ME MONEY ABEG!',
    pronunciation: 'Sah-pah dey chohk mee, make oo-nah send mee muh-ney ah-beg!',
    englishMeaning: 'Sapa is choking me, please everyone send me money!',
    ttsVoiceText: 'Sapa dey choke me! Make una send me money abeg!',
    painLevel: 5,
    badge: '🔥 CODE RED SAPA',
    reactions: ['💀', '😭', '🤲']
  },
  {
    id: 'yoruba-core',
    language: 'Yoruba',
    category: 'Yoruba',
    flag: '🇳🇬',
    originalText: 'KÒ SÍ OWÓ LỌ́WỌ́ MI, MO NÍLÒ OWÓ JỌ̀WỌ́!',
    pronunciation: 'Kaw see oh-woh law-waw mee, moh nee-loh oh-woh jaw-waw!',
    englishMeaning: 'I have no money on me, I need money please!',
    ttsVoiceText: 'Ko si owo lowo mi, mo nilo owo jowo! Egbami o!',
    painLevel: 5,
    badge: '📣 YORUBA PLEA',
    reactions: ['😱', '🤲', '💔']
  },
  {
    id: 'yoruba-egbami',
    language: 'Yoruba (Emergency)',
    category: 'Yoruba',
    flag: '🇳🇬',
    originalText: 'MO TI BROKE PATAPATA, ẸGBÀ MI Ẹ BÙN MI LÓWÓ!',
    pronunciation: 'Moh tee broke pah-tah-pah-tah, eh-gbah mee eh boon mee loh-woh!',
    englishMeaning: 'I am completely broke, save me and give me money please!',
    ttsVoiceText: 'Mo ti broke patapata, egbami e bun mi lowo!',
    painLevel: 5,
    badge: '🛑 YORUBA SHOUT',
    reactions: ['🗣️', '🆘', '🏃']
  },
  {
    id: 'igbo-core',
    language: 'Igbo',
    category: 'Igbo',
    flag: '🇳🇬',
    originalText: 'ÈGÓ ADÍGHỊ M, BIKO M CHỌRỌ EGO!',
    pronunciation: 'Eh-goh ah-dee-ghee m, bee-koh m chaw-raw eh-goh!',
    englishMeaning: 'I have no money, please I need money!',
    ttsVoiceText: 'Ego adighi m, biko m choro ego! Nwanne bikonu!',
    painLevel: 5,
    badge: '🙏 IGBO PLEA',
    reactions: ['😭', '🤲', '💸']
  },
  {
    id: 'igbo-nyem',
    language: 'Igbo (Distress)',
    category: 'Igbo',
    flag: '🇳🇬',
    originalText: 'ÈGÓ AGWỤ́LA M N\'AKA, BIKO NYE M EGO!',
    pronunciation: 'Eh-goh ah-gwoo-lah m nah-kah, bee-koh nyeh m eh-goh!',
    englishMeaning: 'Money has finished in my hand, please give me money!',
    ttsVoiceText: 'Ego agwula m naka, biko nye m ego!',
    painLevel: 5,
    badge: '📉 IGBO DISTRESS',
    reactions: ['💔', '🥶', '🛑']
  },
  {
    id: 'hausa-core',
    language: 'Hausa',
    category: 'Hausa',
    flag: '🇳🇬',
    originalText: 'BA NI DA KUDI, DON ALLAH INA BUKATAR KUDI!',
    pronunciation: 'Bah nee dah koo-dee, don Ahl-lah ee-nah boo-kah-tar koo-dee!',
    englishMeaning: 'I have no money, for God\'s sake I need money please!',
    ttsVoiceText: 'Ba ni da kudi, don Allah ina bukatar kudi!',
    painLevel: 5,
    badge: '⚡ HAUSA CRY',
    reactions: ['🤲', '🌾', '🔥']
  },
  {
    id: 'hausa-taimako',
    language: 'Hausa (Emergency)',
    category: 'Hausa',
    flag: '🇳🇬',
    originalText: 'BA KUDI WALLAHI, DON ALLAH KU TAIMAKE NI DA KUDI!',
    pronunciation: 'Bah koo-dee wahl-lah-hee, don Ahl-lah koo tie-mah-keh nee dah koo-dee!',
    englishMeaning: 'I swear there is no money, please help me with money!',
    ttsVoiceText: 'Ba kudi wallahi, don Allah ku taimake ni da kudi!',
    painLevel: 5,
    badge: '🆘 HAUSA RESCUE',
    reactions: ['🌪️', '🪙', '🌵']
  },
  {
    id: 'slang-2k',
    language: 'Naija Street Slang',
    category: 'Naija Slang',
    flag: '🇳🇬',
    originalText: 'I DEY ON ZERO NAIRA, ABEG DROP URGENT 2K!',
    pronunciation: 'Eye dey on zee-roh nye-rah, ah-beg drop oor-gent two-kay!',
    englishMeaning: 'I am on zero Naira, please send urgent 2,000 Naira!',
    ttsVoiceText: 'I dey on zero naira, abeg drop urgent 2k!',
    painLevel: 5,
    badge: '💎 STREET 2K',
    reactions: ['🏧', '👑', '😭']
  },

  // ================= GLOBAL LANGUAGES (SAME SENTENCE) =================
  {
    id: 'global-fr',
    language: 'French',
    category: 'Global',
    flag: '🇫🇷',
    originalText: 'JE SUIS FAUCHÉ, J\'AI BESOIN D\'ARGENT S\'IL VOUS PLAÎT !',
    pronunciation: 'Zhuh swee foh-shay, zhay buh-zwan dar-zhon seel voo pleh!',
    englishMeaning: 'I am broke, I need money please!',
    ttsVoiceText: 'Je suis fauché, j ai besoin d argent s il vous plaît !',
    painLevel: 4,
    badge: '🥖 FRENCH',
    reactions: ['🥐', '🍷', '😢']
  },
  {
    id: 'global-es',
    language: 'Spanish',
    category: 'Global',
    flag: '🇪🇸',
    originalText: '¡ESTOY QUEBRADO, NECESITO DINERO POR FAVOR!',
    pronunciation: 'Eh-stoy keh-brah-doh, neh-seh-see-toh dee-neh-roh por fah-vor!',
    englishMeaning: 'I am broke, I need money please!',
    ttsVoiceText: 'Estoy quebrado, necesito dinero por favor!',
    painLevel: 5,
    badge: '💃 SPANISH',
    reactions: ['🌮', '💃', '💀']
  },
  {
    id: 'global-de',
    language: 'German',
    category: 'Global',
    flag: '🇩🇪',
    originalText: 'ICH BIN PLEITE, ICH BRAUCHE BITTE GELD!',
    pronunciation: 'Ikh bin ply-teh, ikh brow-kheh bit-teh gelt!',
    englishMeaning: 'I am broke, I need money please!',
    ttsVoiceText: 'Ich bin pleite, ich brauche bitte Geld!',
    painLevel: 4,
    badge: '🥨 GERMAN',
    reactions: ['🥨', '🍺', '😱']
  },
  {
    id: 'global-it',
    language: 'Italian',
    category: 'Global',
    flag: '🇮🇹',
    originalText: 'SONO AL VERDE, HO BISOGNO DI SOLDI PER FAVORE!',
    pronunciation: 'Soh-noh ahl vehr-deh, oh bee-zohn-yoh dee sohl-dee pehr fah-voh-reh!',
    englishMeaning: 'I am broke, I need money please!',
    ttsVoiceText: 'Sono al verde, ho bisogno di soldi per favore!',
    painLevel: 4,
    badge: '🍕 ITALIAN',
    reactions: ['🤌', '🍕', '🇮🇹']
  },
  {
    id: 'global-pt',
    language: 'Portuguese',
    category: 'Global',
    flag: '🇧🇷',
    originalText: 'ESTOU QUEBRADO, PRECISO DE DINHEIRO POR FAVOR!',
    pronunciation: 'Eh-stoh keh-brah-doo, preh-see-zoh jee jee-nyay-roo poor fah-voor!',
    englishMeaning: 'I am broke, I need money please!',
    ttsVoiceText: 'Estou quebrado, preciso de dinheiro por favor!',
    painLevel: 4,
    badge: '🏖️ PORTUGUESE',
    reactions: ['🌴', '⚽', '💸']
  },
  {
    id: 'global-jp',
    language: 'Japanese',
    category: 'Global',
    flag: '🇯🇵',
    originalText: 'お金がありません、お金をください、お願いします！',
    pronunciation: 'Okane ga arimasen, okane o kudasai, onegaishimasu!',
    englishMeaning: 'I have no money, please give me money!',
    ttsVoiceText: 'Okane ga arimasen, okane o kudasai, onegaishimasu!',
    painLevel: 5,
    badge: '🍙 JAPANESE',
    reactions: ['⛩️', '🍙', '😭']
  },
  {
    id: 'global-kr',
    language: 'Korean',
    category: 'Global',
    flag: '🇰🇷',
    originalText: '나 완전 거지야, 제발 돈 좀 줘!',
    pronunciation: 'Na wanjeon geojiya, jebal don jom jwo!',
    englishMeaning: 'I am a total beggar, please give me some money!',
    ttsVoiceText: 'Na wanjeon geojiya, jebal don jom jwo!',
    painLevel: 5,
    badge: '🍜 KOREAN',
    reactions: ['🥢', '🍜', '🚨']
  },
  {
    id: 'global-ar',
    language: 'Arabic',
    category: 'Global',
    flag: '🇸🇦',
    originalText: 'أَنَا مُفْلِس، أَحْتَاجُ إِلَى نُقُود مِنْ فَضْلِك!',
    pronunciation: 'Ana muflis, ahtaju ila nuqud min fadlik!',
    englishMeaning: 'I am broke, I need money please!',
    ttsVoiceText: 'Ana muflis, ahtaju ila nuqud min fadlik!',
    painLevel: 5,
    badge: '🐪 ARABIC',
    reactions: ['🌴', '🏜️', '🤲']
  },
  {
    id: 'global-sw',
    language: 'Swahili',
    category: 'Global',
    flag: '🇰🇪',
    originalText: 'SINA PESA KABISA, NINAHITAJI PESA TAFADHALI!',
    pronunciation: 'See-nah peh-sah kah-bee-sah, nee-nah-hee-tah-jee peh-sah tah-fah-dhah-lee!',
    englishMeaning: 'I have no money at all, I need money please!',
    ttsVoiceText: 'Sina pesa kabisa, ninahitaji pesa tafadhali!',
    painLevel: 4,
    badge: '🦁 SWAHILI',
    reactions: ['🌍', '👝', '🙏']
  },
  {
    id: 'global-ru',
    language: 'Russian',
    category: 'Global',
    flag: '🇷🇺',
    originalText: 'Я НА МЕЛЕ, ПОЖАЛУЙСТА, МНЕ НУЖНЫ ДЕНЬГИ!',
    pronunciation: 'Ya na mele, pozhaluysta, mne nuzhny den\'gi!',
    englishMeaning: 'I am broke, please, I need money!',
    ttsVoiceText: 'Ya na mele, pozhaluysta, mne nuzhny dengi!',
    painLevel: 4,
    badge: '❄️ RUSSIAN',
    reactions: ['🪆', '❄️', '🪙']
  },
  {
    id: 'global-zh',
    language: 'Chinese (Mandarin)',
    category: 'Global',
    flag: '🇨🇳',
    originalText: '我破产了，拜托请给我钱！',
    pronunciation: 'Wǒ pòchǎn le, bàituō qǐng gěi wǒ qián!',
    englishMeaning: 'I am broke, please give me money!',
    ttsVoiceText: 'Wo po chan le, bai tuo qing gei wo qian!',
    painLevel: 5,
    badge: '🏮 MANDARIN',
    reactions: ['🥡', '🧧', '😭']
  }
];
