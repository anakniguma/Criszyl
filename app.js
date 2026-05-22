

document.addEventListener('DOMContentLoaded', () => {

  const defaultQuotes = [
    "Your kindness is a gentle light that softens the hardest days.",
    "The way you smile makes the entire world feel a little warmer and infinitely more peaceful.",
    "I admire your strength, your wisdom, and the beautiful, rare soul you are.",
    "Even in the quietest moments of the day, you are the sweetest thought in my mind.",
    "You inspire me to grow and be a better person, just by being exactly who you are.",
    "There is a rare, precious grace in the way you carry yourself and speak.",
    "You are a masterpiece of warmth, laughter, and genuine goodness.",
    "If I could give you one gift, it would be to see yourself through my eyes, just to see how incredibly special you are.",
    "The light in your eyes is more captivating than a thousand starlit skies.",
    "You make my chaotic thoughts dissolve into pure, peaceful gratitude whenever you speak.",
    "Your laughter is my favorite symphony, a beautiful melody that brightens the entire room.",
    "Just hearing your voice makes the heaviest worries feel incredibly light and distant.",
    "You possess a radiant energy that turns the most ordinary moments into extraordinary memories.",
    "In a world of constant noise, the gentle calm you carry is my favorite sanctuary.",
    "Every conversation with you leaves me with a heart full of joy and a mind full of beautiful thoughts.",
    "I love the brilliant way your mind works, your thoughts are as fascinating as they are beautiful.",
    "The simple beauty of your presence has a way of silencing all the chaos around me.",
    "You have a beautiful way of bringing out the absolute best in everyone fortunate enough to know you.",
    "With you, I have found a perfect harmony of deep understanding, sincere warmth, and gentle peace.",
    "Your eyes hold a universe of kindness, a beautiful reflection of the wonderful soul within.",
    "I am continuously in awe of your depth, your soft strength, and the endless grace you possess.",
    "You are my favorite thought at the start of every sunrise and my last wish beneath every sunset.",
    "The gentle kindness you show to the world is a beautiful reminder of what truly matters.",
    "You make the ordinary feel poetic, turning simple words into beautiful moments of connection.",
    "Your presence is like a warm, comforting hearth on a cold, winter night.",
    "I cherish the beautiful sincerity in your eyes, there is a rare honesty in them that I adore.",
    "You are a beautiful blend of absolute brilliance, quiet elegance, and boundless warmth.",
    "Every little detail about you, from your soft laughter to your thoughtful words, is incredibly special.",
    "Your spirit is incredibly radiant, bringing a bright, lovely glow wherever you choose to step.",
    "I love how you notice the beautiful details in life that others so easily rush past.",
    "You bring a sweet, quiet harmony to my life, like a beautiful song played on a peaceful evening.",
    "The way you think, speak, and care for others shows the beautiful depth of your generous heart.",
    "You make me believe in the magic of quiet connections and beautiful, shared understandings.",
    "Your voice holds a beautiful warmth that can instantly soothe the most restless of days.",
    "You are a rare treasure, a beautiful soul whose warmth makes the whole world feel safer.",
    "The gentle strength you hold within is incredibly inspiring and wonderfully beautiful.",
    "I could listen to you speak for hours, your perspective on life is a beautiful gift.",
    "You have a natural elegance that is both incredibly captivating and deeply comforting.",
    "The joy you bring into my life is like a bright, warm sunbeam breaking through the clouds.",
    "I appreciate the wonderful, intelligent, and incredibly kind person you are every single day.",
    "Your smile has a beautiful way of lingering in my mind long after we have finished speaking.",
    "You make every day feel like a beautiful gift, wrapped in your kindness and gentle laughter.",
    "I love the beautiful sparkle of curiosity and joy in your eyes when you talk about what you love.",
    "Your kindness is a quiet force, transforming everyday interactions into beautiful memories.",
    "You are a lovely reminder that there is profound beauty in gentle words and soft hearts.",
    "I feel incredibly grateful to share this space and time in the world with someone as special as you.",
    "You possess a beautiful, serene intelligence that shines brightly in everything you do.",
    "The way you listen with absolute sincerity makes me feel valued in a way I've never known.",
    "You are a bright beacon of comfort, bringing a lovely sense of home wherever you go.",
    "Your laughter is like a gentle summer breeze, refreshing, joyful, and wonderfully sweet.",
    "Every thought of you brings a quiet smile to my face and a deep peace to my heart.",
    "You are a beautiful masterpiece, painted with colors of kindness, intelligence, and grace.",
    "The simple warmth of your hand in mine would make the entire universe fade away.",
    "You have a beautiful way of making the quietest moments feel full of life and meaning.",
    "Your heart is a beautiful sanctuary of kindness, a place where everyone feels welcomed.",
    "I love how your mind weaves beautiful thoughts, creating brilliant ideas from simple moments.",
    "Your elegance is quiet, natural, and profoundly beautiful, drawing people in with gentle grace.",
    "You are my favorite reminder of the beautiful goodness that exists in this world.",
    "The gentle way you look at the world teaches me to appreciate the beauty in every small detail.",
    "Your voice is my favorite comfort, a soothing sound that brings a beautiful peace to my mind.",
    "You have a lovely, radiant spirit that effortlessly turns ordinary days into beautiful adventures.",
    "I admire your brilliant intelligence and the beautiful, humble way you share it with others.",
    "Your kindness is like a beautiful ripple, spreading warmth and light to everyone you meet.",
    "You are a perfect, beautiful harmony of strength, gentle wisdom, and sincere compassion.",
    "Every small moment spent thinking of you fills my heart with a quiet, beautiful happiness.",
    "The grace in your movements and the beauty in your words are a constant source of inspiration.",
    "You make the world feel a little softer, a little brighter, and infinitely more beautiful.",
    "I love the genuine, beautiful enthusiasm you bring to the things you care about.",
    "Your presence is a sweet, comforting anchor in a world that often feels too chaotic.",
    "You are a rare, beautiful light, shining with absolute warmth, sincerity, and joy.",
    "The beauty of your soul is reflected in the gentle, thoughtful way you treat everyone around you.",
    "You have a beautiful mind that inspires me to look at the world with greater depth and curiosity.",
    "Your laughter is a bright, beautiful sparkle that can illuminate even the darkest of days.",
    "I cherish the quiet, beautiful understanding that exists between us, requiring no words at all.",
    "You are a beautiful blessing, bringing endless warmth and gentle joy into my life.",
    "The sincerity of your kindness is a beautiful, rare gift that I hold close to my heart.",
    "You have a beautiful way of turning simple conversations into treasures I carry with me.",
    "Your soft strength and quiet resilience are incredibly beautiful and deeply inspiring.",
    "You are my favorite sanctuary, a place of pure warmth, peace, and beautiful understanding.",
    "The light you bring into my life is a beautiful, constant source of joy and gratitude.",
    "I love the brilliant, creative way you look at the world, finding beauty where others don't.",
    "Your presence makes the heavy moments light and the beautiful moments absolutely unforgettable.",
    "You are a beautiful melody that my heart loves to play, bringing endless peace to my days.",
    "The gentle grace you carry yourself with is a beautiful testament to the rare soul you are.",
    "Your kind heart is a beautiful treasure, filled with warmth, sincerity, and pure love.",
    "You have an amazing way of making the world feel like a beautiful, promising place just by being in it.",
    "I am endlessly fascinated by the depth of your thoughts and the beauty of your character.",
    "Your voice carries a sweet, soothing magic that makes all my worries completely melt away.",
    "You are a lovely ray of sunshine, bringing warmth, comfort, and pure joy to my heart.",
    "The sincere kindness you radiate is the most beautiful thing about you, and that is saying so much.",
    "I appreciate the beautiful, thoughtful, and incredibly brilliant person you are every single day.",
    "Your smile is a beautiful, silent promise of happiness, brightening my mind whenever I think of it.",
    "You make every day feel like a beautiful, special occasion just by sharing your time with me.",
    "I love the quiet, elegant way you speak, your words are always a beautiful comfort to hear.",
    "Your gentle spirit is a beautiful, rare gem, shining with pure kindness and absolute grace.",
    "You have a beautiful way of bringing peace to my thoughts and a warm glow to my heart.",
    "I am so incredibly grateful for the beautiful light and sincere joy you bring into my life.",
    "Your brilliant intellect and kind, gentle nature are a truly beautiful and rare combination.",
    "You make the entire world feel like a warm, beautiful home, filled with peace and sweet laughter.",
    "In every quiet breath, every starlit night, and every warm sunrise, you are my most beautiful thought."
  ];

  const defaultLetterText = `My Dearest,

From the moment our paths crossed, my world has been illuminated by your gentle grace, warm smile, and captivating spirit. Every single conversation we share is a treasured adventure, and every quiet moment is filled with pure gratitude for who you are.

Thank you for being the beautiful light that brightens my days. This small space is my quiet dedication to you—a simple reminder of how incredibly special you are to me.

With all my devotion,`;

  // Handle storage migration: if the user has the old 10 quotes or 'You' name in local storage,
  // we update it with the new defaults automatically so they get the full surprise!
  let initialQuotes = defaultQuotes;
  try {
    const stored = JSON.parse(localStorage.getItem('quotes'));
    if (stored && Array.isArray(stored)) {
      if (stored.length < 15) {
        localStorage.setItem('quotes', JSON.stringify(defaultQuotes));
      } else {
        initialQuotes = stored;
      }
    }
  } catch (e) {}

  if (localStorage.getItem('herName') === 'You') {
    localStorage.setItem('herName', 'Criszyl');
  }

  let config = {
    herName: localStorage.getItem('herName') || 'Criszyl',
    startDate: localStorage.getItem('startDate') || '2026-01-08',
    quotes: initialQuotes,
    sunsetMood: parseFloat(localStorage.getItem('sunsetMood')) ?? 50,
    letterText: localStorage.getItem('letterText') || defaultLetterText,
    letterSignature: localStorage.getItem('letterSignature') || 'From My Heart',
    theme: localStorage.getItem('theme') || 'midnight-dream',
    galleryData: JSON.parse(localStorage.getItem('galleryData')) || [
      {
        title: "Your Radiant Warmth",
        desc: "A beautiful, gentle light that effortlessly brightens up the room, turning any quiet conversation into warm sunshine.",
        caption: "Radiant Smile",
        sub: "A comforting warmth that lights up the world.",
        img: "assets/images/IMG_20260430_163230_205.jpg"
      },
      {
        title: "Your Captivating Spirit",
        desc: "A beautiful spark of laughter, intelligence, and sheer joy that makes every single talk feel like a scenic adventure.",
        caption: "Vibrant Presence",
        sub: "Every talk with you is a journey of pure joy.",
        img: "assets/images/IMG_20260502_202956_493.jpg"
      },
      {
        title: "Your Deep Grace & Kindness",
        desc: "A rare, genuine heart that brings peace, absolute comfort, and inspiration to those lucky enough to know you.",
        caption: "Graceful Kindness",
        sub: "A deep, gentle nature that inspires quiet awe.",
        img: "assets/images/IMG_20260430_163227_082.jpg"
      }
    ]
  };

  // Function to apply Sunset Mood intensity dynamically to glows
  function applySunsetMood(value) {
    const valFract = value / 100;
    const primaryOpacity = 1.0 - (valFract * 0.75);
    const secondaryOpacity = 0.9 - (valFract * 0.4);
    const accentOpacity = valFract;

    document.documentElement.style.setProperty('--sunset-opacity-primary', primaryOpacity.toFixed(3));
    document.documentElement.style.setProperty('--sunset-opacity-secondary', secondaryOpacity.toFixed(3));
    document.documentElement.style.setProperty('--sunset-opacity-accent', accentOpacity.toFixed(3));

    // Sync input slider positions
    const slider1 = document.getElementById('sunset-widget-input');
    const slider2 = document.getElementById('settings-sunset-mood');
    if (slider1) slider1.value = value;
    if (slider2) slider2.value = value;

    localStorage.setItem('sunsetMood', value);
    config.sunsetMood = value;
  }

  let drawnQuotesList = [];

  function getPastDateString(daysAgo) {
    const d = new Date();
    d.setDate(d.getDate() - daysAgo);
    return d.toISOString().split('T')[0];
  }

  // Populate dynamic gallery cards based on config
  function renderGallery() {
    const items = document.querySelectorAll('.gallery-item');
    items.forEach((item, idx) => {
      const data = config.galleryData[idx];
      if (data) {
        item.setAttribute('data-image', data.img);
        item.setAttribute('data-title', data.title);
        item.setAttribute('data-desc', data.desc);

        const img = item.querySelector('img');
        if (img) img.src = data.img;

        const caption = item.querySelector('.gallery-caption');
        if (caption) caption.textContent = data.caption;

        const desc = item.querySelector('.gallery-desc');
        if (desc) desc.textContent = data.sub;
      }
    });
  }

  // Apply Theme presets to document root elements
  function applyTheme(themeName) {
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem('theme', themeName);
    config.theme = themeName;

    // Theme selector UI active states sync
    const buttons = document.querySelectorAll('.theme-btn');
    buttons.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-theme-value') === themeName);
    });
  }

  function updateConfiguredUI() {
    const herDisplays = document.querySelectorAll('#her-display-name, #her-display-name-counter, #intro-her-name');
    herDisplays.forEach(el => {
      el.textContent = config.herName;
    });

    renderGallery();
    applyTheme(config.theme);

    const signatureEl = document.getElementById('letter-signature-text');
    if (signatureEl) {
      signatureEl.textContent = `— ${config.letterSignature}`;
    }

    const modalSignatureEl = document.getElementById('modal-letter-signature');
    if (modalSignatureEl) {
      modalSignatureEl.textContent = `— ${config.letterSignature}`;
    }

    const modalLetterContentEl = document.getElementById('modal-letter-content');
    if (modalLetterContentEl) {
      modalLetterContentEl.textContent = config.letterText;
    }

    drawnQuotesList = [];
  }

  // Wax Seal Letter Trigger
  const loveEnvelope = document.getElementById('love-envelope');
  const waxSeal = document.getElementById('wax-seal');
  const typewriterText = document.getElementById('typewriter-letter-text');
  let letterTypewriterInterval = null;

  if (waxSeal && loveEnvelope && typewriterText) {
    waxSeal.addEventListener('click', () => {
      playRomanticChime();

      // Crackling wax seal sound synthesis
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          const ctx = new AudioCtx();
          const bufferSize = ctx.sampleRate * 0.15;
          const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
          const data = buffer.getChannelData(0);
          for (let i = 0; i < bufferSize; i++) {
            data[i] = (Math.random() * 2 - 1) * 0.1 * Math.exp(-i / (bufferSize * 0.5));
          }
          const noise = ctx.createBufferSource();
          noise.buffer = buffer;

          const filter = ctx.createBiquadFilter();
          filter.type = 'bandpass';
          filter.frequency.value = 1000;

          noise.connect(filter);
          filter.connect(ctx.destination);
          noise.start();
        }
      } catch (e) { }

      loveEnvelope.classList.add('opened');

      // Start typewriter reveal after envelope paper slides up (0.7s)
      setTimeout(() => {
        let i = 0;
        typewriterText.textContent = '';
        if (letterTypewriterInterval) clearInterval(letterTypewriterInterval);

        const textToType = config.letterText;
        letterTypewriterInterval = setInterval(() => {
          if (i < textToType.length) {
            typewriterText.textContent += textToType.charAt(i);
            i++;
            // Soft typewriter ticks
            if (i % 6 === 0) {
              try {
                const AudioCtx = window.AudioContext || window.webkitAudioContext;
                if (AudioCtx) {
                  const ctx = new AudioCtx();
                  const osc = ctx.createOscillator();
                  const gain = ctx.createGain();
                  osc.frequency.setValueAtTime(1100 + Math.random() * 200, ctx.currentTime);
                  gain.gain.setValueAtTime(0.003, ctx.currentTime);
                  gain.gain.exponentialRampToValueAtTime(0.00001, ctx.currentTime + 0.035);
                  osc.connect(gain);
                  gain.connect(ctx.destination);
                  osc.start();
                  osc.stop(ctx.currentTime + 0.035);
                }
              } catch (err) { }
            }
          } else {
            clearInterval(letterTypewriterInterval);
          }
        }, 30);
      }, 700);
    });
  }

  // Private Letter Modal Zoom handling
  const privateLetterModal = document.getElementById('private-letter-modal');
  const loveLetterPaper = document.getElementById('love-letter-paper');
  const btnCloseLetter = document.getElementById('btn-close-letter');
  const modalLetterContent = document.getElementById('modal-letter-content');
  const modalLetterSignature = document.getElementById('modal-letter-signature');

  if (loveLetterPaper && privateLetterModal && btnCloseLetter) {
    loveLetterPaper.addEventListener('click', () => {
      if (loveEnvelope.classList.contains('opened')) {
        playRomanticChime();

        if (modalLetterContent) modalLetterContent.textContent = config.letterText;
        if (modalLetterSignature) modalLetterSignature.textContent = `— ${config.letterSignature}`;

        privateLetterModal.classList.add('active');
      }
    });

    btnCloseLetter.addEventListener('click', () => {
      playRomanticChime();
      privateLetterModal.classList.remove('active');
    });

    privateLetterModal.addEventListener('click', (e) => {
      if (e.target === privateLetterModal) {
        playRomanticChime();
        privateLetterModal.classList.remove('active');
      }
    });
  }

  updateConfiguredUI();
  applySunsetMood(config.sunsetMood);

  const tickerDays = document.getElementById('ticker-days');
  const tickerHours = document.getElementById('ticker-hours');
  const tickerMinutes = document.getElementById('ticker-minutes');
  const tickerSeconds = document.getElementById('ticker-seconds');
  const counterTitle = document.getElementById('counter-section-title');

  let countdownInterval = null;

  function startLoveCounter() {
    if (countdownInterval) clearInterval(countdownInterval);

    function updateTicker() {
      const now = new Date();
      const start = new Date(config.startDate);
      let difference = now - start;

      if (difference < 0) {
        counterTitle.textContent = "Counting Down To Her Spark";
        difference = Math.abs(difference);
      } else {
        counterTitle.textContent = "Appreciating Every Single Second";
      }

      const secTotal = Math.floor(difference / 1000);
      const minTotal = Math.floor(secTotal / 60);
      const hrsTotal = Math.floor(minTotal / 60);
      const days = Math.floor(hrsTotal / 24);

      const hours = hrsTotal % 24;
      const minutes = minTotal % 60;
      const seconds = secTotal % 60;

      tickerDays.textContent = String(days).padStart(2, '0');
      tickerHours.textContent = String(hours).padStart(2, '0');
      tickerMinutes.textContent = String(minutes).padStart(2, '0');
      tickerSeconds.textContent = String(seconds).padStart(2, '0');
    }

    updateTicker();
    countdownInterval = setInterval(updateTicker, 1000);
  }

  startLoveCounter();

  function playRomanticChime() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;

      const ctx = new AudioCtx();

      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(523.25, ctx.currentTime);
      osc1.frequency.exponentialRampToValueAtTime(1046.50, ctx.currentTime + 0.5);
      gain1.gain.setValueAtTime(0.08, ctx.currentTime);
      gain1.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.7);

      osc1.connect(gain1);
      gain1.connect(ctx.destination);

      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(659.25, ctx.currentTime + 0.15);
      osc2.frequency.exponentialRampToValueAtTime(1318.51, ctx.currentTime + 0.65);
      gain2.gain.setValueAtTime(0, ctx.currentTime);
      gain2.gain.setValueAtTime(0.08, ctx.currentTime + 0.15);
      gain2.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.85);

      osc2.connect(gain2);
      gain2.connect(ctx.destination);

      osc1.start(ctx.currentTime);
      osc1.stop(ctx.currentTime + 0.7);

      osc2.start(ctx.currentTime + 0.15);
      osc2.stop(ctx.currentTime + 0.85);
    } catch (e) {
      console.warn("AudioContext blocked or unsupported until interaction.", e);
    }
  }

  const loveJarTrigger = document.getElementById('love-jar-trigger');
  const btnDrawFromHero = document.getElementById('btn-draw-from-hero');
  const heroBtnSecondary = document.getElementById('hero-btn-secondary');

  const drawnNotePlaceholder = document.getElementById('drawn-note-placeholder');
  const drawnNotePanel = document.getElementById('drawn-note-panel');
  const drawnNoteText = document.getElementById('drawn-note-text');
  const jarPromptText = document.getElementById('jar-prompt');

  const pinboardGrid = document.getElementById('pinboard-sticky-notes-container');
  const pinboardEmpty = document.getElementById('pinboard-empty');
  const clearPinboardBtn = document.getElementById('clear-pinboard-btn');

  let pinnedNotes = JSON.parse(localStorage.getItem('pinnedNotes')) || [];
  const noteColors = ['cream', 'pink', 'sage', 'lavender', 'blue'];

  function renderPinboard() {
    if (!pinboardGrid) return;
    pinboardGrid.innerHTML = '';

    if (pinnedNotes.length === 0) {
      if (pinboardEmpty) pinboardEmpty.style.display = 'block';
      return;
    }

    if (pinboardEmpty) pinboardEmpty.style.display = 'none';

    pinnedNotes.forEach((note, index) => {
      const sticky = document.createElement('div');
      const color = note.color || noteColors[index % noteColors.length];
      if (!note.color) {
        note.color = color;
      }
      sticky.className = `sticky-note note-color-${color}`;

      const text = document.createElement('p');
      text.className = 'sticky-note-text';
      text.textContent = `"${note.text}"`;

      const footer = document.createElement('div');
      footer.className = 'sticky-note-footer';

      const author = document.createElement('span');
      author.className = 'sticky-note-author';
      author.textContent = '— From Heart';

      const date = document.createElement('span');
      date.className = 'sticky-note-date';
      date.textContent = note.date || new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric' });

      footer.appendChild(author);
      footer.appendChild(date);
      sticky.appendChild(text);
      sticky.appendChild(footer);

      pinboardGrid.appendChild(sticky);
    });
    localStorage.setItem('pinnedNotes', JSON.stringify(pinnedNotes));
  }

  if (clearPinboardBtn) {
    clearPinboardBtn.addEventListener('click', () => {
      pinnedNotes = [];
      localStorage.removeItem('pinnedNotes');
      renderPinboard();
      playRomanticChime();
    });
  }

  // Initial load rendering
  renderPinboard();

  function drawLoveNote() {

    const availableQuotes = config.quotes.filter(q => !drawnQuotesList.includes(q));

    let finalPool = availableQuotes.length > 0 ? availableQuotes : config.quotes;
    if (finalPool.length === 0) finalPool = defaultQuotes;

    const randomIndex = Math.floor(Math.random() * finalPool.length);
    const chosenQuote = finalPool[randomIndex];

    drawnQuotesList.push(chosenQuote);
    if (drawnQuotesList.length >= config.quotes.length) {
      drawnQuotesList = [];
    }

    playRomanticChime();

    const jar = loveJarTrigger.querySelector('.love-jar');
    jar.style.transform = 'scale(0.9) rotate(-8deg)';
    setTimeout(() => {
      jar.style.transform = 'scale(1.05) rotate(8deg)';
    }, 150);
    setTimeout(() => {
      jar.style.transform = 'scale(0.98) rotate(-4deg)';
    }, 300);
    setTimeout(() => {
      jar.style.transform = '';
    }, 450);

    drawnNotePanel.classList.remove('active');
    drawnNotePlaceholder.style.display = 'none';

    setTimeout(() => {
      drawnNoteText.textContent = `"${chosenQuote}"`;
      drawnNotePanel.style.display = 'block';

      drawnNotePanel.offsetHeight;

      drawnNotePanel.classList.add('active');
      jarPromptText.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="animation: heartBeat 0.6s infinite;"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg> Sweet compliment drawn! Tap again to draw another.`;

      // Auto pin note to Pinboard
      const isAlreadyPinned = pinnedNotes.some(n => n.text === chosenQuote);
      if (!isAlreadyPinned) {
        const newNote = {
          text: chosenQuote,
          date: new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
          color: noteColors[Math.floor(Math.random() * noteColors.length)]
        };
        pinnedNotes.push(newNote);
        localStorage.setItem('pinnedNotes', JSON.stringify(pinnedNotes));

        setTimeout(() => {
          renderPinboard();
          const pinboardSection = document.getElementById('pinboard-section');
          if (pinboardSection) {
            pinboardSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 1500);
      }
    }, 300);
  }

  loveJarTrigger.addEventListener('click', drawLoveNote);
  btnDrawFromHero.addEventListener('click', () => {
    drawLoveNote();
    document.getElementById('notes').scrollIntoView({ behavior: 'smooth' });
  });
  heroBtnSecondary.addEventListener('click', (e) => {
    e.preventDefault();
    drawLoveNote();
    document.getElementById('notes').scrollIntoView({ behavior: 'smooth' });
  });

  const heartEmitterBtn = document.getElementById('heart-emitter-btn');
  const heartParticlesLayer = document.getElementById('heart-particles-layer');
  const heartEmojis = ['💙', '💚', '✨', '🌅', '🌟', '💛', '🧡', '🌊', '🍀'];

  function emitHeartParticle() {
    const particle = document.createElement('span');
    particle.className = 'heart-particle';

    const randomEmoji = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    particle.textContent = randomEmoji;

    const leftOffset = Math.random() * 60 + 20;
    const duration = Math.random() * 1.5 + 2.5;
    const scale = Math.random() * 0.6 + 0.7;

    particle.style.left = `${leftOffset}%`;
    particle.style.bottom = `20px`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.fontSize = `${scale * 1.5}rem`;

    heartParticlesLayer.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, duration * 1000);
  }

  heartEmitterBtn.addEventListener('click', () => {

    for (let i = 0; i < 6; i++) {
      setTimeout(emitHeartParticle, i * 150);
    }

    playRomanticChime();
  });

  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxExpandedImg = document.getElementById('lightbox-expanded-img');
  const lightboxCaptionTitle = document.getElementById('lightbox-caption-title');
  const lightboxCaptionDesc = document.getElementById('lightbox-caption-desc');
  const closeLightboxBtn = document.getElementById('close-lightbox-btn');

  function openLightbox(item) {
    const imgSrc = item.getAttribute('data-image');
    const titleText = item.getAttribute('data-title');
    const descText = item.getAttribute('data-desc');

    lightboxExpandedImg.setAttribute('src', imgSrc);
    lightboxCaptionTitle.textContent = titleText;
    lightboxCaptionDesc.textContent = descText;

    lightboxModal.classList.add('active');
  }

  function closeLightbox() {
    lightboxModal.classList.remove('active');
  }

  galleryItems.forEach(item => {
    item.addEventListener('click', () => openLightbox(item));
  });

  closeLightboxBtn.addEventListener('click', closeLightbox);
  lightboxModal.addEventListener('click', (e) => {
    if (e.target === lightboxModal) {
      closeLightbox();
    }
  });

  const audioPlayer = document.getElementById('romantic-audio-player');

  const settingsModal = document.getElementById('settings-modal');
  const openSettingsBtn = document.getElementById('open-settings-btn');
  const closeSettingsBtn = document.getElementById('close-settings-btn');
  const cancelSettingsBtn = document.getElementById('cancel-settings-btn');
  const saveSettingsBtn = document.getElementById('save-settings-btn');

  const formHerName = document.getElementById('settings-her-name');
  const formStartDate = document.getElementById('settings-start-date');
  const formNewQuote = document.getElementById('settings-new-quote');
  const formSunsetMood = document.getElementById('settings-sunset-mood');
  const floatingSunsetSlider = document.getElementById('sunset-widget-input');

  if (floatingSunsetSlider) {
    floatingSunsetSlider.addEventListener('input', (e) => {
      applySunsetMood(parseFloat(e.target.value));
    });
  }
  if (formSunsetMood) {
    formSunsetMood.addEventListener('input', (e) => {
      applySunsetMood(parseFloat(e.target.value));
    });
  }

  // Helper to compress selected files using standard high-perf HTML5 canvas
  function compressImage(file, maxWidth = 800, maxHeight = 800, quality = 0.7) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = function (event) {
        const img = new Image();
        img.onload = function () {
          let width = img.width;
          let height = img.height;

          // Resize relative to limits
          if (width > height) {
            if (width > maxWidth) {
              height = Math.round((height * maxWidth) / width);
              width = maxWidth;
            }
          } else {
            if (height > maxHeight) {
              width = Math.round((width * maxHeight) / height);
              height = maxHeight;
            }
          }

          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;

          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);

          // Get compressed Base64 string
          const dataUrl = canvas.toDataURL('image/jpeg', quality);
          resolve(dataUrl);
        };
        img.onerror = function () {
          reject(new Error("Failed to load image for compression."));
        };
        img.src = event.target.result;
      };
      reader.onerror = function () {
        reject(new Error("Failed to read image file."));
      };
      reader.readAsDataURL(file);
    });
  }

  function openSettings() {
    formHerName.value = config.herName === 'Criszyl' ? '' : config.herName;
    formStartDate.value = config.startDate;
    formNewQuote.value = '';
    if (formSunsetMood) formSunsetMood.value = config.sunsetMood;

    // Load custom letter content
    const letterTextEl = document.getElementById('settings-letter-text');
    if (letterTextEl) letterTextEl.value = config.letterText;

    const letterSigEl = document.getElementById('settings-letter-signature');
    if (letterSigEl) letterSigEl.value = config.letterSignature;

    // Load memory cards content
    for (let i = 1; i <= 3; i++) {
      const titleInput = document.getElementById(`settings-gallery-title-${i}`);
      const captionInput = document.getElementById(`settings-gallery-caption-${i}`);
      const subInput = document.getElementById(`settings-gallery-sub-${i}`);
      const descInput = document.getElementById(`settings-gallery-desc-${i}`);
      const urlInput = document.getElementById(`settings-gallery-url-${i}`);
      const fileBtnText = document.getElementById(`file-btn-text-${i}`);

      const cardData = config.galleryData[i - 1];
      if (cardData) {
        if (titleInput) titleInput.value = cardData.title || '';
        if (captionInput) captionInput.value = cardData.caption || '';
        if (subInput) subInput.value = cardData.sub || '';
        if (descInput) descInput.value = cardData.desc || '';
        if (urlInput) {
          urlInput.value = (cardData.img && cardData.img.startsWith('data:')) ? '' : cardData.img;
        }
      }

      if (fileBtnText) {
        fileBtnText.textContent = "📁 Upload Image file";
        fileBtnText.style.borderColor = '';
        fileBtnText.style.color = '';
      }

      const fileInput = document.getElementById(`settings-gallery-file-${i}`);
      if (fileInput) fileInput.value = '';
    }

    // Sync active theme buttons
    const themeBtns = document.querySelectorAll('.theme-btn');
    themeBtns.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-theme-value') === config.theme);
    });

    settingsModal.classList.add('active');
  }

  function closeSettings() {
    settingsModal.classList.remove('active');
    // Reapply theme from configuration just in case user previewed and cancelled
    applyTheme(config.theme);
  }

  async function saveSettings() {
    const saveBtn = document.getElementById('save-settings-btn');
    const originalText = saveBtn ? saveBtn.textContent : 'Save Changes';

    if (saveBtn) {
      saveBtn.disabled = true;
      saveBtn.textContent = 'Optimizing & Saving...';
      saveBtn.style.opacity = '0.7';
    }

    try {
      const updatedName = formHerName.value.trim() || 'Criszyl';
      const updatedDate = formStartDate.value || '2026-01-08';
      const newQuoteText = formNewQuote.value.trim();
      const updatedSunsetMood = formSunsetMood ? parseFloat(formSunsetMood.value) : 50;

      const updatedLetterText = document.getElementById('settings-letter-text')?.value.trim() || defaultLetterText;
      const updatedLetterSignature = document.getElementById('settings-letter-signature')?.value.trim() || 'From My Heart';

      // Theme Selection
      let selectedTheme = config.theme;
      const activeThemeBtn = document.querySelector('.theme-btn.active');
      if (activeThemeBtn) {
        selectedTheme = activeThemeBtn.getAttribute('data-theme-value');
      }

      // Memory Cards Update
      const updatedGalleryData = [...config.galleryData];
      for (let i = 1; i <= 3; i++) {
        const titleInput = document.getElementById(`settings-gallery-title-${i}`);
        const captionInput = document.getElementById(`settings-gallery-caption-${i}`);
        const subInput = document.getElementById(`settings-gallery-sub-${i}`);
        const descInput = document.getElementById(`settings-gallery-desc-${i}`);
        const urlInput = document.getElementById(`settings-gallery-url-${i}`);
        const fileInput = document.getElementById(`settings-gallery-file-${i}`);

        if (titleInput && captionInput && subInput && descInput) {
          let imgVal = updatedGalleryData[i - 1].img; // existing default

          if (fileInput && fileInput.files && fileInput.files[0]) {
            try {
              imgVal = await compressImage(fileInput.files[0]);
            } catch (err) {
              console.error("Compression error:", err);
            }
          } else if (urlInput && urlInput.value.trim()) {
            imgVal = urlInput.value.trim();
          }

          updatedGalleryData[i - 1] = {
            title: titleInput.value.trim() || updatedGalleryData[i - 1].title,
            caption: captionInput.value.trim() || updatedGalleryData[i - 1].caption,
            sub: subInput.value.trim() || updatedGalleryData[i - 1].sub,
            desc: descInput.value.trim() || updatedGalleryData[i - 1].desc,
            img: imgVal
          };
        }
      }

      config.herName = updatedName;
      config.startDate = updatedDate;
      config.sunsetMood = updatedSunsetMood;
      config.letterText = updatedLetterText;
      config.letterSignature = updatedLetterSignature;
      config.theme = selectedTheme;
      config.galleryData = updatedGalleryData;

      localStorage.setItem('herName', updatedName);
      localStorage.setItem('startDate', updatedDate);
      localStorage.setItem('sunsetMood', updatedSunsetMood);
      localStorage.setItem('letterText', updatedLetterText);
      localStorage.setItem('letterSignature', updatedLetterSignature);
      localStorage.setItem('theme', selectedTheme);
      localStorage.setItem('galleryData', JSON.stringify(updatedGalleryData));

      if (newQuoteText) {
        config.quotes.push(newQuoteText);
        localStorage.setItem('quotes', JSON.stringify(config.quotes));
      }

      applySunsetMood(updatedSunsetMood);
      updateConfiguredUI();
      startLoveCounter();

      closeSettings();
      playRomanticChime();
    } catch (e) {
      console.error("Failed to save settings:", e);
    } finally {
      if (saveBtn) {
        saveBtn.disabled = false;
        saveBtn.textContent = originalText;
        saveBtn.style.opacity = '';
      }
    }
  }

  // Theme selection changes in Settings - Live Preview!
  const themeButtons = document.querySelectorAll('.theme-btn');
  themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      themeButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const themeVal = btn.getAttribute('data-theme-value');
      applyTheme(themeVal);
    });
  });

  // Bind file picked event labels
  for (let i = 1; i <= 3; i++) {
    const fileInput = document.getElementById(`settings-gallery-file-${i}`);
    const fileBtnText = document.getElementById(`file-btn-text-${i}`);
    if (fileInput && fileBtnText) {
      fileInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files[0]) {
          fileBtnText.textContent = `Selected: ${e.target.files[0].name}`;
          fileBtnText.style.borderColor = 'var(--primary)';
          fileBtnText.style.color = '#fff';
        } else {
          fileBtnText.textContent = "📁 Upload Image file";
          fileBtnText.style.borderColor = '';
          fileBtnText.style.color = '';
        }
      });
    }
  }

  openSettingsBtn.addEventListener('click', openSettings);
  closeSettingsBtn.addEventListener('click', closeSettings);
  cancelSettingsBtn.addEventListener('click', closeSettings);
  saveSettingsBtn.addEventListener('click', saveSettings);

  settingsModal.addEventListener('click', (e) => {
    if (e.target === settingsModal) {
      closeSettings();
    }
  });

  const header = document.getElementById('main-header');
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
  const mobileDrawerOverlay = document.getElementById('mobile-drawer-overlay');

  // Toggle mobile navigation drawer
  function toggleMobileDrawer() {
    if (mobileMenuToggle && mobileNavDrawer) {
      const isActive = mobileNavDrawer.classList.toggle('active');
      mobileMenuToggle.classList.toggle('active', isActive);

      // Prevent body scrolling when menu is active
      document.body.style.overflow = isActive ? 'hidden' : '';
    }
  }

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', toggleMobileDrawer);
  }

  if (mobileDrawerOverlay) {
    mobileDrawerOverlay.addEventListener('click', toggleMobileDrawer);
  }

  // Handle drawer navigation links auto-dismiss
  drawerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        toggleMobileDrawer();

        // Let drawer animation slide back before scrolling for standard browser flow
        setTimeout(() => {
          const offsetTop = targetSection.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }, 350);
      }
    });
  });

  // Handle window resizing auto-close
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && mobileNavDrawer && mobileNavDrawer.classList.contains('active')) {
      mobileNavDrawer.classList.remove('active');
      if (mobileMenuToggle) mobileMenuToggle.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    let currentSectionId = '';
    sections.forEach(sec => {
      const secTop = sec.offsetTop - 120;
      const secHeight = sec.offsetHeight;
      if (window.scrollY >= secTop && window.scrollY < secTop + secHeight) {
        currentSectionId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });

    drawerLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');

        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  const scrollElements = document.querySelectorAll('.reveal-on-scroll');
  scrollElements.forEach(el => {
    revealObserver.observe(el);
  });

  const introCover = document.getElementById('intro-cover');
  const btnEnterSite = document.getElementById('btn-enter-site');

  if (btnEnterSite && introCover && audioPlayer) {
    btnEnterSite.addEventListener('click', () => {

      audioPlayer.play()
        .catch(err => {
          console.warn("Local MP3 file 'assets/fitterkarma - Kalapastangan.mp3' not found or blocked. Playing romantic fallback piano stream...", err);

          audioPlayer.src = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
          audioPlayer.play().catch(e => console.error("Fallback play failed:", e));
        });

      playRomanticChime();

      introCover.classList.add('fade-out');

      setTimeout(() => {
        introCover.remove();
      }, 1000);
    });
  }

  // Atmospheric Canvas Particle Emitter
  const canvas = document.getElementById('ambient-particles-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const maxParticles = 65;

    class Particle {
      constructor() {
        this.reset(true);
      }

      reset(init = false) {
        this.x = Math.random() * width;
        this.y = init ? Math.random() * height : height + 20;
        this.size = Math.random() * 2 + 1.5;
        this.speedX = Math.random() * 0.6 - 0.3;
        this.speedY = -(Math.random() * 0.8 + 0.4);

        const mood = config.sunsetMood;
        if (mood <= 33) {
          this.type = 'firefly';
          this.color = `hsla(${120 + Math.random() * 50}, 90%, 65%, ${Math.random() * 0.4 + 0.3})`;
          this.pulseSpeed = Math.random() * 0.03 + 0.015;
          this.angle = Math.random() * Math.PI * 2;
          this.angleSpeed = Math.random() * 0.02 - 0.01;
          this.speedY = -(Math.random() * 0.4 + 0.3);
        } else if (mood <= 66) {
          this.type = 'stardust';
          this.color = `hsla(${30 + Math.random() * 20}, 100%, 75%, ${Math.random() * 0.5 + 0.4})`;
          this.speedX = -(Math.random() * 0.4 + 0.3);
          this.speedY = -(Math.random() * 0.4 + 0.3);
          this.twinkleSpeed = Math.random() * 0.06 + 0.03;
          this.alpha = Math.random();
        } else {
          this.type = 'sakura';
          this.color = `hsla(${335 + Math.random() * 30}, 95%, 78%, ${Math.random() * 0.35 + 0.35})`;
          this.size = Math.random() * 5 + 4;
          this.y = init ? Math.random() * height : -20;
          this.speedX = Math.random() * 0.5 + 0.3;
          this.speedY = Math.random() * 0.5 + 0.7;
          this.wobble = Math.random() * Math.PI;
          this.wobbleSpeed = Math.random() * 0.03 + 0.01;
          this.rotation = Math.random() * Math.PI;
          this.rotationSpeed = Math.random() * 0.02 - 0.01;
        }

        this.life = 1.0;
        this.fadeOut = false;
      }

      update() {
        const mood = config.sunsetMood;
        const currentTargetType = mood <= 33 ? 'firefly' : (mood <= 66 ? 'stardust' : 'sakura');

        if (this.type !== currentTargetType) {
          this.fadeOut = true;
        }

        if (this.fadeOut) {
          this.life -= 0.04;
          if (this.life <= 0) {
            this.reset(false);
            return;
          }
        }

        if (this.type === 'firefly') {
          this.angle += this.angleSpeed;
          this.x += this.speedX + Math.sin(this.angle) * 0.2;
          this.y += this.speedY;
          this.pulse = Math.sin(Date.now() * this.pulseSpeed) * 0.3 + 0.7;

          if (this.y < -20 || this.x < -20 || this.x > width + 20) {
            this.reset(false);
          }
        } else if (this.type === 'stardust') {
          this.x += this.speedX;
          this.y += this.speedY;
          this.alpha += this.twinkleSpeed;
          this.opacity = Math.abs(Math.sin(this.alpha)) * 0.6 + 0.2;

          if (this.y < -20 || this.x < -20) {
            this.reset(false);
          }
        } else if (this.type === 'sakura') {
          this.wobble += this.wobbleSpeed;
          this.rotation += this.rotationSpeed;
          this.x += this.speedX + Math.sin(this.wobble) * 0.3;
          this.y += this.speedY;

          if (this.y > height + 20 || this.x > width + 20) {
            this.reset(false);
          }
        }
      }

      draw() {
        ctx.save();
        const opacity = (this.fadeOut ? this.life : 1);

        if (this.type === 'firefly') {
          ctx.beginPath();
          const finalOpacity = opacity * this.pulse;
          ctx.fillStyle = this.color.replace(/[\d\.]+\)$/, `${finalOpacity * 0.6})`);
          // Inner glow core
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();

          // Outer bloom glow
          ctx.beginPath();
          ctx.fillStyle = this.color.replace(/[\d\.]+\)$/, `${finalOpacity * 0.15})`);
          ctx.arc(this.x, this.y, this.size * 3.5, 0, Math.PI * 2);
          ctx.fill();
        } else if (this.type === 'stardust') {
          ctx.beginPath();
          const finalOpacity = opacity * this.opacity;
          ctx.fillStyle = this.color.replace(/[\d\.]+\)$/, `${finalOpacity})`);
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        } else if (this.type === 'sakura') {
          ctx.translate(this.x, this.y);
          ctx.rotate(this.rotation);
          ctx.beginPath();
          ctx.fillStyle = this.color.replace(/[\d\.]+\)$/, `${opacity * 0.55})`);
          // Draw an elegant elongated leaf/petal shape
          ctx.ellipse(0, 0, this.size, this.size * 0.45, 0, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
    }

    for (let i = 0; i < maxParticles; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    }
    animate();
  }

});
