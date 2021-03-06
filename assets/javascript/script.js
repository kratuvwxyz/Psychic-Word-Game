let abcd,
  userChoice,
  words = [
    "actor",
    "agent",
    "audio",
    "anger",
    "avoid",
    "beach",
    "birth",
    "brown",
    "built",
    "buyer",
    "chair",
    "china",
    "clock",
    "court",
    "child",
    "dance",
    "dream",
    "drink",
    "dozen",
    "dying",
    "earth",
    "eight",
    "empty",
    "enjoy",
    "equal",
    "extra",
    "faith",
    "false",
    "fight",
    "fixed",
    "force",
    "fruit",
    "globe",
    "grace",
    "great",
    "group",
    "guard",
    "guest",
    "heart",
    "horse",
    "house",
    "human",
    "ideal",
    "image",
    "index",
    "input",
    "joint",
    "judge",
    "label",
    "large",
    "later",
    "laugh",
    "learn",
    "light",
    "magic",
    "maker",
    "match",
    "media",
    "metal",
    "minus",
    "mixed",
    "money",
    "month",
    "movie",
    "music",
    "night",
    "noise",
    "north",
    "noted",
    "novel",
    "nurse",
    "ocean",
    "other",
    "paint",
    "party",
    "phone",
    "pilot",
    "plate",
    "power",
    "print",
    "proud",
    "quick",
    "quiet",
    "radio",
    "ready",
    "right",
    "rough",
    "royal",
    "scale",
    "sixty",
    "speak",
    "south",
    "stand",
    "taken",
    "thick",
    "touch",
    "truly",
    "twice",
    "under",
    "until",
    "upset",
    "usage",
    "urban",
    "video",
    "virus",
    "value",
    "waste",
    "water",
    "white",
    "women",
    "world",
    "write",
    "wrong",
    "yield",
    "young",
    "youth",
  ],
  computerChoice = "",
  key = 0,
  numberChance = 9,
  matchKey = !1,
  resultKeys = 5,
  wins = 0,
  losses = 0;
(reset = () => {
  abcd = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  for (let e = 0; e < 9; e++)
    $("#userGuessDisplay" + e).text("?"), $("#compGuessDisplay" + e).text("?");
  (key = 0),
    (numberChance = 9),
    $("#numnberChance").text(numberChance + " chances"),
    (matchKey = !1),
    (resultKeys = 5),
    (computerChoice = words[Math.floor(Math.random() * words.length)]),
    $(".compGuessDisplay").addClass("text-light");
}),
  $(document).ready(function () {
    reset();
  }),
  $(document.body).on("keyup", function (e) {
    (matchKey = !1),
      abcd.indexOf(e.originalEvent.key) > -1 &&
        ((userChoice = e.originalEvent.key),
        abcd.splice(abcd.indexOf(e.originalEvent.key), 1),
        matchChoices(userChoice));
  }),
  (matchChoices = (e) => {
    for (let t = 0; t < computerChoice.length; t++)
      e === computerChoice[t]
        ? ($("#compGuessDisplay" + t).text(e), (matchKey = !0))
        : $("#areYouReady").text("Keep Guessing...");
    matchKey ? resultKeys-- : userChoiceDisplay(e), 0 === resultKeys && win();
  }),
  (userChoiceDisplay = (e) => {
    key++,
      numberChance--,
      numberChance > 1
        ? $("#numnberChance").text(numberChance + " chances")
        : $("#numnberChance").text("last chance"),
      key < 9 ? $("#userGuessDisplay" + key).text(e) : loss();
  }),
  (win = (e) => {
    wins++,
      $("#win").text(wins).addClass("text-warning"),
      $(".compGuessDisplay").addClass("text-warning"),
      $("#areYouReady").text(
        `Yes, you are psychic!! Computer guessed : ${computerChoice}`
      ),
      reset();
  }),
  (loss = (e) => {
    losses++,
      $("#loss").text(losses).addClass("text-info"),
      $("#areYouReady").text(
        `Sorry, try again!! Computer guessed : ${computerChoice}`
      ),
      reset();
  });

/*  
        ╥╥  DESIGNED AND DEVELOPED BY...
        ║║ 
        ║║ ╓╓──╖╖ ╓╓──── ────╖╖ ╓╖ ╓╓──╖╖ ╓╓──╖╖ TM
        ║║ ║║  ║║ ║║         ║║ ╙╜ ║║  ║║ ║║  ║║
    ╓╓──╫╫ ╫╫──╜╜ ╙╙──╖╖ ╓╓──╫╫ ╖╖ ║║  ║║ ║║  ║║
    ║║  ║║ ║║         ║║ ║║  ║║ ║║ ║║  ║║ ║║  ║║
    ║║  ║║ ║║         ║║ ║║  ║║ ║║ ║║  ║║ ║║  ║║
    ║║  ║║ ╙╙──── ────╜╜ ╙╙──╜╜ ║║ ╙╙──╫╫ ╜╜  ║║
    ║║  ║║  HTTPS://DESAIGN.APP ║║     ║║     ╙╙ LLC
    ╙╙──╜╜  SINCE TWENTYELEVEN  ╙╙─ ───╜╜
            Copyright © 2021
            ALL RIGHTS RESERVED
            --
            Call: 1-860-DESAIGN
            Mail: MEET@DESAIGN.STUDIO
            Post: PO BOX 200001, AUSTIN TX 78720
            --
            Book an appointment with us at
            https://calendly.com/desaignstudio
            --
            Follow us: #desaignstudio
*/