/** Family data for the Family Learning Hub app. */
export interface Member {
  id: string;
  name: string;
  role: string;
  contributions: number;
  church: string;
  emoji: string;
}

export const Member: Member[] = [
  { id: 'M1', name: 'Grace', role: 'Worship Leader', contributions: 12, church: 'New Life', emoji: '🌸' },
  { id: 'M2', name: 'John', role: 'Song Leader', contributions: 18, church: 'City Praise', emoji: '🎸' },
  { id: 'M3', name: 'Mary', role: 'Prayer Anchor', contributions: 9, church: 'Grace Hall', emoji: '✝️' },
  { id: 'M4', name: 'David', role: 'Reader', contributions: 7, church: 'New Life', emoji: '📖' },
  { id: 'M5', name: 'Amina', role: 'Music', contributions: 14, church: 'City Praise', emoji: '🎶' },
  { id: 'M6', name: 'Eli', role: 'Apprentice', contributions: 3, church: 'New Life', emoji: '👶' },
];

export interface Worship {
  id: string;
  title: string;
  date: string;
  verses: string[];
  focus: string;
}

export const Worship: Worship[] = [
  { id: 'W1', title: 'Family Devotion IV', date: '2025-06-08', verses: ['Psalm 23', 'Psalm 100'], focus: 'Gratitude' },
  { id: 'W2', title: 'Family Devotion V', date: '2025-06-07', verses: ['Psalm 150', 'John 3:16'], focus: 'Praise' },
  { id: 'W3', title: 'Family Devotion VI', date: '2025-06-06', verses: ['Proverbs 22', 'Colossians 3:20'], focus: 'Wisdom' },
];

export interface SongQueue {
  id: string;
  song: string;
  church: string;
  meter: string;
  start: number;
}

export const SongQueue: SongQueue[] = [
  { id: 'S1', song: 'Great Is Thy Faithfulness', church: 'New Life', meter: 'TTBB', start: 10 },
  { id: 'S2', song: 'Amazing Grace', church: 'City Praise', meter: 'SATB', start: 25 },
  { id: 'S3', song: 'How Great Thou Art', church: 'Grace Hall', meter: 'TTBB', start: 40 },
  { id: 'S4', song: 'Be Thou My Vision', church: 'New Life', meter: 'SATB', start: 55 },
  { id: 'S5', song: 'Holy, Holy, Holy', church: 'Grace Hall', meter: 'SATB', start: 70 },
];

export interface Prayer {
  id: string;
  text: string;
  by: string;
  answered: boolean;
  date: string;
}

export const PrayerList: Prayer[] = [
  { id: 'P1', text: 'Pray for David\'s faith during the exam.', by: 'Grace', answered: false, date: '2025-06-07' },
  { id: 'P2', text: 'Pray for the mission trip funds.', by: 'John', answered: false, date: '2025-06-07' },
  { id: 'P3', text: 'Pray for family healing.', by: 'Mary', answered: true, date: '2025-06-06' },
  { id: 'P4', text: 'Pray for wisdom in education.', by: 'David', answered: false, date: '2025-06-08' },
  { id: 'P5', text: 'Pray for the new believers.', by: 'Amina', answered: false, date: '2025-06-08' },
];

export const VerseOfTheDay = {
  text: 'Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.',
  reference: 'Proverbs 3:5-6',
  emoji: '🕯️',
};
