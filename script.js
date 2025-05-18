// Main script for Flash Card application
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const card = document.getElementById('card');
    const cardContent = document.getElementById('card-content');
    const vocabularyElement = document.getElementById('vocabulary');
    const kanjiElement = document.getElementById('kanji');
    const meaningContainer = document.getElementById('meaning-container');
    const meaningElement = document.getElementById('meaning');
    const cardInstruction = document.getElementById('card-instruction');
    const answerButtons = document.getElementById('answer-buttons');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    const startBtn = document.getElementById('start-btn');
    const shuffleBtn = document.getElementById('shuffle-btn');
    const resetBtn = document.getElementById('reset-btn');
    const scoreElement = document.getElementById('score');
    const cardsStudiedElement = document.getElementById('cards-studied');
    const correctBtn = document.getElementById('correct-btn');
    const incorrectBtn = document.getElementById('incorrect-btn');
    const totalCardsElement = document.getElementById('total-cards');
    
    // Application State
    let currentIndex = 0;
    let score = 0;
    let cardsStudied = 0;
    let cards = [...flashcardData]; // Copy the data
    let hasStarted = false;
    let isFlipped = false;
    
    // Initialize
    function init() {
        totalCardsElement.textContent = cards.length;
        cardsStudiedElement.textContent = cardsStudied;
        scoreElement.textContent = score;
        
        // Disable navigation buttons initially
        nextBtn.disabled = !hasStarted;
        prevBtn.disabled = true;
        
        // Hide card content initially
        hideCardContent();
    }
    
    // Hide card content
    function hideCardContent() {
        vocabularyElement.textContent = '';
        kanjiElement.textContent = '';
        meaningElement.textContent = '';
        meaningContainer.classList.add('hidden');
        answerButtons.classList.add('hidden');
    }
    
    // Display card content
    function displayCard() {
        if (!hasStarted || cards.length === 0) return;
        
        const currentCard = cards[currentIndex];
        
        console.log('Displaying card:', currentCard); // Debug log
        
        resetCardFlip(); // Ensure card is reset to front side
        
        // Display card content
        if (currentCard) {
            vocabularyElement.textContent = currentCard.vocabulary || '';
            kanjiElement.textContent = currentCard.kanji || '';
            meaningElement.textContent = currentCard.meaning || '';
            card.style.backgroundColor = 'white'; // Reset background color
        } else {
            console.error('Current card is undefined!');
        }
        
        // Update UI state
        updateNavigationButtons();
    }
    
    // Update navigation buttons based on current index
    function updateNavigationButtons() {
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === cards.length - 1;
    }
    
    // Start studying
    function startStudy() {
        if (!hasStarted) {
            hasStarted = true;
            startBtn.textContent = 'Tiếp Tục';
            nextBtn.disabled = false;
            resetCardFlip();
            displayCard();
        }
    }
    
    // Shuffle the cards
    function shuffleCards() {
        if (cards.length === 0) return;
        
        // Fisher-Yates shuffle algorithm
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
        
        // Reset to the first card
        currentIndex = 0;
        resetCardFlip();
        displayCard();
    }
    
    // Flip the card
    function flipCard() {
        if (!hasStarted) return;
        
        console.log('Flipping card'); // Debug log
        
        isFlipped = !isFlipped;
        
        if (isFlipped) {
            // Show the meaning and answer buttons
            meaningContainer.classList.remove('hidden');
            answerButtons.classList.remove('hidden');
            cardInstruction.textContent = 'Nhấp lại để ẩn nghĩa';
            card.style.backgroundColor = '#EEF2FF'; // Light indigo background for flipped state
        } else {
            // Hide the meaning and answer buttons
            meaningContainer.classList.add('hidden');
            answerButtons.classList.add('hidden');
            cardInstruction.textContent = 'Nhấp vào thẻ để xem nghĩa';
            card.style.backgroundColor = 'white';
        }
    }
    
    // Reset the card flip to front
    function resetCardFlip() {
        isFlipped = false;
        meaningContainer.classList.add('hidden');
        answerButtons.classList.add('hidden');
        cardInstruction.textContent = 'Nhấp vào thẻ để xem nghĩa';
        card.style.backgroundColor = 'white';
    }
    
    // Move to the next card
    function nextCard() {
        if (!hasStarted || currentIndex >= cards.length - 1) return;
        
        currentIndex++;
        resetCardFlip();
        displayCard();
    }
    
    // Move to the previous card
    function prevCard() {
        if (!hasStarted || currentIndex <= 0) return;
        
        currentIndex--;
        resetCardFlip();
        displayCard();
    }
    
    // Reset the study session
    function resetStudy() {
        if (confirm('Bạn có chắc muốn làm mới toàn bộ?')) {
            // Reset state variables
            currentIndex = 0;
            score = 0;
            cardsStudied = 0;
            cards = [...flashcardData]; // Reset to original data
            
            // Update statistics
            scoreElement.textContent = score;
            cardsStudiedElement.textContent = cardsStudied;
            
            // Reset button states
            hasStarted = false;
            startBtn.textContent = 'Bắt Đầu';
            resetCardFlip();
            hideCardContent();
            
            // Disable navigation
            nextBtn.disabled = true;
            prevBtn.disabled = true;
        }
    }
    
    // Mark card as correct
    function markCorrect() {
        if (isFlipped) {
            score += 10;
            scoreElement.textContent = score;
            scoreElement.classList.add('score-animation');
            setTimeout(() => {
                scoreElement.classList.remove('score-animation');
            }, 500);
            
            card.style.backgroundColor = '#D1FAE5'; // Success background color
            setTimeout(() => {
                card.style.backgroundColor = '#EEF2FF';
            }, 500);
            
            cardsStudied++;
            cardsStudiedElement.textContent = cardsStudied;
            
            // Move to next card automatically after a delay
            setTimeout(() => {
                nextCard();
            }, 800);
        }
    }
    
    // Mark card as incorrect
    function markIncorrect() {
        if (isFlipped) {
            // We still count it as studied even if incorrect
            cardsStudied++;
            cardsStudiedElement.textContent = cardsStudied;
            
            // Add visual feedback for incorrect
            card.style.backgroundColor = '#FEE2E2'; // Error background color
            setTimeout(() => {
                card.style.backgroundColor = '#EEF2FF';
            }, 500);
            
            // Move to next card automatically after a delay
            setTimeout(() => {
                nextCard();
            }, 800);
        }
    }
    
    // Event Listeners
    card.addEventListener('click', flipCard);
    nextBtn.addEventListener('click', nextCard);
    prevBtn.addEventListener('click', prevCard);
    startBtn.addEventListener('click', startStudy);
    shuffleBtn.addEventListener('click', shuffleCards);
    resetBtn.addEventListener('click', resetStudy);
    correctBtn.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent card flip when clicking the button
        markCorrect();
    });
    incorrectBtn.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent card flip when clicking the button
        markIncorrect();
    });
    
    // Initialize the application
    init();
});
