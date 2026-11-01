import os
path = r'C:\Users\ikste\family-worship-interactive\src\App.ts'
content = r'''import * as data from './data/mock';
import { Card, Badge, Stat, Empty, Button, AppShell, Flashcard, QuizCard, BingoCard, MemoryCard } from './components/ui';
import { getAllFlashcards, getAllQuizQuestions, cardDecks, habits } from './games/cards';
import { formatTime } from './games/demo';

const members = data.Member as any[];
const worship = data.Worship as any[];
const queue = data.SongQueue as any[];
const prayers = data.PrayerList as any[];
const verse = data.VerseOfTheDay;

export function App(): HTMLElement {
  const root = document.createElement('div');
  root.className = 'app-shell';

  const tabs = [
    { id: 'worship', label: 'Worship', icon: '🙏' },
    { id: 'songs', label: 'Songs', icon: '🎵' },
    { id: 'members', label: 'Members', icon: '👨‍👩‍👧‍👦' },
    { id: 'games', label: 'Games & Learning', icon: '🧠' },
    { id: 'habits', label: 'Habits', icon: '🔥' },
  ];
  const tabBar = document.createElement('div');
  tabBar.className = 'tw-flex tw-gap-1 tw-border tw-border-slate-200 tw-rounded-xl tw-bg-white tw-p-1 tw-shadow-sm tw-mb-4';
  for (const t of tabs) {
    const b = document.createElement('button');
    b.className = 'tw-flex tw-flex-1 tw-items-center tw-justify-center tw-gap-2 tw-text-sm tw-font-medium tw-rounded-md tw-px-3 tw-py-2 tw-transition tw-duration-200 tw-text-left';
    b.innerHTML = `<span class="tw-text-base">${t.icon}</span>${t.label}`;
    b.dataset.tab = t.id;
    b.setAttribute('aria-label', t.label);
    tabBar.appendChild(b);
  }
  root.appendChild(tabBar);

  const content = document.createElement('div');
  content.className = 'tw-grid tw-grid-cols-1 lg:tw-grid-cols-3 tw-gap-4';
  root.appendChild(content);

  const renderWorship = (): string => {
    const stats = [
      ['Family members', members.length.toString(), ''],
      ['Active gatherings', worship.length.toString(), ''],
      ['Song queue items', queue.length.toString(), ''],
    ];
    const statsHtml = stats.map((s) =>
      `<Card title="${s[0]}"><div class="tw-text-2xl tw-font-bold tw-text-slate-800">${s[1]}</div><div class="tw-text-xs tw-text-slate-500">${s[2]}</div></Card>`).join('');
    const flow = [
      ['Opening prayer', '0:00'], ['Worship songs', '0:20'], ['Scripture reading', '0:40'], ['Offering', '0:55'], ['Prayer & blessing', '1:05']
    ];
    const flowHtml = flow.map(([t, d]) =>
      `<div class="tw-flex tw-items-center tw-gap-2 tw-text-sm tw-text-slate-600"><span class="tw-h-2 tw-h-2 tw-rounded-full tw-bg-violet-500"></span>${t}<span class="tw-text-xs tw-text-slate-400">${d}</span></div>`).join('');
    const memberBox = members.map(m =>
      `<div class="tw-flex tw-items-center tw-gap-2 tw-border tw-border-slate-200 tw-rounded-md tw-px-3 tw-py-2 tw-bg-white tw-shadow-sm tw-hover:shadow-md tw-transition"><span class="tw-text-sm tw-font-semibold tw-text-slate-800">${m.emoji} ${m.name}</span><span class="tw-text-xs tw-text-slate-500">${m.role}</span><span class="tw-text-xs tw-text-slate-500">${m.contributions} contrib</span></div>`).join('');
    const prayerHtml = prayers.map(p =>
      `<div class="tw-flex tw-items-start tw-gap-2 tw-px-3 tw-py-2 tw-border-b tw-border-slate-100 tw-bg-white tw-shadow-sm tw-rounded-lg tw-transition"><span class="tw-text-xs tw-text-slate-400 tw-self-start">${p.date}</span><span class="tw-text-sm tw-text-slate-700 tw-w-3/4">${p.text}</span><Badge label="${p.answered ? 'Answered' : 'Prayer'}"/></div>`).join('');
    const queueHtml = queue.map(q =>
      `<div class="tw-flex tw-items-center tw-gap-3 tw-px-2 tw-py-1.5 tw-border-b tw-border-slate-100 tw-bg-white tw-shadow-sm tw-transition"><span class="tw-text-xs tw-text-slate-500">${q.song}</span><span class="tw-text-xs tw-text-slate-500 tw-w-24">${q.church}</span><Button label="Play" size="sm" variant="success" icon="▶"/></div>`).join('');
    return `
      <div class="lg:tw-span-2">
        <div class="tw-flex tw-items-center tw-gap-3 tw-mb-3"><span class="tw-font-semibold tw-text-slate-800">Total family activity</span><span id="stat-contrib" class="tw-text-lg tw-font-bold tw-text-violet-600">${members.reduce((a, m) => a + m.contributions, 0)}</span></div>
        <div class="tw-grid tw-grid-cols-1 tw-gap-3">${statsHtml}</div>
        <Card title="Worship Service Flow" desc="Family worship service timeline"><div class="tw-mt-3">${flowHtml}</div></Card>
        <Card title="Prayer Requests" desc="Share prayers for the family"><div class="tw-mt-2 tw-space-y-2">${prayerHtml}</div><Button label="Add prayer" size="sm" variant="secondary" icon="+"/></Card>
      </div>
      <div class="lg:tw-w-80">
        <Card title="Worship Songs" desc="Song queue"><div class="tw-max-h-64 tw-overflow-y-auto tw-text-sm tw-space-y-1">${queueHtml}</div></Card>
        <Card title="Family Roster" desc="Contributions on stage"><div class="tw-max-h-64 tw-overflow-y-auto tw-text-sm tw-space-y-1">${memberBox}</div></Card>
      </div>
    `;
  };

  const renderSongs = (): string => {
    return `
      <Card title="Song Queue" desc="Select a song to hear">
        <div class="tw-max-h-64 tw-overflow-y-auto tw-text-sm tw-space-y-1">
          ${queue.map(q =>
            `<div class="tw-flex tw-items-center tw-gap-3 tw-px-2 tw-py-1.5 tw-border-b tw-border-slate-100 tw-bg-white tw-shadow-sm tw-cursor-pointer hover:tw-border-violet-300 tw-transition"><span class="tw-text-xs tw-text-slate-500">${q.song}</span><span class="tw-text-xs tw-text-slate-500 tw-w-24">${q.church}</span><span class="tw-text-xs tw-text-slate-500">${q.meter}</span><Button label="Play" size="sm" variant="success" icon="▶"/></div>`).join('')}
          <div class="tw-mt-2 tw-text-center tw-text-xs tw-text-slate-400">+ Add song to queue</div>
        </div>
      </Card>
    `;
  };

  const renderMembers = (): string => {
    return `
      <Card title="Family Roster" desc="Family members and their contributions">
        <div class="tw-max-h-64 tw-overflow-y-auto tw-text-sm tw-space-y-1">
          ${members.map(m =>
            `<div class="tw-flex tw-items-center tw-gap-2 tw-px-2 tw-py-1.5 tw-border-b tw-border-slate-100 tw-bg-white tw-shadow-sm tw-cursor-pointer hover:tw-border-violet-300 tw-transition"><span class="tw-text-sm tw-font-semibold tw-text-slate-800">${m.emoji} ${m.name}</span><span class="tw-text-xs tw-text-slate-500">${m.role}</span><span class="tw-text-xs tw-text-slate-500">${m.contributions} contrib</span></div>`).join('')}
          <div class="tw-mt-2 tw-text-center tw-text-xs tw-text-slate-400">+ Add member</div>
        </div>
      </Card>
    `;
  };

  const renderGames = (): string => {
    const quizQs = getAllQuizQuestions();
    const flashcards = getAllFlashcards();
    const quizHtml = quizQs.length === 0
      ? '<Empty msg="No quiz questions loaded." />'
      : `<div class="tw-mt-2 tw-space-y-2">${quizQs.slice(0, 5).map((q, i) =>
          `<div class="tw-mb-4 tw-border tw-border-slate-200 tw-rounded-lg tw-px-3 tw-bg-white tw-shadow-sm"><p class="tw-text-sm tw-font-medium tw-text-slate-800">${i+1}. ${q.question}</p><div class="tw-mt-2 tw-flex tw-flex-wrap tw-gap-2">${q.options.map(o => `<button class="tw-text-sm tw-px-3 tw-py-1.5 tw-rounded-md tw-border tw-border-slate-200 tw-bg-white tw-text-slate-700 tw-hover:border-violet-300 tw-transition tw-text-xs">${o}</button>`).join('')}</div><p class="tw-text-xs tw-text-slate-400 tw-mt-1 tw-hidden">${q.explanation}</p></div>`).join('')}</div>`;
    const decksHtml = cardDecks.map(d =>
      `<button class="tw-w-full tw-text-left tw-px-3 tw-py-2 tw-rounded-md tw-border tw-border-slate-200 tw-bg-white tw-text-left tw-space-y-1 tw-hover:border-violet-300 tw-transition"><span class="tw-text-sm tw-font-semibold tw-text-slate-800">${d.icon} ${d.title}</span><span class="tw-text-xs tw-text-slate-400">${d.count} cards</span></button>`).join('');
    const flashcardHtml = flashcards.slice(0, 8).map(f =>
      `<Flashcard front="${f.question}" back="${f.answer}" key="${f.id}"/>`).join('');
    const gameCards = `
      <div class="tw-mt-3 tw-border-t tw-border-slate-200 tw-pt-2"><div class="tw-text-sm tw-text-slate-700 tw-font-medium tw-mb-1">Bingo</div><BingoCard/></div>
      <div class="tw-mt-3 tw-border-t tw-border-slate-200 tw-pt-2"><div class="tw-text-sm tw-text-slate-700 tw-font-medium tw-mb-1">Memory Match</div><MemoryCard pairs={['📖','📖','✝️','✝️','🎵','🎵','🕯️','🕯️']}/></div>
    `;
    return `
      <div class="lg:tw-span-2">
        <Card title="Scripture Flashcards" desc="Study scripture by card"><div class="tw-mt-2 tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 tw-gap-2">${decksHtml}</div></Card>
        <Card title="Games & Learning" desc="Interactive learning for the family">
          <div class="tw-mt-2 tw-space-y-3">
            <div class="tw-text-sm tw-text-slate-700 tw-font-medium">Flashcards</div>
            <div class="tw-mt-1 tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 tw-gap-2">${flashcardHtml}</div>
            <div class="tw-mt-3 tw-border-t tw-border-slate-200 tw-pt-2"><div class="tw-text-sm tw-text-slate-700 tw-font-medium tw-mb-1">Bible Quiz</div>${quizHtml}</div>
            ${gameCards}
          </div>
        </Card>
      </div>
    `;
  };

  const renderHabits = (): string => {
    const habitsHtml = habits.map(h => {
      const started = new Date(h.targetDate).getTime();
      const daysLeft = Math.ceil((started - new Date().setHours(0,0,0,0)) / 86400000);
      return `<div class="tw-flex tw-items-center tw-gap-3 tw-px-3 tw-py-2 tw-border-b tw-border-slate-100 tw-bg-white tw-shadow-sm tw-rounded-lg tw-hover:shadow-md tw-transition"><span class="tw-text-2xl">${h.icon}</span><div class="tw-flex-1 tw-min-w-0"><p class="tw-text-sm tw-font-medium tw-text-slate-800">${h.name}</p><p class="tw-text-xs tw-text-slate-400">${h.frequency} · goal ${h.goal} ${h.frequency === 'daily' ? 'days' : 'weeks'} · ${daysLeft}d left</p></div><div class="tw-flex tw-items-center tw-gap-2"><div class="tw-h-2 tw-w-24 tw-rounded-full tw-bg-slate-200 tw-overflow-hidden"><div class="tw-h-full tw-w-0 tw-rounded-full tw-bg-violet-500 tw-transition-all tw-duration-500"></div></div><span class="tw-text-xs tw-text-slate-500 tw-font-medium">0/${h.goal}</span></div></div>`;
    }).join('');
    return `
      <Card title="Family Habits" desc="Track daily spiritual habits">
        <div class="tw-mt-2 tw-space-y-2">${habitsHtml}</div>
        <Button label="New habit" size="sm" variant="secondary" icon="+"/>
      </Card>
    `;
  };

  const renderer = {
    worship: renderWorship,
    songs: renderSongs,
    members: renderMembers,
    games: renderGames,
    habits: renderHabits,
  };

  tabBar.addEventListener('click', (e) => {
    const btn = (e.target as HTMLElement).closest('button[data-tab]');
    if (!btn) return;
    const tab = btn.dataset.tab as keyof typeof renderer;
    tabBar.querySelectorAll('button').forEach(b => {
      b.className = b.className.replace('tw-border-violet-500', 'tw-border-slate-200').replace('tw-text-violet-600', 'tw-text-slate-600').replace('tw-bg-violet-50', 'tw-bg-white');
      b.setAttribute('aria-pressed', 'false');
    });
    btn.className = btn.className.replace('tw-border-slate-200', 'tw-border-violet-500').replace('tw-text-slate-600', 'tw-text-violet-600').replace('tw-bg-white', 'tw-bg-violet-50');
    btn.setAttribute('aria-pressed', 'true');
    content.innerHTML = renderer[tab]();
  });

  content.innerHTML = renderer.worship();
  return root;
}
'''
with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
print('written', len(content), 'bytes')
