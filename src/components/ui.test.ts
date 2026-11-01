import { describe, it, expect } from 'vitest';
import { Card, Badge, Stat, Empty, Button, Flashcard, QuizCard, BingoCard, MemoryCard } from './ui';

describe('Card', () => {
  it('renders title and children', () => {
    const html = Card({ title: 'Test', desc: 'Desc', children: '<p>content</p>' });
    expect(html).toContain('<div');
    expect(html).toContain('Test');
    expect(html).toContain('Desc');
  });

  it('renders without title', () => {
    const html = Card({ desc: 'Desc', children: '<p>content</p>' });
    expect(html).toContain('Desc');
    expect(html).not.toContain('<h2');
  });
});

describe('Badge', () => {
  it('renders with default blue color', () => {
    const html = Badge({ label: 'Hello' });
    expect(html).toContain('Hello');
    expect(html).toContain('tw-bg-blue-100');
  });

  it('renders with custom color', () => {
    const html = Badge({ label: 'Test', color: 'emerald' });
    expect(html).toContain('tw-bg-emerald-100');
  });
});

describe('Stat', () => {
  it('renders label and value', () => {
    const html = Stat({ label: 'Count', value: '42' });
    expect(html).toContain('Count');
    expect(html).toContain('42');
  });
});

describe('Empty', () => {
  it('renders message', () => {
    const html = Empty({ msg: 'Nothing here' });
    expect(html).toContain('Nothing here');
  });
});

describe('Button', () => {
  it('renders with label', () => {
    const html = Button({ label: 'Click me' });
    expect(html).toContain('Click me');
  });

  it('renders with variant', () => {
    const html = Button({ label: 'OK', variant: 'success' });
    expect(html).toContain('tw-bg-emerald-500');
  });

  it('renders with icon', () => {
    const html = Button({ label: 'Play', icon: '▶' });
    expect(html).toContain('▶');
  });
});

describe('Flashcard', () => {
  it('renders front content', () => {
    const html = Flashcard({ front: 'Q', answered: false });
    expect(html).toContain('Q');
    expect(html).not.toContain('rotate-y-180');
  });

  it('applies rotate class when answered', () => {
    const html = Flashcard({ front: 'Q', answered: true });
    expect(html).toContain('tw-rotate-y-180');
  });
});

describe('QuizCard', () => {
  it('shows options when not answered', () => {
    const html = QuizCard({
      question: 'Q?',
      options: ['A', 'B', 'C', 'D'],
      answered: false,
      correct: null,
      explanation: 'Explain',
    });
    expect(html).toContain('Q?');
    expect(html).toContain('A');
    expect(html).toContain('B');
  });

  it('shows explanation when answered', () => {
    const html = QuizCard({
      question: 'Q?',
      options: ['A', 'B'],
      answered: true,
      correct: 0,
      explanation: 'Correct answer is A',
    });
    expect(html).toContain('Correct answer is A');
  });
});

describe('BingoCard', () => {
  it('renders letter cells', () => {
    const html = BingoCard({});
    expect(html).toContain('B');
    expect(html).toContain('I');
    expect(html).toContain('N');
    expect(html).toContain('G');
    expect(html).toContain('O');
  });
});

describe('MemoryCard', () => {
  it('renders emoji pairs', () => {
    const html = MemoryCard({ pairs: ['📖', '📖', '✝️', '✝️'] });
    expect(html).toContain('📖');
    expect(html).toContain('✝️');
  });
});
