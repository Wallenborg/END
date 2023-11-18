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

  // do something with buttonEl and i
  // here I just add a click listener that logs the button number

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
  "This is text for Button 3.",
  "This is text for Button 3.",
];
