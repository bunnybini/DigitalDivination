const textElement = document.getElementById("text");
const optionButtonsElement = document.getElementById("option-buttons");

let state = {};
let truecount;

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
  if (nextTextNodeId <= 0) {
    return startGame();
  }
  state = Object.assign(state, option.setState);
  showTextNode(nextTextNodeId);
}

var sleepmore = false;
const textNodes = [
  {
    id: 1,
    text: "It's 9:00am in the moring. Are you going to wake gummy bear up?",
    options: [
      {
        text: "let gummy bear sleep more",
        // sleepmore: true,
        setState: { sleepmore: true },
        nextText: 2,
        // truecount = truecount + 1,
      },
      {
        text: "wake gummy bear as soon as possible",
        // sleepmore: false,
        setState: { sleepmore: false },
        nextText: 2,
      },
    ],
  },
  {
    id: 2,
    text: "Lazy gummy bear need to go to outside for walk. What are you going to do?",
    options: [
      {
        text: "go out with her for a walk",
        // requiredState: (currentState) => currentState.blueGoo,
        setState: { walk: true },
        nextText: 3,
      },
      {
        text: "make her rest for today",
        // requiredState: (currentState) => currentState.blueGoo,
        setState: { walk: false },
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
        setState: { sweet: true },
        nextText: 4,
      },
      {
        text: "Chicken Salad",
        setState: { sweet: true },
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
        setState: { movie: true },

        nextText: 5,
      },
      {
        text: "sleep",
        setState: { movie: false },
        nextText: 5,
      },
    ],
  },
];

function ending() {
  if (sleepmore === true) {
    console.log("Ending1");
  }
}

//   {
//     id: 5,
//     text: "Without any money to buy a room you break into the nearest inn and fall asleep. After a few hours of sleep the owner of the inn finds you and has the town guard lock you in a cell.",
//     options: [
//       {
//         text: "Restart",
//         nextText: -1,
//       },
//     ],
//   },
//   {
//     id: 6,
//     text: "You wake up well rested and full of energy ready to explore the nearby castle.",
//     options: [
//       {
//         text: "Explore the castle",
//         nextText: 7,
//       },
//     ],
//   },
//   {
//     id: 7,
//     text: "While exploring the castle you come across a horrible monster in your path.",
//     options: [
//       {
//         text: "Try to run",
//         nextText: 8,
//       },
//       {
//         text: "Attack it with your sword",
//         requiredState: (currentState) => currentState.sword,
//         nextText: 9,
//       },
//       {
//         text: "Hide behind your shield",
//         requiredState: (currentState) => currentState.shield,
//         nextText: 10,
//       },
//       {
//         text: "Throw the blue goo at it",
//         requiredState: (currentState) => currentState.blueGoo,
//         nextText: 11,
//       },
//     ],
//   },
//   {
//     id: 8,
//     text: "Your attempts to run are in vain and the monster easily catches.",
//     options: [
//       {
//         text: "Restart",
//         nextText: -1,
//       },
//     ],
//   },
//   {
//     id: 9,
//     text: "You foolishly thought this monster could be slain with a single sword.",
//     options: [
//       {
//         text: "Restart",
//         nextText: -1,
//       },
//     ],
//   },
//   {
//     id: 10,
//     text: "The monster laughed as you hid behind your shield and ate you.",
//     options: [
//       {
//         text: "Restart",
//         nextText: -1,
//       },
//     ],
//   },
//   {
//     id: 11,
//     text: "You threw your jar of goo at the monster and it exploded. After the dust settled you saw the monster was destroyed. Seeing your victory you decide to claim this castle as your and live out the rest of your days there.",
//     options: [
//       {
//         text: "Congratulations. Play Again.",
//         nextText: -1,
//       },
//     ],
//   },

startGame();
ending();
// if (true) {
//   console.log("sleepmore");
// }
// console.log(truecount);
