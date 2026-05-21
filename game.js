// ─── CONFIG ───────────────────────────────────────────────────────────────────
const NETLIFY_URL = 'https://metrics-wss.netlify.app/';

// ─── SCREEN DATA ──────────────────────────────────────────────────────────────
const screens = [

  // ══ SECTION 1: THE IDEA ═══════════════════════════════════════════════════

  {
    id: 1, section: 1, sectionName: 'THE IDEA',
    background: 'scene-title', avatarState: 'idle',
    isTitle: true, health: 100,
    day: 0, daysLeft: 14, phase: null,
    dialogue: { title: '', body: '' },
  },

  {
    id: 2, section: 1, sectionName: 'THE IDEA',
    background: 'scene-village', avatarState: 'walking',
    health: 100, day: 1, daysLeft: 13, phase: 'DEFINE',
    dialogue: {
      title: '— THE MISSION —',
      body: `<ul>
        <li>PLAYER: <span class="hi">UX Designer</span></li>
        <li>CLASS: <span class="hi">Definitely Not A Developer</span></li>
        <li>TOOLS: <span class="hi">Cursor · VS Code · Git</span></li>
      </ul>
      <br>
      <span class="warn">QUEST:</span><br>
      <br>
      Own the UX metric dashboard to understand user patterns and build solutions that support business strategy.<br>
      <br>
      <span class="dim">Spoiler: the developer part was negotiable.</span>`,
    },
  },

  // ══ SECTION 2: THE DEMO ═══════════════════════════════════════════════════

  {
    id: 3, section: 2, sectionName: 'THE DEMO',
    background: 'scene-demo', avatarState: 'walking',
    isLiveDemo: true, health: 100, day: 14, daysLeft: 0, phase: 'DELIVERED',
    dialogue: {
      title: '— LIVE APP —',
      body: `<ul>
        <li>UX metrics dashboard</li>
        <li>Filter by app, account, subaccount, region, country + date range</li>
        <li>Jira initiatives linked to specific metric + app</li>
      </ul>
      <br>
      <span class="warn">▸ Click the cabinet to open the app</span><br>
      <br>
      <span class="dim">If it works in the demo, it counts as working.</span>`,
    },
  },

  // ══ SECTION 3: HOW I BUILT IT ═════════════════════════════════════════════

  {
    id: 5, section: 3, sectionName: 'HOW I BUILT IT',
    background: 'scene-map', avatarState: 'walking',
    isMap: true, health: 100, day: 1, daysLeft: 13, phase: 'DEFINE',
    dialogue: {
      title: '— THE PLAN —',
      body: `<ul>
        <li>WEEK 1: <span class="hi">DEFINE</span></li>
        <li>WEEK 2: <span class="hi">PRODUCE</span></li>
      </ul>
      <br>
      2 weeks. Define UX metrics, scope the project, align with the tech team. Then build.<br>
      <br>
      <span class="dim">The plan was solid. The plan did not survive contact with reality.</span>`,
    },
  },

  {
    id: 6, section: 3, sectionName: 'HOW I BUILT IT',
    background: 'scene-village', avatarState: 'walking',
    health: 100, day: 4, daysLeft: 10, phase: 'DEFINE',
    dialogue: {
      title: '— WEEK 1: DEFINE —',
      body: `<ul>
        <li>Defined + prioritised UX metrics</li>
        <li>Reviewed the current dashboard</li>
        <li>Scoped the new version</li>
        <li>Drafted new Snowflake queries</li>
        <li>Discussed feasibility with tech team</li>
      </ul>
      <br>
      <span class="hi">Productive start. Clear plan. Ready to build.</span><br>
      <br>
      <span class="dim">Week 1 was going great. Week 2 had other ideas.</span>`,
    },
  },

  // ── ACT 2: FIRST BLOCKERS ──────────────────────────────────────────────────

  // ── ACT 3: THE INCOMING ────────────────────────────────────────────────────

  {
    id: 7, section: 3, sectionName: 'HOW I BUILT IT',
    background: 'scene-boss', avatarState: 'hurt',
    isBoss: true, typewriter: true, msgIcon: true, health: 68, day: 5, daysLeft: 9, phase: 'TECH SETUP',
    dialogue: {
      title: '— ⚠ INCOMING — MANAGER MESSAGE —',
      body: `<span class="tw-text" id="tw-target"></span>`,
      twText: `"Hey, could we set up a meeting with the Head of Engineering about the dashboard? There seem to be some questions around where it should be hosted. Not entirely sure what the concern is — probably worth aligning before we go further."`,
      twSuffix: `<br><br><span class="warn">Verdict: new guidelines needed for non-developers deploying outside approved company infrastructure.</span><br><br><span class="dim">Nothing like a meeting to remind you that shipping fast has paperwork.</span>`,
    },
  },

  // ── ACT 4: THE PIVOT ───────────────────────────────────────────────────────

  {
    id: 9, section: 3, sectionName: 'HOW I BUILT IT',
    background: 'scene-pivot', avatarState: 'walking',
    isPivot: true, health: 38, day: 12, daysLeft: 2, phase: 'GAUNTLET',
    dialogue: {
      title: '— NEW ROUTE UNLOCKED —',
      body: `<span class="warn">OLD STACK</span> <span class="dim">(blocked)</span> &nbsp;→&nbsp; <span class="hi">NEW STACK</span> <span class="dim">(decided)</span><br>
      <br>
      <table style="width:100%;border-collapse:collapse;font-size:7px;line-height:2">
        <tr>
          <td style="width:48%;vertical-align:top;padding-right:6px">
            <span class="bad">✕</span> Snowflake DB<br>
            <span class="bad">✕</span> Azure environment<br>
            <span class="bad">✕</span> SSO authentication<br>
            <span class="bad">✕</span> Company Git<br>
            <span class="warn">~</span> SvelteKit
          </td>
          <td style="width:4%;text-align:center;vertical-align:middle;color:#444466">│</td>
          <td style="width:48%;vertical-align:top;padding-left:6px">
            <span class="hi">✓</span> Neon DB (PostgreSQL)<br>
            <span class="hi">✓</span> Drizzle ORM<br>
            <span class="hi">✓</span> SvelteKit<br>
            <span class="hi">✓</span> Netlify · GitHub (personal)
          </td>
        </tr>
      </table>
      <br>
      <span class="hi">Decision:</span> simulacrum deploy — real app, representative data, independent infrastructure.<br>
      <br>
      <span class="dim">Blocked is not the same as stopped.</span>`,
    },
  },

  {
    id: 10, section: 3, sectionName: 'HOW I BUILT IT',
    background: 'scene-pit', avatarState: 'hurt',
    obstacle: 'pit', image: 'deploy-fail.png', imageLabel: 'EXHIBIT B: THE ERROR',
    health: 28, day: 13, daysLeft: 1, phase: 'GAUNTLET',
    dialogue: {
      title: '— CASCADE FAILURE —',
      body: `<span class="bad">Deploy failed.</span> Secret key exposed in code.<br>
      <br>
      Fixed it. Redeployed. <span class="bad">Still failing.</span><br>
      <br>
      Root cause: the fix was committed to the <span class="bad">company origin repo</span> — not my personal GitHub.<br>
      <br>
      Committed to personal GitHub. <span class="hi">Back on track.</span><br>
      <br>
      <span class="dim">Turns out Git has opinions about which repo is yours.</span>`,
    },
  },

  {
    id: 12, section: 3, sectionName: 'HOW I BUILT IT',
    background: 'scene-dungeon', avatarState: 'hurt',
    image: 'chart-bug.png', imageLabel: 'EXHIBIT: THE BROKEN CHART',
    health: 25, day: 13, daysLeft: 1, phase: 'GAUNTLET',
    dialogue: {
      title: '— LIBRARY INCOMPATIBILITY —',
      body: `Tried to implement a nice chart from an <span class="bad">open SvelteKit library</span>.<br>
      <br>
      Turned out to be incompatible with the Svelte version I was using — chart paths filled <span class="bad">solid black</span> instead of rendering correctly.<br>
      <br>
      <span class="warn">Fix:</span> dropped the library. Rewrote the chart using <span class="hi">d3-shape directly on raw SVG</span>.<br>
      <br>
      <span class="dim">Sometimes the open-source community is not your friend.</span>`,
    },
  },

  {
    id: 13, section: 3, sectionName: 'HOW I BUILT IT',
    background: 'scene-sick', avatarState: 'sick',
    isFinalBoss: true, image: 'sick-kid.png', imageLabel: 'EVIDENCE: THE FINAL BOSS',
    health: 9, day: 13, daysLeft: 1, phase: 'GAUNTLET',
    dialogue: {
      title: '— FAMILY-WORK BALANCE: THE REAL CHALLENGE —',
      body: `Kid sick. Working from home.<br>
      Presentation in 10 hours.<br>
      <br>
      Dad? <span class="bad">Gone.</span> Very important. Very busy.<br>
      Apparently saving the company — one meeting at a time.<br>
      <br>
      <span class="dim">The couch is the office. The office is the couch.</span>`,
    },
  },

  // ── RESOLUTION ────────────────────────────────────────────────────────────

  {
    id: 14, section: 3, sectionName: 'HOW I BUILT IT',
    background: 'scene-victory', avatarState: 'victory',
    isVictory: true, health: 100, day: 14, daysLeft: 0, phase: 'DELIVERED',
    dialogue: {
      title: '— ✓ SHIPPED —',
      body: `Despite the infrastructure meeting. The Git chaos. The broken chart. The simulacrum data. The sick kid. The very busy manager-dad.<br>
      <br>
      <span class="hi">The app is live.</span> On personal infrastructure. With representative data. Looking suspiciously professional.<br>
      <br>
      <span class="warn">SIDE QUEST UNLOCKED:</span> new company guidelines for non-developers deploying outside approved infrastructure.<br>
      <br>
      <span class="dim">Why ship just an app when you can ship an entire company policy?</span>`,
    },
  },

  // ══ SECTION 4: LEARNINGS ══════════════════════════════════════════════════

  {
    id: 15, section: 4, sectionName: 'LEARNINGS',
    background: 'scene-village', avatarState: 'victory',
    health: 100, day: 14, daysLeft: 0, phase: 'DELIVERED',
    dialogue: {
      title: '— STATS UP —',
      body: `<ul>
        <li>Company infra is <span class="warn">its own project</span></li>
        <li>Pivoting fast is a <span class="hi">skill, not a failure</span></li>
        <li>AI tools accelerate build — <span class="hi">but you still need to understand the code</span></li>
        <li>Fake data still validates <span class="hi">real architecture</span></li>
        <li>Sometimes you ship from a couch <span class="warn">with a sick kid</span></li>
      </ul>
      <br>
      <span class="dim">What's next:</span><br>
      <br>
      <ul>
        <li>Define <span class="warn">new guidelines</span> for non-developer deployments</li>
        <li>Decide: can this app live in <span class="warn">current company infrastructure</span> — or does it need its own?</li>
        <li>Connect <span class="hi">real Snowflake data</span></li>
        <li>Add more metrics</li>
      </ul>
      <br>
      <span class="dim">New game+: same quest, real data, approved infrastructure.</span>`,
    },
  },

  {
    id: 16, section: 4, sectionName: 'COURSE COMPLETE',
    background: 'scene-podium', avatarState: 'victory',
    isFinal: true, health: 100, day: 14, daysLeft: 0, phase: 'DELIVERED',
    dialogue: {
      title: '— ACHIEVEMENT UNLOCKED —',
      body: `<span class="hi">AI Coding for Designers</span><br>
      Capstone Project · 2026<br>
      <br>
      <span class="warn">UX QUEST: THE DASHBOARD CHRONICLES</span><br>
      <br>
      <span class="dim">Powered by: SvelteKit · Drizzle ORM · Neon DB · Netlify · Cursor AI · one sick kid · zero approved infrastructure</span>`,
    },
  },

];

// ─── STATE ────────────────────────────────────────────────────────────────────
let currentIndex = 0;
let twTimeout = null;

// ─── DOM REFS ─────────────────────────────────────────────────────────────────
const titleOverlay    = document.getElementById('title-overlay');
const sceneBg         = document.getElementById('scene-bg');
const obstacleLayer   = document.getElementById('obstacle-layer');
const evidenceLayer   = document.getElementById('evidence-layer');
const avatarWrap      = document.getElementById('avatar-wrap');
const hudPhase        = document.getElementById('hud-phase');
const hudCounter      = document.getElementById('hud-counter');
const hudDaysLeft     = document.getElementById('hud-days-left');
const tlMarker        = document.getElementById('tl-marker');
const dialogueTitle   = document.getElementById('dialogue-title');
const dialogueBody    = document.getElementById('dialogue-body');
const btnNext         = document.getElementById('btn-next');
const btnBack         = document.getElementById('btn-back');
const navHint         = document.getElementById('nav-hint');
const bossFlash       = document.getElementById('boss-flash');
const lightbox        = document.getElementById('lightbox');
const lightboxImg     = document.getElementById('lightbox-img');

// ─── RENDER ───────────────────────────────────────────────────────────────────
function renderScreen(index) {
  const s = screens[index];
  if (!s) return;

  stopTypewriter();

  // Timeline HUD
  updateTimeline(s.day, s.phase, s.daysLeft, index);

  // Background
  sceneBg.className = s.background;

  // Build scene elements
  obstacleLayer.innerHTML = '';
  buildScene(s);

  // Avatar state + position
  avatarWrap.className = 'avatar-' + s.avatarState;
  if (s.isFinal) {
    avatarWrap.style.left = '18%';
  } else if (s.isPivot) {
    avatarWrap.style.left = '15%';
    setTimeout(() => { avatarWrap.style.left = '62%'; }, 400);
  } else {
    avatarWrap.style.left = '18%';
  }

  // Title overlay
  if (s.isTitle) {
    titleOverlay.classList.remove('hidden');
    btnNext.textContent = 'PRESS START ▸';
    navHint.textContent = 'PRESS SPACE TO START';
  } else {
    titleOverlay.classList.add('hidden');
    btnNext.textContent = 'CONTINUE ▸';
    navHint.textContent = 'SPACE TO CONTINUE';
  }

  // Dialogue
  dialogueTitle.textContent = s.dialogue.title;
  if (s.typewriter) {
    dialogueBody.innerHTML = s.dialogue.body;
    const target = document.getElementById('tw-target');
    if (target) {
      target.classList.add('cursor-blink');
      startTypewriter(target, s.dialogue.twText, 28, () => {
        target.classList.remove('cursor-blink');
        if (s.dialogue.twSuffix) target.insertAdjacentHTML('afterend', s.dialogue.twSuffix);
      });
    }
  } else {
    dialogueBody.innerHTML = s.dialogue.body;
  }

  // Evidence image
  evidenceLayer.innerHTML = '';
  if (s.msgIcon) {
    evidenceLayer.innerHTML = `
      <div class="msg-icon-wrap">
        <svg class="msg-icon-svg" viewBox="0 0 32 24" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="3" width="30" height="18" fill="#1a1a6e" stroke="#6666cc" stroke-width="2"/>
          <polyline points="1,3 16,14 31,3" fill="none" stroke="#aaaaff" stroke-width="2"/>
          <rect x="23" y="0" width="8" height="8" fill="#ff2200"/>
          <rect x="25" y="2" width="4" height="3" fill="#fff"/>
          <rect x="26" y="6" width="2" height="1" fill="#fff"/>
        </svg>
      </div>`;
  } else if (s.image) {
    const src = `images/${s.image}`;
    const wrap = document.createElement('div');
    wrap.className = 'evidence-polaroid';
    wrap.innerHTML = `
      <img src="${src}" alt="${s.imageLabel || 'Evidence'}" onerror="this.parentElement.style.display='none'">
      <div class="evidence-label">${s.imageLabel || 'EVIDENCE'}</div>`;
    wrap.addEventListener('click', () => openLightbox(src));
    evidenceLayer.appendChild(wrap);
  }

  // Boss flash
  if (s.isBoss || s.isFinalBoss) {
    bossFlash.classList.remove('active');
    void bossFlash.offsetWidth; // reflow to restart animation
    bossFlash.classList.add('active');
  }

  // Back button visibility
  btnBack.style.visibility = index === 0 ? 'hidden' : 'visible';

  // Final screen: hide continue button and hint
  if (s.isFinal) {
    btnNext.style.visibility = 'hidden';
    navHint.style.visibility = 'hidden';
  } else {
    btnNext.style.visibility = 'visible';
    navHint.style.visibility = 'visible';
  }
}

// ─── SCENE BUILDER ────────────────────────────────────────────────────────────
function buildScene(s) {
  if (s.background === 'scene-title')   buildStars();
  if (s.background === 'scene-village' && !s.isVictory) buildTrees();
  if (s.isMap)       buildMap();
  if (s.obstacle === 'gate') buildGate();
  if (s.obstacle === 'pit')  buildPit();
  if (s.isDemo || s.isLiveDemo) buildCabinet(s.isLiveDemo);
  if (s.isPivot)     buildPivot();
  if (s.isBoss)      buildBossWarning();
  if (s.isVictory)   buildVictory();
  if (s.isFinal)     { buildPodium(); buildConfetti(); }
}

function buildStars() {
  for (let i = 0; i < 55; i++) {
    const d = document.createElement('div');
    d.className = 'star';
    d.style.left    = Math.random() * 100 + '%';
    d.style.top     = Math.random() * 100 + '%';
    d.style.opacity = (0.2 + Math.random() * 0.8).toFixed(2);
    obstacleLayer.appendChild(d);
  }
}

function buildTrees() {
  [12, 38, 62, 82].forEach(left => {
    const t = document.createElement('div');
    t.className = 'tree';
    t.style.left = left + '%';
    t.innerHTML = `<div class="tree-top"></div><div class="tree-trunk"></div>`;
    obstacleLayer.appendChild(t);
  });
}

function buildMap() {
  const n1 = el('div', 'level-node', 'left:16%;top:30%;transform:translateY(-50%)');
  n1.innerHTML = 'WK1<br>DEFINE';
  const path = el('div', 'level-path', 'left:20.5%;top:calc(30% - 2px);width:58%');
  const n2 = el('div', 'level-node', 'left:60%;top:30%;transform:translateY(-50%)');
  n2.innerHTML = 'WK2<br>PRODUCE';
  obstacleLayer.append(n1, path, n2);
}

function buildGate() {
  const g = document.createElement('div');
  g.className = 'gate';
  g.innerHTML = `<div class="gate-frame">
    <div class="gate-bars">
      <div class="gate-bar"></div><div class="gate-bar"></div>
      <div class="gate-bar"></div><div class="gate-bar"></div>
    </div>
    <div class="gate-lock">🔒</div>
  </div>`;
  obstacleLayer.appendChild(g);
}

function buildPit() {
  const floor = el('div', 'pit-floor', '');
  obstacleLayer.appendChild(floor);
  [
    { left: '0%',   width: '22%' },
    { left: '32%',  width: '24%' },
    { left: '66%',  width: '34%' },
  ].forEach(p => {
    const plat = el('div', 'platform', `left:${p.left};width:${p.width};bottom:40%`);
    obstacleLayer.appendChild(plat);
  });
}

function buildCabinet(withButton) {
  const c = document.createElement('div');
  c.className = 'arcade-cabinet';
  c.innerHTML = `
    <div class="cabinet-top">
      <div class="cabinet-screen">UX<br>QUEST<br><span style="color:#ffdd00;font-size:6px;">● LIVE</span></div>
    </div>
    <div class="cabinet-body"></div>
    ${withButton ? `<button class="open-app-btn">▶ OPEN APP</button>` : ''}`;
  if (withButton) {
    const openApp = () => window.open(NETLIFY_URL, '_blank');
    c.querySelector('.open-app-btn').addEventListener('click', e => { e.stopPropagation(); openApp(); });
    c.querySelector('.cabinet-screen').addEventListener('click', e => { e.stopPropagation(); openApp(); });
    c.querySelector('.cabinet-screen').style.cursor = 'pointer';
  }
  obstacleLayer.appendChild(c);
}

function buildPivot() {
  const line = el('div', 'pivot-line', '');
  const fail = el('div', 'pivot-label fail', '');
  fail.innerHTML = 'COMPANY<br>DEPLOY<br><br>✗ BLOCKED';
  const win = el('div', 'pivot-label win', '');
  win.innerHTML = 'SIMULACRUM<br>DEPLOY<br><br>✓ GO';
  obstacleLayer.append(line, fail, win);
}

function buildBossWarning() {
  const w = el('div', 'boss-warning', '');
  w.innerHTML = '⚠ WARNING ⚠<br>INCOMING MESSAGE';
  obstacleLayer.appendChild(w);
}

function buildVictory() {
  ['★','★','✓','★','★'].forEach((ch, i) => {
    const s = el('div', 'v-star', `left:${10 + i * 20}%;top:${15 + Math.random() * 30}%;animation-delay:${i * 0.3}s`);
    s.textContent = ch;
    obstacleLayer.appendChild(s);
  });
  const msg = el('div', 'v-msg', '');
  msg.innerHTML = '★  APP DEPLOYED  ★<br><span style="font-size:0.6em;color:#aaffcc">kid recovering · dad back in charge</span>';
  obstacleLayer.appendChild(msg);

  // Kid avatar
  const kid = document.createElement('div');
  kid.className = 'kid-avatar-wrap';
  kid.innerHTML = `
    <svg class="kid-svg" viewBox="0 0 14 20" xmlns="http://www.w3.org/2000/svg">
      <!-- hair -->
      <rect x="3" y="0" width="8" height="2" fill="#c8860a"/>
      <!-- head -->
      <rect x="3" y="1" width="8" height="6" fill="#F5C97A"/>
      <!-- eyes -->
      <rect x="5" y="3" width="1" height="1" fill="#1a1a1a"/>
      <rect x="8" y="3" width="1" height="1" fill="#1a1a1a"/>
      <!-- smile -->
      <rect x="5" y="6" width="1" height="1" fill="#1a1a1a"/>
      <rect x="6" y="7" width="2" height="1" fill="#1a1a1a"/>
      <rect x="8" y="6" width="1" height="1" fill="#1a1a1a"/>
      <!-- body -->
      <rect x="3" y="7" width="8" height="5" fill="#ff6688"/>
      <!-- arms -->
      <rect x="1" y="8" width="2" height="3" fill="#ff6688"/>
      <rect x="11" y="8" width="2" height="3" fill="#ff6688"/>
      <!-- legs -->
      <rect x="3" y="12" width="3" height="5" fill="#4455CC"/>
      <rect x="8" y="12" width="3" height="5" fill="#4455CC"/>
      <!-- feet -->
      <rect x="2" y="17" width="4" height="2" fill="#333"/>
      <rect x="8" y="17" width="4" height="2" fill="#333"/>
    </svg>`;
  obstacleLayer.appendChild(kid);
}

function buildPodium() {
  const p = document.createElement('div');
  p.className = 'dev-card';
  p.innerHTML = `
    <div class="dev-card-inner">
      <div class="dev-card-header">// CERTIFIED</div>
      <div class="dev-card-title">AI-SSISTED<br>DEVELOPER</div>
      <div class="dev-card-divider"></div>
      <div class="dev-card-field">CLASS&nbsp;&nbsp;<span>UX · FULL STACK · SURVIVOR</span></div>
      <div class="dev-card-field">STACK&nbsp;&nbsp;<span>SvelteKit · Drizzle · Neon</span></div>
      <div class="dev-card-field">STATUS <span class="dev-card-green">■ SHIPPED</span></div>
    </div>`;
  obstacleLayer.appendChild(p);
}

function buildConfetti() {
  const colors = ['#ffdd00','#00ff88','#ff4444','#4488ff','#ff88ff','#ffffff'];
  for (let i = 0; i < 40; i++) {
    const c = document.createElement('div');
    c.className = 'confetti-piece';
    const size = 4 + Math.floor(Math.random() * 5);
    c.style.cssText = `
      left:${Math.random() * 100}%;
      width:${size}px; height:${size}px;
      background:${colors[Math.floor(Math.random() * colors.length)]};
      animation-delay:${(Math.random() * 3).toFixed(2)}s;
      animation-duration:${(2.5 + Math.random() * 2).toFixed(2)}s;
    `;
    obstacleLayer.appendChild(c);
  }
}

// Helper: create element with class and inline styles
function el(tag, cls, style) {
  const e = document.createElement(tag);
  if (cls)   e.className = cls;
  if (style) e.style.cssText = style;
  return e;
}

// ─── TYPEWRITER ───────────────────────────────────────────────────────────────
function startTypewriter(target, text, speed, done) {
  let i = 0;
  function tick() {
    if (i < text.length) {
      target.textContent += text[i++];
      twTimeout = setTimeout(tick, speed);
    } else if (done) {
      done();
    }
  }
  tick();
}
function stopTypewriter() {
  clearTimeout(twTimeout);
  twTimeout = null;
}

// ─── TIMELINE ─────────────────────────────────────────────────────────────────

// Phase name → CSS class suffix mapping
const PHASE_CLASS = {
  'DEFINE':    'define',
  'TECH SETUP':'tech',
  'BUILD':     'build',
  'GAUNTLET':  'gauntlet',
  'DELIVERED': 'done',
};

function buildTimeline() {
  const container = document.getElementById('tl-ticks');
  const phaseStarts = new Set([1, 5, 9, 12]); // day numbers where a phase begins
  for (let d = 1; d <= 14; d++) {
    const tick = document.createElement('div');
    tick.className = 'tl-tick' + (phaseStarts.has(d) ? ' phase-start' : '');
    tick.style.left = ((d - 1) / 13 * 100) + '%';
    container.appendChild(tick);
  }
}

function updateTimeline(day, phase, daysLeft, index) {
  // Counter
  hudCounter.textContent = `${index + 1} / ${screens.length}`;

  // Phase label
  hudPhase.className = phase ? `phase-${PHASE_CLASS[phase] || ''}` : '';
  hudPhase.textContent = phase || '';

  // Marker position (hidden on title screen)
  if (day > 0) {
    tlMarker.style.display = 'block';
    tlMarker.style.left = ((day - 1) / 13 * 100) + '%';
  } else {
    tlMarker.style.display = 'none';
  }

  // Days left label
  hudDaysLeft.className = '';
  if (daysLeft === 0) {
    hudDaysLeft.textContent = 'PRESENTATION DAY';
    hudDaysLeft.className = 'done';
  } else if (daysLeft === 1) {
    hudDaysLeft.textContent = '1 DAY LEFT';
    hudDaysLeft.className = 'critical';
  } else if (daysLeft <= 3) {
    hudDaysLeft.textContent = daysLeft + ' DAYS LEFT';
    hudDaysLeft.className = 'critical';
  } else if (daysLeft <= 6) {
    hudDaysLeft.textContent = daysLeft + ' DAYS LEFT';
    hudDaysLeft.className = 'warn';
  } else if (day === 0) {
    hudDaysLeft.textContent = '';
  } else {
    hudDaysLeft.textContent = daysLeft + ' DAYS LEFT';
    hudDaysLeft.className = 'ok';
  }
}

// ─── LIGHTBOX ─────────────────────────────────────────────────────────────────
function openLightbox(src) {
  lightboxImg.src = src;
  lightbox.hidden = false;
}
function closeLightbox() {
  lightbox.hidden = true;
  lightboxImg.src = '';
}
document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
document.getElementById('lightbox-backdrop').addEventListener('click', closeLightbox);

// ─── NAVIGATION ───────────────────────────────────────────────────────────────
function next() {
  if (!lightbox.hidden) { closeLightbox(); return; }
  if (currentIndex < screens.length - 1) {
    currentIndex++;
    renderScreen(currentIndex);
  }
}
function prev() {
  if (!lightbox.hidden) { closeLightbox(); return; }
  if (currentIndex > 0) {
    currentIndex--;
    renderScreen(currentIndex);
  }
}

btnNext.addEventListener('click', next);
btnBack.addEventListener('click', prev);

document.getElementById('scene').addEventListener('click', () => {
  if (screens[currentIndex].isLiveDemo) window.open(NETLIFY_URL, '_blank');
});
document.getElementById('title-overlay').addEventListener('click', () => {
  if (currentIndex === 0) next();
});

document.addEventListener('keydown', e => {
  if (e.code === 'Space' || e.code === 'ArrowRight') { e.preventDefault(); next(); }
  if (e.code === 'ArrowLeft')  { e.preventDefault(); prev(); }
  if (e.code === 'Escape')     closeLightbox();
});

// ─── INIT ─────────────────────────────────────────────────────────────────────
buildTimeline();
renderScreen(0);
