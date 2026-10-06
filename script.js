/**
 * ==============================================================================
 * HEY KEERTHU (DORA) 🐼✨ - EVERYTHING WILL BE ALRIGHT
 * Single-Page Interactive Friendly Cheer Experience
 * Vanilla JavaScript (No Frameworks)
 * ==============================================================================
 */

'use strict';

/* ==============================================================================
   CONFIG - EASY CUSTOMIZATION SECTION
   Friendly, platonic, supportive tone. Easily editable!
   ============================================================================== */
const CONFIG = {
  // Friend Details
  name: "Keerthu",
  nickname: "Dora",
  
  // Hero Section
  heroTitle: "Hey Keerthu (Dora) 🐼✨",
  heroSubtitle: "Everything will be alright. You are an awesome friend, strong, and you've got this!",
  badgeText: "Your personal cheer squad & safe space ✨",

  // Audio settings
  // Set audioSrc to your custom music file path (e.g., "music.mp3") if you have one.
  // If left empty or file not found, the built-in gentle lofi music-box synthesizer plays!
  audioSrc: "", 

  // Speech bubble messages for the 6 hero dancing pandas
  pandaQuotes: [
    "Stay smiling, Dora! You're a rockstar! 🌸",
    "Sending you an awesome panda high-five! 🐾",
    "One step at a time, Keerthu. You got this! 🌟",
    "Dora the explorer, our adventure buddy! 🧭",
    "Tough days don't last, but tough Doras do! 💪",
    "Panda reminder: You are doing awesome! 🌟",
    "Take a break, grab a snack, and relax, pal! 🍵",
    "You make any hangout 100x funnier! 😂",
    "Always got your back, friend! 🐾"
  ],

  // 25+ Friendly Uplifting Affirmations for "Cheer Me Up"
  cheerMessages: [
    "You are stronger than you think and you handle things with great grit, Dora.",
    "Bad days are temporary. You'll bounce right back like a champion.",
    "One step at a time is still progress. Don't be too hard on yourself today.",
    "You are a truly fantastic friend, and people around you appreciate you tons.",
    "Keerthu, your sense of humor and quick wit make everyone's day better.",
    "You don’t have to have everything figured out right now. Just taking it easy is a win.",
    "Take a break, relax, and remember: you've tackled tough times before and won.",
    "Proud of how hard you try, even on days when nobody notices.",
    "It's completely okay to take a breather and recharge your batteries today.",
    "Your energy and determination are inspiring, Dora.",
    "No matter what's going on, remember your friends are always in your corner.",
    "Sending you high energy, warm tea, and positive vibes today.",
    "You're capable of incredible things, Keerthu. Don't let a rough day convince you otherwise.",
    "Dora the explorer never gave up, and neither will you! 🎒",
    "Take a deep breath, drop your shoulders, and smile. You've got this handled.",
    "Life is a marathon, not a sprint. Take your time, pal.",
    "Good times and great laughs are right around the corner.",
    "Big virtual high-five from the panda squad who knows you're a champion! 🙌",
    "Don't sweat the small stuff today. One thing at a time.",
    "Your friends are lucky to have someone as cool and reliable as you.",
    "You bring so much fun and energy wherever you go, Keerthu.",
    "Whatever stressed you out today, remember tomorrow is a fresh clean slate.",
    "Keep your head up, Dora. Everything is going to work out fine.",
    "Always cheering for you from the sidelines, pal! 🐾"
  ],

  // Mood Check-in Custom Friendly Responses
  moodResponses: {
    happy: {
      text: "Love that energy, Dora! Keep rocking and spreading those good vibes! 🌸✨",
      color: "#FF6B8B"
    },
    okay: {
      text: "Taking it easy is the way to go, pal. Grab a drink, chill out, and enjoy the day! 🍵",
      color: "#FF8DA1"
    },
    sad: {
      text: "Hey Dora, tough moments happen to everyone. Don't stress, take a breather, your friends have got your back! 🙌✨",
      color: "#FF477E"
    },
    overwhelmed: {
      text: "Time out! Close the stressful tabs, take 3 deep breaths with the Breathing Buddy, and take it one small step at a time. 🧘‍♀️🌸",
      color: "#A29BFE"
    },
    tired: {
      text: "You've worked super hard. Unplug, grab a nice nap or snack, and recharge like a sleepy panda! 😴🌙",
      color: "#6C5CE7"
    }
  },

  // Reasons You Are Awesome Cards (Friendly & Platonic)
  reasonsAwesome: [
    {
      title: "Your Infectious Energy",
      icon: "⚡",
      desc: "You bring good laughs, great vibes, and you always make conversations and hangouts memorable.",
      tag: "Pure Good Vibes ☀️"
    },
    {
      title: "Your Quiet Resilience",
      icon: "💪",
      desc: "You handle challenges like a champion and keep pushing forward even when things get tough.",
      tag: "Unstoppable 🌟"
    },
    {
      title: "A Truly Loyal Friend",
      icon: "🤝",
      desc: "You are dependable, honest, and you always stand up for the people you care about.",
      tag: "Top Tier Pal 🛡️"
    },
    {
      title: "Dora The Explorer",
      icon: "🎒",
      desc: "Curious, adventurous, full of fun ideas, and always ready for great stories and adventures!",
      tag: "True Explorer 🧭"
    },
    {
      title: "Great Sense of Humor",
      icon: "😂",
      desc: "Nobody cracks up at funny moments or drops witty remarks quite like Keerthu.",
      tag: "Instant Laughs 🎭"
    },
    {
      title: "An Awesome Person",
      icon: "⭐",
      desc: "Genuinely glad to have you in my corner as a great friend. Thanks for being you, Dora!",
      tag: "Rockstar Pal 💎"
    }
  ],

  // 22 Friendly Panda Stickers for the Interactive Sticker Wall
  stickers: [
    { id: 1, icon: "🐼⭐", label: "Star Buddy", desc: "Panda with glowing star" },
    { id: 2, icon: "🐼🎈", label: "Pink Balloon", desc: "Panda floating with balloon" },
    { id: 3, icon: "🐼🎋", label: "Bamboo Muncher", desc: "Panda eating fresh bamboo" },
    { id: 4, icon: "🐼☁️", label: "Cloud Snoozer", desc: "Panda sleeping on soft cloud" },
    { id: 5, icon: "🐼🧋", label: "Boba Lover", desc: "Panda with cute boba drink" },
    { id: 6, icon: "🐼🌈", label: "Rainbow Dreamer", desc: "Panda sliding on rainbow" },
    { id: 7, icon: "🐼🌸", label: "Flower Buddy", desc: "Panda holding cherry blossom" },
    { id: 8, icon: "🐼🧸", label: "Teddy Cuddles", desc: "Panda cuddling teddy bear" },
    { id: 9, icon: "🐼🍵", label: "Warm Matcha", desc: "Panda sipping warm green tea" },
    { id: 10, icon: "🐼☕", label: "Coffee Break", desc: "Panda enjoying hot coffee" },
    { id: 11, icon: "🐼🍓", label: "Sweet Berry", desc: "Panda with giant strawberry" },
    { id: 12, icon: "🐼🎧", label: "Lofi Beats", desc: "Panda chilling with headphones" },
    { id: 13, icon: "🐼🌙", label: "Night Owl", desc: "Panda wishing sweet dreams" },
    { id: 14, icon: "🐼🍕", label: "Pizza Pal", desc: "Panda sharing slice of pizza" },
    { id: 15, icon: "🐼🎮", label: "Gamer Panda", desc: "Panda playing video games" },
    { id: 16, icon: "🐼🛹", label: "Skater Panda", desc: "Panda cruising on skateboard" },
    { id: 17, icon: "🐼🌻", label: "Sunseeker", desc: "Panda hugging tall sunflower" },
    { id: 18, icon: "🐼🍩", label: "Donut Joy", desc: "Panda sitting in giant donut" },
    { id: 19, icon: "🐼👑", label: "Champion Dora", desc: "Panda wearing champion tiara" },
    { id: 20, icon: "🐼🐾", label: "High Five!", desc: "Panda giving warm high-five" },
    { id: 21, icon: "🐼🎁", label: "Surprise Gift", desc: "Panda holding ribbon box" },
    { id: 22, icon: "🐼🦋", label: "Butterfly Buddy", desc: "Panda greeting gentle butterfly" }
  ],

  // Personal Friend's Letter Section
  letter: {
    greeting: "Hey Keerthu (Dora),",
    paragraphs: [
      "I know that recently things might have felt pretty overwhelming, busy, or draining. Sometimes life throws a lot of stuff our way all at once.",
      "I put together this little fun page to give you a quick boost of good vibes and remind you of something important: everything will be alright, and you've got this!",
      "You don't always have to have everything sorted out 100% of the time. It's completely fine to have off days, take a break, and just chill without worrying.",
      "You're a strong person, a truly great friend, and you handle things with awesome resilience. Don't forget that whenever things feel hectic.",
      "Whenever you need a laugh or a quick distraction, jump back on here, play with the pandas, take a deep breath, and remember that as your friend, I'm always cheering you on."
    ],
    closing: "Always got your back, friend,",
    signature: "From: your buddy 🐾✨"
  }
};


/* ==============================================================================
   STATE MANAGEMENT
   ============================================================================== */
const state = {
  isMusicPlaying: false,
  isSfxEnabled: true,
  audioContext: null,
  musicTimer: null,
  currentCheerIndex: 0,
  breathingTimer: null,
  breathSeconds: 4,
  isBreathingIn: true,
  isBreathingPaused: false,
  gratitudeNotes: [],
  envelopeOpen: false
};


/* ==============================================================================
   WEB AUDIO API SOUND GENERATOR (Zero dependencies, works offline!)
   ============================================================================== */
class SoundEngine {
  constructor() {
    this.ctx = null;
    this.musicGain = null;
    this.sfxGain = null;
    this.isPlayingLofi = false;
    this.lofiTimer = null;
    this.currentStep = 0;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.musicGain = this.ctx.createGain();
        this.musicGain.gain.setValueAtTime(0.18, this.ctx.currentTime);
        this.musicGain.connect(this.ctx.destination);

        this.sfxGain = this.ctx.createGain();
        this.sfxGain.gain.setValueAtTime(0.25, this.ctx.currentTime);
        this.sfxGain.connect(this.ctx.destination);
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playPop(freq = 520) {
    if (!state.isSfxEnabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.6, this.ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.28, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.1);

      osc.connect(gain);
      gain.connect(this.sfxGain);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.1);
    } catch (e) {
      console.warn("Audio pop suppressed:", e);
    }
  }

  playChime(noteFreq = 659.25) {
    if (!state.isSfxEnabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(noteFreq, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.6);

      osc.connect(gain);
      gain.connect(this.sfxGain);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.65);
    } catch (e) {
      console.warn("Audio chime suppressed:", e);
    }
  }

  startLofiMusic() {
    this.init();
    if (!this.ctx) return;
    this.isPlayingLofi = true;

    const scale = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25];
    const melody = [
      [2, 4, 7],
      [0, 2, 5],
      [3, 5, 7],
      [1, 4, 6],
      [0, 3, 5],
      [2, 4, 7]
    ];

    const playNextBar = () => {
      if (!this.isPlayingLofi || !this.ctx) return;

      const chordIndices = melody[this.currentStep % melody.length];
      this.currentStep++;

      chordIndices.forEach((noteIdx, i) => {
        const delay = i * 0.35;
        const freq = scale[noteIdx];

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + delay);

        gain.gain.setValueAtTime(0.001, this.ctx.currentTime + delay);
        gain.gain.linearRampToValueAtTime(0.08, this.ctx.currentTime + delay + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + delay + 1.2);

        osc.connect(gain);
        gain.connect(this.musicGain);

        osc.start(this.ctx.currentTime + delay);
        osc.stop(this.ctx.currentTime + delay + 1.3);
      });

      this.lofiTimer = setTimeout(playNextBar, 1600);
    };

    playNextBar();
  }

  stopLofiMusic() {
    this.isPlayingLofi = false;
    if (this.lofiTimer) {
      clearTimeout(this.lofiTimer);
      this.lofiTimer = null;
    }
  }
}

const sounds = new SoundEngine();


/* ==============================================================================
   AMBIENT BACKGROUND CANVAS PARTICLES (Floating stars, clovers, petals, bamboo)
   No hearts - purely friendly, cheerful, soothing symbols!
   ============================================================================== */
class AmbientCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.particleCount = 38;
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());

    // Particles: golden stars, soft petals, lucky clovers, bamboo leaves
    const types = ['star', 'petal', 'clover', 'bamboo'];
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push(this.createParticle(types[i % types.length], true));
    }

    this.animate();
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  createParticle(type, randomY = false) {
    return {
      type: type,
      x: Math.random() * this.width,
      y: randomY ? Math.random() * this.height : this.height + 20,
      size: Math.random() * 12 + 8,
      speedY: -(Math.random() * 0.75 + 0.35),
      speedX: (Math.random() - 0.5) * 0.6,
      opacity: Math.random() * 0.45 + 0.25,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.02,
      color: this.getRandomColor(type)
    };
  }

  getRandomColor(type) {
    if (type === 'star') {
      return 'rgba(255, 215, 0, 0.55)'; // Gold
    } else if (type === 'clover' || type === 'bamboo') {
      return 'rgba(56, 217, 169, 0.45)'; // Mint / Clover green
    }
    const pinks = ['rgba(255, 141, 161, 0.45)', 'rgba(255, 182, 193, 0.5)', 'rgba(255, 209, 220, 0.45)'];
    return pinks[Math.floor(Math.random() * pinks.length)];
  }

  drawParticle(p) {
    this.ctx.save();
    this.ctx.translate(p.x, p.y);
    this.ctx.rotate(p.rotation);
    this.ctx.globalAlpha = p.opacity;

    if (p.type === 'star') {
      this.drawStar(p.size, p.color);
    } else if (p.type === 'clover') {
      this.drawClover(p.size, p.color);
    } else if (p.type === 'petal') {
      this.drawPetal(p.size, p.color);
    } else {
      this.drawBambooLeaf(p.size, p.color);
    }

    this.ctx.restore();
  }

  drawStar(size, color) {
    this.ctx.fillStyle = color;
    this.ctx.beginPath();
    for (let i = 0; i < 5; i++) {
      this.ctx.lineTo(Math.cos((18 + i * 72) * Math.PI / 180) * size, -Math.sin((18 + i * 72) * Math.PI / 180) * size);
      this.ctx.lineTo(Math.cos((54 + i * 72) * Math.PI / 180) * (size / 2), -Math.sin((54 + i * 72) * Math.PI / 180) * (size / 2));
    }
    this.ctx.closePath();
    this.ctx.fill();
  }

  drawClover(size, color) {
    this.ctx.fillStyle = color;
    const r = size * 0.4;
    // Four small circular leaves
    this.ctx.beginPath();
    this.ctx.arc(-r, 0, r, 0, Math.PI * 2);
    this.ctx.arc(r, 0, r, 0, Math.PI * 2);
    this.ctx.arc(0, -r, r, 0, Math.PI * 2);
    this.ctx.arc(0, r, r, 0, Math.PI * 2);
    this.ctx.fill();
  }

  drawPetal(size, color) {
    this.ctx.fillStyle = color;
    this.ctx.beginPath();
    this.ctx.ellipse(0, 0, size * 0.45, size * 0.8, Math.PI / 4, 0, Math.PI * 2);
    this.ctx.fill();
  }

  drawBambooLeaf(size, color) {
    this.ctx.fillStyle = color;
    this.ctx.beginPath();
    this.ctx.moveTo(0, -size);
    this.ctx.quadraticCurveTo(size * 0.3, 0, 0, size);
    this.ctx.quadraticCurveTo(-size * 0.3, 0, 0, -size);
    this.ctx.fill();
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      p.y += p.speedY;
      p.x += p.speedX;
      p.rotation += p.rotationSpeed;

      if (p.y < -30 || p.x < -30 || p.x > this.width + 30) {
        this.particles[i] = this.createParticle(p.type, false);
      }

      this.drawParticle(p);
    }

    requestAnimationFrame(() => this.animate());
  }
}


/* ==============================================================================
   CONFETTI BURST SYSTEM (Stars, diamonds, circles, ribbons - zero hearts)
   ============================================================================== */
class ConfettiEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.pieces = [];
    this.isBursting = false;
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  burst(x = window.innerWidth / 2, y = window.innerHeight / 2, count = 70) {
    const colors = ['#FFD700', '#FF8DA1', '#55EFC4', '#A29BFE', '#FF7597', '#FFEAA7'];
    const shapes = ['star', 'circle', 'ribbon', 'diamond'];

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 12 + 4;
      this.pieces.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 5,
        gravity: 0.38,
        friction: 0.96,
        size: Math.random() * 12 + 7,
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.25,
        opacity: 1
      });
    }

    if (!this.isBursting) {
      this.isBursting = true;
      this.animate();
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.pieces.length - 1; i >= 0; i--) {
      const p = this.pieces[i];
      p.vx *= p.friction;
      p.vy *= p.friction;
      p.vy += p.gravity;
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.rotSpeed;
      p.opacity -= 0.012;

      if (p.opacity <= 0 || p.y > this.canvas.height + 50) {
        this.pieces.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate(p.rotation);
      this.ctx.globalAlpha = Math.max(0, p.opacity);
      this.ctx.fillStyle = p.color;

      if (p.shape === 'star') {
        this.drawStar(p.size);
      } else if (p.shape === 'circle') {
        this.ctx.beginPath();
        this.ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        this.ctx.fill();
      } else if (p.shape === 'diamond') {
        this.drawDiamond(p.size);
      } else {
        this.ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
      }

      this.ctx.restore();
    }

    if (this.pieces.length > 0) {
      requestAnimationFrame(() => this.animate());
    } else {
      this.isBursting = false;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }

  drawStar(size) {
    this.ctx.beginPath();
    for (let i = 0; i < 5; i++) {
      this.ctx.lineTo(Math.cos((18 + i * 72) * Math.PI / 180) * size, -Math.sin((18 + i * 72) * Math.PI / 180) * size);
      this.ctx.lineTo(Math.cos((54 + i * 72) * Math.PI / 180) * (size / 2), -Math.sin((54 + i * 72) * Math.PI / 180) * (size / 2));
    }
    this.ctx.closePath();
    this.ctx.fill();
  }

  drawDiamond(size) {
    this.ctx.beginPath();
    this.ctx.moveTo(0, -size);
    this.ctx.lineTo(size * 0.6, 0);
    this.ctx.lineTo(0, size);
    this.ctx.lineTo(-size * 0.6, 0);
    this.ctx.closePath();
    this.ctx.fill();
  }
}

let confetti = null;


/* ==============================================================================
   MOUSE / TOUCH CURSOR FOLLOWER TRAIL (Stars, clovers, sparkles, paws)
   ============================================================================== */
function setupCursorTrail() {
  const trailContainer = document.getElementById('cursor-trail');
  if (!trailContainer) return;

  let lastX = 0;
  let lastY = 0;
  let throttle = 0;
  const icons = ['✨', '⭐', '🐾', '🌸', '🍀', '🌟'];

  const spawnTrailItem = (x, y) => {
    const dist = Math.hypot(x - lastX, y - lastY);
    if (dist < 22) return;
    lastX = x;
    lastY = y;

    const el = document.createElement('div');
    el.className = 'cursor-particle';
    el.textContent = icons[Math.floor(Math.random() * icons.length)];
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    el.style.fontSize = `${Math.random() * 0.7 + 0.9}rem`;

    trailContainer.appendChild(el);
    setTimeout(() => {
      if (el.parentNode) el.parentNode.removeChild(el);
    }, 900);
  };

  window.addEventListener('mousemove', (e) => {
    throttle++;
    if (throttle % 2 === 0) spawnTrailItem(e.clientX, e.clientY);
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches[0]) {
      spawnTrailItem(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });
}


/* ==============================================================================
   HERO & TYPEWRITER SUBTITLE EFFECT
   ============================================================================== */
function setupHeroTypewriter() {
  const subtitleEl = document.getElementById('typewriter-subtitle');
  if (!subtitleEl) return;

  const fullText = CONFIG.heroSubtitle;
  subtitleEl.textContent = '';
  let index = 0;

  const typeChar = () => {
    if (index < fullText.length) {
      subtitleEl.textContent += fullText.charAt(index);
      index++;
      setTimeout(typeChar, 34);
    }
  };

  setTimeout(typeChar, 400);
}


/* ==============================================================================
   DANCING PANDAS INTERACTION & SPEECH BUBBLES
   ============================================================================== */
function setupDancingPandas() {
  const pandaCards = document.querySelectorAll('.panda-card');

  pandaCards.forEach((card, idx) => {
    const pandaChar = card.querySelector('.panda-character');
    const bubble = card.querySelector('.speech-bubble');

    const triggerPandaCheer = (e) => {
      e.preventDefault();
      sounds.playPop(500 + idx * 45);

      if (pandaChar) {
        pandaChar.classList.remove('panda-celebrating');
        void pandaChar.offsetWidth;
        pandaChar.classList.add('panda-celebrating');
      }

      const quote = CONFIG.pandaQuotes[Math.floor(Math.random() * CONFIG.pandaQuotes.length)];
      if (bubble) {
        bubble.textContent = quote;
        card.classList.add('active-bubble');
        setTimeout(() => card.classList.remove('active-bubble'), 3200);
      }

      if (confetti) {
        const rect = card.getBoundingClientRect();
        confetti.burst(rect.left + rect.width / 2, rect.top + rect.height / 3, 25);
      }
    };

    card.addEventListener('click', triggerPandaCheer);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        triggerPandaCheer(e);
      }
    });
  });
}


/* ==============================================================================
   MOOD CHECK-IN SELECTOR
   ============================================================================== */
function setupMoodTracker() {
  const moodButtons = document.querySelectorAll('.mood-btn');
  const replyBox = document.getElementById('mood-reply-text');

  moodButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      moodButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const mood = btn.dataset.mood;
      sounds.playChime(580);

      if (CONFIG.moodResponses[mood] && replyBox) {
        const reply = CONFIG.moodResponses[mood];
        replyBox.style.opacity = '0';
        setTimeout(() => {
          replyBox.textContent = reply.text;
          replyBox.style.opacity = '1';
        }, 160);
      }

      if (confetti) {
        const rect = btn.getBoundingClientRect();
        confetti.burst(rect.left + rect.width / 2, rect.top, 20);
      }
    });
  });
}


/* ==============================================================================
   VIRTUAL HIGH FIVE / PANDA CHEER GENERATOR
   ============================================================================== */
function setupVirtualHug() {
  const hugBtnHero = document.getElementById('hug-btn-hero');
  const hugActionBtn = document.getElementById('hug-action-btn');
  const hugPanda = document.getElementById('hug-panda');
  const hugBanner = document.getElementById('hug-banner');

  const executeCheer = (btnSource) => {
    sounds.playChime(660);
    sounds.playPop(520);

    if (hugPanda) {
      hugPanda.classList.remove('hug-squeeze-anim');
      void hugPanda.offsetWidth;
      hugPanda.classList.add('hug-squeeze-anim');
      setTimeout(() => hugPanda.classList.remove('hug-squeeze-anim'), 3500);
    }

    if (hugBanner) {
      hugBanner.classList.add('show');
    }

    if (confetti) {
      const sourceRect = btnSource ? btnSource.getBoundingClientRect() : { left: window.innerWidth / 2, top: window.innerHeight / 2, width: 0, height: 0 };
      confetti.burst(sourceRect.left + sourceRect.width / 2, sourceRect.top + sourceRect.height / 2, 85);
      setTimeout(() => {
        confetti.burst(window.innerWidth / 2, window.innerHeight / 2.5, 60);
      }, 250);
    }
  };

  if (hugActionBtn) {
    hugActionBtn.addEventListener('click', (e) => executeCheer(e.currentTarget));
  }

  if (hugBtnHero) {
    hugBtnHero.addEventListener('click', (e) => {
      executeCheer(e.currentTarget);
      const hugSection = document.getElementById('hug-card');
      if (hugSection) {
        hugSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }
}


/* ==============================================================================
   CHEER ME UP / RANDOM AFFIRMATIONS
   ============================================================================== */
function setupCheerMeUp() {
  const cheerBtnHero = document.getElementById('cheer-btn-hero');
  const newCheerBtn = document.getElementById('new-cheer-btn');
  const quoteText = document.getElementById('affirmation-text');
  const copyBtn = document.getElementById('copy-quote-btn');
  const box = document.getElementById('affirmation-box');

  const getNewQuote = () => {
    sounds.playPop(560);
    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * CONFIG.cheerMessages.length);
    } while (nextIndex === state.currentCheerIndex && CONFIG.cheerMessages.length > 1);

    state.currentCheerIndex = nextIndex;

    if (box) {
      box.style.transform = 'scale(0.96)';
      setTimeout(() => box.style.transform = 'scale(1)', 180);
    }

    if (quoteText) {
      quoteText.style.opacity = '0';
      setTimeout(() => {
        quoteText.textContent = CONFIG.cheerMessages[state.currentCheerIndex];
        quoteText.style.opacity = '1';
      }, 180);
    }
  };

  if (newCheerBtn) {
    newCheerBtn.addEventListener('click', getNewQuote);
  }

  if (cheerBtnHero) {
    cheerBtnHero.addEventListener('click', () => {
      getNewQuote();
      const cheerCard = document.getElementById('cheer-card');
      if (cheerCard) {
        cheerCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const textToCopy = quoteText ? quoteText.textContent : '';
      if (navigator.clipboard && textToCopy) {
        navigator.clipboard.writeText(`"${textToCopy}" — Cheering for Keerthu (Dora) 🐾✨`).then(() => {
          sounds.playPop(750);
          const original = copyBtn.textContent;
          copyBtn.textContent = '✅';
          setTimeout(() => copyBtn.textContent = original, 1800);
        });
      }
    });
  }
}


/* ==============================================================================
   BREATHING BUDDY PANDA (4s Inhale, 4s Exhale)
   ============================================================================== */
function setupBreathingBuddy() {
  const circle = document.getElementById('breath-circle');
  const status = document.getElementById('breath-status');
  const timer = document.getElementById('breath-timer');
  const toggleBtn = document.getElementById('breath-toggle-btn');
  const btnIcon = document.getElementById('breath-btn-icon');
  const btnText = document.getElementById('breath-btn-text');
  const breathHeroBtn = document.getElementById('breath-btn-hero');

  let countdown = 4;
  let isInhaling = true;

  const tick = () => {
    if (state.isBreathingPaused) return;

    if (timer) timer.textContent = `${countdown}s`;

    if (countdown === 4) {
      if (isInhaling) {
        if (circle) {
          circle.classList.remove('exhale');
          circle.classList.add('inhale');
        }
        if (status) status.textContent = 'Breathe in calmly... 🌸';
      } else {
        if (circle) {
          circle.classList.remove('inhale');
          circle.classList.add('exhale');
        }
        if (status) status.textContent = 'Breathe out slowly... 🍃';
      }
    }

    countdown--;

    if (countdown < 0) {
      isInhaling = !isInhaling;
      countdown = 4;
    }
  };

  state.breathingTimer = setInterval(tick, 1000);
  tick();

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      sounds.playPop(480);
      state.isBreathingPaused = !state.isBreathingPaused;

      if (state.isBreathingPaused) {
        btnIcon.textContent = '▶️';
        btnText.textContent = 'Resume Breathing';
        if (status) status.textContent = 'Breathing paused';
      } else {
        btnIcon.textContent = '⏸️';
        btnText.textContent = 'Pause Breathing';
      }
    });
  }

  if (breathHeroBtn) {
    breathHeroBtn.addEventListener('click', () => {
      const bCard = document.getElementById('breathing-card');
      if (bCard) {
        bCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }
}


/* ==============================================================================
   GOOD VIBES & DAILY WINS JAR (With LocalStorage persistence)
   ============================================================================== */
function setupGratitudeJar() {
  const form = document.getElementById('jar-form');
  const input = document.getElementById('jar-input');
  const jarBody = document.getElementById('jar-body');
  const emptyState = document.getElementById('jar-empty-state');
  const counter = document.getElementById('notes-counter');

  const saved = localStorage.getItem('dora_gratitude_notes');
  if (saved) {
    try {
      state.gratitudeNotes = JSON.parse(saved);
    } catch (e) {
      state.gratitudeNotes = [];
    }
  }

  const updateJarDisplay = () => {
    if (!jarBody) return;

    const existing = jarBody.querySelectorAll('.jar-note-item');
    existing.forEach(e => e.remove());

    if (state.gratitudeNotes.length === 0) {
      if (emptyState) emptyState.style.display = 'block';
    } else {
      if (emptyState) emptyState.style.display = 'none';

      state.gratitudeNotes.forEach((noteText) => {
        const noteEl = document.createElement('div');
        noteEl.className = 'jar-note-item';
        noteEl.textContent = '⭐';
        noteEl.title = `"${noteText}" (Tap to read)`;
        noteEl.setAttribute('role', 'button');
        noteEl.setAttribute('tabindex', '0');

        noteEl.addEventListener('click', () => {
          sounds.playPop(620);
          alert(`⭐ Dora's Daily Win:\n\n"${noteText}"`);
        });

        jarBody.appendChild(noteEl);
      });
    }

    if (counter) counter.textContent = state.gratitudeNotes.length;
  };

  updateJarDisplay();

  if (form && input) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = input.value.trim();
      if (!val) return;

      sounds.playChime(720);
      sounds.playPop(520);

      state.gratitudeNotes.push(val);
      localStorage.setItem('dora_gratitude_notes', JSON.stringify(state.gratitudeNotes));

      input.value = '';
      updateJarDisplay();

      if (confetti) {
        const rect = form.getBoundingClientRect();
        confetti.burst(rect.left + rect.width / 2, rect.top, 30);
      }
    });
  }
}


/* ==============================================================================
   PANDA STICKER WALL (22 Stickers with Full Mouse & Touch Drag & Drop)
   ============================================================================== */
function setupStickerWall() {
  const board = document.getElementById('sticker-board');
  const addMoreBtn = document.getElementById('add-more-stickers-btn');
  const resetBtn = document.getElementById('reset-stickers-btn');
  const scatterBtn = document.getElementById('scatter-stickers-btn');

  if (!board) return;

  let highestZ = 20;

  const createStickerElement = (stickerData, x, y, rotation) => {
    const el = document.createElement('div');
    el.className = 'sticker-item sticker-pop-in';
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    el.style.transform = `rotate(${rotation}deg)`;
    el.dataset.id = stickerData.id;

    el.innerHTML = `
      <span class="sticker-icon">${stickerData.icon}</span>
      <span class="sticker-label">${stickerData.label}</span>
    `;

    let isDragging = false;
    let startX, startY;
    let initialLeft, initialTop;

    const onPointerDown = (e) => {
      isDragging = true;
      highestZ++;
      el.style.zIndex = highestZ;
      el.classList.add('dragging');

      startX = e.clientX;
      startY = e.clientY;

      initialLeft = parseFloat(el.style.left) || 0;
      initialTop = parseFloat(el.style.top) || 0;

      el.setPointerCapture(e.pointerId);
      sounds.playPop(580);
      e.preventDefault();
    };

    const onPointerMove = (e) => {
      if (!isDragging) return;

      const dx = e.clientX - startX;
      const dy = e.clientY - startY;

      const boardRect = board.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();

      let newLeft = initialLeft + dx;
      let newTop = initialTop + dy;

      newLeft = Math.max(10, Math.min(newLeft, boardRect.width - elRect.width - 10));
      newTop = Math.max(10, Math.min(newTop, boardRect.height - elRect.height - 10));

      el.style.left = `${newLeft}px`;
      el.style.top = `${newTop}px`;
    };

    const onPointerUp = (e) => {
      if (!isDragging) return;
      isDragging = false;
      el.classList.remove('dragging');
      try {
        el.releasePointerCapture(e.pointerId);
      } catch (err) {}
      sounds.playPop(460);
    };

    el.addEventListener('pointerdown', onPointerDown);
    el.addEventListener('pointermove', onPointerMove);
    el.addEventListener('pointerup', onPointerUp);
    el.addEventListener('pointercancel', onPointerUp);

    return el;
  };

  const populateStickers = (mode = 'grid') => {
    board.querySelectorAll('.sticker-item').forEach(s => s.remove());

    const boardWidth = board.clientWidth || 900;
    const boardHeight = board.clientHeight || 500;

    const count = CONFIG.stickers.length;
    const cols = window.innerWidth < 640 ? 3 : 5;
    const cellW = (boardWidth - 40) / cols;
    const cellH = 95;

    CONFIG.stickers.forEach((sticker, i) => {
      let x, y, rot;

      if (mode === 'grid') {
        const col = i % cols;
        const row = Math.floor(i / cols);
        x = 20 + col * cellW + (Math.random() * 20 - 10);
        y = 20 + row * cellH + (Math.random() * 15 - 7);
        rot = (Math.random() * 16) - 8;
      } else {
        x = Math.random() * (boardWidth - 160) + 15;
        y = Math.random() * (boardHeight - 90) + 15;
        rot = (Math.random() * 30) - 15;
      }

      const stickerEl = createStickerElement(sticker, Math.max(10, x), Math.max(10, y), rot);
      board.appendChild(stickerEl);
    });
  };

  setTimeout(() => populateStickers('grid'), 100);

  if (addMoreBtn) {
    addMoreBtn.addEventListener('click', () => {
      sounds.playPop(620);
      const randomSticker = CONFIG.stickers[Math.floor(Math.random() * CONFIG.stickers.length)];
      const boardWidth = board.clientWidth || 800;
      const boardHeight = board.clientHeight || 450;
      const x = Math.random() * (boardWidth - 170) + 20;
      const y = Math.random() * (boardHeight - 100) + 20;
      const rot = (Math.random() * 26) - 13;

      const newSticker = createStickerElement(randomSticker, x, y, rot);
      board.appendChild(newSticker);

      if (confetti) {
        const bRect = addMoreBtn.getBoundingClientRect();
        confetti.burst(bRect.left + bRect.width / 2, bRect.top, 25);
      }
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      sounds.playPop(500);
      populateStickers('grid');
    });
  }

  if (scatterBtn) {
    scatterBtn.addEventListener('click', () => {
      sounds.playPop(650);
      populateStickers('scatter');
      if (confetti) {
        confetti.burst(window.innerWidth / 2, window.innerHeight / 2, 40);
      }
    });
  }
}


/* ==============================================================================
   REASONS YOU ARE AWESOME FLIP CARDS
   ============================================================================== */
function setupReasonsCards() {
  const grid = document.getElementById('reasons-grid');
  if (!grid) return;

  grid.innerHTML = '';

  CONFIG.reasonsAwesome.forEach((item, index) => {
    const cardWrapper = document.createElement('div');
    cardWrapper.className = 'flip-card-wrapper';
    cardWrapper.setAttribute('tabindex', '0');
    cardWrapper.setAttribute('role', 'button');
    cardWrapper.setAttribute('aria-label', `Reason ${index + 1}: ${item.title}. Press Enter to flip.`);

    cardWrapper.innerHTML = `
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <div class="card-panda-badge">${item.icon}</div>
          <h3 class="card-title-text">${item.title}</h3>
          <span class="card-tap-hint">Tap to reveal ⭐</span>
        </div>
        <div class="flip-card-back">
          <p class="card-quote-text">"${item.desc}"</p>
          <div class="card-cheer-tag">${item.tag}</div>
        </div>
      </div>
    `;

    const flipCard = () => {
      cardWrapper.classList.toggle('flipped');
      sounds.playPop(520 + index * 40);
      if (confetti && cardWrapper.classList.contains('flipped')) {
        const rect = cardWrapper.getBoundingClientRect();
        confetti.burst(rect.left + rect.width / 2, rect.top + rect.height / 2, 22);
      }
    };

    cardWrapper.addEventListener('click', flipCard);
    cardWrapper.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        flipCard();
      }
    });

    grid.appendChild(cardWrapper);
  });
}


/* ==============================================================================
   PERSONAL FRIEND'S LETTER & PINK ENVELOPE
   ============================================================================== */
function setupPersonalLetter() {
  const envelope = document.getElementById('envelope');
  const letterBody = document.getElementById('letter-content-body');
  const hint = document.getElementById('envelope-hint');

  if (letterBody) {
    letterBody.innerHTML = `
      <p><strong>${CONFIG.letter.greeting}</strong></p>
      ${CONFIG.letter.paragraphs.map(p => `<p>${p}</p>`).join('')}
      <p style="margin-top: 24px;"><em>${CONFIG.letter.closing}</em><br><strong>${CONFIG.letter.signature}</strong></p>
    `;
  }

  if (envelope) {
    const toggleEnvelope = () => {
      state.envelopeOpen = !state.envelopeOpen;
      envelope.classList.toggle('open', state.envelopeOpen);
      envelope.setAttribute('aria-expanded', state.envelopeOpen.toString());

      sounds.playChime(640);
      sounds.playPop(540);

      if (state.envelopeOpen) {
        if (hint) hint.textContent = "🌸 Enjoy the note! Tap again to close.";
        if (confetti) {
          const rect = envelope.getBoundingClientRect();
          confetti.burst(rect.left + rect.width / 2, rect.top, 55);
        }
      } else {
        if (hint) hint.textContent = "💌 Click on the envelope to read the note!";
      }
    };

    envelope.addEventListener('click', toggleEnvelope);
    envelope.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleEnvelope();
      }
    });
  }
}


/* ==============================================================================
   AUDIO CONTROLS & MUSIC TOGGLE
   ============================================================================== */
function setupAudioControls() {
  const musicBtn = document.getElementById('music-btn');
  const musicIcon = document.getElementById('music-icon');
  const sfxBtn = document.getElementById('sfx-btn');
  const sfxIcon = document.getElementById('sfx-icon');
  const audioElement = document.getElementById('bg-audio');

  if (CONFIG.audioSrc && audioElement) {
    audioElement.src = CONFIG.audioSrc;
  }

  if (musicBtn) {
    musicBtn.addEventListener('click', () => {
      state.isMusicPlaying = !state.isMusicPlaying;

      if (state.isMusicPlaying) {
        musicIcon.textContent = '⏸️';
        musicBtn.classList.add('playing');

        if (CONFIG.audioSrc && audioElement) {
          audioElement.play().catch(() => {
            sounds.startLofiMusic();
          });
        } else {
          sounds.startLofiMusic();
        }
      } else {
        musicIcon.textContent = '🎵';
        musicBtn.classList.remove('playing');
        if (audioElement) audioElement.pause();
        sounds.stopLofiMusic();
      }
    });
  }

  if (sfxBtn) {
    sfxBtn.addEventListener('click', () => {
      state.isSfxEnabled = !state.isSfxEnabled;
      if (state.isSfxEnabled) {
        sfxIcon.textContent = '🔔';
        sfxBtn.style.opacity = '1';
        sounds.playPop(600);
      } else {
        sfxIcon.textContent = '🔕';
        sfxBtn.style.opacity = '0.6';
      }
    });
  }
}


/* ==============================================================================
   SMOOTH NAV SCROLL & ACTIVE LINK TRACKING
   ============================================================================== */
function setupNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 200;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}


/* ==============================================================================
   INITIALIZATION
   ============================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  new AmbientCanvas('ambient-canvas');
  confetti = new ConfettiEngine('confetti-canvas');
  setupCursorTrail();
  setupHeroTypewriter();
  setupDancingPandas();
  setupMoodTracker();
  setupVirtualHug();
  setupCheerMeUp();
  setupBreathingBuddy();
  setupGratitudeJar();
  setupStickerWall();
  setupReasonsCards();
  setupPersonalLetter();
  setupAudioControls();
  setupNavigation();

  setTimeout(() => {
    if (confetti) {
      confetti.burst(window.innerWidth / 2, window.innerHeight * 0.4, 65);
    }
  }, 600);
});
