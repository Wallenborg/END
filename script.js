// When the user scrolls to the end of the page, return to the top

document.addEventListener("DOMContentLoaded", function () {
  const scrollingContainer = document.querySelector(".scrolling-container");

  scrollingContainer.addEventListener("scroll", function () {
    if (
      scrollingContainer.scrollHeight - scrollingContainer.scrollTop ===
      scrollingContainer.clientHeight
    ) {
      scrollingContainer.scrollTop = 0;
    }
  });
});

//------
// test button
//____

// let date1El = document.querySelector("#date-1");
// let shape1El = document.querySelector("#shape1");

// let date2El = document.querySelector("#date-2");
// let shape2El = document.querySelector("#shape2");

// date1El.addEventListener("click", function () {
//   console.log("test");
//   shape1El.style.display = "block";
// });

// shape1El.addEventListener("click", function () {
//   shape1El.style.display = "none";
// });

// date2El.addEventListener("click", function () {
//   console.log("test");
//   shape2El.style.display = "block";
// });

// shape2El.addEventListener("click", function () {
//   shape2El.style.display = "none";
//   shape1El.style.display = "none";
// });

// document.addEventListener("click", function () {
//   shape2El.style.display = "none";
//   shape1El.style.display = "none";
// });

// date1El.addEventListener("click", function (e) {
//   e.stopPropagation();
// });
let shapeBoxEl = document.querySelector(".shape-box");
let buttonEls = document.querySelectorAll(".button");
let messageTextEl = document.querySelector("#text-box");
let scrollingContainerEl = document.querySelector(".scrolling-container");

for (let i = 0; i < buttonEls.length; i++) {
  let buttonEl = buttonEls[i];

  buttonEl.addEventListener("click", function (e) {
    e.stopPropagation();
    shapeBoxEl.classList.add("active");
    scrollingContainerEl.classList.add("active");
    messageTextEl.textContent = messageArray[i];
    console.log(i);
  });
}

document.addEventListener("click", function () {
  shapeBoxEl.classList.remove("active");
  scrollingContainerEl.classList.remove("active");
});

let messageArray = [
  "In the ancient enclave of the Jewish Essene ascetics, whispers of prophecy filled the air. They believed the tumultuous Jewish uprising, a fierce dance against the Romans in 66-70 Judea, marked the apocalyptic finale heralding the Messiah's imminent arrival. Under Simon's decree, coins proclaimed Israel's redemption, echoing through the winds of destiny.",
  " Bishop Hilary of Poitiers, a harbinger of unsettling truths, declared a prophecy. He spoke of a fateful year, 365, when the world would witness its final chapter. His words lingered, casting a shadow over the hearts of those who dared to listen.",
  "In the ancient alleys of Rome, the fervent Hippolytus gazed into the mists of time, weaving a tale of anticipation. It was the year 500 when he foretold the end of the world, his predictions intricately etched from the sacred dimensions of Noah's Ark, echoing through the corridors of faith.",
  "On an April day in 793, the air in Liébana carried the weight of prophecy as Beatus, a Spanish monk, stood before a thronged assembly. With conviction in his eyes, he foretold the imminent return of Christ and the world's final bow, weaving a tale that hung heavy in the hearts of the gathered multitude.",
  "In the ancient echoes of 847, a Christian named Thiota spun a chilling narrative, foretelling the world's end. Yet, as time unfurled, truth emerged—confession tainted the prophecy, and Thiota faced the sting of public flogging, his apocalyptic tale now a chapter of remorse.",
  "In the year 1000, a tapestry of foreboding hung over Christian realms. Pope Sylvester II and his brethren, touched by prophecy, envisioned the world's end, the Millennium. Across Europe, echoes of unrest reverberated through riots, and pilgrims, driven by celestial fear, embarked on a poignant pilgrimage eastward, seeking solace in the sacred heart of Jerusalem.",
  "In the wake of the dashed hopes from the first day of the year 1000, a new theory emerged in 1033. Among the faithful, whispers spread that the end, elusive yet imminent, might unfurl a millennium after the passing of Jesus—a narrative of anticipation born from the echoes of recalibrated prophecy.",
  "In the heart of medieval Italy, the mystic Joachim cast his gaze upon the tapestry of time. A seer of profound visions, he declared the world's end, a cosmic drama set to unfold between 1200 and 1260—a tale whispered through the corridors of mysticism.",
  "Amid medieval Europe's plight, the Black Death's macabre dance (1346–1351) unfurled a dark tapestry. Terrified hearts saw in its embrace the ominous silhouette of the world's end, as the pestilence carved a harrowing path through the unraveling threads of existence.",
  "In the labyrinth of 1378, a Joachite named Arnaldus de Villa Nova penned a prophecy etched with foreboding. His inked words whispered of a looming specter—the Antichrist, destined to emerge in that fateful year, casting shadows upon the threshold of an era brimming with apocalyptic end.",
  "In the Renaissance canvas of 1504, the artist Sandro Botticelli, immersed in his own tapestry of belief, felt the weight of tribulation. In hues of revelation, he painted whispers of impending change—the Millennium's dawn, Devil unshackled yet destined for chains, woven into the strokes of The Mystical Nativity, a masterpiece that mirrored his apocalyptic visions that foretold the coming end",
  "In the cobblestone streets of 1524 London, a chorus of astrologers spun a tale of impending end. Guided by calculations from the previous June, their prophecy painted a flood-born finale. A tide of anticipation surged as twenty thousand souls fled homes, seeking refuge on higher ground, breaths held in collective suspense for the impending watery reckoning.",
  "In the celestial ballet of 1528, Johannes Stöffler, an astrologer attuned to cosmic whispers, read the stars in the Pisces alignment. To him, this celestial choreography marked not just an astronomical event but a harbinger of the end, a cosmic proclamation etched in the shimmering tapestry of the night sky.",
  "In the whispers of 1533, the Anabaptist prophet Melchior Hoffman wove a tale of divine reckoning. His gaze fixed on Strasbourg, he prophesied the grand return of Christ. A sacred number, 144,000, were destined for salvation, as the world beyond would succumb to the relentless embrace of cleansing flames.",
  "Martin Luther, the architect of the Protestant Reformation, cast a solemn shadow. A German priest and scholar, he penned a chapter of anticipation, foreseeing the end of the world would occur no later than 1600.",
  "London's astrologers, undeterred by past prophecies,Once heralds of a deluge in 1524, they adjusted their cosmic compass, setting a new course—a century later, a revised date for the end, woven into the fabric of their unwavering celestial saga.",
  "In the echoes of 1572, physician Helisaeus Roeslin deciphered celestial whispers. A nova's glow fueled his prophecy—the world's final chapter, etched in cosmic ink. His gaze, a bridge to 1654, painted a tale of apocalyptic anticipation, where destiny awaited its cosmic end.",
  "Within the pages of his Book of Prophecies (1501), Christopher Columbus penned a spectral tale. His ink, a conduit to the future, traced a prophecy that whispered That the world would end during the year 1956.",
  "In the tapestry of time, the ominous threads of 666, the death toll of 100,000 to bubonic plague, and the fiery dance of the Great Fire of London wove a superstitious spell. Among Christians, whispers of the world's end mingled with the smoke, rising from embers of fear in the city's heart",
  "In the quiet study of numbers, mathematician John Napier unfurled a tale. His calculations, rooted in the ancient scrolls of the Book of Revelation, painted a canvas of prophecy. The year 1688 emerged as the end of the world—a numerical tapestry of anticipation.",
  "In the heart of Camisard prophecy, whispers of imminent doom echoed. The seers painted a triptych of fate, foreseeing the world's end poised to unfurl in the tapestry of time—1705, 1706, or the enigmatic dance of 1708, veiled in the mystic threads of anticipation.",
  "In the realm of celestial predictions, mathematician Jacob Bernoulli cast his gaze toward the heavens. His calculations etched a tale of cosmic peril, foretelling the Earth's demise in the looming shadow of a comet. The year 1719 became the end in the unfolding narrative of celestial reckoning.",
  "Emanuel Swedenborg, once tethered to Luther's teachings, wove a tale transcending realms. In 1957, his narrative unfolded beyond earthly confines—the Last Judgement, a spiritual crescendo in realms unseen, etched in the celestial chronicles of his mystical journey.",
  "",
];
