export interface Member {
  id: string;
  name: string;
  role: string;
  contributions: number;
  church: string;
}

export const Member: Member[] = [
  { id: "M1", name: "Grace", role: "Worship Leader", contributions: 12, church: "New Life" },
  { id: "M2", name: "John", role: "Song Leader", contributions: 18, church: "City Praise" },
  { id: "M3", name: "Mary", role: "Prayer Anchor", contributions: 9, church: "Grace Hall" },
  { id: "M4", name: "David", role: "Reader", contributions: 7, church: "New Life" },
  { id: "M5", name: "Amina", role: "Music", contributions: 14, church: "City Praise" }
];
