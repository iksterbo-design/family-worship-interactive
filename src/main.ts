import './style.css'
import { cardDecks, quizDecks, habits } from './data/games'

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('app')
  if (!container) return

  // Habits section
  const habitsSection = document.createElement('section')
  habitsSection.className = 'habits-section'
  habitsSection.innerHTML = `
    <div class="section-header">
      <span class="section-icon">🧘</span>
      <h2 class="section-title">Your Worship Habits</h2>
      <span class="section-count">${habits.length} habits</span>
    </div>
    <div class="habits-grid">
      ${habits.map(h => `
        <div class="habit-card">
          <div class="habit-icon">${h.icon}</div>
          <div class="habit-info">
            <h3 class="habit-name">${h.name}</h3>
            <p class="habit-desc">${h.frequency === 'daily' ? 'Daily' : 'Weekly'} practice</p>
          </div>
          <div class="habit-progress">
            <div class="habit-bar"><div class="habit-fill" style="width: 50%"></div></div>
            <span class="habit-remaining">${h.goal} min/${h.frequency}</span>
          </div>
          <button class="habit-btn">Start</button>
        </div>
      `).join('')}
    </div>
  `

  // Decks section
  const decksSection = document.createElement('section')
  decksSection.className = 'decks-section'
  decksSection.innerHTML = `
    <div class="section-header">
      <span class="section-icon">🃏</span>
      <h2 class="section-title">Card Decks</h2>
      <span class="section-count">${cardDecks.length} decks</span>
    </div>
    <div class="decks-grid">
      ${cardDecks.map(d => `
        <div class="deck-card" data-deck="${d.id}">
          <div class="deck-icon">${d.icon}</div>
          <div class="deck-info">
            <h3 class="deck-title">${d.title}</h3>
          </div>
          <div class="deck-cards">${d.count}</div>
          <button class="deck-btn">Review</button>
        </div>
      `).join('')}
    </div>
  `

  // Quiz section
  const quizSection = document.createElement('section')
  quizSection.className = 'quiz-section'
  quizSection.innerHTML = `
    <div class="section-header">
      <span class="section-icon">🧠</span>
      <h2 class="section-title">Quick Quiz</h2>
      <span class="section-count">${quizDecks.length} quizzes</span>
    </div>
    <div class="quiz-grid">
      ${quizDecks.map(q => `
        <div class="quiz-card" data-quiz="${q.id}">
          <div class="quiz-icon">${q.icon}</div>
          <div class="quiz-info">
            <h3 class="quiz-title">${q.title}</h3>
            <p class="quiz-desc">${q.description}</p>
          </div>
          <div class="quiz-qs">${q.questions.length} questions</div>
          <button class="quiz-btn">Start Quiz</button>
        </div>
      `).join('')}
    </div>
  `

  container.innerHTML = ''
  container.appendChild(habitsSection)
  container.appendChild(decksSection)
  container.appendChild(quizSection)

  // Deck button handlers
  container.querySelectorAll('.deck-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.deck-card')
      const deckId = card?.getAttribute('data-deck')
      if (deckId) {
        alert(`Opening deck: ${deckId}`)
      }
    })
  })

  // Quiz button handlers
  container.querySelectorAll('.quiz-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.quiz-card')
      const quizId = card?.getAttribute('data-quiz')
      if (quizId) {
        alert(`Starting quiz: ${quizId}`)
      }
    })
  })
})
