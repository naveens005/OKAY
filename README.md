# Hey Keerthu (Dora) 🐼✨ — Everything Will Be Alright

A cheerful, friendly, and comforting single-page web application made to brighten up your friend Keerthu (Dora)'s day.

---

## 🌸 Features Included

1. **Magical Pink Theme & Clean Aesthetics**:
   - Soft animated blush pink, rose, and pastel peach gradient background.
   - Google Fonts: **Fredoka** for friendly rounded headings, **Nunito** for readable body text, and **Caveat** for the handwritten friend's note.
   - Ambient canvas simulation with floating golden stars, soft petals, lucky clovers, and bamboo leaves.
   - Drifting clouds and a sparkling cursor follower trail (`✨`, `⭐`, `🐾`, `🌸`, `🍀`).
   - Confetti bursts on page load, panda taps, and high-five interactions.

2. **6 Unique Dancing Pandas (Hero Showcase)**:
   - Built entirely with scalable inline SVG illustrations.
   - 6 distinct dance keyframes:
     - 🎀 **Bouncy Panda**: Squash & stretch bounce with pink bow.
     - 👑 **Crown Panda**: Swaying pendulum dance with golden star.
     - 🕶️ **Cool Shades**: Hip shake and spin with cool sunglasses.
     - 🥳 **Jumpy Panda**: Big cheerful leap with party hat.
     - 🎋 **Bamboo Blossom**: Rhythmic head bob holding a green bamboo flower.
     - 🌟 **Star Wish**: Wiggling magic wave holding a golden star wand.
   - Features blinking eyes, waving paws, speech bubbles with uplifting quotes, and interactive celebration animations on click/tap.

3. **Interactive Panda Sticker Wall**:
   - 22 cute panda stickers (eating pizza, gaming, skateboarding, sipping coffee, boba lover, holding flowers, etc.).
   - Authentic die-cut white outline sticker aesthetic with subtle tilt and hover wiggle.
   - **Full Drag & Drop**: Works smoothly on both mouse and touchscreens (mobile & laptop)!
   - Toolbar buttons: "Drop More Stickers", "Neat Layout", and "Scatter Cheerfully".

4. **Interactive Cheer Hub**:
   - **Mood Check-in** (😊, 😐, 😢, 🥺, 😴): Instant supportive panda responses tailored to how she feels.
   - **Virtual High-Five**: Big panda cheer animation with golden star burst: *"We've got your back, Dora! High five! 🙌✨"*.
   - **Cheer Me Up Card**: 25+ friendly, motivating affirmations with a one-click copy button.
   - **Breathing Buddy**: Calming panda with 4-second inhale / 4-second exhale breathing circle and pulsing auras.
   - **Good Vibes & Daily Wins Jar**: Type small wins or happy moments, dropping star notes into a glass jar with `localStorage` persistence.
   - **Reasons You Are Awesome**: 3D flip cards highlighting her resilience, sense of humor, and what makes her an awesome pal.

5. **A Friendly Note & Pink Envelope**:
   - 3D interactive pink envelope with a golden star wax seal button.
   - Clicking opens the flap and slides out a handwritten note addressed to Keerthu (Dora).
   - Easily editable in `script.js`.

6. **Zero-Dependency Audio Engine**:
   - Built-in Web Audio API synthesizer that plays gentle pentatonic lofi music-box chimes on loop with **zero external sound files needed**.
   - Optional support for your own `.mp3` file (see customization below).
   - Cute pop sound effects on button taps (can be muted with the bell toggle).

---

## 🚀 How to Run

1. Open the project folder `d:\EVERYTHING WILL BE ALRIGHT`.
2. Double-click **`index.html`** to launch it in any modern browser (Chrome, Edge, Safari, Firefox).
3. Or view it through the local server: **`http://localhost:3000`**.

---

## ✏️ How to Customize

All text, messages, names, and note paragraphs are organized in a single **`CONFIG`** object right at the top of **`script.js`**:

### 1. Changing Names & Titles
Open `script.js` and edit lines 17–24:
```javascript
const CONFIG = {
  name: "Keerthu",
  nickname: "Dora",
  heroTitle: "Hey Keerthu (Dora) 🐼✨",
  heroSubtitle: "Everything will be alright. You are an awesome friend, strong, and you've got this!",
  ...
}
```

### 2. Customizing the Friend's Note
In `script.js`, find `CONFIG.letter`:
```javascript
letter: {
  greeting: "Hey Keerthu (Dora),",
  paragraphs: [
    "I know that recently things might have felt pretty overwhelming...",
    "Replace this with any personal memory or inside joke you want!",
    "..."
  ],
  closing: "Always got your back, friend,",
  signature: "From: your buddy 🐾✨"
}
```

### 3. Adding Your Own Background Song (MP3)
1. Place your audio file in this folder (for example: `lofi-music.mp3`).
2. In `script.js`, set:
```javascript
audioSrc: "lofi-music.mp3",
```
*(If left empty, the built-in gentle music box synthesizer plays automatically when she clicks "Lofi Tune" in the top bar!)*

### 4. Adding or Editing "Reasons You Are Awesome" Cards
In `script.js`, update `CONFIG.reasonsAwesome` to add your own inside jokes or compliments.

---

## 📱 Mobile & Laptop Compatibility
- Fully responsive across phone screens (320px–480px), tablets, and widescreen laptops/desktops.
- Touch gestures and mouse drag-and-drop are supported seamlessly.

---

## 🌐 How to Send This to Keerthu (Dora)

- **Option A (Instant Zip)**: Compress the folder into a `.zip` and send it over WhatsApp / Telegram / Email. She can simply unzip and open `index.html` on her laptop or phone.
- **Option B (Free Web Link via GitHub Pages)**:
  1. Upload the files to a free GitHub repository.
  2. Go to **Settings > Pages** and set source to `main` branch.
  3. Send her the live URL!
- **Option C (Free Drag-and-Drop via Netlify Drop)**:
  1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
  2. Drag and drop this whole folder.
  3. You will get a live shareable URL in 5 seconds!

---

*Made with good vibes, friendly cheer, and fun panda animations for Keerthu (Dora).* 🐼✨
