(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:`quiz-001`,title:`Bible Knowledge`,icon:`📖`,description:`Test your knowledge of the Bible`,questions:[{id:`q-001`,deckId:`quiz-001`,question:`How many books are in the Bible?`,options:[`66`,`64`,`62`,`68`],correctAnswer:0,explanation:`There are 66 books in the Protestant Bible.`,category:`Book count`},{id:`q-002`,deckId:`quiz-001`,question:`Who wrote the epistles?`,options:[`Prophets`,`Apostles`,`Kings`,`Priests`],correctAnswer:1,explanation:`The epistles were written by the apostles.`,category:`Authors`},{id:`q-003`,deckId:`quiz-001`,question:`Which book of the Bible is the shortest?`,options:[`John`,`Revelation`,`Psalm`,`3 John`],correctAnswer:3,explanation:`3 John is the shortest book in the Bible.`,category:`Shortest book`},{id:`q-004`,deckId:`quiz-001`,question:`How many days and nights did it rain during the Great Flood?`,options:[`40`,`30`,`20`,`50`],correctAnswer:0,explanation:`It rained for 40 days and nights.`,category:`Flood`},{id:`q-005`,deckId:`quiz-001`,question:`Who was the first king of Israel?`,options:[`David`,`Saul`,`Solomon`,`Eli`],correctAnswer:1,explanation:`Saul was the first king of Israel.`,category:`Kings`},{id:`q-006`,deckId:`quiz-001`,question:`What language was Jesus born in?`,options:[`Hebrew`,`Aramaic`,`Greek`,`Latin`],correctAnswer:1,explanation:`Jesus likely spoke Aramaic.`,category:`Language`},{id:`q-007`,deckId:`quiz-001`,question:`What is the longest book in the Bible?`,options:[`Psalms`,`Genesis`,`Jeremiah`,`Acts`],correctAnswer:2,explanation:`The Book of Jeremiah is the longest.`,category:`Longest book`},{id:`q-008`,deckId:`quiz-001`,question:`Who was the ancestor of Jesus?`,options:[`Moses`,`Abraham`,`Isaac`,`Jacob`],correctAnswer:1,explanation:`Jesus was a descendant of Abraham.`,category:`Ancestry`}]},{id:`quiz-002`,title:`Worship Symbols`,icon:`⛪`,description:`Learn about religious symbols and their meanings`,questions:[{id:`q-009`,deckId:`quiz-002`,question:`What does the cross symbolize?`,options:[`Love`,`Sacrifice`,`Hope`,`Peace`],correctAnswer:1,explanation:`The cross symbolizes sacrifice.`,category:`Symbols`},{id:`q-010`,deckId:`quiz-002`,question:`How many days did Jesus spend in the tomb?`,options:[`3`,`4`,`5`,`2`],correctAnswer:0,explanation:`Jesus was in the tomb for three days.`,category:`Tomb`},{id:`q-011`,deckId:`quiz-002`,question:`What do the palms signify?`,options:[`Victory`,`Humility`,`Repentance`,`Peace`],correctAnswer:1,explanation:`Palms signify humility and entrance into Jerusalem.`,category:`Palms`},{id:`q-012`,deckId:`quiz-002`,question:`How many times did Peter deny Jesus?`,options:[`3`,`2`,`4`,`1`],correctAnswer:0,explanation:`Peter denied Jesus three times.`,category:`Denial`},{id:`q-013`,deckId:`quiz-002`,question:`What is the shape of the ark?`,options:[`Rectangular`,`Circular`,`Triangular`,`Hexagonal`],correctAnswer:0,explanation:`The ark was rectangular.`,category:`Ark`},{id:`q-014`,deckId:`quiz-002`,question:`Who was the mother of Jesus?`,options:[`Mary`,`Sarah`,`Esther`,`Elizabeth`],correctAnswer:0,explanation:`Mary was the mother of Jesus.`,category:`Mother`},{id:`q-015`,deckId:`quiz-002`,question:`How many apostles did Jesus choose?`,options:[`12`,`10`,`11`,`13`],correctAnswer:0,explanation:`Jesus chose 12 apostles.`,category:`Apostles`},{id:`q-016`,deckId:`quiz-002`,question:`What did David write after repenting?`,options:[`Psalms`,`Psalms`,`Psalms`,`Psalms`],correctAnswer:0,explanation:`David wrote Psalms after repenting.`,category:`Psalms`}]}],t=[{id:`habit-001`,name:`Daily Bible Reading`,icon:`📖`,frequency:`daily`,goal:30,targetDate:`2027-01-01`},{id:`habit-002`,name:`Family Devotion`,icon:`🕯️`,frequency:`daily`,goal:45,targetDate:`2027-01-01`},{id:`habit-003`,name:`Scripture Memorization`,icon:`📝`,frequency:`daily`,goal:15,targetDate:`2027-01-01`},{id:`habit-004`,name:`Weekly Ministry Meeting`,icon:`🤝`,frequency:`weekly`,goal:4,targetDate:`2027-01-01`},{id:`habit-005`,name:`Kindness to Family`,icon:`❤️`,frequency:`daily`,goal:5,targetDate:`2027-01-01`}],n=[{id:`deck-001`,title:`Book of Genesis`,icon:`📜`,count:8},{id:`deck-002`,title:`Book of Psalms`,icon:`📝`,count:6},{id:`deck-003`,title:`New Testament`,icon:`✝️`,count:8},{id:`quiz-001`,title:`Bible Knowledge`,icon:`📖`,count:8},{id:`quiz-002`,title:`Worship Symbols`,icon:`⛪`,count:8}];document.addEventListener(`DOMContentLoaded`,()=>{let r=document.getElementById(`app`);if(!r)return;let i=document.createElement(`section`);i.className=`habits-section`,i.innerHTML=`
    <div class="section-header">
      <span class="section-icon">🧘</span>
      <h2 class="section-title">Your Worship Habits</h2>
      <span class="section-count">${t.length} habits</span>
    </div>
    <div class="habits-grid">
      ${t.map(e=>`
        <div class="habit-card">
          <div class="habit-icon">${e.icon}</div>
          <div class="habit-info">
            <h3 class="habit-name">${e.name}</h3>
            <p class="habit-desc">${e.frequency===`daily`?`Daily`:`Weekly`} practice</p>
          </div>
          <div class="habit-progress">
            <div class="habit-bar"><div class="habit-fill" style="width: 50%"></div></div>
            <span class="habit-remaining">${e.goal} min/${e.frequency}</span>
          </div>
          <button class="habit-btn">Start</button>
        </div>
      `).join(``)}
    </div>
  `;let a=document.createElement(`section`);a.className=`decks-section`,a.innerHTML=`
    <div class="section-header">
      <span class="section-icon">🃏</span>
      <h2 class="section-title">Card Decks</h2>
      <span class="section-count">${n.length} decks</span>
    </div>
    <div class="decks-grid">
      ${n.map(e=>`
        <div class="deck-card" data-deck="${e.id}">
          <div class="deck-icon">${e.icon}</div>
          <div class="deck-info">
            <h3 class="deck-title">${e.title}</h3>
          </div>
          <div class="deck-cards">${e.count}</div>
          <button class="deck-btn">Review</button>
        </div>
      `).join(``)}
    </div>
  `;let o=document.createElement(`section`);o.className=`quiz-section`,o.innerHTML=`
    <div class="section-header">
      <span class="section-icon">🧠</span>
      <h2 class="section-title">Quick Quiz</h2>
      <span class="section-count">${e.length} quizzes</span>
    </div>
    <div class="quiz-grid">
      ${e.map(e=>`
        <div class="quiz-card" data-quiz="${e.id}">
          <div class="quiz-icon">${e.icon}</div>
          <div class="quiz-info">
            <h3 class="quiz-title">${e.title}</h3>
            <p class="quiz-desc">${e.description}</p>
          </div>
          <div class="quiz-qs">${e.questions.length} questions</div>
          <button class="quiz-btn">Start Quiz</button>
        </div>
      `).join(``)}
    </div>
  `,r.innerHTML=``,r.appendChild(i),r.appendChild(a),r.appendChild(o),r.querySelectorAll(`.deck-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.closest(`.deck-card`)?.getAttribute(`data-deck`);t&&alert(`Opening deck: ${t}`)})}),r.querySelectorAll(`.quiz-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.closest(`.quiz-card`)?.getAttribute(`data-quiz`);t&&alert(`Starting quiz: ${t}`)})})});