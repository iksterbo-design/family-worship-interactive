import { describe, it, expect } from 'vitest';
import {
  decks,
  quizDecks,
  getAllFlashcards,
  getAllQuizQuestions,
  habits,
  cardDecks,
} from './cards';

describe('Scripture Flashcards', () => {
  it('should have 3 decks', () => {
    expect(decks).toHaveLength(3);
  });

  it('should have flashcards in each deck', () => {
    expect(decks[0].flashcards).toHaveLength(8);
    expect(decks[1].flashcards).toHaveLength(6);
    expect(decks[2].flashcards).toHaveLength(8);
  });

  it('should have unique flashcard ids', () => {
    const ids = getAllFlashcards().map((c) => c.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('each flashcard should have an answer', () => {
    const all = getAllFlashcards();
    for (const card of all) {
      expect(card.answer).toBeTruthy();
      expect(card.question).toBeTruthy();
    }
  });
});

describe('Quiz Decks', () => {
  it('should have 2 quiz decks', () => {
    expect(quizDecks).toHaveLength(2);
  });

  it('should have questions in each quiz deck', () => {
    expect(quizDecks[0].questions).toHaveLength(8);
    expect(quizDecks[1].questions).toHaveLength(8);
  });

  it('should have correct answers within options', () => {
    const all = getAllQuizQuestions();
    for (const q of all) {
      expect(q.options).toHaveLength(4);
      expect(q.correctAnswer).toBeGreaterThanOrEqual(0);
      expect(q.correctAnswer).toBeLessThan(q.options.length);
      expect(q.explanation).toBeTruthy();
      expect(q.question).toBeTruthy();
    }
  });

  it('should have unique question ids', () => {
    const ids = getAllQuizQuestions().map((q) => q.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

describe('Habits', () => {
  it('should have 5 habits', () => {
    expect(habits).toHaveLength(5);
  });

  it('each habit should have a positive goal', () => {
    for (const h of habits) {
      expect(h.goal).toBeGreaterThan(0);
      expect(h.frequency).toBeOneOf(['daily', 'weekly']);
    }
  });
});

describe('Card Decks', () => {
  it('should have 5 card decks', () => {
    expect(cardDecks).toHaveLength(5);
  });

  it('should have counts matching the source data', () => {
    const deckMap = new Map(decks.map((d) => [d.id, d.flashcards.length]));
    for (const cd of cardDecks) {
      if (cd.id.startsWith('deck-')) {
        expect(cd.count).toBe(deckMap.get(cd.id));
      }
    }
  });
});
