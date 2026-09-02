export interface BrokePhrase {
  id: string;
  language: string;
  category: 'Pidgin' | 'Yoruba' | 'Igbo' | 'Hausa' | 'Naija Slang' | 'Global';
  flag: string;
  originalText: string;
  pronunciation?: string;
  englishMeaning: string;
  ttsVoiceText: string;
  painLevel: 1 | 2 | 3 | 4 | 5; // 5 is maximum Sapa
  badge: string;
  reactions: string[];
}

export const BROKE_PHRASES: BrokePhrase[] = [
  // ================= NIGERIAN PIDGIN =================
  {
    id: 'pidgin-1',
    language: 'Nigerian Pidgin',
    category: 'Pidgin',
    flag: '🇳🇬',
    originalText: 'SAPA DEY CHOKE ME OOO!',
    pronunciation: 'Sah-pah dey chohk mee ohhh!',
    englishMeaning: 'Extreme poverty is physically suffocating me!',
    ttsVoiceText: 'Sapa dey choke me oh! Chai!',
    painLevel: 5,
    badge: '🚨 CODE RED SAPA',
    reactions: ['😩', '🙆‍♂️', '💸', '⚰️']
  },
  {
    id: 'pidgin-2',
    language: 'Nigerian Pidgin',
    category: 'Pidgin',
    flag: '🇳🇬',
    originalText: 'I DON BROKE DIE BABA!',
    pronunciation: 'Eye don broke dye bah-bah!',
    englishMeaning: 'I am broken to the point of extinction, my brother!',
    ttsVoiceText: 'I don broke die baba! Help me oh!',
    painLevel: 5,
    badge: '💀 TERMINAL BROKE',
    reactions: ['💀', '😭', '🪦']
  },
  {
    id: 'pidgin-3',
    language: 'Nigerian Pidgin',
    category: 'Pidgin',
    flag: '🇳🇬',
    originalText: 'CUT SOAP FOR ME NA!',
    pronunciation: 'Kuht sohp fohr mee nah!',
    englishMeaning: 'Share the secret ritual soap to your wealth, I beg you!',
    ttsVoiceText: 'Cut soap for me na! Chairman abeg!',
    painLevel: 4,
    badge: '🧼 SOAP SEEKER',
    reactions: ['🧼', '🛁', '🙏']
  },
  {
    id: 'pidgin-4',
    language: 'Nigerian Pidgin',
    category: 'Pidgin',
    flag: '🇳🇬',
    originalText: 'MY ACCOUNT BALANCE NA ₦4.20!',
    pronunciation: 'My ah-count bah-lahns na four naira twenty kobo!',
    englishMeaning: 'I have four Naira and twenty kobo left in this cruel economy.',
    ttsVoiceText: 'My account balance na four naira and twenty kobo! Even bank dey mock me!',
    painLevel: 5,
    badge: '📉 NEGATIVE WEALTH',
    reactions: ['📉', '💳', '🤦']
  },
  {
    id: 'pidgin-5',
    language: 'Nigerian Pidgin',
    category: 'Pidgin',
    flag: '🇳🇬',
    originalText: 'MONEY DON PACK LOAD COMOT!',
    pronunciation: 'Muh-ney don pack lohd coh-moht!',
    englishMeaning: 'All money has packed its bags and migrated from my life.',
    ttsVoiceText: 'Money don pack load comot my life! Otilo!',
    painLevel: 4,
    badge: '🧳 JAPA CURRENCY',
    reactions: ['🏃‍♂️', '💨', '✈️']
  },

  // ================= YORUBA =================
  {
    id: 'yoruba-1',
    language: 'Yoruba',
    category: 'Yoruba',
    flag: '🇳🇬',
    originalText: 'KÒ SÍ OWÓ OOO! ẸGBÀ MI!',
    pronunciation: 'Kaw see oh-woh oh-oh! Eh-gbah mee!',
    englishMeaning: 'There is zero money! People of the world, rescue me!',
    ttsVoiceText: 'Ko si owo ooo! Egbami o! Mo ti broke!',
    painLevel: 5,
    badge: '📣 NATIONAL DISTRESS',
    reactions: ['🗣️', '😱', '🏃‍♀️']
  },
  {
    id: 'yoruba-2',
    language: 'Yoruba',
    category: 'Yoruba',
    flag: '🇳🇬',
    originalText: 'OWÓ TI TÁN PÁTAPÁTA!',
    pronunciation: 'Oh-woh tee tahn pah-tah-pah-tah!',
    englishMeaning: 'Money has completely and irrecoverably exhausted itself!',
    ttsVoiceText: 'Owo ti tan patapata! Nothing remains!',
    painLevel: 4,
    badge: '🛑 ZERO NAIRA',
    reactions: ['🕳️', '🍂', '💔']
  },
  {
    id: 'yoruba-3',
    language: 'Yoruba',
    category: 'Yoruba',
    flag: '🇳🇬',
    originalText: 'EBÍ Ń PA MÍ OOO!',
    pronunciation: 'Eh-bee n pah mee oh-oh!',
    englishMeaning: 'Hunger is actively assassinating me!',
    ttsVoiceText: 'Ebi n pami ooo! Send urgent two k!',
    painLevel: 5,
    badge: '🥣 GARRI PROTOCOL',
    reactions: ['🍲', '😵', '🪑']
  },
  {
    id: 'yoruba-4',
    language: 'Yoruba',
    category: 'Yoruba',
    flag: '🇳🇬',
    originalText: 'A TI JẸ GBÈSÈ TI KÒ LÓRÍ!',
    pronunciation: 'Ah tee jeh gbeh-seh tee koh loh-ree!',
    englishMeaning: 'We have accumulated bottomless debt!',
    ttsVoiceText: 'A ti je gbese ti ko lori! Loan apps are calling my ancestors!',
    painLevel: 5,
    badge: '📱 LOAN APP HOSTAGE',
    reactions: ['📞', '🚨', '🏃']
  },

  // ================= IGBO =================
  {
    id: 'igbo-1',
    language: 'Igbo',
    category: 'Igbo',
    flag: '🇳🇬',
    originalText: 'ÈGÓ ADÍGHỊ KWA! NWANNE BIKONỤ!',
    pronunciation: 'Eh-goh ah-dee-ghee kwah! Nwah-nneh bee-koh-noo!',
    englishMeaning: 'Money simply does not exist! My brethren, I plead with you!',
    ttsVoiceText: 'Ego adighi kwa! Nwanne bikonu! Nyem ego!',
    painLevel: 5,
    badge: '🙏 BROTHERLY PLEA',
    reactions: ['🤲', '😭', '💔']
  },
  {
    id: 'igbo-2',
    language: 'Igbo',
    category: 'Igbo',
    flag: '🇳🇬',
    originalText: 'ÈGÓ AGWỤ́LA PATAPATA!',
    pronunciation: 'Eh-goh ah-gwoo-lah pah-tah-pah-tah!',
    englishMeaning: 'Funds are totally depleted to the soil level!',
    ttsVoiceText: 'Ego agwula patapata! I am flat!',
    painLevel: 4,
    badge: '📉 FLATLINE WALLET',
    reactions: ['🌾', '🥶', '🛑']
  },
  {
    id: 'igbo-3',
    language: 'Igbo',
    category: 'Igbo',
    flag: '🇳🇬',
    originalText: 'ÁGỤ́Ụ́ NA-AGỤ M KPOKPO!',
    pronunciation: 'Ah-goo nah ah-goo m kpoh-kpoh!',
    englishMeaning: 'Severe financial hunger is ravaging my spirit!',
    ttsVoiceText: 'Aguu na-agu m kpokpo! Who will buy me gala?',
    painLevel: 5,
    badge: '🍗 GALA EMERGENCY',
    reactions: ['🌭', '🧃', '🫠']
  },
  {
    id: 'igbo-4',
    language: 'Igbo',
    category: 'Igbo',
    flag: '🇳🇬',
    originalText: 'ONYE GA-ENYEM URGENT 2K?!',
    pronunciation: 'Oh-nyeh gah eh-nyehm oor-gent two-kay?!',
    englishMeaning: 'Who amongst you noble souls will dispatch urgent 2,000 Naira?!',
    ttsVoiceText: 'Onye ga-enyem urgent two k? Just two thousand naira!',
    painLevel: 4,
    badge: '💸 2K SEARCH PARTY',
    reactions: ['👀', '🏧', '📩']
  },

  // ================= HAUSA =================
  {
    id: 'hausa-1',
    language: 'Hausa',
    category: 'Hausa',
    flag: '🇳🇬',
    originalText: 'BA KUDI WALLAHI TALLAHI!',
    pronunciation: 'Bah koo-dee wahl-lah-hee tahl-lah-hee!',
    englishMeaning: 'By the Almighty, I swear there is completely no money!',
    ttsVoiceText: 'Ba kudi wallahi tallahi! Zero naira!',
    painLevel: 5,
    badge: '⚡ SOLEMN SWEAR',
    reactions: ['🤲', '🌾', '🔥']
  },
  {
    id: 'hausa-2',
    language: 'Hausa',
    category: 'Hausa',
    flag: '🇳🇬',
    originalText: 'KUDI YA KARE GABAGADÍ!',
    pronunciation: 'Koo-dee yah kah-reh gah-bah-gah-dee!',
    englishMeaning: 'The money has finished totally without remnant!',
    ttsVoiceText: 'Kudi ya kare gabagadi! Wayyo Allah!',
    painLevel: 4,
    badge: '🏜️ DESERT PURSE',
    reactions: ['🌪️', '🪙', '🌵']
  },
  {
    id: 'hausa-3',
    language: 'Hausa',
    category: 'Hausa',
    flag: '🇳🇬',
    originalText: 'TALAUCI NA KONA NI!',
    pronunciation: 'Tah-lah-oo-chee nah koh-nah nee!',
    englishMeaning: 'Poverty is literally scorching my very skin!',
    ttsVoiceText: 'Talauci na kona ni! Help your brother!',
    painLevel: 5,
    badge: '🌡️ 100°C SAPA',
    reactions: ['🔥', '🥵', '🚒']
  },

  // ================= NIGERIAN STREET SLANG =================
  {
    id: 'slang-1',
    language: 'Naija Street Slang',
    category: 'Naija Slang',
    flag: '🇳🇬',
    originalText: 'URGENT 2K DON BECOME LUXURY!',
    pronunciation: 'Urgent two-kay don bee-come luhg-zhuh-ree!',
    englishMeaning: 'Even two thousand Naira has transformed into impossible generational wealth.',
    ttsVoiceText: 'Urgent 2k don become luxury! We are in the mud!',
    painLevel: 5,
    badge: '💎 BOURGEOISIE 2K',
    reactions: ['👑', '😭', '🧎']
  },
  {
    id: 'slang-2',
    language: 'Naija Street Slang',
    category: 'Naija Slang',
    flag: '🇳🇬',
    originalText: 'GARRI WATER IS MY STEADY VALENTINE!',
    pronunciation: 'Gah-rree wah-ter ees my steh-dee vah-len-tyne!',
    englishMeaning: 'Cassava flakes in cold water is my only faithful companion.',
    ttsVoiceText: 'Garri water is my steady valentine! Without groundnut!',
    painLevel: 4,
    badge: '🥣 DRIP DRY',
    reactions: ['🥜', '💧', '🥣']
  },
  {
    id: 'slang-3',
    language: 'Naija Street Slang',
    category: 'Naija Slang',
    flag: '🇳🇬',
    originalText: 'ATM SAID "INSUFFICIENT FUNDS" WITH ATTITUDE!',
    pronunciation: 'ATM say in-suh-fee-shent fuhnds!',
    englishMeaning: 'The cash machine insulted my bloodline and rejected the card.',
    ttsVoiceText: 'The ATM machine looked at me and laughed! Insufficient funds with attitude!',
    painLevel: 5,
    badge: '🏧 DISRESPECTFUL ATM',
    reactions: ['🏧', '❌', '😤']
  },
  {
    id: 'slang-4',
    language: 'Naija Street Slang',
    category: 'Naija Slang',
    flag: '🇳🇬',
    originalText: 'OTILO! WE HAVE ENTERED VOICE MAIL!',
    pronunciation: 'Oh-tee-loh! Wee haf ehn-tah voice mail!',
    englishMeaning: 'It is gone forever! Prosperity is currently unavailable.',
    ttsVoiceText: 'Otilo! The money has departed! We entered voice mail!',
    painLevel: 4,
    badge: '📴 NETWORK OUTAGE',
    reactions: ['📡', '📴', '🏃‍♂️']
  },

  // ================= GLOBAL SCREAMS =================
  {
    id: 'global-fr',
    language: 'French',
    category: 'Global',
    flag: '🇫🇷',
    originalText: 'JE SUIS COMPLÈTEMENT FAUCHÉ !',
    pronunciation: 'Zhuh swee com-pleht-mah foh-shay!',
    englishMeaning: 'I am completely broke / mowed down!',
    ttsVoiceText: 'Je suis complètement fauché ! S il vous plaît aidez-moi !',
    painLevel: 4,
    badge: '🥖 BROKE A LA BAGUETTE',
    reactions: ['🥐', '🍷', '😢']
  },
  {
    id: 'global-es',
    language: 'Spanish',
    category: 'Global',
    flag: '🇪🇸',
    originalText: '¡ESTOY EN LA RUINA TOTAL!',
    pronunciation: 'Eh-stoy ehn lah roo-ee-nah toh-tahl!',
    englishMeaning: 'I am in total utter ruin and bankruptcy!',
    ttsVoiceText: 'Estoy en la ruina total! No tengo un centavo!',
    painLevel: 5,
    badge: '💃 RUINA FIESTA',
    reactions: ['🌮', '💃', '💀']
  },
  {
    id: 'global-jp',
    language: 'Japanese',
    category: 'Global',
    flag: '🇯🇵',
    originalText: 'マジで金欠！お金がない！',
    pronunciation: 'Maji de kinketsu! Okane ga nai!',
    englishMeaning: 'Seriously out of cash! Absolutely zero money!',
    ttsVoiceText: 'Maji de kinketsu! Okane ga nai! Tasukete kudasai!',
    painLevel: 4,
    badge: '🍙 ZERO YEN NINJA',
    reactions: ['⛩️', '🍙', '😭']
  },
  {
    id: 'global-de',
    language: 'German',
    category: 'Global',
    flag: '🇩🇪',
    originalText: 'ICH BIN TOTAL PLEITE! HILFE!',
    pronunciation: 'Ikh bin toh-tahl ply-teh! Hil-feh!',
    englishMeaning: 'I am totally broke! Immediate assistance required!',
    ttsVoiceText: 'Ich bin total pleite! Hilfe!',
    painLevel: 4,
    badge: '🥨 PRETZEL PENNIES',
    reactions: ['🥨', '🍺', '😱']
  },
  {
    id: 'global-it',
    language: 'Italian',
    category: 'Global',
    flag: '🇮🇹',
    originalText: 'SONO AL VERDE DISPERATO!',
    pronunciation: 'Soh-noh ahl vehr-deh dees-peh-rah-toh!',
    englishMeaning: 'I am down to the green (completely penniless and desperate)!',
    ttsVoiceText: 'Sono al verde disperato! Mamma mia!',
    painLevel: 4,
    badge: '🍕 ZERO EUROS',
    reactions: ['🤌', '🍕', '🇮🇹']
  },
  {
    id: 'global-pt',
    language: 'Portuguese / Brazilian',
    category: 'Global',
    flag: '🇧🇷',
    originalText: 'TÔ QUEBRADO DEMAIS! SOCORRO!',
    pronunciation: 'Toh keh-brah-doo deh-my-ees! Soh-cohr-roo!',
    englishMeaning: 'I am excessively shattered/broke! Send emergency help!',
    ttsVoiceText: 'Tô quebrado demais! Socorro!',
    painLevel: 4,
    badge: '🏖️ SAMBA DEBT',
    reactions: ['🌴', '⚽', '💸']
  },
  {
    id: 'global-kr',
    language: 'Korean',
    category: 'Global',
    flag: '🇰🇷',
    originalText: '나 완전 거지 됐어! 살려줘!',
    pronunciation: 'Na wanjeon geoji dwaesseo! Sallyeojwo!',
    englishMeaning: 'I have become a complete beggar! Save my life!',
    ttsVoiceText: 'Na wanjeon geoji dwaesseo! Sallyeojwo!',
    painLevel: 5,
    badge: '🍜 RAMEN DIET',
    reactions: ['🥢', '🍜', '🚨']
  },
  {
    id: 'global-ar',
    language: 'Arabic',
    category: 'Global',
    flag: '🇸🇦',
    originalText: 'أَنَا مُفْلِسٌ تَمَاماً! سَاعِدُونِي!',
    pronunciation: 'Ana maflis tamaaman! Sa\'iduni!',
    englishMeaning: 'I am totally bankrupt! Come to my aid!',
    ttsVoiceText: 'Ana maflis tamaaman! Sa\'iduni!',
    painLevel: 5,
    badge: '🐪 DESERT VAULT',
    reactions: ['🌴', '🏜️', '🤲']
  },
];
