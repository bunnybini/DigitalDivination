const textElement = document.getElementById("text");
const optionButtonsElement = document.getElementById("option-buttons");

let state = {};
var truecount = 0;
// var sleepmore;
var sleepmoretrue, walktrue, sweettrue, movietrue;
var movetoending = 5 || 6;
// let i = 1;
// var option = {
//   nextText: 5,
//   // other properties
// };

function startGame() {
  state = {};
  showTextNode(1);
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find((textNode) => textNode.id === textNodeIndex);
  textElement.innerText = textNode.text;
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }

  textNode.options.forEach((option) => {
    if (showOption(option)) {
      const button = document.createElement("button");
      button.innerText = option.text;
      button.classList.add("btn");
      button.addEventListener("click", () => selectOption(option));
      optionButtonsElement.appendChild(button);
    }
  });
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state);
}

function selectOption(option) {
  const nextTextNodeId = option.nextText;

  if (nextTextNodeId < 0) {
    return startGame();
  }

  state = Object.assign(state, option.setState);
  showTextNode(nextTextNodeId);

  //   if (option.text === "let gummy bear sleep more") {
  //     option.sleepmore = true;
  //     truecount = truecount + 1;
  //   }

  //   if (option.text === "go out with her for a walk") {
  //     option.walk = true;
  //     truecount = truecount + 1;
  //   }

  //   if (option.text === "Strawberry Cake") {
  //     option.sweet = true;
  //     truecount = truecount + 1;
  //   }

  //   if (option.text === "watch movie") {
  //     option.movie = true;
  //     truecount = truecount + 1;
  //   }

  //   if (truecount >= 0 && truecount < 2) {
  //     console.log("Ending1");

  //     // option.nextText = 5;
  //     // movetoending = 5;
  //   }

  //   if (truecount >= 3) {
  //     console.log("Ending2");

  // option.nextText = 6;
  // movetoending = 6;
  //   }

  //   if (option.movie) {
  //     movietrue = true;
  //   } else {
  //     movietrue = false;
  //   }

  //   if ((option.id = 4 && sleepmoretrue && sweettrue)) {
  //     console.log("Ending1");
  //     truecount = truecount + 1;
  //     option.nextText = 5;
  //   }

  //   if (sleepmoretrue) {
  //     truecount = truecount + 1;
  //     // option.nextText = 5;
  //   } else {
  //     truecount = truecount - 1;
  //   }
  //   if (walktrue) {
  //     // console.log("Ending1");
  //     truecount = truecount++;
  //     // option.nextText = 5;

  //   if (movietrue) {
  //     console.log("Ending4");
  //   }
  console.log("truecount", truecount);
  console.log("nextTextNodeId", nextTextNodeId);
  console.log("option.nextText", option.nextText);
  //   console.log("movetoending", random);

  //   console.log(option.sleepmore, option.walk);
}

const textNodes = [
  {
    id: 1,
    text: " It's 9:00am in the morning. Are you going to wake up Gummy Bear?",
    options: [
      {
        text: "Let Gummy Bear sleep more.",
        sleepmore: true,
        // setState: { sleepmore: true },
        nextText: 2,
        // truecount = truecount + 1,
      },
      {
        text: "Wake up Gummy Bear as soon as possible.",
        sleepmore: false,
        // setState: { sleepmore: false },
        nextText: 2,
      },
    ],
  },
  {
    id: 2,
    text: "The lazy gummy bear needs to go outside for a walk. What are you going to do?",
    options: [
      {
        text: "Go out with the gummy bear for a walk.",
        walk: true,
        // requiredState: (currentState) => currentState.blueGoo,
        // setState: { walk: true },
        nextText: 3,
      },
      {
        text: "Make the gummy bear rest for today.",
        walk: false,
        // requiredState: (currentState) => currentState.blueGoo,
        // walk: false,
        // setState: { walk: false },
        nextText: 3,
      },
    ],
  },
  {
    id: 3,
    text: "gummy bear is hungry. What are you going to serve?",
    options: [
      {
        text: "Strawberry Cake",
        // setState: { sweet: true },
        sweet: true,
        nextText: 4,
      },
      {
        text: "Chicken Salad",
        // setState: { sweet: true },
        sweet: false,
        nextText: 4,
      },
    ],
  },
  {
    id: 4,
    text: "It's time to go to bed. What are you going to do?",
    options: [
      {
        text: "watch movie",
        // setState: { movie: true },
        movie: true,
        nextText: 5,
      },
      {
        text: "sleep",
        // setState: { movie: false },
        movie: false,
        nextText: 6,
      },
    ],
  },
  {
    id: 5,
    text: "see the result",
    options: [
      {
        text: "see result",
        nextText: 7,
      },
    ],
  },

  {
    id: 6,
    text: "see the result",
    options: [
      {
        text: "see result",
        nextText: 8,
      },
    ],
  },
  {
    id: 7,
    text: "It was very decent day!! Thank you for making my day",
    options: [
      {
        text: "Restart",
        nextText: -1,
      },
    ],
  },
  {
    id: 8,
    text: "It was horrible...I regret letting you choose decisions",
    options: [
      {
        text: "Restart",
        nextText: -1,
      },
    ],
  },
];

startGame();
