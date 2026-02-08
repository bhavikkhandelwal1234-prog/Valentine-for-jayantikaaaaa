const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const buttonsDiv = document.getElementById("buttons");
const dayTitle = document.getElementById("dayTitle");
const dayMessage = document.getElementById("dayMessage");
const music = document.getElementById("music");

let yesSize = 1;
let noSize = 1;
let clicks = 0;

// start music on first tap (phone safe)
function startMusic() {
  music.play().catch(() => {});
}

// 💘 Valentine Week Data
const today = new Date();
const month = today.getMonth(); // February = 1
const date = today.getDate();

const valentineWeek = {
  7: ["Rose Day 🌹", "A rose for you, Jayantika 🌹\nBecause you make everything softer."],
  8: ["Propose Day 💍", "So… this is me proposing 🥺\nWill you keep choosing me?"],
  9: ["Chocolate Day 🍫", "I’d share my chocolate with you.\nThat’s real love 😌"],
  10: ["Teddy Day 🧸", "This website is your teddy 🧸\nClingy and always yours."],
  11: ["Promise Day 🤞", "I promise to care,\nto try,\nand to annoy you forever 💕"],
  12: ["Hug Day 🤗", "Imagine a long warm hug right now 🤗\nYeah. That one."],
  13: ["Kiss Day 😘", "Okay this website can’t do kisses 😭\nBut you get the idea 😘"],
  14: ["Valentine’s Day ❤️", "Jayantika…\nWill you be my Valentine? 💖"]
};

// Apply daily content
if (month === 1 && valentineWeek[date]) {
  dayTitle.innerText = valentineWeek[date][0];
  dayMessage.innerText = valentineWeek[date][1];

  if (date !== 14) {
    buttonsDiv.style.display = "none";
  }
} else {
  dayTitle.innerText = "Hey Jayantika 💕";
  dayMessage.innerText =
    "I made something for you.\nCome back during Valentine’s Week 😌";
  buttonsDiv.style.display = "none";
}

// 💬 NO button responses
const noMessages = [
  "Nice try 😌",
  "Karate Kid missed 🥋",
  "Be serious rn",
  "That hurt 💀",
  "You KNOW that's wrong",
  "Try again 😏"
];

noButton.addEventListener("click", () => {
  clicks++;

  yesSize += 0.25;
  yesButton.style.transform = `scale(${yesSize})`;

  noSize += 0.1;
  noButton.style.transform = `scale(${noSize})`;

  noButton.innerText =
    noMessages[Math.floor(Math.random() * noMessages.length)];

  if (yesSize > 1.8) yesButton.innerText = "Just say yes 💖";
  if (yesSize > 2.8) yesButton.innerText = "You want to 😭";
  if (yesSize > 3.8) yesButton.innerText = "YES = HUGS";

  const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const y = Math.random() * (window.innerHeight - noButton.offsetHeight);

  noButton.style.position = "absolute";
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;

  if (clicks >= 7) showLove();
});

yesButton.addEventListener("click", showLove);

// 💖 Floating hearts
setInterval(() => {
  const heart = document.createElement("div");
  heart.innerText = "💖";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = "100vh";
  heart.style.fontSize = Math.random() * 15 + 20 + "px";
  heart.style.opacity = 0.8;
  heart.style.transition = "top 4s linear, opacity 4s";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.style.top = "-10vh";
    heart.style.opacity = 0;
  }, 100);

  setTimeout(() => heart.remove(), 4000);
}, 350);

// ❤️ Final screen
function showLove() {
  document.body.innerHTML = `
    <div style="
      display:flex;
      justify-content:center;
      align-items:center;
      height:100vh;
      text-align:center;
      background:linear-gradient(135deg,#ffd6e8,#ffeef5);
      font-family:Arial;
      padding:20px;
    ">
      <div>
        <h1 style="font-size:4.5rem;color:#ff2f92;">
          I LOVE YOU ❤️
        </h1>
        <p style="font-size:1.6rem;color:#444;">
          Jayantika, my Karate Kid 🥋💖<br><br>
          This started as a silly website,<br>
          but how I feel about you is very real.<br><br>
          You’re my favorite person to laugh with,<br>
          my favorite person to annoy,<br>
          and the one I want every Valentine with.
        </p>
        <h2 style="color:#ff2f92;">Always you. 💕</h2>
      </div>
    </div>
  `;
}