// Flashcard and quiz data for family worship interactive app
// Includes multiple decks for scripture study, biblical topics, and habit tracking.

export interface Flashcard {
  id: string
  deckId: string
  question: string
  answer: string
  hint?: string
  nextReview?: number
  ease?: number
  interval?: number
}

export interface QuizQuestion {
  id: string
  deckId: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  category: string
}

// Scripture flashcard decks
export const decks = [
  {
    id: 'deck-001',
    title: 'Book of Genesis',
    icon: '📜',
    description: 'Key people and events from Genesis',
    flashcards: [
      { id: 'fc-001', deckId: 'deck-001', question: 'Who was the first man created by God?', answer: 'Adam', hint: 'Genesis 1-2', ease: 2.5, interval: 1 },
      { id: 'fc-002', deckId: 'deck-001', question: 'Who was the first woman?', answer: 'Eve', hint: 'Wife of Adam', ease: 2.5, interval: 1 },
      { id: 'fc-003', deckId: 'deck-001', question: 'What was the name of Noah\'s ark?', answer: 'The Ark', hint: 'Genesis 6-9', ease: 2.5, interval: 1 },
      { id: 'fc-004', deckId: 'deck-001', question: 'Who was Abraham\'s wife?', answer: 'Sarah', hint: 'Genesis 11-21', ease: 2.5, interval: 1 },
      { id: 'fc-005', deckId: 'deck-001', question: 'Who was the father of John the Baptist?', answer: 'Zechariah', hint: 'Luke 1', ease: 2.5, interval: 1 },
      { id: 'fc-006', deckId: 'deck-001', question: 'Who led the Israelites out of Egypt?', answer: 'Moses', hint: 'Exodus 2-14', ease: 2.5, interval: 1 },
      { id: 'fc-007', deckId: 'deck-001', question: 'What did God give to Moses on Mount Sinai?', answer: 'The Ten Commandments', hint: 'Exodus 19-20', ease: 2.5, interval: 1 },
      { id: 'fc-008', deckId: 'deck-001', question: 'Who was swallowed by a big fish?', answer: 'Jonah', hint: 'Jonah 1-2', ease: 2.5, interval: 1 },
    ],
  },
  {
    id: 'deck-002',
    title: 'Book of Psalms',
    icon: '📝',
    description: 'Worship songs and prayers',
    flashcards: [
      { id: 'fc-009', deckId: 'deck-002', question: 'How many Psalms are in the Bible?', answer: '150', hint: 'Psalm 90', ease: 2.5, interval: 1 },
      { id: 'fc-010', deckId: 'deck-002', question: 'Which Psalm begins with "The Lord is my shepherd"?', answer: 'Psalm 23', hint: '23rd Psalm', ease: 2.5, interval: 1 },
      { id: 'fc-011', deckId: 'deck-002', question: 'Which Psalm begins with "The heavens declare the glory of God"?', answer: 'Psalm 19', hint: '19th Psalm', ease: 2.5, interval: 1 },
      { id: 'fc-012', deckId: 'deck-002', question: 'Who wrote Psalm 51 (Mighty in sin)?', answer: 'David', hint: 'Mighty in sin', ease: 2.5, interval: 1 },
      { id: 'fc-013', deckId: 'deck-002', question: 'What is Psalm 23:1?', answer: 'The Lord is my shepherd', hint: '23rd Psalm', ease: 2.5, interval: 1 },
      { id: 'fc-014', deckId: 'deck-002', question: 'What is Psalm 23:4?', answer: 'Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me', hint: '23rd Psalm', ease: 2.5, interval: 1 },
    ],
  },
  {
    id: 'deck-003',
    title: 'New Testament',
    icon: '✝️',
    description: 'Key people, places, and events from the New Testament',
    flashcards: [
      { id: 'fc-015', deckId: 'deck-003', question: 'Who is the author of the Gospel of John?', answer: 'John', hint: 'John 21', ease: 2.5, interval: 1 },
      { id: 'fc-016', deckId: 'deck-003', question: 'Who was the first apostle to deny Jesus before His arrest?', answer: 'Peter', hint: 'Matthew 26', ease: 2.5, interval: 1 },
      { id: 'fc-017', deckId: 'deck-003', question: 'Who was the Roman governor who sentenced Jesus to death?', answer: 'Pontius Pilate', hint: 'Luke 23', ease: 2.5, interval: 1 },
      { id: 'fc-018', deckId: 'deck-003', question: 'Who wrote the Epistle to the Romans?', answer: 'Paul', hint: 'Romans 1', ease: 2.5, interval: 1 },
      { id: 'fc-019', deckId: 'deck-003', question: 'In which city was Paul converted on the road to Damascus?', answer: 'Damascus', hint: 'Acts 9', ease: 2.5, interval: 1 },
      { id: 'fc-020', deckId: 'deck-003', question: 'Who was the first king of Israel?', answer: 'Saul', hint: '1 Samuel 8-10', ease: 2.5, interval: 1 },
      { id: 'fc-021', deckId: 'deck-003', question: 'Who was the most famous king of Israel?', answer: 'David', hint: '2 Samuel', ease: 2.5, interval: 1 },
      { id: 'fc-022', deckId: 'deck-003', question: 'In what city was Jesus born?', answer: 'Bethlehem', hint: 'Luke 2', ease: 2.5, interval: 1 },
    ],
  },
]

// Quiz decks
export const quizDecks = [
  {
    id: 'quiz-001',
    title: 'Bible Knowledge',
    icon: '📖',
    description: 'Test your knowledge of the Bible',
    questions: [
      { id: 'q-001', deckId: 'quiz-001', question: 'How many books are in the Bible?', options: ['66', '64', '62', '68'], correctAnswer: 0, explanation: 'There are 66 books in the Protestant Bible.', category: 'Book count' },
      { id: 'q-002', deckId: 'quiz-001', question: 'Who wrote the epistles?', options: ['Prophets', 'Apostles', 'Kings', 'Priests'], correctAnswer: 1, explanation: 'The epistles were written by the apostles.', category: 'Authors' },
      { id: 'q-003', deckId: 'quiz-001', question: 'Which book of the Bible is the shortest?', options: ['John', 'Revelation', 'Psalm', '3 John'], correctAnswer: 3, explanation: '3 John is the shortest book in the Bible.', category: 'Shortest book' },
      { id: 'q-004', deckId: 'quiz-001', question: 'How many days and nights did it rain during the Great Flood?', options: ['40', '30', '20', '50'], correctAnswer: 0, explanation: 'It rained for 40 days and nights.', category: 'Flood' },
      { id: 'q-005', deckId: 'quiz-001', question: 'Who was the first king of Israel?', options: ['David', 'Saul', 'Solomon', 'Eli'], correctAnswer: 1, explanation: 'Saul was the first king of Israel.', category: 'Kings' },
      { id: 'q-006', deckId: 'quiz-001', question: 'What language was Jesus born in?', options: ['Hebrew', 'Aramaic', 'Greek', 'Latin'], correctAnswer: 1, explanation: 'Jesus likely spoke Aramaic.', category: 'Language' },
      { id: 'q-007', deckId: 'quiz-001', question: 'What is the longest book in the Bible?', options: ['Psalms', 'Genesis', 'Jeremiah', 'Acts'], correctAnswer: 2, explanation: 'The Book of Jeremiah is the longest.', category: 'Longest book' },
      { id: 'q-008', deckId: 'quiz-001', question: 'Who was the ancestor of Jesus?', options: ['Moses', 'Abraham', 'Isaac', 'Jacob'], correctAnswer: 1, explanation: 'Jesus was a descendant of Abraham.', category: 'Ancestry' },
    ],
  },
  {
    id: 'quiz-002',
    title: 'Worship Symbols',
    icon: '⛪',
    description: 'Learn about religious symbols and their meanings',
    questions: [
      { id: 'q-009', deckId: 'quiz-002', question: 'What does the cross symbolize?', options: ['Love', 'Sacrifice', 'Hope', 'Peace'], correctAnswer: 1, explanation: 'The cross symbolizes sacrifice.', category: 'Symbols' },
      { id: 'q-010', deckId: 'quiz-002', question: 'How many days did Jesus spend in the tomb?', options: ['3', '4', '5', '2'], correctAnswer: 0, explanation: 'Jesus was in the tomb for three days.', category: 'Tomb' },
      { id: 'q-011', deckId: 'quiz-002', question: 'What do the palms signify?', options: ['Victory', 'Humility', 'Repentance', 'Peace'], correctAnswer: 1, explanation: 'Palms signify humility and entrance into Jerusalem.', category: 'Palms' },
      { id: 'q-012', deckId: 'quiz-002', question: 'How many times did Peter deny Jesus?', options: ['3', '2', '4', '1'], correctAnswer: 0, explanation: 'Peter denied Jesus three times.', category: 'Denial' },
      { id: 'q-013', deckId: 'quiz-002', question: 'What is the shape of the ark?', options: ['Rectangular', 'Circular', 'Triangular', 'Hexagonal'], correctAnswer: 0, explanation: 'The ark was rectangular.', category: 'Ark' },
      { id: 'q-014', deckId: 'quiz-002', question: 'Who was the mother of Jesus?', options: ['Mary', 'Sarah', 'Esther', 'Elizabeth'], correctAnswer: 0, explanation: 'Mary was the mother of Jesus.', category: 'Mother' },
      { id: 'q-015', deckId: 'quiz-002', question: 'How many apostles did Jesus choose?', options: ['12', '10', '11', '13'], correctAnswer: 0, explanation: 'Jesus chose 12 apostles.', category: 'Apostles' },
      { id: 'q-016', deckId: 'quiz-002', question: 'What did David write after repenting?', options: ['Psalms', 'Psalms', 'Psalms', 'Psalms'], correctAnswer: 0, explanation: 'David wrote Psalms after repenting.', category: 'Psalms' },
    ],
  },
]

// Habit tracker data for the app
export interface Habit {
  id: string
  name: string
  icon: string
  frequency: 'daily' | 'weekly' | 'weekly'
  goal: number
  targetDate: string
}

export const habits: Habit[] = [
  { id: 'habit-001', name: 'Daily Bible Reading', icon: '📖', frequency: 'daily', goal: 30, targetDate: '2027-01-01' },
  { id: 'habit-002', name: 'Family Devotion', icon: '🕯️', frequency: 'daily', goal: 45, targetDate: '2027-01-01' },
  { id: 'habit-003', name: 'Scripture Memorization', icon: '📝', frequency: 'daily', goal: 15, targetDate: '2027-01-01' },
  { id: 'habit-004', name: 'Weekly Ministry Meeting', icon: '🤝', frequency: 'weekly', goal: 4, targetDate: '2027-01-01' },
  { id: 'habit-005', name: 'Kindness to Family', icon: '❤️', frequency: 'daily', goal: 5, targetDate: '2027-01-01' },
]

// Deck selector data for the app
export const cardDecks = [
  { id: 'deck-001', title: 'Book of Genesis', icon: '📜', count: 8 },
  { id: 'deck-002', title: 'Book of Psalms', icon: '📝', count: 6 },
  { id: 'deck-003', title: 'New Testament', icon: '✝️', count: 8 },
  { id: 'quiz-001', title: 'Bible Knowledge', icon: '📖', count: 8 },
  { id: 'quiz-002', title: 'Worship Symbols', icon: '⛪', count: 8 },
]

// Get all flashcards from all decks
export function getAllFlashcards(): Flashcard[] {
  const all: Flashcard[] = []
  for (const deck of decks) {
    for (const card of deck.flashcards) {
      all.push(card)
    }
  }
  return all
}

// Get all quiz questions from all quiz decks
export function getAllQuizQuestions(): QuizQuestion[] {
  const all: QuizQuestion[] = []
  for (const deck of quizDecks) {
    for (const q of deck.questions) {
      all.push(q)
    }
  }
  return all
}
