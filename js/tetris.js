const playground = document.querySelector(".playground > ul");

const GAME_ROWS = 20;
const GAME_COLS = 10;

let score = 0;
let duration = 500;
let downInterval;
let tempMovingItem;

const BLOCKS = {
  tree: [
    [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ],
    [],
    [],
    [],
  ],
};

const movingItem = {
  type: "tree",
  direction: 0,
  top: 0,
  left: 4,
};

init();

function init() {
  tempMovingItem = { ...movingItem };
  for (let i = 0; i < GAME_ROWS; i++) {
    appendNewline();
  }
  renderBlocks();
}

function appendNewline() {
  const li = document.createElement("li");
  const ul = document.createElement("ul");
  for (let j = 0; j < GAME_COLS; j++) {
    const matrix = document.createElement("li");
    ul.appendChild(matrix);
  }
  li.appendChild(ul);
  playground.appendChild(li);
}

function renderBlocks() {
  const { type, direction, top, left } = tempMovingItem;
  const movingBlocks = document.querySelectorAll(".moving");
  movingBlocks.forEach((moving) => {
    console.log(moving);
    moving.classList.remove(type, "moving");
  });

  BLOCKS[type][direction].forEach((block) => {
    const x = block[0] + left;
    const y = block[1] + top;
    const target = playground.childNodes[y].childNodes[0].childNodes[x];
    target.classList.add(type, "moving");
  });
}

function moveBlock(moveType, amount) {
  tempMovingItem[moveType] += amount;
  renderBlocks();
}

document.addEventListener("keydown", (e) => {
  switch (e.keyCode) {
    case 39:
      moveBlock("left", 1);
      break;

    case 37:
      moveBlock("left", -1);
      break;

    case 37:
      moveBlock("left", -1);
      break;

    case 37:
      moveBlock("left", -1);
      break;

    default:
      break;
  }
});
