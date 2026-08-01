// Grab elements
const greeting = document.getElementById("greeting");
const message = document.getElementById("message");
const audio = document.querySelector("audio"); // matches your HTML
const coverpic = document.getElementById("coverpic");
const main = document.getElementById("main");
const dateElement = document.querySelector("#date p");
const sng = document.getElementById("sng-name");

const lyrics = document.getElementById("lyrics")
const h2 = document.getElementById("h2")

// 🗓 Auto-update date
const today = new Date();
dateElement.textContent = today.toLocaleDateString("en-GB", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric"
});

// 🎤 Quotes for each time of day
const quotes = {
  morning: [
    "Good morning, Queen. The sun ain’t the only thing shining today — you’re glowing brighter than the whole sky.",
    "Rise and shine, Queen. Your energy makes the world brighter than any sunrise.",
    "Morning vibes, Queen. Coffee wishes it had your power."
  ],
  afternoon: [
    "Afternoon vibes, Queen. Forget coffee, your smile is the real energy boost this world needs.",
    "Queen, the afternoon feels lighter when you’re around.",
    "Sun’s high, but you’re higher — keep glowing."
  ],
  evening: [
    "Evening glow, Queen. The stars came out just to compete with you… and they’re still losing.",
    "Queen, the night sky envies your sparkle.",
    "Evenings are calm, but you bring the magic."
  ]
};

// 🎲 Pick a random quote
function getRandomQuote(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// ⏰ Dynamic greeting based on time
const currentHour = today.getHours();

if (currentHour >= 12 && currentHour < 18) {
  greeting.textContent = "Good Afternoon";
  document.body.style.background = "#AFEEEE";
  message.textContent = getRandomQuote(quotes.afternoon);
  audio.src = "Lewis Capaldi - Someone You Loved - LewisCapaldiVEVO.mp3";
  coverpic.src = "IMG-20260425-WA0001.jpg";
  main.style.background = "url(wp5176307.jpg)";
  main.style.backgroundSize = "cover";
main.style.backgroundPosition = "center";
  sng.textContent = "Lewis Capaldi - Someone You Loved"
  h2.textContent = "Your presence is proof that magic is real";
} else if (currentHour >= 18) {
  greeting.textContent = "Good Evening";
  document.body.style.background = "lavender";
  message.textContent = getRandomQuote(quotes.evening);
  audio.src = "Alex Warren - Ordinary (Official Video) - Alex Warren.mp3";
  coverpic.src = "dev.jpg";
  main.style.background = "url(astronomy-beautiful-clouds-355465.jpg)";
  main.style.backgroundSize = "cover";
main.style.backgroundPosition = "center";
  sng.textContent = "Alex Warren - Ordinary"
  h2.textContent = "Your smile shines brighter than midnight stars";
} else {
  greeting.textContent = "Good Morning";
  document.body.style.background = "linear-gradient(135deg, #ff9a9e, #fad0c4)";
  message.textContent = getRandomQuote(quotes.morning);
  audio.src = "Echoes_Dont_Leave.mp3";
  coverpic.src = "InShot_20260416_172059211.jpg";
  main.style.background = "url(sunrise.jpg)";
  main.style.backgroundSize = "cover";
main.style.backgroundPosition = "center";
  sng.textContent = "Echoes Dont Leave - Billie Eilish ft Khalid";
  lyrics.textContent = `
    It's quiet again, too quiet to breathe
I hear my thoughts turning into noise
And I can't turn it down

Fell into the dark again last night
Same old ceiling, same old fight
Counting cracks instead of sheep
'Cause peace don't visit me in sleep

Every shadow knows my name
Every silence feels the same
I try to run, but I'm too slow
Feels like I'm stuck inside my bones

I hold my breath, I close my eyes
But I still feel it deep inside
If I scream, will it release
Or just echo back to me?

Isn't it strange how it stays
Even when I beg it to fade
I built these walls, now I can't leave
Trapped with the echoes in me

I try to run, I try to hide
But it keeps pulling me inside
If I let go, will I be free
Or just disappear in me?

Echoes, echoes
Or just disappear in me
Echoes, echoes, echoes

Don't leave
I hear through the quiet pain
Every day I try to tame
You don't gotta fight alone
I can feel it in your tone

Every word you never said
Every thought inside your head
You don't have to break tonight
I'll stay with you, it's all right

Don't hold it in, don't let it win
I know the weight beneath your skin
If you fall, I'll stay right here
Even if you disappear

Isn't it strange how it stays
Even when we beg it to fade
We built these walls, now we can't leave
Trapped with the echoes we breathe

We try to run, we try to hide
But it keeps pulling us inside
If we let go, will we be free
Or just become a memory?

I tried to scream, but lost my voice
Silence wasn't really a choice
Every feeling turned to stone
Now I'm scared to be alone

If the night won't let you rest
Lay your head here on my chest
Even broken hearts can heal
Even numb can learn to feel

Isn't it strange how we stay
Living in the fear we made
Breaking apart piece by piece
Still searching for a little peace

Isn't it strange how we change
Isn't it strange how we change
Oh, isn't it strange

Trapped with the echoes
Don't leave, don't leave, don't leave

Why does it stay
Even when I let go
Maybe it's not meant to leave
Maybe it's meant to heal

Isn't it strange how we change
Learning to live with the pain
Maybe these scars mean we survived
Maybe we're still alive

We try to run, we try to hide
Now we're standing in the light
If we let go, we might be free
Not disappear, just finally breathe

Echoes
Don't leave
But maybe they don't have to

Echoes
Don't Echoes
    `
}

// ✨ Smooth fade-in animation for greeting + message
[greeting, message].forEach(el => {
  el.style.opacity = 0;
  el.style.transition = "opacity 1.5s ease";
  setTimeout(() => {
    el.style.opacity = 1;
  }, 300);
});
