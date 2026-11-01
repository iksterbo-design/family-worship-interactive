/** Shared agency UI primitives: dark mode, shell and reusable widgets. */
export function ThemeToggle() {
  const b = document.createElement('button');
  b.className =
    'tw-bg-slate-200 tw-text-slate-700 tw-rounded-lg tw-px-3 tw-py-1.5 tw-text-sm tw-flex items-center gap-2 tw-justify-center tw-w-full sm:tw-w-auto';
  b.setAttribute('aria-label', 'Toggle theme');
  b.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" class="tw-h-4 tw-w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>';
  b.onclick = () => {
    document.documentElement.classList.toggle('dark');
    const on = document.documentElement.classList.contains('dark');
    try { localStorage.setItem('theme', on ? 'dark' : 'light'); } catch (e) {}
  };
  return b;
}

export function Card({ title, desc, cls = '', children }: { title?: string; desc?: string; cls?: string; children: string }) {
  return '<div class=\'tw-card tw-bg-white tw-border tw-border-slate-200 tw-rounded-2xl tw-shadow-sm tw-p-5 tw-transition-all tw-duration-200 ' + cls + '\'>' +
    (title ? '<h2 class=\'tw-text-lg tw-font-bold tw-text-slate-800 dark:tw-text-white\'>' + title + '</h2>' : '') +
    (desc ? '<p class=\'tw-text-sm tw-text-slate-500 tw-mt-1\'>' + desc + '</p>' : '') +
    children + '</div>';
}

export function Badge({ label, color = 'blue' }: { label: string; color?: string }) {
  const map: Record<string, string> = {
    blue: 'tw-bg-blue-100 tw-text-blue-700', emerald: 'tw-bg-emerald-100 tw-text-emerald-700',
    amber: 'tw-bg-amber-100 tw-text-amber-700', rose: 'tw-bg-rose-100 tw-text-rose-700',
    violet: 'tw-bg-violet-100 tw-text-violet-700', slate: 'tw-bg-slate-100 tw-text-slate-600'
  };
  return '<span class=\'tw-inline-flex tw-items-center tw-gap-1 tw-text-xs tw-font-medium ' + (map[color] || map.blue) + '\'>' + label + '</span>';
}

export function Stat({ label, value }: { label: string; value: string }) {
  return '<div class=\'tw-flex tw-items-center tw-justify-between tw-py-3 tw-border-b tw-border-slate-100 tw-last:border-0\'>' +
    '<p class=\'tw-text-xs tw-text-slate-500\'>' + label + '</p>' +
    '<p class=\'tw-font-semibold tw-text-slate-800 dark:tw-text-white\'>' + value + '</p>' +
  '</div>';
}

export function Empty({ msg }: { msg: string }) {
  return '<div class=\'tw-text-sm tw-text-slate-500 tw-py-8 tw-text-center\'>' + msg + '</div>';
}

export function Button({ label, variant = 'primary', size = 'md', icon, active = false, ...rest }: {
  label: string; variant?: 'primary' | 'secondary' | 'ghost' | 'success' | 'danger'; size?: 'sm' | 'md' | 'lg';
  icon?: string; active?: boolean; [key: string]: unknown;
}) {
  const map = {
    primary: 'tw-bg-violet-500 tw-text-white hover:tw-bg-violet-600',
    secondary: 'tw-bg-slate-200 tw-text-slate-700 hover:tw-bg-slate-300',
    ghost: 'tw-bg-transparent tw-text-slate-600 hover:tw-bg-slate-100',
    success: 'tw-bg-emerald-500 tw-text-white hover:tw-bg-emerald-600',
    danger: 'tw-bg-rose-500 tw-text-white hover:tw-bg-rose-600'
  };
  const sizes = { sm: 'tw-px-2 tw-py-1 tw-text-xs', md: 'tw-px-3 tw-py-1.5 tw-text-sm', lg: 'tw-px-4 tw-py-2 tw-text-base' };
  const cls = 'tw-rounded-lg tw-font-medium tw-transition tw-duration-200 tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-violet-500 tw-active:scale-[.98] ' + map[variant] + ' ' + sizes[size];
  const iconHtml = icon ? '<span class="tw-ml-2 tw-text-base">' + icon + '</span>' : '';
  return '<button class="' + cls + '" ' + Object.entries(rest).filter(([k]) => k !== 'children').map(([k, v]) => k + '="' + v + '"').join(' ') + '>' + iconHtml + label + '</button>';
}

export function AppShell({ title, subtitle, links, children }: { title: string; subtitle: string; links?: string; children: string }) {
  const nav = links ? '<nav class=\'tw-bg-white tw-border-b tw-border-slate-200 tw-text-slate-600 tw-text-sm tw-py-2 tw-flex wrap\'>' + links + '</nav>' : '';
  return '<div class=\'app-shell\'>' +
    '<header class=\'tw-bg-white tw-border-b tw-border-slate-200 tw-shadow-sm\'>' +
      '<div class=\'tw-max-w-6xl tw-mx-auto tw-px-4 sm:px-6 tw-flex items-center justify-between tw-py-3 tw-gap-3\'>' +
        '<div><h1 class=\'tw-text-base sm:tw-text-xl tw-font-bold tw-text-slate-800\'>' + title + '</h1>' +
          '<p class=\'tw-text-xs tw-text-slate-500 tw-max-w-md tw-break-words\'>' + subtitle + '</p></div>' +
        '<div class=\'tw-flex gap-2\'>' + nav +
          '<div class=\'tw-mx-2 tw-self-center\'>' + ThemeToggle().outerHTML + '</div></div>' +
      '</div>' +
    '</header>' +
    '<main class=\'tw-max-w-6xl tw-mx-auto tw-px-4 sm:px-6 tw-py-5\'>' + children + '</main>' +
    '<footer class=\'tw-text-xs tw-text-slate-400 tw-mt-6 tw-border-t tw-border-slate-200 tw-pt-3 tw-text-center\'>' +
      '<div class=\'tw-graph\'>' + title + ' v1.0 &middot; Family Learning Hub</div>' +
    '</footer>' +
  '</div>';
}

// ---------- Game components ----------

// Flashcard (memory/flip card)
export function Flashcard({ front, answered }: { front: string; answered?: boolean }) {
  return `<div class='tw-flashcard tw-relative tw-w-full tw-max-w-xs tw-rounded-xl tw-shadow-lg tw-transition-all tw-duration-500 tw-transform tw-flex tw-flex-col tw-items-center tw-justify-center ${answered ? 'tw-rotate-y-180' : ''} tw-card-flashcard'>
    <div class='tw-w-full tw-p-4 tw-text-center'>
      <span class='tw-text-3xl tw-mb-2'>${front}</span>
      <span class='tw-text-xs tw-text-slate-400'>Tap to reveal</span>
    </div>
  </div>`;
}

// Quiz question with options
export function QuizCard({ question, options, answered, correct, explanation }: {
  question: string; options: string[]; answered: boolean; correct: number | null; explanation: string;
}) {
  const optButtons = options.map((opt, i) => {
    const cls = answered
      ? (i === correct
        ? 'tw-w-full tw-text-left tw-px-3 tw-py-2 tw-rounded-md tw-border tw-text-sm tw-font-medium tw-transition tw-duration-150 tw-border-emerald-500 tw-bg-emerald-50 tw-text-emerald-800'
        : 'tw-w-full tw-text-left tw-px-3 tw-py-2 tw-rounded-md tw-border tw-text-sm tw-font-medium tw-transition tw-duration-150 tw-border-slate-200 tw-bg-white tw-text-slate-500')
      : 'tw-w-full tw-text-left tw-px-3 tw-py-2 tw-rounded-md tw-border tw-border-slate-200 tw-bg-white tw-text-slate-700 hover:tw-border-violet-300 hover:tw-bg-violet-50';
    return `<button class="${cls}" onclick="window.__quizAnswer(${i})">${opt}</button>`;
  }).join('');
  if (answered && correct !== null) {
    return '<div class=\'tw-p-4 tw-rounded-xl tw-bg-violet-50 tw-text-sm tw-text-slate-700\'>' +
      '<p class=\'tw-font-semibold tw-text-slate-800\'>' + question + '</p>' +
      '<p class=\'tw-mt-2 tw-text-xs tw-text-slate-500\'>' + explanation + '</p>' +
    '</div>';
  }
  return '<div class=\'tw-p-4 tw-rounded-xl tw-bg-white tw-shadow-sm\'>' +
    '<p class=\'tw-text-sm tw-font-semibold tw-text-slate-800\'>' + question + '</p>' +
    '<div class=\'tw-mt-3 tw-space-y-2\'>' + optButtons + '</div>' +
  '</div>';
}

// Bingo card (5x5 letter grid)
export function BingoCard({ }: { }) {
  const letters = ['B', 'I', 'N', 'G', 'O'];
  const nums: string[] = [];
  for (let i = 0; i < 24; i++) {
    const col = i % 5;
    let n = '';
    if (col === 2) n = Math.floor(Math.random() * 15 + 1).toString();
    else if (col === 0) n = 'FREE';
    else n = Math.floor(Math.random() * 15 + 1).toString();
    nums.push(n);
  }
  const cells = letters.map((l, i) => {
    const num = nums[i];
    return `<button class='tw-w-full tw-text-center tw-py-2 tw-rounded-md tw-border tw-border-slate-200 tw-bg-white tw-text-sm tw-font-bold tw-text-slate-700 hover:tw-border-violet-300 hover:tw-bg-violet-50 tw-transition tw-duration-150' onclick="window.__bingoCell('${l}${num}')">${l} ${num}</button>`;
  }).join('');
  return '<div class=\'tw-p-4 tw-rounded-xl tw-bg-white tw-shadow-sm\'>' +
    '<div class=\'tw-grid tw-grid-cols-5 tw-gap-1 tw-text-center\'>' + cells + '</div>' +
  '</div>';
}

// Memory match (pairs of emoji)
export function MemoryCard({ pairs }: { pairs: string[] }) {
  const grid = pairs.map((emoji, _i) => {
    return '<button class=\'tw-w-1/2 tw-h-20 tw-rounded-lg tw-border tw-border-slate-200 tw-bg-white tw-text-2xl tw-flex tw-items-center tw-justify-center tw-hover:border-violet-300 tw-transition tw-duration-150 tw-shadow-sm\'>' + emoji + '</button>';
  }).join('');
  return '<div class=\'tw-p-4 tw-rounded-xl tw-bg-white tw-shadow-sm\'>' +
    '<div class=\'tw-grid tw-grid-cols-4 tw-gap-2 tw-text-center\'>' + grid + '</div>' +
  '</div>';
}
