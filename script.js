let body = document.querySelector('body');
let coinsCounter = 0;
let coinsHistory = 0;
let cps = 0;
let clicksCounter = 0;
let miner = {
  name: 'Miner',
  cps: 1,
  cost: 50,
  count: 0,
};
let computer = {
  name: 'Computer',
  cps: 10,
  cost: 500,
  count: 0,
};
let dataCenter = {
  name: 'Data Center',
  cps: 100,
  cost: 2000,
  count: 0,
};
let superComputer = {
  name: 'Super Computer',
  cps: 1000,
  cost: 50000,
  count: 0,
};
let quantumComputer = {
  name: 'Quantum Computer',
  cps: 10000,
  cost: 200000,
  count: 0,
};
let ai = {
  name: 'AI',
  cps: 100000,
  cost: 5000000,
  count: 0,
};
let matrioshkaBrain = {
  name: 'Matrioshka Brain',
  cps: 1000000,
  cost: 20000000,
  count: 0,
};
let simulation = {
  cps: 0,
  cost: 1000000000,
  count: 0,
};
const counter = document.getElementById('counter');
const coin = document.getElementById('coin');
const left = document.getElementById('left');
const center = document.getElementById('center');
const minerButton = document.getElementById('minerButton');
const minerCounter = document.getElementById('minerCounter');
const computerButton = document.getElementById('computerButton');
const computerCounter = document.getElementById('computerCounter');
const dataCenterButton = document.getElementById('dataCenterButton');
const dataCenterCounter = document.getElementById('dataCenterCounter');
const superComputerButton = document.getElementById('superComputerButton');
const superComputerCounter = document.getElementById('superComputerCounter');
const quantumComputerButton = document.getElementById('quantumComputerButton');
const quantumComputerCounter = document.getElementById(
  'quantumComputerCounter'
);
const aiButton = document.getElementById('aiButton');
const aiCounter = document.getElementById('aiCounter');
const matrioshkaBrainButton = document.getElementById('matrioshkaBrainButton');
const matrioshkaBrainCounter = document.getElementById(
  'matrioshkaBrainCounter'
);
const simulationButton = document.getElementById('simulationButton');
const simulationCounter = document.getElementById('simulationCounter');
const minerRow = document.getElementById('minerRow');
function updateCoinsCounter() {
  if (coinsCounter > 999999999) {
    counter.innerText =
      (coinsCounter / 1000000000).toFixed(2) + '\nbillion\ncoins';
  } else if (coinsCounter > 999999) {
    counter.innerText =
      (coinsCounter / 1000000).toFixed(2) + '\nmillion\ncoins';
  } else if (coinsCounter > 1) {
    counter.innerText = coinsCounter + '\ncoins';
  } else if (coinsCounter === 1) {
    counter.innerText = coinsCounter + '\ncoin';
  } else if (coinsCounter === 0) {
    counter.innerText = coinsCounter + '\ncoin';
  }
}
coin.addEventListener('mousedown', () => {
  createPopUp();
  clicksCounter++;
  if (cps === 0) {
    coinsCounter++;
    coinsHistory++;
    popUp.innerText = '+ 1';
  } else {
    coinsCounter += cps;
    coinsHistory += cps;
    popUp.innerText = '+ ' + cps;
  }
  updateCoinsCounter();
});
minerButton.addEventListener('click', () => {
  if (coinsCounter >= miner.cost) {
    cps += miner.cps;
    miner.count++;
    coinsCounter -= miner.cost;
    minerCounter.innerText = miner.count;
    let img = document.createElement('img');
    img.src = 'imgs/miner.jpeg';
    if (miner.count < 20) {
      minerRow.appendChild(img);
    }
  }
});
computerButton.addEventListener('click', () => {
  if (coinsCounter >= computer.cost) {
    cps += computer.cps;
    computer.count++;
    coinsCounter -= computer.cost;
    computerCounter.innerText = computer.count;
    let img = document.createElement('img');
    img.src = 'imgs/computer.png';
    if (computer.count < 20) {
      computerRow.appendChild(img);
    }
  }
});
dataCenterButton.addEventListener('click', () => {
  if (coinsCounter >= dataCenter.cost) {
    cps += dataCenter.cps;
    dataCenter.count++;
    coinsCounter -= dataCenter.cost;
    dataCenterCounter.innerText = dataCenter.count;
    let img = document.createElement('img');
    img.src = 'imgs/datacenter.png';
    if (dataCenter.count < 20) {
      dataCenterRow.appendChild(img);
    }
  }
});
superComputerButton.addEventListener('click', () => {
  if (coinsCounter >= superComputer.cost) {
    cps += superComputer.cps;
    superComputer.count++;
    coinsCounter -= superComputer.cost;
    superComputerCounter.innerText = superComputer.count;
    let img = document.createElement('img');
    img.src = 'imgs/supercomputer.jpg';
    if (superComputer.count < 20) {
      superComputerRow.appendChild(img);
    }
  }
});
quantumComputerButton.addEventListener('click', () => {
  if (coinsCounter >= quantumComputer.cost) {
    cps += quantumComputer.cps;
    quantumComputer.count++;
    coinsCounter -= quantumComputer.cost;
    quantumComputerCounter.innerText = quantumComputer.count;
    let img = document.createElement('img');
    img.src = 'imgs/quantumcomputer.jpg';
    if (quantumComputer.count < 20) {
      quantumComputerRow.appendChild(img);
    }
  }
});
aiButton.addEventListener('click', () => {
  if (coinsCounter >= ai.cost) {
    cps += ai.cps;
    ai.count++;
    coinsCounter -= ai.cost;
    aiCounter.innerText = ai.count;
    let img = document.createElement('img');
    img.src = 'imgs/AI.png';
    if (ai.count < 20) {
      aiRow.appendChild(img);
    }
  }
});
matrioshkaBrainButton.addEventListener('click', () => {
  if (coinsCounter >= matrioshkaBrain.cost) {
    cps += matrioshkaBrain.cps;
    matrioshkaBrain.count++;
    coinsCounter -= matrioshkaBrain.cost;
    matrioshkaBrainCounter.innerText = matrioshkaBrain.count;
    let img = document.createElement('img');
    img.src = 'imgs/matrioshka.jpg';
    if (matrioshkaBrain.count < 20) {
      matrioshkaBrainRow.appendChild(img);
    }
  }
});
simulationButton.addEventListener('click', () => {
  if (coinsCounter >= simulation.cost) {
    localStorage.clear();
    location.reload();
  }
});
setInterval(() => {
  coinsCounter += cps;
  coinsHistory += cps;
}, 1000);
setInterval(() => {
  updateCoinsCounter();
  if (coinsCounter < miner.cost) {
    minerButton.style.pointerEvents = 'none';
  }
  if (coinsCounter > miner.cost / 2) {
    minerButton.style.opacity = '0.5';
  }
  if (coinsCounter >= miner.cost) {
    minerButton.style.opacity = '1';
    minerButton.style.pointerEvents = 'auto';
  }
  if (coinsCounter < computer.cost) {
    computerButton.style.pointerEvents = 'none';
  }
  if (coinsCounter > computer.cost / 2) {
    computerButton.style.opacity = '0.5';
  }
  if (coinsCounter >= computer.cost) {
    computerButton.style.opacity = '1';
    computerButton.style.pointerEvents = 'auto';
  }
  if (coinsCounter < dataCenter.cost) {
    dataCenterButton.style.pointerEvents = 'none';
  }
  if (coinsCounter > dataCenter.cost / 2) {
    dataCenterButton.style.opacity = '0.5';
  }
  if (coinsCounter >= dataCenter.cost) {
    dataCenterButton.style.opacity = '1';
    dataCenterButton.style.pointerEvents = 'auto';
  }
  if (coinsCounter < superComputer.cost) {
    superComputerButton.style.pointerEvents = 'none';
  }
  if (coinsCounter > superComputer.cost / 2) {
    superComputerButton.style.opacity = '0.5';
  }
  if (coinsCounter >= superComputer.cost) {
    superComputerButton.style.opacity = '1';
    superComputerButton.style.pointerEvents = 'auto';
  }
  if (coinsCounter < quantumComputer.cost) {
    quantumComputerButton.style.pointerEvents = 'none';
  }
  if (coinsCounter > quantumComputer.cost / 2) {
    quantumComputerButton.style.opacity = '0.5';
  }
  if (coinsCounter >= quantumComputer.cost) {
    quantumComputerButton.style.opacity = '1';
    quantumComputerButton.style.pointerEvents = 'auto';
  }
  if (coinsCounter < ai.cost) {
    aiButton.style.pointerEvents = 'none';
  }
  if (coinsCounter > ai.cost / 2) {
    aiButton.style.opacity = '0.5';
  }
  if (coinsCounter >= ai.cost) {
    aiButton.style.opacity = '1';
    aiButton.style.pointerEvents = 'auto';
  }
  if (coinsCounter < matrioshkaBrain.cost) {
    matrioshkaBrainButton.style.pointerEvents = 'none';
  }
  if (coinsCounter > matrioshkaBrain.cost / 2) {
    matrioshkaBrainButton.style.opacity = '0.5';
  }
  if (coinsCounter >= matrioshkaBrain.cost) {
    matrioshkaBrainButton.style.opacity = '1';
    matrioshkaBrainButton.style.pointerEvents = 'auto';
  }
  if (coinsCounter < simulation.cost) {
    simulationButton.style.pointerEvents = 'none';
  }
  if (coinsCounter > simulation.cost / 2) {
    simulationButton.style.opacity = '0.5';
  }
  if (coinsCounter >= simulation.cost) {
    simulationButton.style.opacity = '1';
    simulationButton.style.pointerEvents = 'auto';
    achievments[5].isComplete();
  }
  if (cps > 1000) {
    left.style.backgroundImage = 'url(imgs/fallingcoins0.gif)';
  }
  if (cps > 100000) {
    left.style.backgroundImage = 'url(imgs/fallingcoins1.gif)';
  }
  if (cps > 1000000) {
    left.style.backgroundImage = 'url(imgs/fallingcoins2.gif)';
  }
  if (miner.count >= 5) {
    achievments[0].isComplete();
  }
  if (coinsHistory >= 1000) {
    achievments[1].isComplete();
  }
  if (clicksCounter >= 100) {
    achievments[2].isComplete();
  }
  if (cps >= 10000) {
    achievments[3].isComplete();
  }
  if (ai.count >= 1) {
    achievments[4].isComplete();
  }
}, 10);
setInterval(() => {
  bonusCoin = document.createElement('bonusCoin');
  bonusCoin.setAttribute('id', 'bonusCoin');
  bonusCoin.setAttribute('onclick', 'coinSound()');
  bonusCoin.style.position = 'absolute';
  bonusCoin.style.top = Math.floor(Math.random() * (80 - 10 + 1) + 10) + 'vh';
  bonusCoin.style.left = Math.floor(Math.random() * (80 - 10 + 1) + 10) + 'vw';
  body.appendChild(bonusCoin);
  bonusCoin.addEventListener('mousedown', () => {
    if (cps === 0) {
      coinsCounter++;
      coinsHistory++;
    }
    let coinsTemp = Math.floor(
      Math.random() * (cps * 10 - cps * 2 + 1) + cps * 2
    );
    coinsCounter += coinsTemp;
    coinsHistory += coinsTemp;
    createPopUp();
    if (cps < 1) {
      popUp.innerText = '+ 1';
    } else {
      popUp.innerText = '+ ' + coinsTemp;
    }
    body.removeChild(bonusCoin);
    clicksCounter++;
  });
  setTimeout(() => {
    body.removeChild(bonusCoin);
  }, 10000);
}, 60000);

let achievments = [
  {
    message: 'Entrepeneur',
    isComplete: () => {
      if (achievments[0].seen === false) {
        return createAchievment(achievments[0]);
      }
    },
    seen: false,
  },
  {
    message: 'From rags to riches',
    isComplete: () => {
      if (achievments[1].seen === false) {
        return createAchievment(achievments[1]);
      }
    },
    seen: false,
  },
  {
    message: 'Click madness',
    isComplete: () => {
      if (achievments[2].seen === false) {
        return createAchievment(achievments[2]);
      }
    },
    seen: false,
  },
  {
    message: 'Money rocket',
    isComplete: () => {
      if (achievments[3].seen === false) {
        return createAchievment(achievments[3]);
      }
    },
    seen: false,
  },
  {
    message: 'Singularity',
    isComplete: () => {
      if (achievments[4].seen === false) {
        return createAchievment(achievments[4]);
      }
    },
    seen: false,
  },
  {
    message: 'Ready for simulation',
    isComplete: () => {
      if (achievments[5].seen === false) {
        return createAchievment(achievments[5]);
      }
    },
    seen: false,
  },
];
function createAchievment(achievments) {
  achievments.seen = true;
  achievment = document.createElement('achievment');
  achievment.setAttribute('id', 'achievment');
  achievment.innerText = achievments.message;
  body.appendChild(achievment);
  achievmentSound();
  achievment.addEventListener('click', () => {
    body.removeChild(achievment);
  });
}

function createPopUp() {
  let x = event.clientX;
  let y = event.clientY;
  popUp = document.createElement('popUp');
  popUp.setAttribute('id', 'popUp');
  popUp.style.left = x + 'px';
  popUp.style.top = y + 'px';
  body.appendChild(popUp);
  setTimeout(() => {
    body.removeChild(popUp);
  }, 100);
}

function coinSound() {
  let audio = new Audio('sounds/coin.mp3');
  audio.play();
}

function buySound() {
  let audio = new Audio('sounds/buy.mp3');
  audio.play();
}

function achievmentSound() {
  let audio = new Audio('sounds/achievment.mp3');
  audio.play();
}
